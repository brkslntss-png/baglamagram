'use strict';
// baglamagram masaüstü uygulaması (Windows, macOS): öğrenci portalını (baglamagram.com.tr/portal/) kendi
// penceresinde açar. Portal sitede güncellendiği an uygulama da güncel olur; bu kabuğu yalnız pencere,
// menü, izinler ve bağlantı yönlendirmesi değişince yeniden derlemek gerekir (bkz. README.md).

const {
  app, BrowserWindow, Menu, shell, session, dialog, nativeTheme, desktopCapturer,
  systemPreferences, screen, clipboard, ipcMain, net,
} = require('electron');
const path = require('node:path');
const fs = require('node:fs');
const { metin, dilSec, dil } = require('./metinler');

const SITE = 'https://baglamagram.com.tr';
// Geliştirirken başka adres denemek için: BAGLAMAGRAM_URL=http://localhost:4321/portal/ npm start
const PORTAL = (!app.isPackaged && process.env.BAGLAMAGRAM_URL) || `${SITE}/portal/`;
const PORTAL_URL = new URL(PORTAL);
const PORTAL_YOLU = PORTAL_URL.pathname.replace(/\/+$/, ''); // "/portal"

// Kurulum dosyaları GitHub'daki sabit "masaustu" sürümünde durur (APK sürümlerinin "latest"ine dokunmaz)
const SURUM_DEPOSU = 'https://github.com/brkslntss-png/baglamagram/releases/download/masaustu';
const SURUM_JSON = `${SURUM_DEPOSU}/surum.json`;
const INDIRME = {
  win32: `${SURUM_DEPOSU}/baglamagram-kurulum.exe`,
  darwin: `${SURUM_DEPOSU}/baglamagram-mac.dmg`,
};
const DESTEK_EPOSTA = 'baglamagram@gmail.com';
const WHATSAPP = 'https://wa.me/905335060921';

// Kamera, mikrofon, bildirim gibi izinler yalnız portala ve canlı ders odasına (Whereby) verilir
const IZINLER = new Set([
  'media', 'display-capture', 'notifications', 'fullscreen', 'clipboard-sanitized-write',
  'clipboard-read', 'speaker-selection', 'screen-wake-lock', 'pointerLock',
]);

let pencere = null;
let sonAdres = PORTAL;
let sonCokme = 0;

// ——— Başlangıç ———

// Kullanıcı verisi (oturum, çerezler, pencere konumu) klasörü. Adı sabit: uygulama adı bir gün "ğ" gibi bir harf
// içerirse Electron verileri uygulamanın klasörü yerine doğrudan %APPDATA% / Application Support köküne yazıyor.
app.setPath('userData', path.join(app.getPath('appData'), 'baglamagram'));

// Windows bildirimleri ve görev çubuğu simgesi kurulum kısayoluyla aynı kimliği ister
app.setAppUserModelId('tr.com.baglamagram.masaustu');

// Kullanıcı aracısından "Electron/…" ve uygulama adını çıkar: siteler (Whereby dahil) sıradan Chrome görsün
app.userAgentFallback = app.userAgentFallback
  .split(' ')
  .filter((p) => !/^(Electron|baglamagram[\w-]*)\//i.test(p) && !p.startsWith(`${app.getName()}/`))
  .join(' ');

if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (!pencere) return pencereAc();
    if (pencere.isMinimized()) pencere.restore();
    pencere.show();
    pencere.focus();
  });

  app.whenReady().then(() => {
    dilSec([...(app.getPreferredSystemLanguages?.() ?? []), app.getLocale()]);
    app.setAboutPanelOptions({
      applicationName: 'baglamagram',
      applicationVersion: app.getVersion(),
      version: '',
      copyright: `© ${new Date().getFullYear()} baglamagram`,
      website: SITE,
    });
    oturumuHazirla(session.defaultSession);
    menuKur();
    pencereAc();
    if (app.isPackaged) setTimeout(() => guncellemeDenetle(false), 8000);
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) pencereAc();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });

  // Hiçbir pencere <webview> açamaz; yeni pencereler aşağıdaki kurallardan geçer
  app.on('web-contents-created', (_e, wc) => {
    wc.on('will-attach-webview', (e) => e.preventDefault());
    if (wc.getType() === 'window') koru(wc);
  });
}

// ——— Adres kuralları ———

function adresCoz(adres) {
  try { return new URL(adres); } catch { return null; }
}

