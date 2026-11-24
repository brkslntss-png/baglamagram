#!/usr/bin/env bash
# Derlenmiş uygulamayı açıp portalın gerçekten yüklendiğini doğrular. İş akışı bunu Windows ve Mac'te çalıştırır;
# test geçmezse kurulum dosyaları yayınlanmaz.
# Kullanım: bash test/acilis-testi.sh <uygulama-dosyası> [ek bayraklar…]
set -u
uygulama="$1"
shift
port=9333
beklenen='https://baglamagram.com.tr/portal/'

"$uygulama" --remote-debugging-port=$port "$@" > acilis-testi.log 2>&1 &
pid=$!

adres=''
for _ in $(seq 1 45); do
  sleep 2
  adres=$(curl -s "http://127.0.0.1:$port/json" | node -e "
    let s = '';
    process.stdin.on('data', (d) => (s += d)).on('end', () => {
      try { const p = JSON.parse(s).find((x) => x.type === 'page'); console.log(p ? p.url : ''); } catch { console.log(''); }
    });")
  case "$adres" in "$beklenen"*) break ;; esac
done

if command -v taskkill > /dev/null 2>&1; then
  taskkill //F //T //IM "$(basename "$uygulama")" > /dev/null 2>&1 || true
else
  kill "$pid" 2> /dev/null || true
fi

echo "Açılan sayfa: ${adres:-yok}"
case "$adres" in
  "$beklenen"*)
    echo "✓ Uygulama açıldı, portal yüklendi"
    ;;
  *)
    echo "✗ Portal yüklenmedi. Uygulamanın çıktısı:"
    tail -40 acilis-testi.log
    exit 1
    ;;
esac
