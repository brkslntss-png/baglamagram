// Yasal metinler: uygulamadaki features/legal/texts.js'in kopyası (mobil depo). Birini değiştirince ötekini de güncelle
// ve SURUM'u artır. Sitede sipariş alanları "Sipariş sırasında belirtilir" olarak görünür.
export const SURUM = '2026-11-01.3';

export const SATICI = {
  unvan: 'Mahmut Burak Aslantaş (Bağlamagram)',
  adres: '', // Burak verecek
  telefon: '0533 506 0921',
  eposta: 'baglamagram@gmail.com',
  web: 'https://baglamagram.com.tr',
};

// Gold paketler aylıktır (Burak, 1 Kasım 2026): 4 ders haftada 1, 8 ders haftada 2, 12 ders haftada 3 ders;
// dersler ilk dersin yapıldığı günden itibaren 1 ay içinde kullanılır.
export const PAKET_SURESI = `Gold paketler aylıktır: 4 derslik paket haftada 1, 8 derslik paket haftada 2, 12 derslik paket haftada 3 ders olarak planlanır ve paketteki dersler ilk dersin yapıldığı günden itibaren 1 (bir) ay içinde kullanılır.`;

const adres = () => SATICI.adres || '(adres eklenecek)';
const saticiBlok = () => `Unvanı: ${SATICI.unvan}
Adresi: ${adres()}
Telefon: ${SATICI.telefon}
E-posta: ${SATICI.eposta}
İnternet sitesi: ${SATICI.web}`;

