// Günün sözü: her gün sıradaki söz (dört dilde aynı sırada).
import type { Lang } from '../i18n';

const MBA = {
  tr: 'Mahmut Burak Aslantaş',
  en: 'Mahmut Burak Aslantaş',
  de: 'Mahmut Burak Aslantaş',
  ru: 'Махмут Бурак Асланташ',
};

type Q = {
  text: Record<Lang, string>;
  author?: Record<Lang, string>;
};

// Rusça seçiliyken yazar adları Kiril alfabesiyle gösterilir.
const AUTHOR_RU: Record<string, string> = {
  'Mahmut Burak Aslantaş': 'Махмут Бурак Асланташ',
  'Cervantes': 'Сервантес',
  'Miguel de Cervantes': 'Мигель де Сервантес',
  'Neşet Ertaş': 'Нешет Эрташ',
  'Paul Klee': 'Пауль Клее',
  'William Shakespeare': 'Уильям Шекспир',
  'Sokrates': 'Сократ',
  'Konfüçyüs': 'Конфуций',
  'Friedrich Nietzsche': 'Фридрих Ницше',
  'Marcus Aurelius': 'Марк Аврелий',
  'Lao Tzu': 'Лао-цзы',
  'Mevlânâ Celâleddîn-i Rûmî': 'Джалаладдин Руми',
  'Yunus Emre': 'Юнус Эмре',
  'Mustafa Kemal Atatürk': 'Мустафа Кемаль Ататюрк',
  'Victor Hugo': 'Виктор Гюго',
  'Johann Wolfgang von Goethe': 'Иоганн Вольфганг фон Гёте',
  'Oscar Wilde': 'Оскар Уайльд',
  'Albert Einstein': 'Альберт Эйнштейн',
  'Leonardo da Vinci': 'Леонардо да Винчи',
  'Aristoteles': 'Аристотель',
  'Epiktetos': 'Эпиктет',
  'Seneca': 'Сенека',
  'Benjamin Franklin': 'Бенджамин Франклин',
  'Abraham Lincoln': 'Авраам Линкольн',
  'Martin Luther King Jr.': 'Мартин Лютер Кинг-младший',
  'Helen Keller': 'Хелен Келлер',
  'Ralph Waldo Emerson': 'Ральф Уолдо Эмерсон',
  'Henry David Thoreau': 'Генри Дэвид Торо',
  'Antoine de Saint-Exupéry': 'Антуан де Сент-Экзюпери',
  'Khalil Gibran': 'Халиль Джебран',
  'Rabindranath Tagore': 'Рабиндранат Тагор',
  'Fyodor Dostoevsky': 'Фёдор Достоевский',
};

const quote = (
  tr: string,
  en: string,
  de: string,
  ru: string,
  author: string,
): Q => ({
  text: { tr, en, de, ru },
  author: {
    tr: author,
    en: author,
    de: author,
    ru: AUTHOR_RU[author] ?? author,
  },
});

