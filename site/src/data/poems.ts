// Şiirler: asıl metinler Türkçe (poems.json); İngilizce, Almanca ve Rusça çevirileri poems.i18n.json'da
// (Burak, 1 Kasım 2026: anlamı bozmadan). Türkçe dışındaki dillerde çeviri gösterilir, aslı sayfada açılır.
import raw from './poems.json';
import tr from './poems.i18n.json';
export type Poem = { slug: string; title: string; listTitle: string | null; text: string; listed: boolean };
export const POEMS = raw as Poem[];
export const LISTED_POEMS = POEMS.filter((p) => p.listed);
export const poemUrl = (slug: string) => `siir-${slug}.html`;
type Tr = Record<string, Record<string, { title: string; listTitle: string | null; text: string }>>;
const TR = tr as Tr;
/** Şiirin o dildeki hâli (çevirisi yoksa aslı) */
export function localize(p: Poem, lang: string): Poem & { translated: boolean } {
  const c = TR[lang]?.[p.slug];
  return c ? { ...p, title: c.title, listTitle: c.listTitle, text: c.text, translated: true } : { ...p, translated: false };
}
/** İlk iki dize, kısa önizleme */
export function excerpt(p: Poem, lines = 2) {
  return p.text.split('\n').filter((l) => l.trim()).slice(0, lines).join(' / ');
}
