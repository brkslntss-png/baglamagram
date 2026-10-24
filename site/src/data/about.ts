// Hakkında sayfası metinleri. {age} yaş olarak otomatik doldurulur.
import type { Lang } from '../i18n';

type About = {
  title: string;
  p: string[];
  careerTitle: string;
  career: [string, string][];
  projectsTitle: string;
  projects: [string, string][];
  timelineTitle: string;
  timeline: [string, string][];
};

export const BIRTH = '2002-02-08';

export const ABOUT: Record<Lang, About> = {
  tr: {
    title: 'Hakkında',
    p: [
      'Mahmut Burak Aslantaş, 8 Şubat 2002’de Birecik’te dünyaya gelmiştir ve {age} yaşındadır. Müzik yolculuğuna çocuk yaşlarında halk eğitim merkezinde bağlama ile başlamıştır. Lise eğitimini Mehmet Adil Çulcuoğlu Anadolu Lisesi’nde tamamlamış, 2021 yılında Aydın Adnan Menderes Üniversitesi Müzik Öğretmenliği bölümünü kazanmıştır. Öğrencilik yıllarında okulun pek çok projesinde ve konserinde yer almıştır.',
      '2024 yılında TRT Türk Halk Müziği Gençlik Korosu’na bağlama icracısı olarak katılmıştır. 14 Kasım 2025’te TRT Türkü’de yayınlanan “Genç Nesilden Türküler” programına konuk sanatçı olarak katılmış, 17 Aralık 2025’te piyanist Elzė Markevičiūtė ile “East to West” projesinin ilk konserini vermiştir. Aslantaş müziği yalnızca bir ses dizisi olarak değil, kültürler arasında bir köprü olarak görür. Amatör olarak şiirle de uğraşan Aslantaş, şarkı sözü ve yeni besteler üzerinde çalışmalarını sürdürmektedir.',
    ],
    careerTitle: 'Kariyer özeti',
    career: [
      ['TRT Gençlik Korosu', 'Bağlama icracısı olarak koro bünyesinde aktif görev.'],
      ['Katıldığı programlar', 'TRT Türkü “Genç Nesilden Türküler”: 17 Mayıs 2025 (orkestra) ve 14 Kasım 2025 (konuk sanatçı); “Türkülerin Genç Yıldızları” (8 Mart 2026).'],
    ],
    projectsTitle: 'Sanat projeleri',
    projects: [
      ['East to West', 'Piyanist Elzė Markevičiūtė ile Anadolu ezgilerini Batı klasikleriyle buluşturan uluslararası konser serisi.'],
      ['Edebiyat çalışmaları', 'Aruz ve hece ölçüsüyle özgün şiirler yazar; şiirlerindeki yalın ve doğrudan üslupla dikkat çeker.'],
    ],
    timelineTitle: 'Yolculuk',
    timeline: [
      ['2002', 'Birecik’te doğdu'],
      ['2021', 'Aydın Adnan Menderes Üniversitesi, Müzik Öğretmenliği'],
      ['2024', 'TRT THM Gençlik Korosu'],
      ['2025', 'TRT Türkü “Genç Nesilden Türküler” · “East to West” ilk konser'],
      ['2026', '“Türkülerin Genç Yıldızları”'],
    ],
  },
  en: {
    title: 'About',
    p: [
      'Mahmut Burak Aslantaş was born on 8 February 2002 in Birecik and is {age} years old. He began his musical journey on the bağlama as a child at a public education centre. He finished high school at Mehmet Adil Çulcuoğlu Anatolian High School and in 2021 was admitted to the Music Teacher Education programme at Aydın Adnan Menderes University. As a student he took part in many of the university’s projects and concerts.',
      'In 2024 he joined the TRT Turkish Folk Music Youth Choir as a bağlama player. On 14 November 2025 he appeared as a guest artist on “Songs from the Young Generation” on TRT Türkü, and on 17 December 2025 he gave the first concert of the “East to West” project with pianist Elzė Markevičiūtė. Aslantaş sees music not merely as a sequence of sounds but as a bridge between cultures. He also writes poetry as an amateur and continues to work on lyrics and new compositions.',
    ],
    careerTitle: 'Career summary',
    career: [
      ['TRT Youth Choir', 'Active member of the choir as a bağlama player.'],
      ['TV programmes', 'TRT Türkü “Songs from the Young Generation”: 17 May 2025 (orchestra) and 14 November 2025 (guest artist); “Young Stars of Türkü” (8 March 2026).'],
    ],
    projectsTitle: 'Art projects',
    projects: [
      ['East to West', 'An international concert series with pianist Elzė Markevičiūtė that brings Anatolian melodies together with Western classics.'],
      ['Literary work', 'He writes original poems in aruz and syllabic metre, noted for their plain and direct style.'],
    ],
    timelineTitle: 'Journey',
    timeline: [
      ['2002', 'Born in Birecik'],
      ['2021', 'Aydın Adnan Menderes University, Music Teacher Education'],
      ['2024', 'TRT Turkish Folk Music Youth Choir'],
      ['2025', 'TRT Türkü “Songs from the Young Generation” · first “East to West” concert'],
      ['2026', '“Young Stars of Türkü”'],
    ],
  },
  de: {
    title: 'Über mich',
    p: [
      'Mahmut Burak Aslantaş wurde am 8. Februar 2002 in Birecik geboren und ist {age} Jahre alt. Seine musikalische Reise begann er als Kind an einem Volksbildungszentrum mit der Bağlama. Das Abitur machte er am Mehmet-Adil-Çulcuoğlu-Gymnasium, 2021 wurde er im Studiengang Musiklehramt an der Aydın-Adnan-Menderes-Universität aufgenommen. Während des Studiums wirkte er bei vielen Projekten und Konzerten der Universität mit.',
      '2024 trat er dem TRT-Jugendchor für türkische Volksmusik als Bağlama-Spieler bei. Am 14. November 2025 war er Gastkünstler in der Sendung „Lieder der jungen Generation“ auf TRT Türkü, am 17. Dezember 2025 gab er mit der Pianistin Elzė Markevičiūtė das erste Konzert des Projekts „East to West“. Für Aslantaş ist Musik nicht bloß eine Abfolge von Tönen, sondern eine Brücke zwischen den Kulturen. Er schreibt außerdem als Amateur Gedichte und arbeitet weiter an Liedtexten und neuen Kompositionen.',
    ],
    careerTitle: 'Werdegang',
    career: [
      ['TRT-Jugendchor', 'Aktives Mitglied des Chors als Bağlama-Spieler.'],
      ['Fernsehsendungen', 'TRT Türkü „Lieder der jungen Generation“: 17. Mai 2025 (Orchester) und 14. November 2025 (Gastkünstler); „Junge Stars des Türkü“ (8. März 2026).'],
    ],
    projectsTitle: 'Kunstprojekte',
    projects: [
      ['East to West', 'Internationale Konzertreihe mit der Pianistin Elzė Markevičiūtė, die anatolische Melodien mit westlicher Klassik verbindet.'],
      ['Literarisches', 'Er schreibt eigene Gedichte im Aruz- und Silbenmaß, die durch ihren schlichten, direkten Stil auffallen.'],
    ],
    timelineTitle: 'Stationen',
    timeline: [
      ['2002', 'Geboren in Birecik'],
      ['2021', 'Aydın-Adnan-Menderes-Universität, Musiklehramt'],
      ['2024', 'TRT-Jugendchor für türkische Volksmusik'],
      ['2025', 'TRT Türkü „Lieder der jungen Generation“ · erstes „East to West“-Konzert'],
      ['2026', '„Junge Stars des Türkü“'],
    ],
  },
  ru: {
    title: 'Обо мне',
    p: [
      'Махмут Бурак Асланташ родился 8 февраля 2002 года в Биреджике; ему {age}. Музыкальный путь он начал ребёнком — с багламы в центре народного образования. Окончил Анатолийский лицей имени Мехмета Адиля Чулджуоглу, а в 2021 году поступил на отделение музыкальной педагогики Университета Айдын Аднан Мендерес. В студенческие годы участвовал во многих проектах и концертах университета.',
      'В 2024 году он вошёл в Молодёжный хор турецкой народной музыки TRT как исполнитель на багламе. 14 ноября 2025 года выступил приглашённым артистом в программе «Песни молодого поколения» на TRT Türkü, а 17 декабря 2025 года вместе с пианисткой Эльзе Маркевичюте дал первый концерт проекта «East to West». Для Асланташа музыка — не просто последовательность звуков, а мост между культурами. Он также пишет стихи как любитель и продолжает работать над текстами песен и новыми композициями.',
    ],
    careerTitle: 'Карьера',
    career: [
      ['Молодёжный хор TRT', 'Постоянный участник хора как исполнитель на багламе.'],
      ['Телепрограммы', 'TRT Türkü «Песни молодого поколения»: 17 мая 2025 (оркестр) и 14 ноября 2025 (приглашённый артист); «Молодые звёзды тюркю» (8 марта 2026).'],
    ],
    projectsTitle: 'Творческие проекты',
    projects: [
      ['East to West', 'Международная серия концертов с пианисткой Эльзе Маркевичюте, объединяющая анатолийские мелодии с западной классикой.'],
      ['Литература', 'Пишет оригинальные стихи аруз и силлабическим размером, отличающиеся простым и прямым стилем.'],
    ],
    timelineTitle: 'Путь',
    timeline: [
      ['2002', 'Родился в Биреджике'],
      ['2021', 'Университет Айдын Аднан Мендерес, музыкальная педагогика'],
      ['2024', 'Молодёжный хор народной музыки TRT'],
      ['2025', 'TRT Türkü «Песни молодого поколения» · первый концерт «East to West»'],
      ['2026', '«Молодые звёзды тюркю»'],
    ],
  },
};

export function ageOn(date = new Date()) {
  const b = new Date(BIRTH);
  let a = date.getFullYear() - b.getFullYear();
  if (date.getMonth() < b.getMonth() || (date.getMonth() === b.getMonth() && date.getDate() < b.getDate())) a -= 1;
  return a;
}

/** Rusça yaş: 24 года, 25 лет, 21 год */
export function ageText(lang: Lang, n: number) {
  if (lang !== 'ru') return String(n);
  const m10 = n % 10, m100 = n % 100;
  const w = m10 === 1 && m100 !== 11 ? 'год' : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? 'года' : 'лет';
  return `${n} ${w}`;
}
