// Çevrimdışı ekranı: dile göre metin, "Tekrar dene" ve bağlantı gelince kendiliğinden yeniden açılma.
const METIN = {
  tr: {
    baslik: 'İnternet bağlantısı yok',
    metin: 'baglamagram’ı kullanmak için internete bağlı olman gerekiyor. Bağlantı gelince portal kendiliğinden açılır.',
    dugme: 'Tekrar dene',
    not: 'Bağlıysan site kısa süreliğine ulaşılamıyor olabilir; birazdan yeniden dene.',
  },
  en: {
    baslik: 'No internet connection',
    metin: 'baglamagram needs an internet connection. The portal will open by itself as soon as you are back online.',
    dugme: 'Try again',
    not: 'If you are online, the site may be briefly unreachable; try again in a moment.',
  },
  de: {
    baslik: 'Keine Internetverbindung',
    metin: 'Für baglamagram brauchst du eine Internetverbindung. Sobald du wieder online bist, öffnet sich das Portal von selbst.',
    dugme: 'Erneut versuchen',
    not: 'Falls du online bist, ist die Seite vielleicht kurz nicht erreichbar; versuche es gleich noch einmal.',
  },
  ru: {
    baslik: 'Нет подключения к интернету',
    metin: 'Для работы baglamagram нужен интернет. Как только подключение появится, портал откроется сам.',
    dugme: 'Повторить',
    not: 'Если интернет есть, сайт может быть ненадолго недоступен; попробуйте чуть позже.',
  },
};

const dil = new URLSearchParams(location.search).get('dil');
const m = METIN[dil] || METIN.tr;
document.documentElement.lang = METIN[dil] ? dil : 'tr';
document.querySelectorAll('[data-m]').forEach((el) => { el.textContent = m[el.dataset.m]; });

const dugme = document.querySelector('button');
const dene = () => {
  dugme.disabled = true;
  window.baglamagramMasaustu?.tekrarDene();
  setTimeout(() => { dugme.disabled = false; }, 3000);
};
dugme.addEventListener('click', dene);
window.addEventListener('online', () => setTimeout(dene, 800));
