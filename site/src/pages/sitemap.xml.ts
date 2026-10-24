// Site haritası: tüm sayfalar dört dilde, hreflang bağlantılarıyla.
import { href, LANGS } from '../i18n';
import { POEMS } from '../data/poems';
import { SONGS } from '../data/songs';
import { posts } from '../data/blog';

const SITE = 'https://baglamagram.com.tr';

export function GET() {
  const pages = [
    '', 'hakkinda.html', 'online-egitim.html', 'notalar.html', 'siirler.html', 'konserler.html', 'magaza.html', 'blog.html',
    ...POEMS.filter((p) => p.listed).map((p) => `siir-${p.slug}.html`),
    ...SONGS.filter((s) => s.listed).map((s) => s.page),
    ...posts('tr').map((p) => p.page),
  ];
  const urls = pages.flatMap((page) => LANGS.map((lang) => {
    const alt = LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${href(l, page)}"/>`).join('');
    return `<url><loc>${SITE}${href(lang, page)}</loc>${alt}</url>`;
  }));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
