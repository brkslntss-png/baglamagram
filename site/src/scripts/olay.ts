// Kayıt hunisi ölçümü (Burak, 1 Kasım 2026): sitedeki birkaç olay kişisiz sayılır (paketler sayfası, kayıt tıklaması,
// APK indirme). Sunucu: uygulama deposu functions → "olay" (yalnız izinli olaylar). Aynı tarayıcıda aynı olay günde
// bir kez sayılır. Sonuçlar uygulamada Yönetim › İstatistikler › Kayıt hunisi.
const URL = 'https://us-central1-baglamagram-portal.cloudfunctions.net/olay';

export function olay(ad: 'site_paketler' | 'site_kayit_tikla' | 'apk_indir') {
  try {
    const key = `bg_olay_${ad}_${new Date().toISOString().slice(0, 10)}`;
    if (localStorage.getItem(key)) return;
    localStorage.setItem(key, '1');
  } catch {
    // Gizli sekme ya da kapalı depolama: yine de say
  }
  try {
    fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: { ad, kaynak: 'site' } }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // ölçüm hiçbir zaman sayfayı bozmaz
  }
}
