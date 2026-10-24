// Arama kutusu: [data-filter="seçici"] yazıldıkça öğeleri data-text'e göre süzer.
document.querySelectorAll<HTMLInputElement>('input[data-filter]').forEach((input) => {
  const items = Array.from(document.querySelectorAll<HTMLElement>(input.dataset.filter || ''));
  const empty = document.querySelector<HTMLElement>('[data-empty]');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLocaleLowerCase('tr');
    let shown = 0;
    items.forEach((el) => {
      const ok = !q || (el.dataset.text || '').includes(q);
      el.hidden = !ok;
      if (ok) shown += 1;
    });
    if (empty) empty.hidden = shown > 0;
  });
});