export const KULLANIM_SARTLARI = `Son güncelleme: 1 Kasım 2026

1. Taraflar ve Tanımlar
Bu Kullanım Şartları ("Şartlar"), Bağlamagram mobil uygulaması, web portalı ve baglamagram.com.tr ("Platform") üzerinden hizmet sunan ${SATICI.unvan} ("Bağlamagram") ile Platformu kullanan kişiler ("Kullanıcı") arasındaki ilişkiyi düzenler. "Öğrenci" paket veya üyelik satın alan ya da Platformu öğrenci olarak kullanan kişiyi, "Veli" 18 yaşından küçük öğrencinin velisini veya vasisini, "Hoca" Bağlamagram adına ders veren kişiyi, "Gold Üyelik" hocayla canlı online ders ve Platformun tamamını, "Silver Üyelik" yalnız Platformun uygulama içeriklerini, "Modül" hocayla birebir, yaklaşık 60 dakikalık canlı online ders ile bu dersin kaydı, ders notları ve ödevlere geri bildirimden oluşan eğitim birimini, "Paket" belirli sayıda modülden oluşan Gold içerik paketini ifade eder.

2. Kabul ve Değişiklikler
Kullanıcı, hesap açarken veya Platformu kullanmaya başladığında bu Şartları, Kişisel Verilerin Korunması Aydınlatma Metni'ni ve satın alma sırasında Ön Bilgilendirme Formu ile Mesafeli Satış Sözleşmesi'ni okuduğunu ve kabul ettiğini beyan eder. Bağlamagram bu Şartları güncelleyebilir; güncel metin Platformda yayımlandığı anda yürürlüğe girer. Ücretli hizmetleri etkileyen önemli değişiklikler Kullanıcıya Platform üzerinden duyurulur; daha önce ödemesi yapılmış paketlerin fiyatı ve modül sayısı değişmez.

3. Hesap, Yaş ve Güvenlik
Kullanıcı, kayıt sırasında doğru, güncel ve eksiksiz bilgi vermekle yükümlüdür. Hesap kişiseldir; başkasına devredilemez, kiralanamaz, satılamaz ve birden fazla kişi tarafından kullanılamaz. E-posta, şifre ve diğer erişim bilgilerinin korunmasından ve hesap üzerinden yapılan işlemlerden hesap sahibi sorumludur. Hesabın birden fazla kişi tarafından kullanıldığının veya paylaşıldığının tespiti hâlinde Bağlamagram hesabı askıya alabilir. 18 yaşından küçük Kullanıcılar Platformu yalnız veli veya vasilerinin bilgisi ve onayıyla kullanır; bu durumda satın alma işlemini veli veya vasi yapmış sayılır ve sözleşmenin tarafı odur. Yaş sınırı belirtilen içerikler (ör. 16+) bu yaşın altındaki kullanıcılar için uygun değildir.

4. Hizmetin Kapsamı
Gold Üyelik; satın alınan paketteki modül sayısı kadar modülü (hocayla birebir canlı online ders), derslerin kayıtlarına erişim, ders notları, ödevlere geri bildirim ve Platformun tüm içeriklerini kapsar. Silver Üyelik; oyunlar, ders içerikleri, araçlar, teori testleri ve yetenek sınavı hazırlığı gibi uygulama içeriklerini kapsar, hocayla ders içermez. Ücretsiz deneme dersi kişi başına bir kez verilir; Bağlamagram deneme dersi başvurusunu kabul etmeme hakkını saklı tutar. Platformdaki içerikler ve araçlar eğitim amacıyla "olduğu gibi" sunulur; Bağlamagram, içeriklerin her zaman eksiksiz ve hatasız olacağını, Platformun kesintisiz çalışacağını veya herhangi bir sınavda (yetenek sınavları dahil) belirli bir başarının elde edileceğini taahhüt etmez. Öğrencinin gelişimi, düzenli çalışmasına ve derslere katılımına bağlıdır.

5. Ücretler ve Ödeme
Güncel ücretler, satın alma ekranında ve internet sitesinde vergisiz fiyat ve vergiler dahil ödenecek tutar olarak ayrı ayrı gösterilir; Kullanıcının ödediği tutar vergiler dahil tutardır. Ödeme yalnız Shopier aracılığıyla kredi veya banka kartıyla yapılır; kart bilgileri Shopier'in güvenli ödeme sayfasına girilir ve Bağlamagram'a ulaşmaz; Shopier'in kullanım koşulları da geçerlidir. Paket veya üyelik, ödeme Shopier tarafından onaylandıktan sonra açılır. Bağlamagram ücretleri ileriye dönük olarak değiştirebilir; değişiklik, ödemesi yapılmış paketleri etkilemez. Silver Üyelik bir aylıktır ve kendiliğinden yenilenmez; süresi bitince Kullanıcı dilerse yeniden satın alır.

6. Ders Planlama, Erteleme ve Katılım
Ders günü ve saati, öğrencinin tercihleri ve hocanın uygunluğuna göre birlikte belirlenir; belirlenen haftalık ders saati öğrenci adına ayrılır. Öğrenci, dersini en geç ders saatinden 6 (altı) saat önce Platform üzerinden erteleme isteği göndererek veya hocasına yazarak erteleyebilir. Ders saatine 6 saatten az kala yapılan iptaller ile haber verilmeden derse katılınmaması hâlinde o ders yapılmış sayılır ve paketteki modül hakkından düşülür. Öğrencinin 15 dakikadan fazla gecikmesi hâlinde ders yapılmış sayılabilir; geç başlayan ders, ders saatinin sonunda biter. Öğrencinin internet bağlantısı, cihazı, kamerası veya mikrofonundan kaynaklanan aksaklıklar nedeniyle yapılamayan dersler yapılmış sayılır. Hocanın iptal ettiği veya hocadan ya da Bağlamagram'dan kaynaklanan nedenlerle yapılamayan dersler için telafi dersi planlanır; telafi mümkün olmazsa o dersin bedeli iade edilir.

7. Paket Geçerlilik Süresi
${PAKET_SURESI} Bu süre içinde kullanılmayan modül hakları, hocadan kaynaklanan aksaklıklar dışında sona erer ve bedeli iade edilmez. Sağlık sorunu gibi belgelenen haklı nedenlerle Bağlamagram süreyi uzatabilir.

8. Cayma Hakkı ve İade
Cayma hakkı, Mesafeli Satış Sözleşmesi'nde ve 6502 sayılı Tüketicinin Korunması Hakkında Kanun ile Mesafeli Sözleşmeler Yönetmeliği'nde belirtildiği şekilde kullanılır. Gold paketlerde Öğrenci, ödeme tarihinden itibaren 14 gün içinde ve ilk modül yapılmadan önce gerekçe göstermeden cayabilir; bu durumda ödenen tutarın tamamı iade edilir. Öğrencinin onayıyla ilk modülün yapılmasıyla hizmetin ifasına başlanmış olur ve Mesafeli Sözleşmeler Yönetmeliği'nin 15. maddesinin (h) bendi uyarınca cayma hakkı sona erer. Silver Üyelik, elektronik ortamda anında ifa edilen bir hizmet olduğundan, Kullanıcının onayıyla erişim açıldığı anda aynı maddenin (ğ) bendi uyarınca cayma hakkı kullanılamaz. İadeler, cayma bildiriminin ulaşmasından itibaren 14 gün içinde ödemenin yapıldığı yöntemle yapılır; kartla ödemelerde iade Shopier üzerinden karta yapılır ve bankaya yansıma süresi bankaya göre değişebilir.

9. Canlı Dersler, Ders Kayıtları ve Üçüncü Taraf Hizmetler
Canlı dersler, ders kayıtları, veri saklama, ödeme ve bildirimler üçüncü taraf hizmetlerle (ör. Whereby, Google Firebase, Google Drive, YouTube, Shopier) sağlanır; bu hizmetlerin kendi koşulları geçerlidir ve Bağlamagram bu hizmetlerdeki kesinti veya hatalardan sorumlu değildir. Canlı derslere katılmak için kamera ve mikrofon izni gerekir. Öğrenci, derslerin, kendisinin daha sonra tekrar izleyebilmesi amacıyla Bağlamagram tarafından kaydedilebileceğini ve bu kayıtların yalnız kendisine, velisine ve hocasına açık tutulacağını kabul eder. Öğrencinin dersleri kendisi kaydetmesi, ders kayıtlarını indirmesi veya üçüncü kişilerle paylaşması yasaktır.

10. Kullanıcı İçerikleri
Ödev kayıtları ve videoları, profil fotoğrafı, mesajlar ve Kullanıcının yüklediği diğer içeriklerin hukuki sorumluluğu Kullanıcıya aittir. Kullanıcı, bu içeriklerin eğitim hizmetinin sunulması amacıyla saklanmasına ve hocası tarafından dinlenip değerlendirilmesine izin verir. Bağlamagram, depolama alanını yönetmek için değerlendirilmiş eski ödev kayıtlarını ve videolarını silebilir; yazılı geri bildirimler ve puanlar saklı kalır. Hukuka veya bu Şartlara aykırı içerikler bildirimsiz kaldırılabilir.

11. Fikri Mülkiyet
Platformdaki yazılım, tasarım, oyunlar, karakterler, görseller, notalar, ders içerikleri, ders kayıtları ve yöntemler Bağlamagram'a veya lisans verenlerine aittir ve 5846 sayılı Fikir ve Sanat Eserleri Kanunu başta olmak üzere ilgili mevzuatla korunur. Kullanıcıya yalnız kişisel eğitimi için, devredilemez ve münhasır olmayan bir kullanım izni verilir. İçeriklerin izinsiz kopyalanması, indirilmesi, ekran görüntüsü veya ekran kaydı alınması, çoğaltılması, satılması, başka platformlarda paylaşılması veya ticari amaçla kullanılması yasaktır. Eğitim amacıyla yer verilen üçüncü kişilere ait eser ve kayıtların hakları sahiplerine aittir; hak sahiplerinin bildirimi üzerine içerik incelenir ve gerekirse kaldırılır.

12. Yasaklı Kullanımlar
Kullanıcı; Platformun kaynak kodlarını tersine mühendisliğe tabi tutmayacağını, güvenliğini aşmaya veya hizmeti aksatmaya çalışmayacağını, otomatik araçlarla veri toplamayacağını, sıralamaları ve sonuçları hileyle değiştirmeyeceğini, hocalara ve diğer kullanıcılara yönelik hakaret, taciz veya hukuka aykırı davranışlarda bulunmayacağını kabul eder.

13. Yapay Zekâ Hoca
"Hoca" bölümündeki yanıtlar yapay zekâ tarafından otomatik olarak üretilir; hatalı veya eksik olabilir ve Bağlamagram'ın ya da bir hocanın görüşünü yansıtmaz. Bu yanıtlar profesyonel, tıbbi, hukuki veya mali tavsiye değildir. Yapay zekâ ile kişisel veya hassas bilgilerinizi paylaşmayın.

14. Kişisel Veriler
Kişisel veriler, Kişisel Verilerin Korunması Aydınlatma Metni'nde açıklandığı şekilde 6698 sayılı Kişisel Verilerin Korunması Kanunu'na uygun olarak işlenir. Platformun iyileştirilmesi için kişiyi doğrudan tanımlamayan kullanım istatistikleri ve uygulama hata kayıtları toplanabilir.

15. Bildirimler ve İletişim
Kullanıcı; ders, ödeme, paket ve hesapla ilgili bildirimlerin uygulama bildirimi, Platform içi bildirim kutusu, e-posta, telefon veya WhatsApp üzerinden yapılmasını kabul eder. Kullanıcının kayıtlı e-posta adresine veya Platform içi bildirim kutusuna gönderilen bildirimler kendisine ulaşmış sayılır. Soru, talep, cayma ve şikâyetler için: ${SATICI.eposta} · ${SATICI.telefon}.

16. Sağlık ve Güvenlik
Hoparlör veya kulaklık kullanırken ses seviyesini işitmenize zarar vermeyecek düzeyde tutun; uzun pratiklerde duruşunuza dikkat edin ve ara verin. Çocukların Platformu ve cihazları veli gözetiminde kullanması önerilir.

17. Sorumluluğun Sınırlandırılması
Yürürlükteki mevzuatın izin verdiği en geniş ölçüde Bağlamagram; Platformun kullanılmasından veya kullanılamamasından doğan dolaylı zararlardan, kâr kaybından, veri veya içerik kaybından, cihaz arızalarından, internet ve elektrik kesintilerinden, üçüncü taraf hizmetlerin aksamasından ve Kullanıcının bu Şartlara aykırı davranışından doğan zararlardan sorumlu değildir. Her durumda Bağlamagram'ın toplam sorumluluğu, zarara yol açan olaydan önceki üç ay içinde Kullanıcının ödediği tutarla sınırlıdır. Bu sınırlamalar, kast ve ağır ihmal ile kanunen sınırlandırılamayan hâllerde ve tüketicinin kanundan doğan haklarında uygulanmaz.

18. Askıya Alma ve Fesih
Bu Şartlara aykırılık hâlinde Bağlamagram, Kullanıcıyı uyararak veya ağır aykırılıkta doğrudan hesabı askıya alabilir ya da kapatabilir. Kullanıcının aykırılığı nedeniyle sözleşmenin feshedilmesi hâlinde, kullanılmamış modüllerin bedeli, Bağlamagram'ın uğradığı zararlar mahsup edildikten sonra iade edilir. Kullanıcı dilediği zaman Platformu kullanmayı bırakabilir ve hesabının silinmesini isteyebilir; hesabın silinmesi, kullanılmamış derslerin iadesi anlamına gelmez, iade koşulları 7. ve 8. maddelere tabidir.

19. Mücbir Sebep
Doğal afet, salgın, savaş, grev, siber saldırı, altyapı ve enerji kesintileri, yetkili makam kararları gibi Bağlamagram'ın kontrolü dışındaki durumlarda yükümlülüklerin yerine getirilememesinden Bağlamagram sorumlu değildir; bu süre boyunca yapılamayan dersler için telafi planlanır.

20. Kayıtların Delil Niteliği
Taraflar, uyuşmazlık hâlinde Bağlamagram'ın elektronik kayıtlarının (sunucu ve veri tabanı kayıtları, ders ve ödeme kayıtları, e-posta ve mesaj yazışmaları) 6100 sayılı Hukuk Muhakemeleri Kanunu'nun 193. maddesi uyarınca delil olarak kullanılabileceğini kabul eder; Kullanıcının karşı delil sunma hakkı saklıdır.

21. Uygulanacak Hukuk ve Uyuşmazlıklar
Bu Şartlar Türkiye Cumhuriyeti hukukuna tabidir. Tüketici işlemlerinden doğan uyuşmazlıklarda, Ticaret Bakanlığınca her yıl ilan edilen parasal sınırlar dahilinde Kullanıcının yerleşim yerindeki veya işlemin yapıldığı yerdeki tüketici hakem heyetleri, bu sınırları aşan uyuşmazlıklarda tüketici mahkemeleri yetkilidir.

22. Bütünlük ve Hükümlerin Bağımsızlığı
Bu Şartlar; Ön Bilgilendirme Formu, Mesafeli Satış Sözleşmesi ve Kişisel Verilerin Korunması Aydınlatma Metni ile birlikte bir bütündür. Çelişki hâlinde satın alınan hizmet bakımından Mesafeli Satış Sözleşmesi uygulanır. Herhangi bir hükmün geçersiz sayılması diğer hükümlerin geçerliliğini etkilemez.

23. Yürürlük
Bu Şartlar, Kullanıcının hesap açtığı veya Platformu kullanmaya başladığı anda yürürlüğe girer. 18 yaşından küçük Kullanıcıların veli veya vasilerinin de bu Şartları okuyup kabul etmesi gerekir.`;

