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
// Destek (Burak): WhatsApp 0533 506 0921
export const WHATSAPP = 'https://wa.me/905335060921';

// Satılan paketler (uygulamada features/access/plans.js ve functions/index.js → PAKETLER ile aynı).
// 1 Kasım 2026 (Burak, GVK 20/B istisnası): havale kaldırıldı, ödeme yalnız kartla; ekranda vergisiz fiyat (ders başı
// 899 ₺) ve daha büyük, çerçeveli vergiler dahil ödenecek tutar (kart, ders başı 1.129 ₺).
export const DERS_VERGISIZ = 899;
export const DERS_VERGI_DAHIL = 1129;
export const PAKETLER = [
  { id: 'gold4', key: 'packages.gold4', uyelik: 'gold', ders: 4, vergisiz: 3596, kart: 4516 },
  { id: 'gold8', key: 'packages.gold8', uyelik: 'gold', ders: 8, vergisiz: 7192, kart: 9032 },
  { id: 'gold12', key: 'packages.gold12', uyelik: 'gold', ders: 12, vergisiz: 10788, kart: 13548 },
  { id: 'silver', key: 'packages.silver', uyelik: 'silver', ay: 1, vergisiz: 200, kart: 249 },
] as const;

// Yasal sayfalar (metinler src/data/legal.ts): alt bilgide ve paketler sayfasında bağlantı
export const YASAL = [
  { doc: 'kullanim', page: 'kullanim-sartlari.html', key: 'legal.terms' },
  { doc: 'kvkk', page: 'kvkk.html', key: 'legal.kvkk' },
  { doc: 'onbilgi', page: 'on-bilgilendirme-formu.html', key: 'legal.preinfo' },
  { doc: 'mesafeli', page: 'mesafeli-satis-sozlesmesi.html', key: 'legal.distance' },
] as const;
