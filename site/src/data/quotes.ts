// Günün sözü: her gün sıradaki söz (dört dilde aynı sırada).
import type { Lang } from '../i18n';

const MBA = { tr: 'Mahmut Burak Aslantaş', en: 'Mahmut Burak Aslantaş', de: 'Mahmut Burak Aslantaş', ru: 'Махмут Бурак Асланташ' };

type Q = { text: Record<Lang, string>; author?: Record<Lang, string> };

export const QUOTES: Q[] = [
  {
    text: {
      tr: 'Sabırla bekleyen taş üstünde gül açtırır; acele eden eceline kucak açar.',
      en: 'Whoever waits with patience makes roses bloom on stone; whoever hurries runs into the arms of his end.',
      de: 'Wer geduldig wartet, lässt Rosen auf Stein blühen; wer eilt, läuft seinem Ende in die Arme.',
      ru: 'Кто терпеливо ждёт, у того и на камне расцветёт роза; кто спешит, тот спешит навстречу своей гибели.',
    },
    author: MBA,
  },
  {
    text: {
      tr: 'Müziğin olduğu yerde kötülük barınmaz.',
      en: 'Where there is music, there can be no evil.',
      de: 'Wo Musik ist, kann nichts Böses sein.',
      ru: 'Где есть музыка, там не может быть зла.',
    },
    author: { tr: 'Cervantes', en: 'Cervantes', de: 'Cervantes', ru: 'Сервантес' },
  },
  {
    text: {
      tr: 'Gönül kimi severse, aşk onda güzeldir.',
      en: 'Love is beautiful in whoever the heart loves.',
      de: 'Die Liebe ist schön in dem, den das Herz liebt.',
      ru: 'Любовь прекрасна в том, кого любит сердце.',
    },
    author: { tr: 'Neşet Ertaş', en: 'Neşet Ertaş', de: 'Neşet Ertaş', ru: 'Нешет Эрташ' },
  },
  {
    text: {
      tr: 'Vakit nakit değil candır; geçen her an imtihandır.',
      en: 'Time is not money, it is life; every passing moment is a test.',
      de: 'Zeit ist kein Geld, sondern Leben; jeder Augenblick ist eine Prüfung.',
      ru: 'Время — не деньги, а жизнь; каждое мгновение — испытание.',
    },
    author: MBA,
  },
  {
    text: {
      tr: 'Yüksek uçan alçak konar; gurur insanı tez yakar.',
      en: 'Those who fly high land low; pride burns a person quickly.',
      de: 'Wer hoch fliegt, landet tief; Hochmut verbrennt den Menschen schnell.',
      ru: 'Кто высоко летает, тот низко садится; гордыня быстро сжигает человека.',
    },
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
      tr: 'Gülü incitme dalında, sözü incitme dilinde.',
      en: 'Do not hurt the rose on its branch, nor the word on your tongue.',
      de: 'Verletze die Rose nicht am Zweig und das Wort nicht auf der Zunge.',
      ru: 'Не рань розу на ветке, а слово — на языке.',
    },
    author: MBA,
  },
  {
    text: {
      tr: 'Bağlama Anadolu’nun sesidir; duymasını bilene çok şey anlatır.',
      en: 'The bağlama is the voice of Anatolia; it tells a great deal to those who know how to listen.',
      de: 'Die Bağlama ist die Stimme Anatoliens; wer zuzuhören weiß, dem erzählt sie viel.',
      ru: 'Баглама — голос Анатолии: тому, кто умеет слушать, она расскажет многое.',
    },
  },
  {
    text: {
      tr: 'Sanat görüneni tekrarlamak değil, görünür kılmaktır.',
      en: 'Art does not reproduce the visible; rather, it makes visible.',
      de: 'Kunst gibt nicht das Sichtbare wieder, sondern macht sichtbar.',
      ru: 'Искусство не воспроизводит видимое, а делает видимым.',
    },
    author: { tr: 'Paul Klee', en: 'Paul Klee', de: 'Paul Klee', ru: 'Пауль Клее' },
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
  {
    text: {
      tr: 'Söz, okun yaydan çıkışıdır; hedefini bulmazsa döner, sahibini vurur.',
      en: 'A word is an arrow leaving the bow; if it misses its target, it turns back and strikes its owner.',
      de: 'Ein Wort ist ein Pfeil, der den Bogen verlässt; verfehlt er sein Ziel, kehrt er zurück und trifft seinen Schützen.',
      ru: 'Слово — стрела, сорвавшаяся с тетивы: не найдёт цели — вернётся и ранит хозяина.',
    },
    author: MBA,
  },
  {
    text: {
      tr: 'Vuslatı bekleyen göz, aradaki dağları dert etmez.',
      en: 'The eye that awaits reunion does not mind the mountains in between.',
      de: 'Das Auge, das auf das Wiedersehen wartet, scheut die Berge dazwischen nicht.',
      ru: 'Глаз, ждущий встречи, не страшится гор на пути.',
    },
    author: MBA,
  },
  {
    text: {
      tr: 'Cahilin övgüsü zehirli bala benzer; yerken tatlı gelir, sonra öldürür. Âlimin yergisi acı ilaca benzer; içerken zorlar, sonunda güldürür.',
      en: 'The praise of the ignorant is like poisoned honey: sweet to eat, deadly later. The criticism of the wise is like bitter medicine: hard to swallow, but it makes you smile in the end.',
      de: 'Das Lob des Unwissenden gleicht vergiftetem Honig: süß beim Essen, später tödlich. Die Kritik des Weisen gleicht bitterer Medizin: schwer zu schlucken, doch am Ende bringt sie dich zum Lächeln.',
      ru: 'Похвала невежды — как отравленный мёд: сладка на вкус, а после губит. Упрёк мудреца — как горькое лекарство: трудно проглотить, но в конце приносит улыбку.',
    },
    author: MBA,
  },
  {
    text: {
      tr: 'Yolu yürüyen değil, yolda eriyen bilir hakikati; menzile varmak nasip işidir, yolda sadakatle kalan er kişidir.',
      en: 'It is not the one who walks the path but the one who melts into it who knows the truth; reaching the destination is a matter of fate, but whoever stays faithful on the way is a true person.',
      de: 'Nicht wer den Weg geht, sondern wer im Weg aufgeht, kennt die Wahrheit; das Ziel zu erreichen ist Schicksal, doch wer dem Weg treu bleibt, ist ein wahrer Mensch.',
      ru: 'Истину знает не тот, кто идёт по пути, а тот, кто растворяется в нём; дойти до цели — дело судьбы, а верный пути — настоящий человек.',
    },
    author: MBA,
  },
  {
    text: {
      tr: 'Gönül aynası buğulanmışsa baktığın yüzde kusur arama; önce kendi nefesini tut ki karşındakinin sureti berraklaşsın.',
      en: 'If the mirror of your heart is misted over, don’t look for flaws in the face you see; first hold your own breath so the image before you can clear.',
      de: 'Ist der Spiegel deines Herzens beschlagen, such keine Fehler im Gesicht, das du siehst; halte erst deinen eigenen Atem an, damit das Bild vor dir klar wird.',
      ru: 'Если зеркало сердца запотело, не ищи изъянов в лице напротив; сначала задержи своё дыхание — и отражение прояснится.',
    },
    author: MBA,
  },
];

/** Yılın gününe göre söz (sunucu tarafında derleme günü; sayfada tarayıcı yeniden seçer). */
export function quoteIndexFor(date = new Date()) {
  const start = Date.UTC(date.getFullYear(), 0, 0);
  const day = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - start) / 86400000);
  return day % QUOTES.length;
}