type Siparis = Partial<Record<'alici' | 'eposta' | 'telefon' | 'paket' | 'tutar' | 'yontem' | 'tarih', string>> | null | undefined;
const siparisAlani = (s: Siparis, alan: keyof NonNullable<Siparis>, bos = 'Sipariş sırasında belirtilir') => (s && s[alan] ? s[alan] : bos);

function hizmetBlok(s: Siparis) {
  return `Hizmet: ${siparisAlani(s, 'paket', 'Satın alma ekranında seçilen Gold içerik paketi veya Silver Üyelik')}
Toplam bedel (vergiler dahil): ${siparisAlani(s, 'tutar')}
Ödeme yöntemi: ${siparisAlani(s, 'yontem', 'Shopier aracılığıyla kartla ödeme')}
Sipariş tarihi: ${siparisAlani(s, 'tarih')}`;
}

function aliciBlok(s: Siparis) {
  return `Adı soyadı: ${siparisAlani(s, 'alici')}
E-posta: ${siparisAlani(s, 'eposta')}
Telefon: ${siparisAlani(s, 'telefon')}`;
}

const HIZMET_NITELIK = `Gold içerik paketi: Paketteki modül sayısı kadar modül; her modül hocayla birebir, yaklaşık 60 dakikalık canlı online bağlama/müzik dersi ile bu dersin kaydına erişim, ders notları ve ödevlere geri bildirimden oluşur; ayrıca Platformun tüm içerikleri. Modüller internet üzerinden görüntülü olarak yapılır; ders günü ve saati Alıcının tercihleri ve hocanın uygunluğuna göre birlikte belirlenir. ${PAKET_SURESI}
Silver Üyelik: Bir ay süreyle Platformun oyunlar, ders içerikleri, araçlar, teori testleri ve yetenek sınavı hazırlığı gibi uygulama içeriklerine erişim; hocayla ders içermez ve kendiliğinden yenilenmez.`;

