// Blog yazıları (Türkçe kaynak + EN/DE/RU çevirileri, aynı blok sırasıyla).
import type { Lang } from '../i18n';
import tr from './blog.tr.json';
import en from './blog.en.json';
import de from './blog.de.json';
import ru from './blog.ru.json';

type Block = { type: 'p' | 'h2' | 'h3' | 'note'; text: string };
export type Post = { slug: string; page: string; date: string; cat: 'egitim' | 'teknik' | 'teknoloji'; image: string; title: string; blocks: Block[] };

const TR = tr as { slug: string; page: string; date: string; cat: Post['cat']; image: string; title: string; blocks: [Block['type'], string][] }[];
const T: Record<Exclude<Lang, 'tr'>, Record<string, { title: string; blocks: string[] }>> = { en, de, ru };

export const CATS: Record<Post['cat'], Record<Lang, string>> = {
  egitim: { tr: 'Eğitim', en: 'Education', de: 'Unterricht', ru: 'Обучение' },
  teknik: { tr: 'Teknik bilgi', en: 'Technical notes', de: 'Technik', ru: 'Техника' },
  teknoloji: { tr: 'Teknoloji', en: 'Technology', de: 'Technologie', ru: 'Технологии' },
};

export function posts(lang: Lang): Post[] {
  return TR.map((p) => {
    const tx = lang === 'tr' ? null : T[lang][p.slug];
    return {
      ...p,
      title: tx?.title ?? p.title,
      blocks: p.blocks.map(([type, text], i) => ({ type, text: tx?.blocks[i] ?? text })),
    };
  });
}

export function readingMinutes(p: Post) {
  const words = p.blocks.reduce((n, b) => n + b.text.split(/\s+/).length, 0);
  return Math.max(1, Math.round(words / 200));
}

export function excerptOf(p: Post, n = 160) {
  const first = p.blocks.find((b) => b.type === 'p')?.text ?? '';
  return first.length > n ? `${first.slice(0, n).replace(/\s+\S*$/, '')}…` : first;
}
