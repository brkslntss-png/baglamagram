// Şiirler (metinler Türkçe; her dilde aslıyla gösterilir).
import raw from './poems.json';
export type Poem = { slug: string; title: string; listTitle: string | null; text: string; listed: boolean };
export const POEMS = raw as Poem[];
export const LISTED_POEMS = POEMS.filter((p) => p.listed);
export const poemUrl = (slug: string) => `siir-${slug}.html`;
/** İlk iki dize, kısa önizleme */
export function excerpt(p: Poem, lines = 2) {
  return p.text.split('\n').filter((l) => l.trim()).slice(0, lines).join(' / ');
}