export const QUOTES: Q[] = [
  // MBA'ya ait korunacak üç söz
  {
    text: {
      tr: 'Sabırla bekleyen taş üstünde gül açtırır.',
      en: 'Those who wait patiently can make a rose bloom on stone.',
      de: 'Wer geduldig wartet, lässt eine Rose auf Stein erblühen.',
      ru: 'Тот, кто терпеливо ждёт, может заставить розу расцвести на камне.',
    },
    author: MBA,
  },
  {
    text: {
      tr: 'Hüzün de bir misafirdir; gelir, geçer, izi kalır.',
      en: 'Sorrow is a guest too; it comes, it goes, and leaves its trace.',
      de: 'Auch die Trauer ist ein Gast; sie kommt, sie geht und hinterlässt ihre Spur.',
      ru: 'Печаль — тоже гость: приходит, уходит и оставляет след.',
    },
    author: MBA,
  },
  {
    text: {
      tr: 'Gölgen boyunu aşsa da güneş batınca hükmü biter.',
      en: 'Even if your shadow grows taller than you, its reign ends when the sun sets.',
      de: 'Auch wenn dein Schatten größer ist als du, endet seine Herrschaft, wenn die Sonne untergeht.',
      ru: 'Пусть твоя тень и выше тебя — её власть кончается с заходом солнца.',
    },
    author: MBA,
  },

  // 1. Miguel de Cervantes
  quote(
    'Müziğin olduğu yerde kötülük barınmaz.',
    'Where there is music, there can be no evil.',
    'Wo Musik ist, kann nichts Böses sein.',
    'Где есть музыка, там не может быть зла.',
    'Miguel de Cervantes',
  ),

  // 2. Neşet Ertaş
  quote(
    'Gönül kimi severse, aşk onda güzeldir.',
    'Love is beautiful in the one whom the heart loves.',
    'Die Liebe ist schön in dem Menschen, den das Herz liebt.',
    'Любовь прекрасна в том, кого любит сердце.',
    'Neşet Ertaş',
  ),

  // 3. Paul Klee
  quote(
    'Sanat görüneni tekrarlamak değil, görünür kılmaktır.',
    'Art does not reproduce the visible; rather, it makes visible.',
    'Kunst gibt nicht das Sichtbare wieder, sondern macht sichtbar.',
    'Искусство не воспроизводит видимое, а делает видимым.',
    'Paul Klee',
  ),

  // 4. William Shakespeare
  quote(
    'Her şeyden önce kendine karşı dürüst ol.',
    'This above all: to thine own self be true.',
    'Vor allem: Sei dir selbst treu.',
    'Прежде всего будь верен самому себе.',
    'William Shakespeare',
  ),

  // 5. Sokrates
  quote(
    'Bildiğim tek şey, hiçbir şey bilmediğimdir.',
    'The only thing I know is that I know nothing.',
    'Ich weiß, dass ich nichts weiß.',
    'Я знаю только то, что ничего не знаю.',
    'Sokrates',
  ),

  // 6. Konfüçyüs
  quote(
    'Nereye gidersen git, bütün kalbinle git.',
    'Wherever you go, go with all your heart.',
    'Wohin du auch gehst, geh mit ganzem Herzen.',
    'Куда бы ты ни шёл, иди всем сердцем.',
    'Konfüçyüs',
  ),

  // 7. Friedrich Nietzsche
  quote(
    'Yaşamak için bir nedeni olan kişi, hemen her nasıla katlanabilir.',
    'He who has a why to live can bear almost any how.',
    'Wer ein Warum zu leben hat, erträgt fast jedes Wie.',
    'Тот, у кого есть зачем жить, выдержит почти любое как.',
    'Friedrich Nietzsche',
  ),

  // 8. Marcus Aurelius
  quote(
    'Hayatımız, düşüncelerimizin rengini alır.',
    'The happiness of your life depends upon the quality of your thoughts.',
    'Das Glück deines Lebens hängt von der Beschaffenheit deiner Gedanken ab.',
    'Счастье твоей жизни зависит от качества твоих мыслей.',
    'Marcus Aurelius',
  ),

  // 9. Lao Tzu
  quote(
    'Binlerce kilometrelik yolculuk tek bir adımla başlar.',
    'A journey of a thousand miles begins with a single step.',
    'Eine Reise von tausend Meilen beginnt mit einem einzigen Schritt.',
    'Путь в тысячу ли начинается с одного шага.',
    'Lao Tzu',
  ),

  // 10. Mevlânâ Celâleddîn-i Rûmî
  quote(
    'Dün akıllıydım, dünyayı değiştirmek istedim. Bugün bilgeyim, kendimi değiştiriyorum.',
    'Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.',
    'Gestern war ich klug und wollte die Welt verändern. Heute bin ich weise und verändere mich selbst.',
    'Вчера я был умён и хотел изменить мир. Сегодня я мудр и меняю себя.',
    'Mevlânâ Celâleddîn-i Rûmî',
  ),

  // 11. Yunus Emre
  quote(
    'Sevelim, sevilelim; dünya kimseye kalmaz.',
    'Let us love and be loved; the world belongs to no one forever.',
    'Lasst uns lieben und geliebt werden; die Welt gehört niemandem für immer.',
    'Будем любить и будем любимы: этот мир никому не принадлежит навечно.',
    'Yunus Emre',
  ),

  // 12. Mustafa Kemal Atatürk
  quote(
    'Hayatta en hakiki mürşit ilimdir.',
    'The truest guide in life is science.',
    'Der wahrhaftigste Wegweiser im Leben ist die Wissenschaft.',
    'Самый истинный путеводитель в жизни — наука.',
    'Mustafa Kemal Atatürk',
  ),

  // 13. Victor Hugo
  quote(
    'Müzik, söylenemeyeni ve susulması imkânsız olanı ifade eder.',
    'Music expresses that which cannot be said and on which it is impossible to be silent.',
    'Musik drückt das aus, was sich nicht sagen lässt und worüber zu schweigen unmöglich ist.',
    'Музыка выражает то, что нельзя высказать и о чём невозможно молчать.',
    'Victor Hugo',
  ),

  // 14. Johann Wolfgang von Goethe
  quote(
    'Bilmek yetmez, uygulamalıyız. İstemek yetmez, yapmalıyız.',
    'Knowing is not enough; we must apply. Willing is not enough; we must do.',
    'Wissen genügt nicht; wir müssen es anwenden. Wollen genügt nicht; wir müssen handeln.',
    'Знать недостаточно — нужно применять знания. Желать недостаточно — нужно действовать.',
    'Johann Wolfgang von Goethe',
  ),

  // 15. Oscar Wilde
  quote(
    'Kendin ol; diğer herkes zaten alınmış.',
    'Be yourself; everyone else is already taken.',
    'Sei du selbst; alle anderen gibt es schon.',
    'Будь собой: все остальные роли уже заняты.',
    'Oscar Wilde',
  ),

  // 16. Albert Einstein
  quote(
    'Hayal gücü bilgiden daha önemlidir.',
    'Imagination is more important than knowledge.',
    'Fantasie ist wichtiger als Wissen.',
    'Воображение важнее знания.',
    'Albert Einstein',
  ),

  // 17. Leonardo da Vinci
  quote(
    'Öğrenmek zihni asla tüketmez.',
    'Learning never exhausts the mind.',
    'Lernen erschöpft den Geist niemals.',
    'Учение никогда не истощает разум.',
    'Leonardo da Vinci',
  ),

  // 18. Aristoteles
  quote(
    'Mükemmellik bir eylem değil, bir alışkanlıktır.',
    'Excellence is not an act, but a habit.',
    'Vollkommenheit ist keine Handlung, sondern eine Gewohnheit.',
    'Совершенство — это не действие, а привычка.',
    'Aristoteles',
  ),

  // 19. Epiktetos
  quote(
    'Bizi rahatsız eden şeyler olaylar değil, olaylara ilişkin düşüncelerimizdir.',
    'It is not things themselves that disturb us, but our judgments about them.',
    'Nicht die Dinge selbst beunruhigen uns, sondern unsere Urteile über sie.',
    'Нас тревожат не сами вещи, а наши суждения о них.',
    'Epiktetos',
  ),

  // 20. Seneca
  quote(
    'Vakit bulamıyoruz değil; vaktimizin çoğunu boşa harcıyoruz.',
    'It is not that we have a short time to live, but that we waste much of it.',
    'Es ist nicht so, dass wir wenig Zeit haben, sondern dass wir viel davon verschwenden.',
    'Дело не в том, что у нас мало времени, а в том, что мы многое из него теряем.',
    'Seneca',
  ),

  // 21. Benjamin Franklin
  quote(
    'Yatmaya erken, kalkmaya erken; insanı sağlıklı, varlıklı ve bilge yapar.',
    'Early to bed and early to rise makes a person healthy, wealthy, and wise.',
    'Früh ins Bett und früh aufstehen macht gesund, wohlhabend und weise.',
    'Рано ложиться и рано вставать — значит быть здоровым, богатым и мудрым.',
    'Benjamin Franklin',
  ),

  // 22. Abraham Lincoln
  quote(
    'Neredeyse bütün insanlar zorluklara dayanabilir; karakterlerini sınamak istiyorsanız onlara güç verin.',
    'Nearly all men can stand adversity, but if you want to test a man’s character, give him power.',
    'Fast alle Menschen können Widrigkeiten ertragen; will man ihren Charakter prüfen, gebe man ihnen Macht.',
    'Почти все люди способны выдержать невзгоды, но если хотите проверить характер человека, дайте ему власть.',
    'Abraham Lincoln',
  ),

  // 23. Martin Luther King Jr.
  quote(
    'Karanlık karanlığı kovamaz; bunu ancak ışık yapabilir. Nefret nefreti kovamaz; bunu ancak sevgi yapabilir.',
    'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
    'Dunkelheit kann Dunkelheit nicht vertreiben; nur Licht kann das. Hass kann Hass nicht vertreiben; nur Liebe kann das.',
    'Тьма не может рассеять тьму — это под силу только свету. Ненависть не может победить ненависть — это под силу только любви.',
    'Martin Luther King Jr.',
  ),

  // 24. Helen Keller
  quote(
    'Dünyadaki en güzel şeyler görülemez, hatta dokunulamaz; kalple hissedilir.',
    'The best and most beautiful things in the world cannot be seen or even touched; they must be felt with the heart.',
    'Die besten und schönsten Dinge der Welt kann man weder sehen noch berühren; man muss sie mit dem Herzen fühlen.',
    'Лучшие и прекраснейшие вещи в мире нельзя увидеть или даже потрогать — их нужно чувствовать сердцем.',
    'Helen Keller',
  ),

  // 25. Ralph Waldo Emerson
  quote(
    'Kendine güven.',
    'Trust thyself.',
    'Vertraue dir selbst.',
    'Доверяй себе.',
    'Ralph Waldo Emerson',
  ),

  // 26. Henry David Thoreau
  quote(
    'İnsanların çoğu sessiz bir çaresizlik içinde yaşar.',
    'The mass of men lead lives of quiet desperation.',
    'Die meisten Menschen führen ein Leben stiller Verzweiflung.',
    'Большинство людей живёт в тихом отчаянии.',
    'Henry David Thoreau',
  ),

  // 27. Antoine de Saint-Exupéry
  quote(
    'İnsan ancak yüreğiyle baktığında doğruyu görebilir; asıl önemli olan gözle görülmez.',
    'One sees clearly only with the heart. What is essential is invisible to the eye.',
    'Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar.',
    'Зорко одно лишь сердце. Самого главного глазами не увидишь.',
    'Antoine de Saint-Exupéry',
  ),

  // 28. Khalil Gibran
  quote(
    'Çalışmak, sevginin görünür hâle gelmesidir.',
    'Work is love made visible.',
    'Arbeit ist sichtbar gewordene Liebe.',
    'Труд — это любовь, ставшая видимой.',
    'Khalil Gibran',
  ),

  // 29. Rabindranath Tagore
  quote(
    'Bulutlar hayatıma artık fırtına getirmek için değil, gün batımıma renk katmak için giriyor.',
    'Clouds come into my life not to bring rain or storm, but to add color to my sunset sky.',
    'Wolken kommen in mein Leben, nicht um Regen oder Sturm zu bringen, sondern um meinen Abendhimmel zu färben.',
    'Облака приходят в мою жизнь не для того, чтобы принести дождь или бурю, а чтобы раскрасить мой закат.',
    'Rabindranath Tagore',
  ),

  // 30. Fyodor Dostoevsky
  quote(
    'Güzellik dünyayı kurtaracak.',
    'Beauty will save the world.',
    'Die Schönheit wird die Welt retten.',
    'Красота спасёт мир.',
    'Fyodor Dostoevsky',
  ),
];

/** Yılın gününe göre söz. Dört dilde aynı indeks kullanılır. */
export function quoteIndexFor(date = new Date()) {
  const start = Date.UTC(date.getFullYear(), 0, 0);

  const day = Math.floor(
    (
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      ) - start
    ) / 86400000,
  );

  return day % QUOTES.length;
}