/** Portalın kendi sayfası mı? (uygulamanın içinde açılır) */
function portalMi(adres) {
  const u = adresCoz(adres);
  return !!u && u.origin === PORTAL_URL.origin && (u.pathname === PORTAL_YOLU || u.pathname.startsWith(`${PORTAL_YOLU}/`));
}

/** İzin istemeye yetkili kaynak: portal ve Whereby canlı ders odası */
function guvenilir(adres) {
  const u = adresCoz(adres);
  if (!u) return false;
  if (u.origin === PORTAL_URL.origin) return true;
  return u.protocol === 'https:' && (u.hostname === 'whereby.com' || u.hostname.endsWith('.whereby.com'));
}

/** Firebase giriş penceresi (Google ile giriş vb.) uygulamanın içinde açılmalı ki sonucu portala dönebilsin */
function girisPenceresiMi(adres) {
  const u = adresCoz(adres);
  if (!u || u.protocol !== 'https:') return false;
  return u.hostname.endsWith('.firebaseapp.com') || u.hostname === 'accounts.google.com';
}

/** Portal dışındaki her şey (Shopier, WhatsApp, YouTube, e-posta, sitenin diğer sayfaları) varsayılan tarayıcıda açılır */
function disaridaAc(adres) {
  const u = adresCoz(adres);
  if (u && ['https:', 'http:', 'mailto:', 'tel:'].includes(u.protocol)) shell.openExternal(u.href).catch(() => {});
}

function koru(wc) {
  wc.setWindowOpenHandler(({ url }) => {
    if (portalMi(url) && pencere && wc === pencere.webContents) {
      pencere.loadURL(url);
      return { action: 'deny' };
    }
    if (girisPenceresiMi(url) || url === 'about:blank' || url.startsWith('blob:')) {
      return {
        action: 'allow',
        overrideBrowserWindowOptions: {
          width: 520, height: 720, autoHideMenuBar: true, backgroundColor: arkaPlan(),
          parent: pencere ?? undefined,
        },
      };
    }
    disaridaAc(url);
    return { action: 'deny' };
  });

  const yonlendir = (e, url) => {
    if (portalMi(url) || (url.startsWith('file:') && wc === pencere?.webContents)) return;
    const anaPencere = pencere && wc === pencere.webContents;
    if (!anaPencere && (girisPenceresiMi(url) || portalMi(url))) return;
    e.preventDefault();
    disaridaAc(url);
    // Boş açılıp dışarı yönlenen yan pencere (window.open('') sonra location=…) kapansın
    if (!anaPencere) {
      const bw = BrowserWindow.fromWebContents(wc);
      const simdiki = wc.getURL();
      if (bw && (!simdiki || simdiki === 'about:blank')) bw.close();
    }
  };
  wc.on('will-navigate', (e) => yonlendir(e, e.url));
  wc.on('will-redirect', (e) => { if (e.isMainFrame) yonlendir(e, e.url); });
}

// ——— Oturum: izinler, ekran paylaşımı ———

function oturumuHazirla(oturum) {
  oturum.setPermissionCheckHandler((_wc, izin, kaynak) => IZINLER.has(izin) && guvenilir(kaynak));

  oturum.setPermissionRequestHandler((wc, izin, cevap, ayrinti) => {
    const kaynak = ayrinti?.requestingUrl || wc?.getURL() || '';
    if (!IZINLER.has(izin) || !guvenilir(kaynak)) return cevap(false);
    // macOS kamera ve mikrofon için sistem iznini ayrıca sorar (ilk seferde bir kez)
    if (izin === 'media' && process.platform === 'darwin') {
      const turler = ayrinti?.mediaTypes?.length ? ayrinti.mediaTypes : ['video', 'audio'];
      Promise.all(turler.map((t) => systemPreferences.askForMediaAccess(t === 'video' ? 'camera' : 'microphone').catch(() => false)))
        .then(() => cevap(true));
      return;
    }
    cevap(true);
  });

  // Canlı derste ekran paylaşımı: macOS 15+ sistemin kendi seçicisini kullanır, diğerlerinde küçük bir seçim penceresi
  oturum.setDisplayMediaRequestHandler(async (istek, cevap) => {
    try {
      if (!guvenilir(istek.securityOrigin || istek.frame?.url || '')) return cevap(null);
      const kaynaklar = await desktopCapturer.getSources({ types: ['screen', 'window'], thumbnailSize: { width: 0, height: 0 } });
      const ekranlar = kaynaklar.filter((k) => k.id.startsWith('screen:'));
      const pencereler = kaynaklar
        .filter((k) => k.id.startsWith('window:') && k.name && k.name !== 'baglamagram')
        .slice(0, 4);
      const secenekler = [
        ...ekranlar.map((k, i) => ({ k, ad: ekranlar.length > 1 ? metin('paylas.ekranN', { n: i + 1 }) : metin('paylas.tumEkran') })),
        ...pencereler.map((k) => ({ k, ad: k.name.length > 48 ? `${k.name.slice(0, 47)}…` : k.name })),
      ];
      if (!secenekler.length) return cevap(null);
      const { response } = await dialog.showMessageBox(pencere, {
        type: 'question',
        message: metin('paylas.soru'),
        buttons: [...secenekler.map((s) => s.ad), metin('paylas.vazgec')],
        defaultId: 0,
        cancelId: secenekler.length,
      });
      if (response >= secenekler.length) return cevap(null);
      cevap({ video: secenekler[response].k });
    } catch {
      cevap(null);
    }
  }, { useSystemPicker: true });
}

