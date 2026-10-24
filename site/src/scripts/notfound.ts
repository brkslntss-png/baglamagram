// 404: öğrenci portalının iç adresleri portala döner; dil önekine göre metin değişir.
import { ui } from '../i18n/ui';

const path = location.pathname;
if (path.startsWith('/portal')) {
  location.replace('/portal/');
} else {
  const m = path.match(/^\/(en|de|ru)\//);
  if (m) {
    const lang = m[1] as 'en' | 'de' | 'ru';
    const d = ui[lang];
    const set = (sel: string, v?: string) => { const el = document.querySelector(sel); if (el && v) el.textContent = v; };
    set('[data-nf-title]', d['nf.title']);
    set('[data-nf-text]', d['nf.text']);
    set('[data-nf-home] span', d['nf.home']);
    document.querySelector('[data-nf-home]')?.setAttribute('href', `/${lang}/`);
    document.documentElement.lang = lang;
  }
}