const IFA = `Hizmet elektronik ortamda sunulur; fiziksel teslimat yoktur. Ödeme Shopier aracılığıyla kartla yapılıp Shopier tarafından onaylandığında paket veya üyelik Alıcının hesabında kendiliğinden açılır. Gold pakette ilk modül, ödemenin onaylanmasından sonra Alıcı ile birlikte belirlenen ilk uygun gün ve saatte yapılır.`;

const CAYMA = `Alıcı, ödeme tarihinden itibaren 14 (on dört) gün içinde, herhangi bir gerekçe göstermeden ve cezai şart ödemeden sözleşmeden cayabilir. Cayma bildirimi bu süre içinde ${SATICI.eposta} adresine e-posta ile veya ${SATICI.telefon} numarasına WhatsApp üzerinden yazılı olarak yapılır.
Cayma hakkının kullanılamayacağı hâller (Mesafeli Sözleşmeler Yönetmeliği md. 15):
a) Gold pakette, Alıcının onayıyla cayma süresi içinde ilk modülün yapılmasıyla hizmetin ifasına başlanmış olur; bu andan itibaren cayma hakkı kullanılamaz (md. 15/1-h).
b) Silver Üyelik, elektronik ortamda anında ifa edilen bir hizmettir; Alıcının onayıyla erişim açıldığı anda cayma hakkı kullanılamaz (md. 15/1-ğ).
Alıcı, satın alma sırasında hizmetin ifasına hemen başlanmasını onayladığını ve bu nedenle cayma hakkının yukarıdaki hâllerde sona ereceğini bildiğini kabul eder.
Cayma hakkı süresi içinde ve ilk modül yapılmadan cayılırsa ödenen tutarın tamamı, cayma bildiriminin Satıcıya ulaşmasından itibaren 14 gün içinde, ödemenin yapıldığı yöntemle iade edilir. Kartla ödemelerde iade Shopier üzerinden karta yapılır; iadenin hesaba yansıma süresi bankaya göre değişebilir.`;

