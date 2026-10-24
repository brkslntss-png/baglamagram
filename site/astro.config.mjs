// Bağlamagram web sitesi (Astro, statik). Türkçe sayfalar kökte, diğer diller /en /de /ru altında.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://baglamagram.com.tr',
  // hakkinda.astro → hakkinda.html (eski adresler aynen korunur)
  build: { format: 'preserve', inlineStylesheets: 'auto' },
  compressHTML: true,
  // Güvenlik politikası satır içi betiğe izin vermez: tüm betikler ayrı dosya olarak çıkar
  vite: { build: { assetsInlineLimit: 0 } },
});