// ——— Pencere ———

function arkaPlan() {
  return nativeTheme.shouldUseDarkColors ? '#000000' : '#F2F2F7';
}

const DURUM_DOSYASI = () => path.join(app.getPath('userData'), 'pencere.json');

function durumOku() {
  try {
    const d = JSON.parse(fs.readFileSync(DURUM_DOSYASI(), 'utf8'));
    // Kayıtlı konum artık bağlı olmayan bir ekrandaysa yok say
    const gorunur = screen.getAllDisplays().some(({ workArea: a }) =>
      d.x + 80 > a.x && d.x + 80 < a.x + a.width && d.y + 40 > a.y && d.y + 40 < a.y + a.height);
    return gorunur ? d : { width: d.width, height: d.height, buyuk: d.buyuk };
  } catch {
    return {};
  }
}

function durumYaz() {
  if (!pencere || pencere.isDestroyed()) return;
  try {
    const b = pencere.getNormalBounds();
    fs.writeFileSync(DURUM_DOSYASI(), JSON.stringify({ ...b, buyuk: pencere.isMaximized() }));
  } catch { /* yazılamazsa sonraki açılışta varsayılan boyut */ }
}

function pencereAc() {
  const d = durumOku();
  const { width: ew, height: eh } = screen.getPrimaryDisplay().workAreaSize;
  pencere = new BrowserWindow({
    width: Math.min(d.width || 1280, ew),
    height: Math.min(d.height || 860, eh),
    x: d.x,
    y: d.y,
    minWidth: 380,
    minHeight: 560,
    title: 'baglamagram',
    backgroundColor: arkaPlan(),
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: true,
      // Metronom ve akort pencere arkadayken de aksamasın
      backgroundThrottling: false,
      additionalArguments: [`--baglamagram-surum=${app.getVersion()}`],
    },
  });
  if (d.buyuk) pencere.maximize();

  const wc = pencere.webContents;
  pencere.once('ready-to-show', () => pencere.show());
  // Portal sekme başlığını değiştirse de pencerenin adı sabit kalsın
  pencere.on('page-title-updated', (e) => e.preventDefault());
  pencere.on('close', durumYaz);
  pencere.on('closed', () => { pencere = null; });
  // Fare yan tuşu (Windows) ile geri/ileri
  pencere.on('app-command', (_e, komut) => {
    if (komut === 'browser-backward') geri();
    if (komut === 'browser-forward') ileri();
  });

  wc.on('did-fail-load', (_e, kod, _aciklama, adres, anaCerceve) => {
    if (!anaCerceve || kod === -3 /* iptal */) return;
    if (adres && !adres.startsWith('file:')) sonAdres = adres;
    pencere.loadFile(path.join(__dirname, 'cevrimdisi.html'), { query: { dil: dil() } });
  });

  wc.on('render-process-gone', (_e, ayrinti) => {
    if (ayrinti.reason === 'clean-exit') return;
    // Arka arkaya çöküyorsa döngüye girme
    if (Date.now() - sonCokme < 15000) return;
    sonCokme = Date.now();
    pencere?.loadURL(sonAdres);
  });

  wc.on('context-menu', (_e, p) => sagTikMenusu(wc, p));

  pencere.loadURL(PORTAL);
}

ipcMain.on('tekrar-dene', (e) => {
  if (!pencere || e.sender !== pencere.webContents) return;
  if (!e.senderFrame?.url.startsWith('file:')) return;
  pencere.loadURL(portalMi(sonAdres) ? sonAdres : PORTAL);
});

