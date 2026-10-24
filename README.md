# baglamagram.com.tr

| Klasör | Ne | Nerede yayında |
|---|---|---|
| `site/` | Web sitesi (Astro). Türkçe sayfalar kökte, İngilizce/Almanca/Rusça `/en`, `/de`, `/ru` altında. | GitHub Pages (`.github/workflows/pages.yml`, `main`'e her gönderimde) |
| `site/public/portal/` | Öğrenci ve hoca portalı: Bağlamagram uygulamasının web sürümü (derlenmiş). | GitHub Pages, `/portal/` |
| `api/chat.js` | BurakAI Hoca yapay zekâ servisi. Yalnızca giriş yapmış kullanıcılar. | Vercel (`baglamagram.vercel.app/api/chat`) |
| `oyun-muzigi-22/`, `oyun-muzigi-makam/`, `tsm-oyun.mp3` | Oyun sesleri. Uygulama bunları bu depodan okur; **yerlerini değiştirme**. | raw.githubusercontent.com |

## Siteyi bilgisayarda çalıştırmak

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # çıktı: site/dist
```

## İçerik ekleme

- **Şiir:** `site/src/data/poems.json`. `listed: false` olan şiir sayfası var ama listede görünmez.
- **Nota:** `site/src/data/songs.json`. PDF'i `site/public/` altına koy.
- **Konser:** `site/src/data/concerts.ts`
- **Blog yazısı:** `site/src/data/blog.tr.json`, çevirileri `blog.en.json`, `blog.de.json`, `blog.ru.json` (aynı sırada).
- **Arayüz metinleri (4 dil):** `site/src/i18n/ui.ts`
- **Günün sözü:** `site/src/data/quotes.ts`

## Portalı güncellemek

Uygulama deposunda:

```bash
bash scripts/build-web.sh ../baglamagram   # derler ve site/public/portal'a kopyalar
```

Ardından bu depoda değişikliği gönder.