const SIKAYET = `Alıcı, talep ve şikâyetlerini ${SATICI.eposta} adresine veya ${SATICI.telefon} numarasına iletebilir. Uyuşmazlık hâlinde, Ticaret Bakanlığınca her yıl ilan edilen parasal sınırlar dahilinde Alıcının yerleşim yerindeki veya işlemin yapıldığı yerdeki tüketici hakem heyetine, bu sınırları aşan uyuşmazlıklarda tüketici mahkemesine başvurabilir. Başvurular e-Devlet üzerinden Tüketici Bilgi Sistemi (TÜBİS) aracılığıyla da yapılabilir.`;

/** Ön Bilgilendirme Formu (siparis verilirse alanlar doldurulur) */
export function onBilgilendirme(siparis?: Siparis) {
  return `ÖN BİLGİLENDİRME FORMU
Sürüm: ${SURUM}

Bu form, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği uyarınca, mesafeli satış sözleşmesi kurulmadan önce Alıcıyı bilgilendirmek amacıyla hazırlanmıştır.

1. Satıcı
${saticiBlok()}

2. Alıcı
${aliciBlok(siparis)}

3. Hizmetin temel nitelikleri
${HIZMET_NITELIK}

4. Fiyat ve ödeme
${hizmetBlok(siparis)}
Ödenecek toplam bedel vergiler dahildir; satın alma ekranında ayrıca vergisiz fiyat gösterilir. Ödeme yalnız Shopier aracılığıyla kartla yapılır; kart bilgileri Shopier'in güvenli ödeme sayfasına girilir ve Satıcıya ulaşmaz. Ek ücret, kargo veya teslimat bedeli yoktur.

5. İfa (hizmetin sunulması)
${IFA}

6. Cayma hakkı
${CAYMA}

7. Şikâyet ve itirazlar
${SIKAYET}

8. Diğer
Alıcı, bu formu satın alma onayından önce okuduğunu ve Platformda elektronik ortamda kendisine sunulduğunu kabul eder. Bu formdaki bilgiler, Mesafeli Satış Sözleşmesi'nin ayrılmaz parçasıdır.`;
}