function geri() {
  const g = pencere?.webContents.navigationHistory;
  if (g?.canGoBack()) g.goBack();
}

function ileri() {
  const g = pencere?.webContents.navigationHistory;
  if (g?.canGoForward()) g.goForward();
}

// ——— Sağ tık menüsü (Electron'da varsayılan yok) ———

function sagTikMenusu(wc, p) {
  const s = [];
  const ayrac = () => { if (s.length && s[s.length - 1].type !== 'separator') s.push({ type: 'separator' }); };

  if (p.misspelledWord) {
    for (const oneri of p.dictionarySuggestions.slice(0, 5)) s.push({ label: oneri, click: () => wc.replaceMisspelling(oneri) });
    s.push({ label: metin('sag.sozluge'), click: () => wc.session.addWordToSpellCheckerDictionary(p.misspelledWord) });
    ayrac();
  }
  if (p.isEditable) {
    s.push(
      { role: 'cut', label: metin('menu.kes'), enabled: p.editFlags.canCut },
      { role: 'copy', label: metin('menu.kopyala'), enabled: p.editFlags.canCopy },
      { role: 'paste', label: metin('menu.yapistir'), enabled: p.editFlags.canPaste },
      { type: 'separator' },
      { role: 'selectAll', label: metin('menu.tumunuSec') },
    );
  } else if (p.selectionText.trim()) {
    s.push({ role: 'copy', label: metin('menu.kopyala') });
  }
  if (p.linkURL && /^(https?|mailto):/i.test(p.linkURL)) {
    ayrac();
    s.push(
      { label: metin('sag.baglantiyiAc'), click: () => disaridaAc(p.linkURL) },
      { label: metin('sag.baglantiyiKopyala'), click: () => clipboard.writeText(p.linkURL) },
    );
  }
  if (p.mediaType === 'image' && p.srcURL) {
    ayrac();
    s.push(
      { label: metin('sag.resmiKopyala'), click: () => wc.copyImageAt(p.x, p.y) },
      { label: metin('sag.resmiKaydet'), click: () => wc.downloadURL(p.srcURL) },
    );
  }
  if (!app.isPackaged) {
    ayrac();
    s.push({ label: 'Öğeyi incele', click: () => wc.inspectElement(p.x, p.y) });
  }
  while (s.length && s[s.length - 1].type === 'separator') s.pop();
  if (s.length) Menu.buildFromTemplate(s).popup({ window: BrowserWindow.fromWebContents(wc) ?? undefined });
}

// ——— Menü ———

function hakkinda() {
  if (process.platform === 'darwin') return app.showAboutPanel();
  dialog.showMessageBox(pencere, {
    type: 'info',
    title: metin('menu.hakkinda'),
    message: 'baglamagram',
    detail: metin('hakkinda.ayrinti', { s: app.getVersion() }),
  });
}

