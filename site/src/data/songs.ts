// Besteler: nota görselleri, sözler ve PDF. Adresler eski siteyle aynı (nota-ardic-sazim.html, Nota-yoruldum.html …).
import raw from './songs.json';
export type Song = { slug: string; page: string; title: string; by: string; images: string[]; pdf: string; lyrics: string; listed: boolean; audio?: string; instrumental?: boolean };
// audio: dinleme kaydı (public/ses/); instrumental: sözsüz beste ("Beste: …", sözler kartı yok)
export const SONGS = raw as Song[];
