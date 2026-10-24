// Konserler. Yeni konser eklemek için PAST listesine ekle; öne çıkan konser FEATURED.
import type { Lang } from '../i18n';
import { poster, type Pic } from './site';
type L = Record<Lang, string>;

export const CONCERT_FEATURED = {
  title: 'East to West',
  poster: poster('east-to-west-2025'),
  youtube: 'q7fH0v_sgO8',
  date: { tr: '17 Aralık 2025', en: 'December 17, 2025', de: '17. Dezember 2025', ru: '17 декабря 2025' } as L,
  place: { tr: 'Aydın Adnan Menderes Üniversitesi', en: 'Aydın Adnan Menderes University', de: 'Aydın-Adnan-Menderes-Universität', ru: 'Университет Айдын Аднан Мендерес' } as L,
  desc: {
    tr: 'Anadolu’nun kadim ezgilerinin Batı’nın klasik formlarıyla buluştuğu bir müzik yolculuğu. Mahmut Burak Aslantaş ile piyanist Elzė Markevičiūtė’nin ortak projesi olan bu konser, kültürler arasında bir köprü kuruyor.',
    en: 'A musical journey where the age-old melodies of Anatolia meet the classical forms of the West. A joint project by Mahmut Burak Aslantaş and pianist Elzė Markevičiūtė, this concert builds a bridge between cultures.',
    de: 'Eine musikalische Reise, auf der uralte Melodien Anatoliens den klassischen Formen des Westens begegnen. Das gemeinsame Projekt von Mahmut Burak Aslantaş und der Pianistin Elzė Markevičiūtė schlägt eine Brücke zwischen den Kulturen.',
    ru: 'Музыкальное путешествие, в котором древние мелодии Анатолии встречаются с классическими формами Запада. Совместный проект Махмута Бурака Асланташа и пианистки Эльзе Маркевичюте — мост между культурами.',
  } as L,
};

// Geçmiş konserler (yeniden eskiye). Tarih ISO biçiminde; ay+yıl yeterliyse day: false.
export const CONCERTS_PAST: { title: L; poster: Pic; date: string; day?: boolean }[] = [
  { title: { tr: 'East to West · Aydın', en: 'East to West · Aydın', de: 'East to West · Aydın', ru: 'East to West · Айдын' }, poster: poster('east-to-west-2025'), date: '2025-12-17' },
  { title: { tr: 'Türk Sanat Müziği Korosu · 28. ADÜFEST', en: 'Turkish Art Music Choir · 28th ADÜFEST', de: 'Chor für türkische Kunstmusik · 28. ADÜFEST', ru: 'Хор турецкой классической музыки · 28-й ADÜFEST' }, poster: poster('tsm-korosu-2025'), date: '2025-05-15' },
  { title: { tr: 'Türk Sanat Müziği Korosu · 27. ADÜFEST', en: 'Turkish Art Music Choir · 27th ADÜFEST', de: 'Chor für türkische Kunstmusik · 27. ADÜFEST', ru: 'Хор турецкой классической музыки · 27-й ADÜFEST' }, poster: poster('tsm-korosu-2024'), date: '2024-05-15' },
  { title: { tr: 'Yıldızların Altında', en: 'Under the Stars', de: 'Unter den Sternen', ru: 'Под звёздами' }, poster: poster('yildizlarin-altinda-2024'), date: '2024-05-08' },
  { title: { tr: 'ADÜ Ses Finali', en: 'ADÜ Voice Final', de: 'ADÜ-Gesangsfinale', ru: 'Финал конкурса «Голос АДУ»' }, poster: poster('adu-ses-2024'), date: '2024-05-01', day: false },
];