function menuKur() {
  const mac = process.platform === 'darwin';
  const guncelleme = { label: metin('menu.guncelleme'), click: () => guncellemeDenetle(true) };
  const sablon = [
    ...(mac
      ? [{
        label: app.name,
        submenu: [
          { label: metin('menu.hakkinda'), click: hakkinda },
          guncelleme,
          { type: 'separator' },
          { role: 'services', label: metin('menu.servisler') },
          { type: 'separator' },
          { role: 'hide', label: metin('menu.gizle') },
          { role: 'hideOthers', label: metin('menu.digerleriniGizle') },
          { role: 'unhide', label: metin('menu.tumunuGoster') },
          { type: 'separator' },
          { role: 'quit', label: metin('menu.cik') },
        ],
      }]
      : [{ label: metin('menu.dosya'), submenu: [{ role: 'quit', label: metin('menu.cik') }] }]),
    {
      label: metin('menu.duzen'),
      submenu: [
        { role: 'undo', label: metin('menu.geriAl') },
        { role: 'redo', label: metin('menu.yinele') },
        { type: 'separator' },
        { role: 'cut', label: metin('menu.kes') },
        { role: 'copy', label: metin('menu.kopyala') },
        { role: 'paste', label: metin('menu.yapistir') },
        { role: 'selectAll', label: metin('menu.tumunuSec') },
      ],
    },
    {
      label: metin('menu.gorunum'),
      submenu: [
        { label: metin('menu.geri'), accelerator: mac ? 'Cmd+[' : 'Alt+Left', click: geri },
        { label: metin('menu.ileri'), accelerator: mac ? 'Cmd+]' : 'Alt+Right', click: ileri },
        { label: metin('menu.anaSayfa'), accelerator: 'CmdOrCtrl+Shift+H', click: () => pencere?.loadURL(PORTAL) },
        { type: 'separator' },
        { role: 'reload', label: metin('menu.yenile') },
        { role: 'forceReload', label: metin('menu.tamYenile') },
        { type: 'separator' },
        { role: 'resetZoom', label: metin('menu.gercekBoyut') },
        { role: 'zoomIn', label: metin('menu.buyut') },
        { role: 'zoomIn', accelerator: 'CmdOrCtrl+=', visible: false, acceleratorWorksWhenHidden: true },
        { role: 'zoomOut', label: metin('menu.kucult') },
        { type: 'separator' },
        { role: 'togglefullscreen', label: metin('menu.tamEkran') },
        ...(app.isPackaged ? [] : [{ role: 'toggleDevTools' }]),
      ],
    },
    {
      label: metin('menu.pencere'),
      submenu: [
        { role: 'minimize', label: metin('menu.kucultPencere') },
        ...(mac
          ? [{ role: 'zoom', label: metin('menu.pencereyiBuyut') }, { type: 'separator' }, { role: 'front', label: metin('menu.oneGetir') }]
          : [{ role: 'close', label: metin('menu.kapat') }]),
      ],
      ...(mac ? { role: 'window' } : {}),
    },
    {
      label: metin('menu.yardim'),
      role: 'help',
      submenu: [
        { label: metin('menu.site'), click: () => disaridaAc(SITE) },
        { label: metin('menu.whatsapp'), click: () => disaridaAc(WHATSAPP) },
        { label: metin('menu.eposta'), click: () => disaridaAc(`mailto:${DESTEK_EPOSTA}`) },
        ...(mac ? [] : [{ type: 'separator' }, guncelleme, { label: metin('menu.hakkinda'), click: hakkinda }]),
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(sablon));
}

// ——— Güncelleme denetimi ———
// GitHub'daki "masaustu" sürümünde surum.json durur: {"surum":"1.0.1"}. Yeni sürüm varsa indirme önerilir.

function yeniMi(yeni, eski) {
  const a = String(yeni).split('.').map((x) => parseInt(x, 10) || 0);
  const b = String(eski).split('.').map((x) => parseInt(x, 10) || 0);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if ((a[i] || 0) !== (b[i] || 0)) return (a[i] || 0) > (b[i] || 0);
  }
  return false;
}

const ERTELEME_DOSYASI = () => path.join(app.getPath('userData'), 'guncelleme.json');

async function guncellemeDenetle(elle) {
  try {
    const yanit = await net.fetch(`${SURUM_JSON}?t=${Date.now()}`, { cache: 'no-store' });
    if (!yanit.ok) throw new Error(`HTTP ${yanit.status}`);
    const { surum } = await yanit.json();
    if (!yeniMi(surum, app.getVersion())) {
      if (elle) {
        dialog.showMessageBox(pencere, { type: 'info', message: metin('guncelle.guncel'), detail: metin('guncelle.surum', { s: app.getVersion() }) });
      }
      return;
    }
    // "Sonra" denen sürümü üç gün boyunca kendiliğinden yeniden sorma
    if (!elle) {
      try {
        const e = JSON.parse(fs.readFileSync(ERTELEME_DOSYASI(), 'utf8'));
        if (e.surum === surum && Date.now() - e.zaman < 3 * 24 * 3600 * 1000) return;
      } catch { /* kayıt yok */ }
    }
    const { response } = await dialog.showMessageBox(pencere, {
      type: 'info',
      buttons: [metin('guncelle.indir'), metin('guncelle.sonra')],
      defaultId: 0,
      cancelId: 1,
      message: metin('guncelle.baslik'),
      detail: metin('guncelle.ayrinti', { yeni: surum, eski: app.getVersion() }),
    });
    if (response === 0) {
      disaridaAc(INDIRME[process.platform] || `${SITE}/online-egitim.html`);
    } else {
      try { fs.writeFileSync(ERTELEME_DOSYASI(), JSON.stringify({ surum, zaman: Date.now() })); } catch { /* önemsiz */ }
    }
  } catch {
    if (elle) {
      dialog.showMessageBox(pencere, { type: 'warning', message: metin('guncelle.hata'), detail: metin('guncelle.hataAyrinti') });
    }
  }
}
