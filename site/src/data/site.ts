// Sitenin sabit bilgileri: sosyal bağlantılar, görseller, videolar.
export const SOCIAL = [
  { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/baglamagram' },
  { name: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/@baglamagram' },
  { name: 'Spotify', icon: 'spotify', url: 'https://open.spotify.com/intl-tr/artist/5rXy7D9yXqn3kOvLYXDxft' },
];

// Fotoğraflar ve afişler sitenin kendi sunucusunda (public/img). Yeni boyut gerekirse
// aynı adla -480/-960 gibi WebP dosyaları eklenir.
export type Pic = { src: string; srcset: string; w: number; h: number; full: string };
const pic = (base: string, small: number, large: number, w: number, h: number, full = `${base}-${large}.webp`): Pic => ({
  src: `${base}-${large}.webp`,
  srcset: `${base}-${small}.webp ${small}w, ${base}-${large}.webp ${large}w`,
  w,
  h,
  full,
});

export const IMG = {
  // Ana sayfa: yelekli, kravatlı portre
  portrait: pic('/img/portre', 480, 960, 960, 1280, '/img/portre.jpg'),
  // Hakkında: bağlamayla siyah-beyaz fotoğraf
  baglama: pic('/img/baglama', 720, 1280, 1280, 1280, '/img/baglama.jpg'),
};

export const poster = (name: string): Pic => pic(`/img/konser/${name}`, 480, 1131, 1131, 1600);

export const INSTAGRAM = [
  'https://i.hizliresim.com/ne9q1cu.jpg',
  'https://i.hizliresim.com/ps617qs.JPG',
  'https://i.hizliresim.com/h6g4amm.jpg',
  'https://i.hizliresim.com/l1dfhwg.jpg',
];

// Kreatif köşe videoları (YouTube kimlikleri)
export const CREATIVE_VIDEOS = ['SvliCP5Wznw', 'DfzEr4qozlI', 'v39ygvfSdGE'];

// Android uygulaması: GitHub Releases'te en son sürümdeki APK dosyası (adı burada yazanla aynı olmalı) indirilir.
// Yeni sürümde yalnızca yeni bir Release açıp dosyayı aynı adla yükle ve buradaki sürüm numarasını değiştir.
export const APP = {
  version: '2.4',
  apk: 'https://github.com/brkslntss-png/baglamagram/releases/latest/download/baglamagram.2.4.apk',
};

export const FORMSPREE = 'https://formspree.io/f/xnjvyknz';
export const SHOPIER = 'https://www.shopier.com/baglamagram';

// Satılan paketler (uygulamada features/access/plans.js ve functions/index.js → PAKETLER ile aynı).
// Havale/EFT ders başı 900 ₺, Silver 200 ₺; kartla Shopier fiyatı. Satın alma portalda: kayıt → ödeme.
export const PAKETLER = [
  { id: 'gold4', key: 'packages.gold4', uyelik: 'gold', ders: 4, havale: 3600, kart: 5400 },
  { id: 'gold8', key: 'packages.gold8', uyelik: 'gold', ders: 8, havale: 7200, kart: 9639 },
  { id: 'gold12', key: 'packages.gold12', uyelik: 'gold', ders: 12, havale: 10800, kart: 14684.08 },
  { id: 'silver', key: 'packages.silver', uyelik: 'silver', ay: 1, havale: 200, kart: 328 },
] as const;
