# baglamagram masaüstü (Windows ve Mac)

Öğrenci portalını (`baglamagram.com.tr/portal/`) kendi penceresinde açan Electron uygulaması. Portalın kendisi
sitede durur: portal güncellenince uygulama da kendiliğinden güncel olur, yeniden derlemek gerekmez.

| Dosya | Ne |
|---|---|
| `src/main.js` | Pencere, menü, sağ tık, izinler (kamera, mikrofon, bildirim, ekran paylaşımı), bağlantı yönlendirmesi, sürüm denetimi |
| `src/metinler.js` | Uygulamanın kendi metinleri (TR, EN, DE, RU). Sistem dili bunlardan biri değilse İngilizce |
| `src/preload.js` | Sayfaya açılan küçük köprü: `window.baglamagramMasaustu` (`surum`, `platform`) |
| `src/cevrimdisi.*` | İnternet yokken görünen ekran; bağlantı gelince portal kendiliğinden açılır |
| `build/` | Simgeler, Mac DMG arka planı, Mac yetkileri (kamera, mikrofon) |
| `test/acilis-testi.sh` | Derlenen uygulamayı açıp portalın yüklendiğini doğrular (iş akışında çalışır) |

## Nasıl davranır

- Portalın içindeki sayfalar uygulamada açılır. Geri kalan her şey (Shopier, WhatsApp, YouTube, e-posta,
  sitenin diğer sayfaları) bilgisayarın varsayılan tarayıcısında açılır.
- Kamera, mikrofon, bildirim ve ekran paylaşımı izni yalnız portala ve canlı ders odasına (Whereby) verilir.
- Pencerenin boyutu ve yeri hatırlanır. Aynı anda tek pencere açılır.
- Açılışta GitHub'daki `masaustu` sürümünün `surum.json` dosyasına bakar; yeni sürüm varsa indirmeyi önerir.
- Portal, masaüstünde çalıştığını `window.baglamagramMasaustu` var mı diye bakarak anlayabilir.

## Yeni sürüm çıkarmak

1. Bu klasördeki `package.json` içinde `"version"`ı artır (ör. `1.0.0` → `1.0.1`).
2. `main`'e gönder. **Masaüstü uygulaması** iş akışı Windows ve Mac için derler, iki işletim sisteminde de
   açılış testini yapar ve dosyaları GitHub'daki `masaustu` sürümüne yükler.
3. Sitedeki indirme butonları her zaman bu sürümü gösterir; sitede bir şey değiştirmen gerekmez.
   Açık uygulamalar yeni sürümü görüp indirmeyi önerir.

Yalnız portalda (uygulamanın web sürümünde) değişiklik yaptıysan masaüstü sürümünü artırmana gerek yok.

## Bilgisayarda çalıştırmak

```bash
cd masaustu
npm install
npm start                                               # canlı portalı açar
BAGLAMAGRAM_URL=http://localhost:4321/portal/ npm start  # yereldeki siteyi açar (yalnız geliştirirken)
npm run derle:mac                                       # Mac'te: dist/baglamagram-mac.dmg
npm run derle:win                                       # Windows'ta: dist/baglamagram-kurulum.exe
```

## İmza (isteğe bağlı, sonradan)

Uygulama şu an imzasız dağıtılır. Bu yüzden ilk açılışta Windows "Bilgisayarınız korundu" (Ek bilgi →
Yine de çalıştır), Mac "Apple doğrulayamadı" der (Sistem Ayarları → Gizlilik ve Güvenlik → Yine de Aç). Sitedeki
kurulum penceresi bunu adım adım anlatır. Uyarıların hiç çıkmaması için:

- **Mac:** Apple Developer Program üyeliği (yıllık 99 $). "Developer ID Application" sertifikasını `.p12` olarak
  dışa aktarıp base64'le; GitHub'da Settings → Secrets → Actions'a `MAC_CSC_LINK`, `MAC_CSC_KEY_PASSWORD`,
  `APPLE_ID`, `APPLE_APP_SPECIFIC_PASSWORD`, `APPLE_TEAM_ID` olarak ekle. İş akışı imzalar ve Apple'a onaylatır.
- **Windows:** Kod imzalama sertifikası (`.pfx`); `WIN_CSC_LINK` ve `WIN_CSC_KEY_PASSWORD` olarak ekle.

Sırlar eklendikten sonraki ilk derleme imzalı çıkar; kodda bir şey değiştirmek gerekmez.