/** Mesafeli Satış Sözleşmesi (siparis verilirse alanlar doldurulur) */
export function mesafeliSatis(siparis?: Siparis) {
  return `MESAFELİ SATIŞ SÖZLEŞMESİ
Sürüm: ${SURUM}

Madde 1 · Taraflar
1.1 Satıcı
${saticiBlok()}
1.2 Alıcı
${aliciBlok(siparis)}
Alıcı 18 yaşından küçükse sözleşme, onun adına velisi veya vasisi tarafından kurulmuş sayılır.

Madde 2 · Konu
Bu sözleşmenin konusu, Alıcının Satıcıya ait Bağlamagram Platformu (mobil uygulama, web portalı ve baglamagram.com.tr) üzerinden elektronik ortamda satın aldığı aşağıdaki hizmetin satışı ve sunulmasına ilişkin olarak, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği uyarınca tarafların hak ve yükümlülüklerinin belirlenmesidir.

Madde 3 · Hizmet, bedel ve ödeme
${hizmetBlok(siparis)}
Hizmetin nitelikleri:
${HIZMET_NITELIK}

Madde 4 · İfa
${IFA}

Madde 5 · Ders planlama, erteleme ve katılım
Alıcı, dersini en geç ders saatinden 6 saat önce erteleyebilir. Ders saatine 6 saatten az kala yapılan iptaller ile haber verilmeden derse katılınmaması hâlinde ders yapılmış sayılır ve paketteki modül hakkından düşülür. Alıcının internet bağlantısı veya cihazından kaynaklanan aksaklıklar nedeniyle yapılamayan dersler yapılmış sayılır. Satıcıdan veya hocadan kaynaklanan nedenlerle yapılamayan dersler için telafi dersi planlanır; telafi mümkün olmazsa o dersin bedeli iade edilir.

Madde 6 · Cayma hakkı
${CAYMA}

Madde 7 · Tarafların yükümlülükleri
7.1 Satıcı, hizmeti bu sözleşmede ve Platformda belirtilen niteliklere uygun olarak sunmakla yükümlüdür.
7.2 Alıcı, kayıt ve satın alma sırasında verdiği bilgilerin doğru olduğunu, hesabını başkasıyla paylaşmayacağını, ders içeriklerini ve kayıtlarını çoğaltmayacağını ve üçüncü kişilerle paylaşmayacağını kabul eder.
7.3 Alıcı, derslere katılmak için gerekli cihazı, kamerayı, mikrofonu ve internet bağlantısını sağlamakla yükümlüdür.

Madde 8 · Paket geçerlilik süresi
${PAKET_SURESI} Bu süre içinde kullanılmayan modül hakları, Satıcıdan kaynaklanan aksaklıklar dışında sona erer. Belgelenen haklı nedenlerle Satıcı süreyi uzatabilir.

Madde 9 · Kişisel veriler
Alıcının kişisel verileri, Kişisel Verilerin Korunması Aydınlatma Metni'nde açıklandığı şekilde işlenir.

Madde 10 · Uyuşmazlıkların çözümü
${SIKAYET}

Madde 11 · Yürürlük
Alıcı, bu sözleşmeyi ve Ön Bilgilendirme Formu'nu okuyup elektronik ortamda onayladığı anda sözleşme kurulmuş olur. Sözleşmenin ve onayın kayıtları Satıcı tarafından saklanır ve Alıcı istediğinde kendisine e-posta ile gönderilir. Bu sözleşme, Kullanım Şartları ile birlikte uygulanır; çelişki hâlinde bu sözleşme esas alınır.`;
}

