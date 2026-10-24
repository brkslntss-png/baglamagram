// Dil altyapısı: Türkçe kök adreslerde (/hakkinda.html), diğer diller önekli (/en/hakkinda.html).
import { ui, type UIKey } from './ui';

export const LANGS = ['tr', 'en', 'de', 'ru'] as const;
export type Lang = (typeof LANGS)[number];
export const OTHER_LANGS = LANGS.filter((l) => l !== 'tr') as Exclude<Lang, 'tr'>[];

export const LANG_NAMES: Record<Lang, string> = { tr: 'Türkçe', en: 'English', de: 'Deutsch', ru: 'Русский' };
export const LOCALE: Record<Lang, string> = { tr: 'tr-TR', en: 'en-US', de: 'de-DE', ru: 'ru-RU' };
export const OG_LOCALE: Record<Lang, string> = { tr: 'tr_TR', en: 'en_US', de: 'de_DE', ru: 'ru_RU' };

/** Arayüz metni. Çevirisi yoksa Türkçesi. {name} yer tutucuları doldurulur. */
export function t(lang: Lang, key: UIKey, vars?: Record<string, string | number>): string {
  let s: string = (ui[lang] as Record<string, string>)[key] ?? (ui.tr as Record<string, string>)[key] ?? key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
  return s;
}

/** Sayfa adresi: href('en', 'hakkinda.html') → /en/hakkinda.html ; href('tr', '') → / */
export function href(lang: Lang, page = ''): string {
  const p = page.replace(/^\/+/, '');
  if (lang === 'tr') return `/${p}`;
  return `/${lang}/${p}`;
}

/** Bir adresin dilini ve dil öneki olmadan sayfa yolunu bulur. */
export function splitPath(pathname: string): { lang: Lang; page: string } {
  const m = pathname.match(/^\/(en|de|ru)(?:\/|$)(.*)$/);
  if (m) return { lang: m[1] as Lang, page: m[2] || '' };
  return { lang: 'tr', page: pathname.replace(/^\/+/, '') };
}

export function formatDate(lang: Lang, iso: string, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Intl.DateTimeFormat(LOCALE[lang], opts).format(new Date(iso));
}

export function langStaticPaths() {
  return OTHER_LANGS.map((lang) => ({ params: { lang } }));
}