export const KVKK_AYDINLATMA = `KİŞİSEL VERİLERİN KORUNMASI AYDINLATMA METNİ
Sürüm: ${SURUM}

Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun ("KVKK") 10. maddesi uyarınca, veri sorumlusu sıfatıyla ${SATICI.unvan} ("Bağlamagram") tarafından hazırlanmıştır.

1. İşlenen kişisel veriler
Kimlik ve iletişim: ad, soyad, e-posta, telefon, profil fotoğrafı.
Eğitim: ders, paket ve devam bilgileri, ödevler, ödev ses ve video kayıtları, canlı ders kayıtları, pratik, oyun ve test sonuçları, hocanın notları ve geri bildirimleri, ders saati tercihleri.
Ödeme: ödeme bildirimleri, tutar, ödeme yöntemi ve sipariş numaraları. Kart bilgileri Bağlamagram tarafından işlenmez; kartla ödeme Shopier'in güvenli sayfasında yapılır.
Veli bilgileri: 18 yaşından küçük öğrencilerde velinin adı ve e-postası.
Cihaz ve kullanım: cihaz modeli, işletim sistemi, uygulama sürümü, bildirim anahtarları, uygulama hata kayıtları ve kişiyi doğrudan tanımlamayan kullanım istatistikleri.

2. İşleme amaçları
Üyelik ve hesabın oluşturulması ve yönetilmesi; derslerin planlanması ve verilmesi; ders kayıtlarının ve eğitim içeriklerinin öğrenciye sunulması; ödevlerin değerlendirilmesi; ödemelerin alınması ve doğrulanması; ders, ödeme ve paket bildirimlerinin gönderilmesi; talep ve şikâyetlerin yanıtlanması; Platformun güvenliğinin sağlanması, hataların giderilmesi ve hizmetin iyileştirilmesi; hukuki yükümlülüklerin yerine getirilmesi.

3. Hukuki sebepler
Kişisel veriler, KVKK'nın 5. maddesinin 2. fıkrası uyarınca; sözleşmenin kurulması ve ifası için gerekli olması (c), hukuki yükümlülüğün yerine getirilmesi (ç), bir hakkın tesisi, kullanılması veya korunması (e) ve temel hak ve özgürlüklere zarar vermemek kaydıyla meşru menfaat (f) hukuki sebeplerine dayanılarak işlenir.

4. Toplama yöntemi
Kişisel veriler; mobil uygulama, web portalı, internet sitesindeki formlar, canlı ders ve ödev yükleme araçları ve ödeme altyapısı üzerinden elektronik ortamda toplanır.

5. Aktarım
Kişisel veriler; hizmetin sunulması için öğrencinin hocasıyla ve 18 yaşından küçük öğrencilerde velisiyle; barındırma, veri saklama ve bildirim hizmeti aldığımız Google LLC (Firebase), canlı ders hizmeti aldığımız Whereby ve kartla ödeme altyapısı Shopier ile; yetkili kamu kurum ve kuruluşlarıyla, KVKK'nın 8. ve 9. maddelerine uygun olarak paylaşılabilir. Barındırma ve bazı hizmet sağlayıcıların sunucuları yurt dışında bulunduğundan, veriler KVKK'nın 9. maddesinde öngörülen şartlara uygun olarak yurt dışına aktarılabilir.

6. Saklama süresi
Kişisel veriler, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen saklama süreleri kadar saklanır; süre sonunda silinir, yok edilir veya anonim hâle getirilir. Ödev kayıtları ve videoları, depolama alanını yönetmek amacıyla değerlendirildikten sonra silinebilir.

7. Haklarınız
KVKK'nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini, silinmesini veya yok edilmesini isteme, bu işlemlerin aktarılan üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme ve kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz. Başvurularınızı ${SATICI.eposta} adresine iletebilirsiniz; başvurular en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.`;

/** Belge listesi: anahtar → { baslik, metin(siparis) } */
export const BELGELER = {
  kullanim: { baslik: 'Kullanım Şartları', metin: () => KULLANIM_SARTLARI },
  onbilgi: { baslik: 'Ön Bilgilendirme Formu', metin: (s?: Siparis) => onBilgilendirme(s) },
  mesafeli: { baslik: 'Mesafeli Satış Sözleşmesi', metin: (s?: Siparis) => mesafeliSatis(s) },
  kvkk: { baslik: 'KVKK Aydınlatma Metni', metin: () => KVKK_AYDINLATMA },
};
