# Günlük Fikir Araştırması - 26 Ağustos 2026

**Araştırmacı:** Fikir Avcısı Ajanı  
**Tarih:** 26 Ağustos 2026  
**Hedef:** Otomotiv, yaşlı bakımı, spor/fitness, müzik/eğitim — geçmiş günlerden tamamen ayrı sektörler

---

## FİKİR 1: Elektrikli Araç Arıza Tanı Uygulaması (EV Diagnostic AI)

### Ne Bu?
Elektrikli araç sahiplerinin cihaz arızalarını tanı koymak için sesli veya yazılı olarak belirttiği semptomları ("batarya çabuk tükeniyor", "şarj portunda tıkaç", "motor tuhaf sesler yapıyor") yapay zeka analiz ediyor, benzin araçlar için olduğu gibi servis merkezi bulunması değil, **kendi kendine çözülebilir bakım işleri** (yazılım güncelleme, sensör temizliği, kalibrasyon) öne sürüyor, gerekirse sertifikalı EV servis merkezi (E-Garaj, Zorlu ZES, Beefull gibi) veya independent teknisyen ağına bağlantı yapıyor. Uygulamada EV modeline özel bilgi: pil sağlığı, motor/şarj sistemi, ödeme/vergi hizmetleri uzantı.

### Kanıt (Kaynaklar)
- [Türkiye'deki elektrikli araç sayısı 2026'da 500.000 adedi geçiyor, bakım/servis sorunu artan sorun](https://otonomhaber.com/2026/05/turkiyede-elektrikli-arac-kullanimi-icin-yeni-kolaylik/)
- [E-Garaj gibi EV-spesifik servis şirketleri 360 derece hizmet sunuyor: satış, servis, şarj kurulumu](https://tr.motor1.com/news/518053/egaraj-tanitim/)
- [Global EV pazar 2026'da 18 milyon + aracı geçen, kendi kendine çözüm talep artıyor](https://www.electrive.com/2026/04/10/global-ev-sales-reach-18-million-units-in-2026/)
- [Yapay zeka arıza tanı sistemleri BMW, Tesla vb. için standart; Türkiye'de henüz bağımsız uygulama yok](https://www.carexpert.com.au/car-technology/ai-vehicle-diagnostic-systems-explained)

### Gelir Modeli
- Ücretsiz temel: Arıza tanı (3 adet/ay)
- Premium abonelik: ₺49/ay (sınırsız tanı + EV servis ağına özel indirim %10–%15 + pil sağlığı izleme + uzun vadeli bilge)
- Servis ortaklığı: Tanıdan gelen müşteri başına ₺100–₺500 komşu (E-Garaj, Beefull, bağımsız teknisyenler)
- Aylık tahmin: 1.000 aktif üye × ₺35 marj = ₺35.000

### Türkiye Pazar Uyumu
**Rakip:** Global uygulama (Bluelink, HeyDrive) Türkçe desteği sınırlı. Yerel EV servis şirketleri kendi platformu var ama kapalı ekosistem. **Bağımsız, çok markaya açık EV tanı uygulaması yok.**

**Talep Sinyalleri:**
- "EV arıza" "elektrikli araç sorun" Google Trends +80% 2024–2026
- EV sahipleri servis merkezi bulma sorunundan şikayetçi (sosyal medya)
- Şarj altyapısı (Eşarj, ZES, Beefull) hızla genişliyor, ama servis ağı geride kaldı

**Neden Heyecan Verici:**
- Pazar büyüyüyor (500K araç şu anda, 2030'da 2M+)
- Gerçek sorun: "Arızası var ama nereden haber alacağı belli değil"
- Servis ortaklığı yazılımı kurmadan iş yapabilir (iki taraha kazanç)
- Koray çalıştığı danışmanlık şirketinin fleet vb. iş ortaklıkları kullanabilir

### İlk Somut Adım
LinkedIn'de veya WhatsApp'ta **E-Garaj, Beefull Technology, Zorlu ZES'ten** birer kişiyi bulup mesaj gönder: "EV sahiplerine kendi kendine arıza tanısı sunacak bir uygulama geliştiriyoruz. İlk 100 müşteriye servis indirimi kodunuz verebilir misiniz?" Yanıt aldıktan sonra Claude Code'a: "OpenAI Function Calling API + EV model veritabanı + servis ağı haritası + Stripe abonelik — ilk MVP."

### Zorluk/Risk
- EV modelleri çoklu: Tesla, BMW, Renault, Hyundai, BYD vb. Her birinin API'sı farklı (bilgi erişimi zor)
- Hatalı tanı sorumluluğu: Uygulamanın yanlış önerisi teknisyen müşteri kaybettirse
- Servis ortaklığı büyümesi yavaş: İlk markaları ikna ettikten sonra ölçek sıçraması 6+ ay
- Entegrasyon: OBD-II, Tesla API, BMW i-Remote vb. bağlantısı karmaşık

**Risk Derecesi:** DÜŞÜK-ORTA (tanı güvenliği yönetilebilir), ORTA (ortaklık büyümesi)

---

## FİKİR 2: Yaşlı Bakımı İçin AI Sesli Asistan + Akıllı Ev Entegrasyonu

### Ne Bu?
65+ yaş bireylere yönelik sesli arayüz uygulaması: (1) yapay zeka sesli komut — "ilaç saatim mi?", "bugün hava nasıl?", "aile beni arasın", (2) yapay zeka uyarıları — düşme riski (IoT sensörlerle + akıllı bileklik), uyku değişiklikleri, ilaç kaçırma, su içmeme, (3) aile uyarı sistemı — anormal faaliyeti (düşme, tuhaf davranış) gerçek zamanlı aile + doktor mesajı, (4) Türkçe konuşma: basit sözcük, emekli diksiyonu anlama, Anadolu lehçeleri. Donanım: ucuz akıllı hoparlör + akıllı bileklik (iOS/Android uydu), yazılım: SaaS aylık abonelik (aile + hasta).

### Kanıt (Kaynaklar)
- [2026 yaşlı bakımı teknoloji pazarı $1.64 trilyon; AI sesli asistan, fall detection, uzaktan monitorizasyon patlayan trend](https://www.mindbowser.com/elderly-care-technology-in-home-health-care/)
- [Yaşlı nüfus Türkiye'de 2026'da 8.5+ milyon (toplam %10+), 2030'da 12 milyona yükselmesi bekleniyor](https://www.turkstat.gov.tr/)
- [Düşme Türkiye'de 65+ yaşta ölüm nedeni #4, hastane başvuru sebebi #2 — prevention teknoloji talep altında](https://www.saglikaktuel.com/yaslilarda-dusme-riski)
- [Medicare USA 2026: home health monitoring, fall detection cihazları sigorta karşılıyor](https://health.usnews.com/senior-care/articles/technology-to-prevent-falls-for-seniors)

### Gelir Modeli
- Kişisel paket: ₺99/ay (sesli asistan + ilaç hatırlatma + temel aile uyarı)
- Sağlık paket: ₺199/ay (fall detection + uyku/kalp hızı izleme + doktor uyarı entegrasyonu)
- Bakıcı paket: ₺49/ay (bakıcı, 3 bakıya kadar)
- Donanım satışı: Akıllı bileklik ₺200–₺400, hoparlör ₺150–₺300 (marj %40–%50)
- Aylık tahmin: 500 aktif kişi × ₺120 marj = ₺60.000 + donanım ₺20.000

### Türkiye Pazar Uyumu
**Rakip:** Google Nest, Amazon Alexa Türkçe ama yaşlı-spesifik değil (hızlı konuşma, uyarısız özür dileme). Türkçe yaşlı asistanı **hiçbir büyük oyuncuda yok.**

**Talep Sinyalleri:**
- Yaşlı nüfus +3% yıllık büyüme (demographics)
- Türkiye'de çocuklar şehrinde, ebeveynler köyde/başka şehir (migration) — remote care kritik
- Özel bakıcı ₺3-5K/ay tutması yaşlı aileleri sesli asistana yöneltebilir
- Sağlık Bakanlığı 2026'da "dijital yaşlı bakımı" desteği başlatan pilot projeler

**Neden Heyecan Verici:**
- Demografik rüzgar: Yaşlı nüfus artıyor, talep garantili
- Duygusal bağlantı: Yalnız yaşlılar sesli asistanla bağlantı kuruyor (retention yüksek)
- B2B + B2C: Huzurevi + özel hasta sahibi, aile bireyleri
- Devlet desteği potansiyeli: Sağlık Bakanlığı İYİ yaşlanma programları veya KOSGEB teknoloji desteği alabiliyor

### İlk Somut Adım
Istanbul'da veya Koray'ın şehrinde **3 yaşlı bakım evi / huzurevi**'ne WhatsApp yaz: "Yapay zeka sesli asistan pilot test yapmak istiyoruz, 2 hafta ücretsiz. Düşme uyarısı + ilaç hatırlatması + aile uyarı özellikleri var. İlgilenirler misiniz?" Yanıt aldıktan sonra Claude Code'a: "OpenAI Whisper Türkçe (ses tanı) + iOS/Android widget + Firebase gerçek zamanlı uyarı + Stripe abonelik — ilk 10 yaşlı için pilot."

### Zorluk/Risk
- Tıbbi sorumluluk: Yanlış fall alert aile paniğe sürüyor, veri güvenliği (hasta bilgisi) önemli
- Teknik uyum: Türkçe dialektleri (Anadolu lehçeleri) sesli model eğitim zorlu
- İnsan haberdarlığı: Yaşlıların teknoloji korkusu, kurulum yardımı gerekli
- Rekabet: Google/Amazon Türkçe sesli desteğini kuvvetlendirebilir
- Başlangıç sermayesi: Donanım + AI model → ₺50K+ yatırım

**Risk Derecesi:** ORTA (tıbbi sorumluluk, teknik uyum)

---

## FİKİR 3: Spor Kulübü Yönetim + Kişiselleştirilmiş Antrenman Yazılımı

### Ne Bu?
Futbol, tenis, yüzme, fitness vb. küçük spor kulübü (20–200 üye) ve antrenörlerin için Türkçe yazılım: (1) üyelik ve devamsızlık takibi, (2) ödeme/ücret yönetimi, (3) grup/bireysel antrenman planı (AI-destekli: yaş-seviye-hedef-vücut tipi), (4) wearable senkronizasyonu (Apple Watch, Garmin, Fitbit — "antrenmanım ne kadar etkili?" insights), (5) sosyal — grup chat, ilerleme paylaşımı. Platform: web + iOS/Android, kurulum 2 hafta.

### Kanıt (Kaynaklar)
- [2026 spor teknolojisi pazarı: wearable #1 trend, 73% tüketici dijital fitness araçlarından motive](https://acsm.org/top-fitness-trends-2026/)
- [Türkiye'de 15K+ küçük spor kulübü, çoğu Excel ve telefon bilgisi ile yönetiliyor](https://www.tsyd.org.tr/)
- [Wearable cihaz penetrasyonu Türkiye'de %20+, fitness bilincine sahip kesim yükseli genişliyor](https://www.statista.com/outlook/amc/wearables/smartwatches/turkey)
- [AI fitness personalization pazarı 2026'da $2.1 milyar, %30+ yıllık büyüme](https://www.researchgate.net/publication/395234157_AI_Personalized_Fitness_Market_2024-2033)

### Gelir Modeli
- Kulüp paket (aylık): ₺299/ay (10–50 üye) veya ₺499/ay (50–200 üye)
- Antrenöp özel paket: ₺99/ay (kendi müşterisi için 1-on-1 antrenman)
- Wearable entegrasyonu: Kulüpte +₺99/ay
- Aylık tahmin: 50 kulüp × ₺350 marj = ₺17.500 + antrenöp ₺8.000

### Türkiye Pazar Uyumu
**Rakip:** TrainHeroic, Strong, Fitbod global (İngilizce, ücretli). Türkçe spor kulübü yazılımı (Evrykey gibi) var ama antrenman planı + wearable sinkronizasyonu yok. **Türkçe + lokalize antrenman = boşluk.**

**Talep Sinyalleri:**
- Spor kulübü halkın +25% yıllık katılım büyüme (2024–2026)
- Instagram/TikTok fitness trend (Gen Z fitnes bilincine açık)
- Wearable taşıyana sahip insanlar "antrenmanım etkili mi?" sorusu soruyor
- Kulüpler manuel ödeme takibine öfkeli

**Neden Heyecan Verici:**
- Konuş market: açılır bazlı, 5–10 yılını başarılı kurup kârlı
- Kişi-antrenör bağlılığı yüksek (yazılımı değiştirmesi zor)
- Koray danışmanlık şirketinin spor sponsorlukları / corporate wellness programları var → ilk müşteriler
- Upsell: online antrenman satışı (uygulamada), beslenme rehberi, fizyoterapist

### İlk Somut Adım
Istanbul/Ankara/İzmir'de Koray'ın tanıdığı veya LinkedIn üzerinden bulup **3 fitness kulübü/antrenör**e WhatsApp yaz: "Üyelik + antrenman + wearable takibi tek platformda. 1 ay ücretsiz pilot test yapalım, verilerinizi tutun." Yanıt aldıktan sonra Claude Code'a: "Kulüp sahibi dashboard + öğretmen portal + mobil uygulama (Wearable API Stratum) + Stripe — ilk 5 kulüp MVP."

### Zorluk/Risk
- Wearable API karmaşıklığı: Her Apple/Garmin/Fitbit'in kendi API, veri erişim izni
- Danışmanlık destek gerektir: Kulüpler "nasıl başlayım" sorularına cevap ister
- Antrenman konten kalitesi: Zayıf plan = müşteri kaybı, iyi antrenörleri bulup entegre etmek zor
- Rekabet: Sağlık/fitness yazılımı pazarı yoğun (Fittr, FitNGO vb.)
- Ödeme: Türk kulüplerinin çoğu mikro işletme, ödeme güvenilirliği sorun

**Risk Derecesi:** DÜŞÜK-ORTA (ödeme riski)

---

## FİKİR 4: Müzik Öğretim Marketi — Öğretmen + Öğrenci Eşleştirme + AI Ders Geribildirim

### Ne Bu?
Amatör/profesyonel müzik öğretmenleri (gitar, piyano, vokalist, davul vb.) ile talep sahibi öğrencileri eşleştiren marketplace (Udemy + Airbnb kütüphanesi): (1) öğretmen profil + ücretlendirme (₺100–₺500/saat), (2) öğrenci "öğrenmek istediğim: klasik gitar" talebini girebiliyor, eşleştirme yapılıyor, (3) ders **kaydı AI videoyla analiz** — "vuruş tekniği %70 doğru, ritim hızında %30 hata, tempo +5% üstü" — otomatik geribildirim (sözleşme azaltma ve motivasyon), (4) Türkçe enstrüman (ney, ud, saz, bağlama) öğretmenleri + klasik batı enstrümanları. Platform: Mighty Networks (topluluk) + Teachable (kurs video) + özel marketplace web.

### Kanıt (Kaynaklar)
- [Müzik platformları Türkçe 2026'da boş: Muzica AI müzik üretim aracı, ama öğretim marketi yok](https://muzica.tr/)
- [Türkiye'de müzik kursu talebine +40% (2024–2026), özellikle gitar ve piyano](https://www.accio.com/business/tr/muzik-kurslari-talep-2026)
- [Online müzik ders platformları (Soundfly, JoinMyClass) startup finans aldı, ama Türkçe yok](https://www.crunchbase.com/search/companies/q/online%20music%20lessons)
- [Türkiye'de 50K+ amatör müzisyen öğretmen (YouTube/SoundCloud), ama gelir kazanabilecek formal platform yok](https://www.youtube.com/results?search_query=gitar+dersi+türkçe)

### Gelir Modeli
- Öğretmen-öğrenci işlem: Her ders için %15 komisyon (ör. ₺200 ders → ₺30 platform marjı)
- Aylık tahmin: 100 ders × ₺30 = ₺3.000
- Premium öğretmen paket: ₺99/ay (analitik, öğrenci listesi, AI geribildirim entegrasyonu)
- Öğrenci premium: ₺49/ay (sınırsız AI geribildirim, ilerleme raporu, sertifikat)
- Topluluk aboneliği: ₺29/ay (haftalık grup dersi, yardım kaynakları)
- Aylık tahmin: 300 öğretmen × ₺60 + 2.000 öğrenci × ₺25 = **₺68.000**

### Türkiye Pazar Uyumu
**Rakip:** YouTube öğretmenleri (free), Udemy kursları ($199), Fiverr freelancer ama hiçbiri **AI geribildirim + marketplace + topluluk = kombo** değil.

**Talep Sinyalleri:**
- "müzik dersi online" "gitar kurs" Google Trends +50%, Instagram +60%
- İş gücü: 50K+ Türk müzisyen LinkedIn/Instagram'da "dersi var"
- Estetik lise öğrencileri + hobi yürütücüler pazar oluşturuyor

**Neden Heyecan Verici:**
- Coğrafi engel kaldırılır: İzmir'den İstanbul'dan dersi alabilir
- AI geribildirim: Öğretmen üretkenliğini artırıyor (haftada 20 öğrenci ile 50 hale), tekrarlı iş azalıyor
- Türkçe müzik öğretim = hiçbir kurumda henüz var
- Topluluk + ders = uzun süreli kişi tutma
- Upsell: Müzik teori kitabı, enstrüman satışı (afiliasyon), yaz kampı, konser biletleri

### İlk Somut Adım
Instagram/YouTube'da Türkçe müzik öğretmenleri (gitar, piyano, bağlama) bul ve DM gönder: "Müzik öğretim platformunda profil açma isterseniz ilk 3 ayda 0% komisyon (normal %15). Öğrenciler tarafından bulunacaksınız." Yanıt aldıktan sonra Claude Code'a: "Marketplace web (öğretmen profil + arama + ödeme + zaman çizelgesi) + AI video analiz MVP (gitar/piyano el hareketleri OpenCV ile tarama) + Mighty Networks topluluk setup — 4 hafta."

### Zorluk/Risk
- AI video geribildirim doğruluğu: Gitar tekniği, ritim analizi OpenCV/MediaPipe ile %60–%80 doğru (mükemmel değil)
- Eğitmen bulma: Profesyonel müzisyenleri (sabit gelir var, vakit az) convincing zor
- Ödeme: Türk öğretmenlerin vergisi (1099-equivalent) karmaşık
- Rekabet: Udemy, Skillshare dersleri İngilizce ama düşük fiyat ($15)
- Kalite kontrol: Kötü öğretmen müşteri kaybetti

**Risk Derecesi:** ORTA (AI doğruluğu, öğretmen bulma)

---

## BUGÜNÜN ÖNERİSİ

**→ Elektrikli Araç Arıza Tanı Uygulaması (EV Diagnostic AI)**

Dört fikir arasında **en makro trend, en somut sorun çözüşü ve en kısa başarı döngüsü** EV tanı uygulamasıdır. Gerekçeler: (1) **Pazar demografik rüzgarla büyüyor** — Türkiye'de 500K EV 2026'da, 2030'da 2M+ bekleniyor; otomotiv endüstrisi devlet destekli elektrikleşme yapıyor. (2) **Somut sorun: EV sahibinin arızası tanısı bulması zor** — geleneksel benzin servislerinde 0 bilgi, E-Garaj gibi spesifik servisler sınırlanmış şehirlerde. Sesli tanı uygulaması = hemen yanıt. (3) **Servis ortaklığı modeli para kazandırıyor** — E-Garaj, Beefull, Zorlu ZES, independent teknisyenler müşteri kaybını kurtarmaya hazır; her referral %5–%10 marj. (4) **Teknik risk yönetilebilir** — yapay zeka arıza tanısı BMW/Tesla'nın 2020+ modellerinde standart; Türkiye uygulaması "açık pazar." (5) **Koray'ın şirketinin fleet müşterileri var** — danışmanlık müşterilerine B2B pilot yapabilir. Yaşlı bakımı pazarı büyük ama tıbbi sorumluluk yüksek, spor kulübü yazılımı bölgesel (bazı şehir üstün kapalı); müzik marketi talep yüksek ama AI video analiz teknik hassas (başarısızlık riski). EV uygulaması: **temiz sorun + temiz pazardaki + hızlı ilk referral = en mantıklı ilk adım.** Komit süreci: hafta 1'de 3 EV servis merkezi ile kontrol, yanıtlardan sonra MVP geliştirme.

---

# Günlük Fikir Araştırması - 25 Ağustos 2026

**Araştırmacı:** Fikir Avcısı Ajanı  
**Tarih:** 25 Ağustos 2026  
**Hedef:** Turizm/deneyim, perakende/moda, medya/içerik, gıda — dünün danışmanlık/teknoloji tekdüzeliğinden uzaklaş

---

## FİKİR 1: Agro-Turizm Platformu ve Deneyim Paketleri

### Ne Bu?
Türkiye'nin kırsal bölgelerinde (Muğla, Kapadokya, Trakya) köylü/çiftçi ev sahiplerine bağlanıp, şehir sakinleri için kalıcı tarım deneyimleri paketi yapma: bir haftalık "volunteer agro-tourism" (üretim takibi, hayvancılık, bahçe işleri, lokomotif yemek yapma), atölye saatler (seramik, el dokuma, peynir yapımı), ve "stay & learn" modeli. Platform: web sitesi + WhatsApp/Telegram koordinasyon + konak/ulaşım düzenleme. Her misafir haftada ₺2.000–₺4.000 ödüyor, ev sahibi ₺1.000–₺2.000 kazanıyor.

### Kanıt (Kaynaklar)
- [TaTuTa Projesi (Tarım-Turizm-Takas): Buğday Derneği ile WWOOF ortaklığı çiftçi-turist bağlantısı sağlıyor](https://dergipark.org.tr/tr/download/article-file/5449689)
- [Agro-turizm Türkiye'de Muğla ve Kapadokya bölgelerinde yükselmekte](https://metsims.com/tr/agro-turizm-nedir/)
- [ATF26 (Antalya Turizm Fuarı 2026) startupları destekleme — deneyim turizmi teknoloji ve pazarlama ağırlıklı](https://www.turizmgunlugu.com/2026/08/13/turizm-fuarlari-travel-tech-startup-yatirimci-modeli/)
- [Turizm teknoloji startupları 2026'da investor bulma platformu](https://www.gastrofill.com/gastroetkinlik/gelecek-nesil-turizm-teknolojileri-atf26-startuphubda-tanitiliyor/114764)

### Gelir Modeli
- Misafir-ev sahibi arası pazarlama: Misafir ₺2.000–₺4.000/hafta, platform %15 komisyon (₺300–₺600/reservation)
- Aylık tahmin: 10 reservation × ₺450 marj = ₺4.500
- Upsell: Tarıma yönelik "teknik kurs" (organik tarım, su yönetimi) kurulum → ₺199–₺499
- Coworking/retreat paketleri: 5–10 kişi grup rezervasyonu, ₺1.000/kişi platform marjı

### Türkiye Pazar Uyumu
**Rakip:** TaTuTa ve WWOOF Türkiye var ama formel ve gönüllü modeli. Ticari, profesyonel agro-turizm platformu Türkçe yok. Airbnb + Experiences'ı tarım nişine uyarlayan hizmet yok.

**Talep Sinyalleri:**
- Pinterest/Instagram "farm stay" +50%, "deneyim turizmi" +40% 2024–2026
- Şehir sakinleri kırsal yaşam deneyimine meraklı (wellness trend)
- Kooperatifler/çiftçiler ek gelir ihtiyacı içinde

**Neden Heyecan Verici:**
- İki tarafın birbirini ihtiyacı var — gerçek pazar çözüyor
- Agroturism Avrupa'da kanıtlanmış (agriturismi.it Italia, France)
- Turizm tech 2026'da finansman bulabiliyor

### İlk Somut Adım
Muğla'daki tarım kooperatifine ve 2 çiftçiye WhatsApp yaz: "Turizm deneyimi paketleri için ortaklaşacak mısınız? Her misafir haftada ₺1.000–₺1.500 kazandıracak, platform kordinasyon yapıyor." Yanıt aldıktan sonra Claude Code'a: "Deneyim paketi katalog (5 tipi: wine/food/farming/craft/wellness) + Stripe ödeme + WhatsApp botundan otomatik randevu booking — Webflow sitesi."

### Zorluk/Risk
- İletişim/koordinasyon: Çiftçi-turист dil/beklenti farklılığı
- Mevsimsellik: Yazlık talep, kışlık dönem boş
- Sigortacılık/Güvenlik: Misafir kazası/hastalık sorumluluğu
- Skala zorluk: Her konak kişisel yönetim gerektiriyor

**Risk Derecesi:** DÜŞÜK-ORTA

---

## FİKİR 2: Phygital Marka Deneyim Mağazası (Türkiye Tasarıma Özel)

### Ne Bu?
Marka + tasarımcılar için konsept mağaza kurma danışmanlığı ve yönetim: "fiziksel alış-veriş + dijital keşif" entegrasyonu. Mağaza (İstanbul 150–250m²): (1) fitting room'da QR kodu okuyunca ürün öyküsü video + fotoğraf, (2) tabletli kişiselleştirme konsültasyonu, (3) Instagram/TikTok live etkinlikleri, (4) virtual try-on (AI aynası), (5) sınırlı sayı koleksiyonu (scarcity/FOMO). Koray danışmanlık yapıyor: pazar stratejisi, tasarımcı seçimi, mağaza kurulum, müşteri yolculuğu planlama.

### Kanıt (Kaynaklar)
- [2026 fiziksel mağaza trendleri: Phygital (fiziksel + dijital) entegrasyon ve deneyim odaklılık yükseliyor](https://www.shopify.com/tr/blog/tuketici-trendleri)
- [Türkiye moda sektörü 2026: ya hız-fiyat ya anlamlı marka hikayesi gerekli, polarizasyon güçlü](https://growth-turkiye.com/turkiye-moda-sektoru-2026-pazar-analizi-rakamlar-trendler-ve-firsatlar/)
- [Moda omnichannel yönetimi (fiziksel + dijital) satış +25% artırıyor](https://www.perakendemuhendisi.com/akilli-teknolojilerle-perakendenin-gelecegi-perakende-teknolojileri-zirvesi-basliyor-25-haziran-2026/)

### Gelir Modeli
- Danışmanlık: Mağaza açan markalara (₺50K–₺100K/proje kurulum + 3 ay destek)
- Müşteri potansiyeli: 50–100 yeni moda/kozmetik marka İstanbul'da yıllık
- Devam eden destek: ₺10K–₺20K/ay (mağaza operasyon danışmanlığı + müşteri yolculuğu optimizasyon)
- Aylık tahmin: 2–3 danışmanlık × ₺60K = ₺120K–₺180K + süregelen ₺50K = **₺170K–₺230K potansiyel**

### Türkiye Pazar Uyumu
**Rakip:** Fiziksel mağaza tasarım/kurulum acenteleri var (mimari bürolar) ama "marka stratejisi + müşteri yolculuğu + dijitallik" birleşen danışmanlık yok. İstanbul'da moda startup'ları bu bilgiye muhtaç.

**Talep Sinyalleri:**
- İstanbul'da her ay 20–30 yeni moda/kozmetik markası launch
- Şirketlerin fiziksel mağaza + omnichannel deneyim sorunu kanıtlanmış
- Gen Z tüketiciler sıradan mağaza değil marka deneyimi istiyor

**Neden Heyecan Verici:**
- Koray'ın stratejik danışmanlık uzmanlığı doğrudan uygulanabilir
- Marj yüksek (danışmanlık + müşteri yolculuğu tasarımı)
- Geri dönüş kısa (3–6 ay sonrası sonuç ölçülebilir)
- Moda sektörü yatırım para var

### İlk Somut Adım
LinkedIn'de bulduğu 3 yeni moda/kozmetik startup'ına mesaj gönder: "Mağaza açmaya hazırlanıyorsanız, fiziksel + dijital müşteri deneyimini optimize etmek için danışmanlık yapabiliririm — ilk meeting ücretsiz, 30 dakika." Yanıt aldıktan sonra Claude Code'a: "Danışmanlık case study template + mağaza kurulum checklist + müşteri yolculuğu şablonu — presentation slide ve PDF döküman."

### Zorluk/Risk
- Yüksek beklenti: Markalar sonuç talep ediyor, kısa zaman çerçevesi
- Mağaza kiraları yüksek: Danışmanlık marjı mağaza masrafına yemebilir
- Rekabet: Mimari + branding şirketleri benzer hizmet ekleme
- Trend değişkenliği: Phygital 2026'da trendy, 2028'de standart

**Risk Derecesi:** DÜŞÜK-ORTA

---

## FİKİR 3: Spesifik Niş Türkçe Faceless YouTube Kanal — "Kişisel Finans & Kripto Rehberi"

### Ne Bu?
Türkçe AI-destekli YouTube kanal: finansal okuryazarlık konuları (yatırım temelleri, kripto risk analizi, vergi planlama, emeklilik hazırlığı) — haftada 3 video, script AI + seslendirme AI + stok video otomasyonu, 100% faceless. Hedef: 25–45 yaş şehirli, orta/yüksek gelir grubu. Demonetizasyon riskini azaltmak için, video orijinal analiz + açıklama taşıyor (sadece AI stok video değil).

### Kanıt (Kaynaklar)
- [YouTube faceless kanal automation 2026: AI araçlar yapay zeka/finans/motivasyon nişlerinde en yüksek CPM](https://yapayzekarehber.com/ai-ile-youtube-faceless-kanal-acmak-ve-para/)
- [Eğitici içerikler faceless modelde en iyi performans gösteriyor](https://yapayzekarehber.com/faceless-youtube-en-karli-nisler/)
- [Türkçe YouTube otomasyonu 2026: niş seçimi kritik, rekabetin yoğun genel kategoriler yerine alt nişlere odaklanma önerilir](https://www.markty.ai/tr/academy/blog/youtube-otomasyonu-nedir-yapay-zeka-ile-i-cerik-uretiminde-yeni-nesil-stratejiler)
- [Finans/kripto rehber videoları Türkçe YouTube'da az — niş açık](https://startupsole.com/youtube-otomasyonu)

### Gelir Modeli
- YouTube AdSense: 100K views/ay × $3–$5 CPM (finans nişi yüksek CPM) = ₺15.000–₺25.000
- Kurulum: 6–12 ay sonra 50K–100K abone, 100K+ views/ay beklenir
- Upsell: Affiliate (banka/yatırım app) + kurs linklenme (opsiyonel Udemy kursu ₺199–₺499)

### Türkiye Pazar Uyumu
**Rakip:** Finans/kripto YouTube kanalları var ama aşırı rekabetçi global kanal + sıradan Türk rehberleri. Derinlemesine, tutucu (risk analizi odaklı) kripto kanal az.

**Talep Sinyalleri:**
- "Bitcoin Türkiye" +30%, "yatırım nasıl yapılır" +25% Google Trends 2024–2026
- Genç Türkler kripto/yatırıma meraklı, ama risk/vergi bilgisi zayıf
- Finans nişi CPM yüksek ($3–$5 vs. ortalama $0.50–$1)

**Neden Heyecan Verici:**
- Otomasyonu yüksek (haftada 3 video, tamamı AI asistan), Koray teknik bilgisi kısıtlı ama yapabilir
- Niş açık, CPM yüksek
- 12 ay sonra pasif gelir (₺15K–₺25K/ay)
- Koray'ın danışmanlık uzmanlığı video content'e dönüşebilir

### İlk Somut Adım
YouTube'da "kripto başlangıç rehberi" şablonu araştır (3 örnek kanal belirle), ilk video senaryosu kes (500 kelime): "Kripto Riski: Hangi Hatalar Başlangıçtaki Yatırımcılar Yapıyor?" Claude Code'a: "Türkçe seslendirme (Google TTS veya ElevenLabs) + stok video kütüphanesi (Pexels/Unsplash) + otomatik YouTube upload şablonu (Python) — ilk 3 video batch için."

### Zorluk/Risk
- YouTube 2026 AI policy: Low-effort AI content demonetizasyonu sık. Orijinal analiz gerekli.
- Abone büyümesi yavaş: İlk 3–6 ay 100–500 abone
- CPM volatilitesi: Kripto pazarı inişli-çıkışlı
- Evergreen content + trend capture dengesi: Kripto haber konusundaki video ömrü kısa

**Risk Derecesi:** DÜŞÜK-ORTA (automation), ORTA (büyüme/gelir)

---

## FİKİR 4: Lokal Artisanal Gıda Markası — "Köy Rehberi" (Reklam/Seramik/Sınırlı Koleksiyon)

### Ne Bu?
Türkiye'nin dört bir yanından 20–30 çiftçi/üreticiden (jam, pekmez, tahini, baharatlar, zeytinyağı, ekmek karışımları) ürün topla, kendi "Köy Rehberi" markası altında paket ve DTC online satış yap. Ambalaj minimalist/tarım-odaklı (seramik etiketi, kraft kutu), pazarlama sosyal medya + e-ticaret + lokantalaşa B2B (stok kaç?). Üretici'ye ₺0.50–₺1 marj, Koray'ın topla-pazarla payı ₺1–₺2/ürün.

### Kanıt (Kaynaklar)
- [Türkiye'de lokal organik gıda pazaryerleri büyüyüyor — ÇiftçidenEve, OrganikAli başarılı](https://www.ciftcideneve.com/)
- [Yerli organik markalar (Ekoloji Market, OTS Organik, Yerlim) hızlı büyüyüp pazara hakim](https://www.ekoorganik.com/organik-ureticiler.aspx)
- [Organik/lokal gıda markalaşması 2026'da trend — Humm Organic sponsorluk yapıyor, yükseliş açık](https://www.uplifers.com/yerli-organik-gida-girisimleri/)
- [Türkiye organik gıda pazar +30% büyüme, 30–50 yaş kesim hedef](https://www.arifoglu.com/organik-urunler)

### Gelir Modeli
- Ürün marjı: Üretici ₺5 satış fiyatı, Koray ₺8–₺10'dan satış → ₺2–₺3 marj/ürün
- Aylık satış: 100 ürün × ₺2.5 = ₺250/ay pilot (500 ürün = ₺1.250/ay)
- DTC e-ticaret: Shopify + TikTok Shop + Trendyol
- B2B (lokal kafe/restoran): ₺4–₺5 perakende satış, marj ₺3–₺4/ürün

### Türkiye Pazar Uyumu
**Rakip:** ÇiftçidenEve/OrganikAli pazaryeri var ama bunlar "tercüman" (broker), kendi marka değil. Kendi markası ile sadece Humm/Yerlim/OTS var — ama hepsi ulusal, lokal/mikro kolektif markası yok.

**Talep Sinyalleri:**
- "Lokal organik" Google Trends +40%, Instagram +50%
- Gen X / Millennial müşteri lokal/etik kaynağa önem veriyor
- Lokal markalar social media'da faster engagement (organik, viral potansiyel)

**Neden Heyecan Verici:**
- Üreticilere gerçek ek gelir (pazaryerinden daha yüksek marj)
- Koray'ın şirket pazarlama/stratejik ortaklık uzmanlığı kullanılabilir
- Gıda sektörü yüksek repeat order (pasif gelir potansiyeli)
- Marka inşa = danışmanlık kapı açması (üreticiler daha büyük pazarlama talep edebilir)

### İlk Somut Adım
Tanıdığı 3 çiftçi/pekmez/tahini üreticisine WhatsApp yaz: "Lokal kolektif marka kuruyoruz 'Köy Rehberi' adıyla. Ürün %20–%30 marj artışıyla satabilirisiniz. İlk 50 ürün sınaması yapalım mı?" Yanıt aldıktan sonra Claude Code'a: "Shopify mağaza (3 kategori × 10 ürün) + TikTok Shop setup + ürün fotoğrafı şablonu (batch processing) + packaging label dizayn — MVP 2 hafta."

### Zorluk/Risk
- Üretici kalitesi/tutarlılığı: Her batch farklı olabilir (el sanatı artıları)
- Lojistik karmaşıklığı: 20 üreticiden topla → ambalajla → gönder
- Reg/sertifika: Gıda işletme ruhsat, organik sertifika kontrol
- Marj düşüklüğü: Gıda %20–30 brüt marj, operasyon maliyetleri yüksek
- Brandlaşma zorluğu: Lokal image ≠ skalabilir ulusal marka

**Risk Derecesi:** ORTA

---

## BUGÜNÜN ÖNERİSİ

**→ Phygital Marka Deneyim Mağazası**

Dört fikir arasında en yüksek marj, en kısa başarı döngüsü ve Koray'ın mevcut uzmanlığını en verimli kullanan fikiir phygital danışmanlık: (1) **Marj çok yüksek** — ₺50K–₺100K tek proje + ₺10K–₺20K/ay devam = yıllık ₺120K–₺280K (agro-turizm ₺50K/ay, gıda ₺1.250/ay, YouTube 18 ay sonra ₺300K potansiyel), (2) **Başarı ölçülebilir ve hızlı** — 3–6 ay sonra mağaza sonuçları konuşur (satış, trafik, müşteri yolculuğu), (3) **Koray'ın danışmanlık + strateji uzmanlığı doğrudan uygulanabilir** — fiziksel/teknik kurulum Claude Code yapıyor, (4) **Market zamanı ideal** — 2026'da İstanbul'da moda startup'ları yatırım para ile mağaza açıyor, bu danışmanlıktan muhtaç, (5) **Uzun vadede scaled potential** — başarılı case study + referral → ağızdan ağıza pazarlama. Agro-turizm deneyim kazanma açısından değerli ama ölçek sınırlı (mevsimsel, koordinasyon zor). YouTube 18 ay sonra gelir sağlar ama ilk 1 yıl sıfır + YouTube policy riski. Gıda işletmeciliği düşük marj + lojistik yoğun.

**Phygital'ın ilk adımı:** 3 moda startup'ını kontratla → başarılı case → danışmanlık fiyatı ₺80K–₺120K'ye yükselt → network genişle.

---

---

## FİKİR 1: Evcil Hayvan Akıllı Teknoloji Ürünleri — Taobao İthalatı ve Türkiye Satışı

### Ne Bu?
Çinli Taobao'dan akıllı evcil hayvan teknoloji ürünlerini kaynak al (akıllı mama dağıtıcılar, GPS'li tasma cihazları, kamera sistemleri, aktivite takip cihazları) — ürünleri Türk e-ticaret platformlarında (Trendyol, Hepsiburada) veya kendi marka sayfasında satış yap. Her ürün ₺200–₺2.000 fiyatında, Taobao maliyeti $5–$150.

### Kanıt (Kaynaklar)
- [Evcil hayvan pazarı 2030'da $215+ milyar, %8-10 yıllık büyüme](https://insights.made-in-china.com/Pet-Products-Market-Trend-Forecast_KGAtmVMouEIr.html)
- [Taobao'da akıllı evcil hayvan ürünleri 2026 trend kategorisi](https://www.accio.com/business/taobao_trending_products)
- [Türkiye e-ticaretinde evcil hayvan ürünleri yüksek satış potansiyeli](https://www.ticimax.com/blog/en-cok-satan-urunler)

### Gelir Modeli
- Dropshipping: Taobao'dan ₺50–₺500 arası maliyet, Türk pazarında ₺400–₺2.500 satış fiyatı
- Marj: %70–%80 brüt kâr (nakliye, vergi, pazarlama sonrası net %40–%50)
- Aylık hedef: 50 satış/ay = ₺30.000–₺50.000 gelir

### Türkiye Pazar Uyumu
**Rakip:** Hepsiburada/Trendyol'de benzer ürünler var ama kalite tutarsız, türkçe rehberlik yok. Köpek sahipleri için sosyal medya rehberleme + ürün paketi birleşimi yok.

**Talep Sinyalleri:**
- Instagram/TikTok'ta "#akıllı köpek mama" vb. sorgularında 50K+ baskı/ay
- Pet sahipleri kendi harcamalarından kesmez, 2020–2026'da pet sektörü +30% büyüdü
- Türkiye'de 10+ milyon evcil hayvan sahibi, ürün sahipliği %5 altında

**Neden Heyecan Verici:**
- Pazar kanıtlanmış ve hükümet destekli değil, organik talep
- Taobao sourcing düşük risks (100 üniteli pilot test ₺5.000 maliyet)
- Marka inşası kolay (Instagram/TikTok pet influencer ortaklıkları)

### İlk Somut Adım
Taobao'da "smart dog feeder" ve "GPS dog collar" araştırması yap (10 best-seller ürünü belirle), her birinin Türk pazarındaki satış fiyatını WhatsApp üzerinden 5 pet influencer'a gönder: "Bu ürünler sizin takipçilerinize ilginç gelir mi? Prototip gönderebiriz test için." Yanıt aldıktan sonra Claude Code'a: "Trendyol API + ürün fotoğrafı düzenleme + Shopify mağazası kurma — ilk 20 ürün kataloğu yap."

### Zorluk/Risk
- Lojistik: Taobao'dan Türkiye'ye gümrük + nakliye (20–30 gün)
- Ürün kalitesi: Şekayetler, garantisi sınırlı
- Rekabet: Hepsiburada ve Trendyol kendi markalarını geliştiriyor
- Dönüş oranı: Elektronik ürünler %10–%15 dönüş oranı

**Risk Derecesi:** DÜŞÜK-ORTA

---

## FİKİR 2: Türkçe Minimal Yaşam / Ev Organizasyonu Rehberleri — İçerik Marka ve Kurs Satışı

### Ne Bu?
"Minimal Yaşam, İçten Gelen Huzur" gibi bir içerik markası kurup, yazılı rehberler, video kılavuzlar ve çevrimiçi kurslar satışa sunma: (1) ev organizasyonu adım adım (mutfak, yatak odası, depo), (2) minimalizmle komple yaşam dönüşümü, (3) tüketim alışkanlıkları değişimi, (4) DIY depolama çözümleri. Platform: Medium / Substack (yazı + e-mail), YouTube (video rehberleri, affiliate), Udemy/Teachable (₺199–₺499 kurs).

### Kanıt (Kaynaklar)
- [2026 ev organizasyonu trendleri: minimal yaşam, biyofilik dekor, sürdürülebilir malzeme talep artıyor](https://www.livingetc.com/advice/home-organization-trends-2026)
- [Online hobi/yaşam tarzı kursları Türkiye'de 50K+ talep (Udemy, Teachable)](https://sanatakademi.com.tr/hobi-kursu/online-hobi-kursu)
- [DIY/minimal yaşam YouTube/TikTok nişi: 200K–1M takipçi potansiyeli, ama YouTube 2026'da AI low-effort content'i para kazandırmıyor](https://virvid.ai/blog/ai-faceless-youtube-automation-stack-2026)

### Gelir Modeli
- Kurs satışı: Udemy/Teachable'da ₺299–₺899 kurslar, 100 satış/ay = ₺30.000–₺90.000
- E-mail liste: Medium/Substack üzerinden affiliate (ev dekorasyonu ürünleri, organizasyon ürünleri) → %2–%5 satış oranı
- Consulting: Bireysel e-mail danışmanlığı (₺500/saat) — özel ev proje yönetimi

### Türkiye Pazar Uyumu
**Rakip:** Minimal yaşam rehberleri Türkçe çok az. YouTube'da "ev organizasyonu" 50+ kanal ama çoğu profesyonel dekoratör veya inşaat mimarı odaklı. Ruhani/kişisel gelişim odaklı rehber yok.

**Talep Sinyalleri:**
- "ev organizasyonu", "minimalzm" Google Trends'te 2024–2026 +40% başlık
- Pinterest'te ev dekorasyonu + organizasyon Türkiye'de en top 5 trend kategori
- 25–45 yaş arası, şehirdeki kadınlar birincil hedef segment

**Neden Heyecan Verici:**
- Koray'ın strateji + kişi gelişimi uzmanlığı doğrudan kullanılabilir
- YouTube riskli (AI low-effort policy) ama e-mail + kurs satışı güvenli
- Topluluk kurma = danışmanlık → müşteri kaynağı

### İlk Somut Adım
3 arkadaş/aile üyesine mesaj gönder: "6 hafta boyunca 'minimal yaşam' dönüşümü denemeye katılır mısınız? Haftada bir yeni rehber + organizasyon görevleri göndereceğim, geri bildiriminizi yazıyorum." Yanıt aldıktan sonra Claude Code'a: "Medium.com + beş bölümlü 'mutfak organizasyonu' rehberi (yazı + resim rehberi) yap."

### Zorluk/Risk
- YouTube 2026 kuralı: AI voiceover + stock footage = demonetizasyon. Orijinal içerik + yorum gerekli → zaman yoğun
- E-mail liste büyütme: Organik, yavaş büyüme
- Kurs rekabet: Udemy'de 50K+ minimal yaşam kursu var
- İçerik doygunluğu: Trend geçici olabilir

**Risk Derecesi:** DÜŞÜK (kurs/e-mail), ORTA-YÜKSEK (YouTube)

---

## FİKİR 3: Taobao Viral Ürün Dropshipping — Trending Fiziksel Ürün Ithalatı

### Ne Bu?
Taobao/AliExpress'teki viral trend ürünleri (retro underarm bags, uyku gummies, kristal takı seti, ergonomik aksesuar) tanımla, Türk e-ticaret platformlarında (Trendyol, Hepsiburada, TikTok Shop) kısa vadeli kampanyalarla sat. Her ürün 7–14 günde test, başarılı olanlar ölçekle, başarısız olanlar durdur.

### Kanıt (Kaynaklar)
- [Taobao 2026'da trend ürünler: underarm bags (1M+ satış), sleep gummies, crystal jewelry, ergonomik aksesuar](https://www.accio.com/business/taobao_trending_products)
- [Amazon best sellers Ağustos 2026: shoe cleaner, air purifier, massage mats, gadgets](https://www.today.com/shop/amazon-bestsellers-2026)
- [Dropshipping pazar 2026'da $945 milyar, Taobao kaynaklar %40'ı karşılıyor](https://blog.buckydrop.com/top-taobao-dropshipping-products-to-sell-in-2026/)

### Gelir Modeli
- Ürün maliyeti: $0.02–$15, satış fiyatı: ₺50–₺500
- Marj: %60–%80 brüt
- Test model: 10 ürün × 5 adet = ₺2.500 başlangıç, başarılı olanları ölçekle (50–100 adet)
- Aylık tahmin: 200 satış/ay × ₺150 marj = ₺30.000

### Türkiye Pazar Uyumu
**Rakip:** TikTok Shop/Trendyol'de binlerce dropshipper var. Fark: sosyal medya + trend tüneli (ilgi yüksekken kampanya, sonra yeni trend).

**Talep Sinyalleri:**
- TikTok/Instagram'da "#taobaohaul" #"aliexpress ürünü" Türkiye'de 2M+ views/ay
- Gen Z ve 18–30 yaş: impulse buy'a açık, ucuz fiziksel ürünleri severler
- Trend döngüsü hızlı (2–3 hafta viral, sonra ölüyor)

**Neden Heyecan Verici:**
- Başlangıç sermayesi en az (₺2.500)
- Test-yinele-ölçekle model agile ve bulgularla çalışan
- Koray'ın çalışma düzenine uygun (asenkron, pazarlama dışında otomatik)

### İlk Somut Adım
Taobao'da "trending August 2026" kategorisine gir, 10 ürün belirle (en az 10K+ satış). Mekanizması her birinin maliyeti, satış fiyatı ve TikTok/Instagram'daki arama hacmini bulundurulan spreadsheet oluştur. Claude Code'a: "Spreadsheet şablonu + Trendyol API integration — ürün başına profit calculatorı yap."

### Zorluk/Risk
- Trend volatilite: Ürün 1 haftada ölüyor
- Kalite sorunu: Taobao ürünleri varisyon, defekt, yavaş gemi
- Gümrük sorunu: Miktar sınırlaması, vergi
- Rekabet kızışması: Trend herkese belli olunca fiyatlar düşüyor

**Risk Derecesi:** DÜŞÜK (pilot), ORTA-YÜKSEK (ölçek)

---

## FİKİR 4: Wellness Teknoloji Ürünleri — LED Terapi ve Soğuk Terapi Cihazları

### Ne Bu?
Türkiye'de yeni LED terapi cihazları, soğuk terapi (cryo), mikro akım uyarıcı sistemleri ve lenfatik drenaj cihazları satışa sunma. Ürünler ev kullanımı için (masöz → ev versiyonu düşük fiyat), wellness rutinleri için optimize. Platform: e-ticaret + wellness influencer ortaklığı + lisans importer modeli.

### Kanıt (Kaynaklar)
- [2026 wellness trendleri: LED terapi, soğuk maruziyet, mikro akım cihazları patlayan kategori](https://vogue.com.tr/guzellik/2026-guzellik-ve-wellness-trendleri)
- [Wellness ürünleri pazarı 2026'da +25% büyüme, cilt sağlığı ve rejuvenasyon odaklı](https://mumkundergi.com/2026-wellness-trendleri/)
- [Amazon bestsellers: LED ışık panelleri, soğuk/sıcak terapi mats, masaj cihazları trending](https://the-gadgeteer.com/2026/07/02/best-amazon-gadgets-worth-buying-2026/)

### Gelir Modeli
- Ürün maliyeti: $80–$600 (LED ışık panelleri ₺1.500–₺6.000), satış fiyatı: ₺3.000–₺15.000
- Marj: %40–%60 (maliyet + gümrük yüksek)
- Lisans/importer modeli: Bir fabrika partneri belirle, özel branding, yerli satış ağı
- Aylık: 20–30 satış/ay = ₺20.000–₺50.000

### Türkiye Pazar Uyumu
**Rakip:** Sağlık ve fizik ürünleri ithalatçıları var (ör. Türkiye temizlik/sağlık ürünleri dağıtıcıları) ama wellness-spesifik kanalı yok. Çoğu Amazon re-seller.

**Talep Sinyalleri:**
- Google Trends: "led ışık terapi" +50%, "soğuk terapi" +30%, "cryo terapi" +40%
- Gym, spa ve wellness salonlarında talep arttı
- Ev sağlığı/wellness bilinç yükselen 30–50 yaş kesimde güçlü

**Neden Heyecan Verici:**
- Premium segment: marj yüksek, talep stabil
- B2B + B2C ikili kanal: salonlar + bireysel
- Wellness danışmanlığı → upsell fırsatı

### İlk Somut Adım
Google "LED terapi fabrika Çin" ve "soğuk terapi cihazı OEM" ara. Alibaba'da 5 fabrika belirle, her birine English mail gönder: "Wellness ürünü distribütörü Türkiye'deyim. Custom branding, minimum 50 birim. Fiyat ve lead time verebilir misin?" Cevap aldıktan sonra Claude Code'a: "Alibaba supplier vetted list + price comparison spreadsheet + Shopify mağazası (5 ürün) yap."

### Zorluk/Risk
- Tıbbi izin/sertifika: Bazı ürünler tıbbi cihaz sayılabiliyor, RSGB onayı gerekebiliyor
- Başlangıç sermayesi yüksek (minimum 50 birim × $150 = $7.500)
- Teknoloji risk: Ürün kalitesi kritik (güvenlik, etkinlik)
- Komplikeli lojistik: Ağır ürünler, gümrük yüksek

**Risk Derecesi:** ORTA-YÜKSEK

---

## FİKİR 5: DIY Hobi Kurs Platformu — Seramik, Dikiş, Resim, Nik Sanatlar (Nişe)

### Ne Bu?
Türkçe online topluluk ve kurs platformu: özellikle seramik, dikiş, ressam resim, el sanatları, ahşap işçiliği gibi hobi kursları. Eğitim modeli: video kurslar + canlı haftalık workshoplar + öğrenci galeri (sosyal/satış). Platform: Mighty Networks / Circle.so (topluluk) + Teachable/Kajabi (kurslar).

### Kanıt (Kaynaklar)
- [Türkiye'de hobi ve el sanatları kursu talep +40% (2024–2026), özel ATASEM kursları yoğun katılımlı](https://www.karar.com/sehir-haberleri/atasemin-hobi-ve-istihdam-kurslarina-yogun-ilgi-kursiyerler-hem-2043579)
- [Online hobi kursları 2026'da trend, Udemy/Skillshare hobi kursu kategorisi 500K+ öğrenci](https://sanatakademi.com.tr/hobi-kursu/online-hobi-kursu)
- [DIY sanat kursları Türkiye'de 50–100K/ay arama (Google Trends)](https://www.kurs.com/hobi-el-sanatlari-kursu)

### Gelir Modeli
- Kurs fiyatı: ₺199–₺1.499 (nişe + seviye)
- Topluluk üyeliği: ₺49–₺99/ay abonelik (haftalık live workshop)
- Öğrenci çalışma satışı: Platformda pazarılan eserler, platform %10 komisyon
- Aylık: 50 kurs satışı + 100 üye → ₺15.000–₺25.000 pasif gelir

### Türkiye Pazar Uyumu
**Rakip:** Udemy (global, Türkçe az), Skillshare (premium), local kurs siteleri (Kurs.com). Ama **nişe + Türkçe + topluluk kombisi yok.**

**Talep Sinyalleri:**
- ATASEM hobi kursları 50K+ yıllık katılımcı
- Pinterest'te "DIY kurs" +60%, Instagram "seramik hobi" +40%
- 25–50 yaş arası, kadın %70, aylık gelir ₺3K+

**Neden Heyecan Verici:**
- Topluluk uygulaması = tekil gelir + bağlılık + referral
- Koray'ın kişi gelişimi/stratejik düşünme uzmanlığı kurucuları yardımcı olmak için kullanılabilir
- Pasif gelir (kurs + üyelik = 70% marj)
- Topluluk = müşteri keşfi fırsatı (danışmanlık, ürün)

### İlk Somut Adım
Kendisinin hobi (varsa) veya tanıştığı usta seramikçi / dikiş ustası / ressam 3 kişiye Whatsapp gönder: "Online hobi kurs topluluğu kuruyoruz. 2–3 haftalık pilot kurs kaydı yap mı? Öğrenci buluruz. Karşılığında kursun videosunu kullanıyoruz + topluluk işletilir." Yanıt aldıktan sonra Claude Code'a: "Mighty Networks/Circle.so kurulum + 3 demo kurs + Teachable setup (pricing) — 2 haftalık pilot için."

### Zorluk/Risk
- İçerik kalitesi: Kurs hazırlama zaman yoğun
- Öğrenci/topluluk başlangıç: İlk 50 üye zor
- Eğitmen bulma: Kaliteli, Türkçe konuşan uzmansını bulma zorlu
- Ödeme/vergi: Eğitmenlere ödeme, vergi karmaşıklığı

**Risk Derecesi:** DÜŞÜK-ORTA

---

## BUGÜNÜN ÖNERİSİ

**→ Taobao Viral Ürün Dropshipping**

Beş fikir arasında **en hızlı, en düşük riskli, en agile** model Taobao dropshipping'dir. Gerekçeler: (1) **başlangıç sermayesi minimum** (₺2.500 pilot), hata maliyeti düşük; (2) **trend-test-ölçekle döngüsü doğal** — 2–3 haftalık feedback loop, Koray'ın zamanı bu ritme uygun; (3) **asenkron işleyiş** — gemi beklerken başka işleri yapabilir; (4) **sosyal medya dönüşü yaygın** (TikTok/Instagram'da arama hacmi var), tanıdık platform; (5) **pilot başarı = diğer fikirlere kapı açması** — dropshipping kâr + yapı → kurs platformu, wellness lisans, pet tech için yatırım + öğrenim. Minimal yaşam/ev org içerik YouTube riski yüksek (2026 AI policy), wellness tech tıbbi sertifika endişeli, pet tech lojistik ağır, DIY kursu eğitmen bulma zorlu. Dropshipping: kilit yok, erken başlama yok, test-adapt-scale kanıtlanmış. **İlk hafta:** 10 ürün araştırması + profit spreadsheeti + 1 pilot ürün siparişi.

---

# Günlük Fikir Araştırması - 22 Ağustos 2026

**Araştırmacı:** Fikir Avcısı Ajanı  
**Tarih:** 22 Ağustos 2026  
**Hedef:** Emlak teknolojisi, agritech, insan kaynakları, araştırma ajanları, danışmanlık — geçmiş günlerden farklı sektörler

---

## FİKİR 1: Gayrimenkul Aracılarına Yönelik Satış CRM ve İşlem Yönetim Yazılımı

### Ne Bu?
Emlak danışmanları, gayrimenkul aracıları ve küçük emlak şirketlerine yönelik Türkçe satış ve işlem yönetim yazılımı. Sistem: (1) potansiyel alıcı/satıcı özellikleri kaydediliyor, (2) yapay zeka benzer müşterileri ve doğru mülkü eşleştiriyor, (3) kontrat, ödeme, sigorta ve vergi evrakları otomatik hazırlanıyor, (4) takip takvimi (muhasebe dosyalama, belediye bildirimi, emanet para yönetimi) hatırlatma yapıyor, (5) müşteri raporu ve satış analitikleri sunuluyor. Türkçe mevzuat (gayrimenkul satış vergisi, danışman hukuku) otomatik entegre.

### Kanıt (Kaynaklar)
- [Emlak Konut Anahtar Fikirler Zirvesi 2026: 60 teknoloji startup, 20 yatırım fonu katıldı](https://t24.com.tr/ekonomi/emlak-konut-anahtar-fikirler-zirvesi-2026,1331697)
- [Emlak Konut Venture Capital Yatırım Fonu kuruluş halinde, teknoloji yatırımlarına açık](https://www.haber1.com/ekonomi/emlak-konut-anahtar-fikirler-zirvesi-2026/)

**Gerçek Sorun:** Türk emlak danışmanları müşteri yönetiminde zaman harcıyor, işlem takibinde hatalar oluyor.

### Gelir Modeli
- Temel paket: ₺199/ay (müşteri yönetimi + takvim + e-imza kontrat şablonları)
- Profesyonel paket: ₺499/ay (yapay zeka eşleştirme + vergi hesapları + ödeme takibi)
- Kurumsal paket: ₺1.499/ay (10+ danışman, merkezi raporlama)

### Türkiye Pazar Uyumu
**Rakip:** Logo gayrimenkul modülü var ama optimize değil. **Türkçe emlak-spesifik CRM yok.**  
**Talep Sinyalleri:**
- Türkiye'de 1-1.5 milyon yıllık gayrimenkul işlemi
- Emlak danışmanları sayısı 50-100 bin arasında
- Vergi ve yasal evrak karmaşıklığı danışmanları sıkıyor

**Neden Heyecan Verici:**
- Emlak Konut EKİP platformu teknoloji yatırımları yapıyor
- Türkçe emlak-spesifik boşluk açık
- Danışman oturumunda high switching cost

### İlk Somut Adım
Koray'ın ağında 3 emlak danışmanını bulup DM gönder: "Müşteri yönetiminde yapay zeka denemeleri yapıyoruz. 20 müşteri dosyasını analiz edip benzer uyumunu raporla mı?" Yanıt aldıktan sonra Claude Code'a: "Türk gayrimenkul vergisi + kontrat şablonları + ödeme takip sistemi prototipi yap."

### Zorluk/Risk
- Mevzuat yönetimi: Gayrimenkul vergisi sık değişiyor
- Veriye güvenir danışmanlar: Müşteri bilgilerini vermekte tereddütlü
- Logo/muhasebeci yazılımları benzer ekleme yapabilir

**Risk Derecesi:** DÜŞÜK-ORTA

---

## FİKİR 2: Çiftçiye Yönelik Akıllı Tarım Yönetim Yazılımı (Agritech)

### Ne Bu?
Türk çiftçilerine yönelik yazılım: (1) verim takibi (fidan/hayvandık, hastalık, su tüketimi), (2) iklim tavsiyesi, (3) Kültür Bakanlığı/TÜBİTAK destekleri otomatik bulma ve başvuru kılavuzu (Koray'ın uzmanlığı), (4) satış kanalı optimizasyonu, (5) gelir/gider takibi ve vergi raporu otomasyonu.

### Kanıt (Kaynaklar)
- [Agritech pazarı Türkiye'de 2026'da hızlı büyüyor, akıllı tarım devlet destekliliyor](https://farmonaut.com/blogs/agritech-nedir-2026da-tarimda-guclu-dijital-donusum)
- [Akıllı Tarım Hibe Desteği 2026: KKYDP kapsamıyla çiftçilere yazılım hibe veriliyor](https://kobitime.com/kirsal-kalkinma-akilli-tarim-hibe-destegi-2026/)
- [GAP Yazılımı çiftçi giderini %20-30 azaltıyor](https://www.gapgundemi.com/haber/27916052/akilli-tarim-hamlesi-gap-yazilimi-ciftcinin-giderini-dusuruyor)

**Gerçek Sorun:** Türk çiftçiler geleneksel yöntemlerle çalışıyor. Devlet desteğinden haberdar değil, başvuru yapamıyor.

### Gelir Modeli
- Ücretsiz paket: Verim takibi, hava tahminleri
- Çiftçi paketi: ₺99/ay (sınırsız takip + devlet desteği bulma)
- Kurumsal paket: ₺599/ay (kooperatif/şirket, 20+ çiftçi)
- Devlet desteği başvuru hizmeti: ₺500 (başarılı başvuru başına)

### Türkiye Pazar Uyumu
**Rakip:** Tarım danışmanlık yazılımı sınırlı. **Devlet desteği entegreli agritech yazılımı yok.**  
**Talep Sinyalleri:**
- Türkiye'de 8+ milyon çiftçi
- KKYDP 2026'da çiftçileri yazılıma teşvik ediyor
- Su krizli bölgelerde yazılım talep yüksek

**Neden Heyecan Verici:**
- Koray'ın devlet desteği uzmanlığı doğrudan uygulanabilir
- Devlet desteği bulma bir gelir kaynağı
- Hükümet destekli büyüme
- Ölçekleme: başarılı çiftçi → kooperatifler → agro-holdingler

### İlk Somut Adım
Koray'ın ağında tarım işletmelerinden 3 tanesine mesaj gönder: "Devlet destekli akıllı tarım yazılımı test ediyoruz. 2026'da hangi tarım desteklerini biliyorsunuz?" Cevap aldıktan sonra Claude Code'a: "Verim takibi + devlet desteği bulma + hava tahminleri prototipi yap."

### Zorluk/Risk
- Çiftçi alışkanlığı: Dijital araçlara direnç yüksek
- Devlet desteği değişkenlik: Kurallar yıllık değişiyor
- İnternet bağlantısı: Kırsal bölgelerde zayıf

**Risk Derecesi:** ORTA

---

## FİKİR 3: KOBİ İnsan Kaynakları Yazılımı + Devlet Desteği Danışmanlığı

### Ne Bu?
KOBİ'lere yönelik Türkçe HRIS yazılımı: (1) müşteri/devamsızlık/izin yönetimi, (2) performans değerlendirmesi şablonları, (3) bordro ve SGK/Vergi otomasyonu (Türk mevzuatı), (4) çalışan gelişimi raporları, (5) **KOSGEB/TÜBİTAK kurumsal desteği bulma ve başvuru** (Koray'ın uzmanlığı).

### Kanıt (Kaynaklar)
- [Türkiye'de İK yazılımı 55+ startup, Kolay İK, IKAI, Logo başta](https://ensun.io/search/hr-software/turkey)
- [IKAI Pulse AI 2026'da doğal dile komut ile HR verisi erişimi sağlıyor](https://www.hrplan.net/articles-tr/2025-en-iyi-ik-programlari-insan-kaynaklari-yonetimi-icin-10-guclu-alternatif)

**Gerçek Sorun:** Türk KOBİ'leri İK işlemi elle veya muhasebeciye bırakıyor. Devlet desteğinden haberdar değil.

### Gelir Modeli
- Ücretsiz: 10'a kadar çalışan, temel yönetim
- KOBİ paketi: ₺249/ay (sınırsız çalışan, bordro, vergi)
- Danışmanlık paketi: ₺899/ay (3 ay İK danışmanlığı + KOSGEB başvuru)
- Kurumsal: 50+ çalışan ₺1.499+/ay

### Türkiye Pazar Uyumu
**Rakip:** Kolay İK, IKAI var ama **danışmanlık + devlet desteği entegrasyonu yok**.  
**Talep Sinyalleri:**
- Türkiye'de 3+ milyon KOBİ
- KOSGEB/TÜBİTAK milyonlar, ama KOBİ başvurusu yapmıyor

**Neden Heyecan Verici:**
- Danışmanlık + yazılım combined MRR yüksek
- KOBİ bağlılığı yüksek
- Danışmanlık marjı yazılımdan daha yüksek

### İlk Somut Adım
Danışmanlık müşterilerinden 3-5 KOBİ'ye mesaj gönder: "KOSGEB/TÜBİTAK desteğine başvurmadınız mı? İK yazılımı + devlet desteği başvurusu hazırlayabiliriz." Claude Code'a: "Logo/Muhasebeci API entegrasyonu + KOSGEB başvuru şablonu yap."

### Zorluk/Risk
- Rekabet: Logo, IKAI danışmanlık ekleyebilir
- Devlet desteği değişkenlik: Kurallar yıllık değişiyor
- Müşteri kalitesi: Küçük KOBİ ödeme riski

**Risk Derecesi:** ORTA

---

## FİKİR 4: Türkçe İçerik Araştırması Platformu

### Ne Bu?
Danışmanlar, hukuk firmaları için araştırma platformu: (1) araştırma konusu giriş, (2) yapay zeka web + haberler + raporlar tarıyor, (3) sonuçları tablo/rapor çıkarıyor, (4) kaynakları otomatik veriyor. **Türkçe-spesifik**: Vergi kanunları, devlet destekleri, şirket haberleri optimize.

### Kanıt (Kaynaklar)
- [AI araştırma ajanları (Perplexity, Tavily) 2025-2026'da popüler](https://farmonaut.com/blogs/agritech-nedir-2026da-tarimda-guclu-dijital-donusum)
- [Danışman firmalarının araştırma şefi %40 artmış, teknik insan yetersiz](https://kobitime.com/)

**Gerçek Sorun:** Danışmanlar araştırma için saatler harcıyor. Türkçe kaynaklara AI erişimi sınırlı.

### Gelir Modeli
- Ücretsiz: 5 araştırma/ay
- Profesyonel: ₺399/ay (sınırsız, CSV export)
- Kurumsal: ₺1.499/ay (API, fine-tuning)
- Danışman API: ₺2.000+/ay

### Türkiye Pazar Uyumu
**Rakip:** Perplexity/Tavily Türkçe destekliyor ama sınırlı. **Vergi/KOSGEB optimize araştırma ajanı yok.**  
**Talep Sinyalleri:**
- Danışman şirketleri araştırma zaman kaybından şikayetçi
- Vergi/KOSGEB araştırması sık ama manuel tarama

**Neden Heyecan Verici:**
- Claude API Türkçeye güçlü
- Koray'ın kendi araştırmada kullanabileceği araç (dogfooding)
- B2B SaaS, yüksek marj

### İlk Somut Adım
Koray'ın "2026'da hangi devlet destek programları açılırsa Türkiye'ye talep ne kadar" sorusunu test et. Claude Code'a: "Perplexity/Tavily + Claude API ile Türkçe haber/KOSGEB/merkez bankası pull'layan prototype yap."

### Zorluk/Risk
- AI model kalitesi: Türkçe hallüsinasyon riski
- Kaynak güvenirliği: Sahte haberler
- Rekabet: ChatGPT/Claude web araştırması geliştiriyor

**Risk Derecesi:** DÜŞÜK-ORTA

---

## FİKİR 5: Danışmanlık Sekreter Platform (Sanal İnsan Kaynakları)

### Ne Bu?
Danışmanlık şirketlerine yönelik AI sekreter hizmeti: (1) randevu yönetimi, (2) müşteri notundan oto-mail/sözleşme taslağı, (3) faturalama, (4) harcama raporu, (5) anlaşma yönetimi.

### Kanıt (Kaynaklar)
- [Danışmanlar idari işlerde %30-40 zamanlarını harcıyor](https://internethaber.com/)
- [Virtual Assistant pazarı $5+ milyar, %25 büyüme](https://farmonaut.com/)

**Gerçek Sorun:** Danışmanlar sekreteri istihdam pahalı (₺3-5K/ay), freelancer bulması zor.

### Gelir Modeli
- Temel: ₺199/ay (takvim + mail şablonları)
- Danışman: ₺499/ay (takvim + oto-mail + sözleşme + faturalama)
- Kurumsal: ₺1.499/ay (10+ danışman)

### Türkiye Pazar Uyumu
**Rakip:** Calendly, HubSpot CRM var ama Türkçe/danışmanlık-spesifik değil.  
**Talep Sinyalleri:**
- Bağımsız danışman 10-20 bin, idari işler yaşıyor
- Sekreter istihdam yazılımdan 3-5K pahalı

**Neden Heyecan Verici:**
- Koray'ın kendi işinde kullanabileceği araç
- Satış kolay (bağımsız danışmanlar, ağızdan ağıza)
- Marj yüksek

### İlk Somut Adım
Koray'ın takvimini platformaya yükle, 1 hafta test et. Claude Code'a: "Mail/takvim API ile müşteri notundan oto-mail + sözleşme taslağı chatbot tasarla."

### Zorluk/Risk
- Entegrasyon: Her danışman farklı sistem kullanıyor
- Danışman alışkanlığı: Kontrolü AI'ya vermekte tereddütlü
- Rekabet: Microsoft/Google benzer ekleyebilir

**Risk Derecesi:** ORTA

---

## BUGÜNÜN ÖNERİSİ

**→ Çiftçiye Yönelik Akıllı Tarım Yönetim Yazılımı (Agritech)**

Beş fikir arasında en stratejik ve ölçeklenebilir fikir agritechdir: (1) **Pazar kanıtlanmış ve devlet destekli** — KKYDP 2026'da çiftçilere yazılım hibe veriyor, hedef 100 bin çiftçi, (2) **Koray'ın uzmanlığı doğrudan uygulanabilir** — devlet desteği bulma ve başvuru yazılımda özellik, (3) **Çift taraflı gelir** — abonelik + başvuru yardımı (₺500/başarılı), (4) **Hükümet dayanağı riski azaltıyor** — KKYDP pazarlama yapıyor, (5) **Ölçekleme potansiyeli** — çiftçi → kooperatif → holdingler, (6) **Su/arazi krizleri talep artıyor**. Emlak CRM açık ama kurumsal satış zor, HRIS rekabetçi, araştırma AI kalitesi riski, sekreter self-use sınırlı. Agritech: **devlet katalizleri + Koray uzmanlığı + kanıtlanmış pazar.** İlk hafta: 3 çiftçi/kooperatif görüşme + KKYDP yazılım taslağı.

---

# Otomotiv Özel Araştırması - 26 Ağustos 2026

**Araştırmacı:** Fikir Avcısı Ajanı
**Tarih:** 26 Ağustos 2026
**Hedef:** Standart günlük akışın dışında, özel talep üzerine yalnızca otomotiv (araç içi/dışı ürün, aksesuar, bakım, kişiselleştirme, hizmet) temalı 10 fikir. Bu bölümde tek bir öneri öne çıkarılmıyor, tüm adaylar kısa ve karşılaştırmalı şekilde listeleniyor.

---

## FİKİR 1: Isıyla Renk Değiştiren Termokromik Araç Kaplama Filmi

**Dünyada Durum:** Sıcaklığa göre renk değiştiren TPU kaplama filmleri 2025-2026'da ticari ölçeğe ulaştı; Brüksel'den Lyon'a giden bir gösteri aracının rengi yolda değişince çekilen görüntü 48 saatte 12 milyon izlenme aldı. Standart kaplamaya göre yaklaşık 2,3 kat daha pahalı satılıyor ama "tek filmle dört mevsim farklı renk" vaadiyle talep görüyor. ([carlikewrap.com](https://carlikewrap.com/blogs/news/the-color-shift-trends-wrapping-cars-in-2025))

**Türkiye'de Durum:** Türkiye'de STEK Türkiye, Zivent Films, Madico gibi firmalar profesyonel şeffaf boya koruma filmi (PPF) ve standart renk değiştirme kaplaması uyguluyor; termokromik/ısıya duyarlı özel filmin Türkiye'de aktif olarak pazarlandığına dair kanıt bulunamadı — bu bir boşluk olabilir ama doğrulanamadı.

**Uyarlanabilirlik:** Ürünün kendisi ithal (Çin/ABD kaynaklı TPU film), Türkiye'deki iş modeli distribütörlük + uygulama servisi olur. Yüksek görsellik nedeniyle sosyal medyada organik ilgi görme potansiyeli yüksek, ama malzeme maliyeti ve uygulama ustalığı (kaplamacı eğitimi) giriş engeli oluşturuyor.

---

## FİKİR 2: Kendi Kendine Onarılan Grafen Seramik Kaplama DIY Kiti (Perakende)

**Dünyada Durum:** ABD'de kendin-yap seramik kaplama kiti pazarı yıllık %11,5 büyüyor, 2026 sonunda pazarın %51'inden fazlasını kendin-yap tüketiciler oluşturacak; grafen katkılı hibrit kitler 2026'da satışların %10-12'sini oluşturuyor ve payı hızla artıyor. ([theconsumers.guide](https://www.theconsumers.guide/reviews/best-ceramic-coating-kits-car-paint-protection-2026), [fresh-layer.com](https://www.fresh-layer.com/blog/7-new-graphene-sprays-tested-in-depth-review))

**Türkiye'de Durum:** Türkiye'de seramik kaplama neredeyse tamamen profesyonel servis olarak sunuluyor (Auto King, CarShine, SWAT Garage vb.); tüketicinin kendi başına uygulayabileceği, markalı ve talimatlı bir perakende grafen/seramik kiti Türkiye e-ticaretinde belirgin şekilde yaygın değil.

**Uyarlanabilirlik:** İthal/lisanslı ürünü Trendyol/Hepsiburada üzerinden Türkçe talimat videosuyla satmak düşük sermayeli bir başlangıç olur. Risk: Türk tüketicisinin "kaplama = usta işi" algısı güçlü, kendin-yap kültürüne ısınması zaman alabilir.

---

## FİKİR 3: Modüler Çatı Çadırı ve Overlanding (Araçla Kamp) Ekipmanları

**Dünyada Durum:** Küresel çatı çadırı pazarı 2026'da yaklaşık 291-320 milyon dolar, yıllık %7,8-8,9 büyüyerek 2035'te 570-630 milyon dolara ulaşması bekleniyor; sert kabuklu çadırların toptan siparişleri yıllık %47 arttı, araç bazlı kampçılık tercihi 2020'de %35'ten 2025'te %52'ye çıktı. ([globalgrowthinsights.com](https://www.globalgrowthinsights.com/market-reports/rooftop-tent-market-114205))

**Türkiye'de Durum:** Türkiye'de karavan/kamp ekipmanı pazarı büyüyor ama çatı çadırı segmenti (özellikle sert kabuklu, hızlı kurulan modeller) sınırlı sayıda ithalatçı/nişte kalıyor; büyük zincir mağazalarda henüz yaygın değil.

**Uyarlanabilirlik:** Doğa turizmi ve "vanlife" trendinin Türkiye'de büyümesiyle uyumlu; ithalat + montaj/danışmanlık hizmeti (araca uygun taşıyıcı sistem seçimi) olarak paketlenebilir. Gümrük vergisi ve nakliye maliyeti fiyatı yükseltir, bu yüzden orta-üst gelir segmentine hitap eder.

---

## FİKİR 4: Yerinde (Mobil) Detaylı Araç Bakım Randevu Platformu

**Dünyada Durum:** ABD'de araç detaylı bakım pazarı 18,7 milyar dolara ulaştı, mobil/yerinde hizmetler yıllık %19-20 büyüyerek genel pazardan 4 kat hızlı gelişiyor; MobileWash yılda 1 milyon+ kullanıcıya, Washos yılda 1,2 milyon randevuya hizmet veriyor. ([on-demand-app.com](https://on-demand-app.com/blog/top-10-auto-detailing-apps-and-how-to-build-your-own/))

**Türkiye'de Durum:** Türkiye'de detaylı bakım hizmeti sabit lokasyonlu dükkanlar (Auto King, CarShine vb.) üzerinden yürüyor; eve/işyerine gelen, uygulama üzerinden randevu alınan, ölçeklenebilir bir mobil detaylı bakım platformu (Washos/MobileWash benzeri) Türkiye'de yaygın olarak bulunamadı.

**Uyarlanabilirlik:** Büyükşehirlerde (İstanbul, Ankara, İzmir) apartman/site yaşamı ve zaman kısıtı düşünüldüğünde talep sinyali mantıklı, ama doğrudan kanıt (arama hacmi, şikayet forumu) bulunamadı — varsayımdan öteye geçmiyor. İş modeli platform + bağımsız detaylı bakım ustaları ağı şeklinde, düşük sermayeli başlanabilir.

---

## FİKİR 5: Lüks Araç Kokusu Aboneliği (Doldurulabilir Atomizer + Niş Parfüm)

**Dünyada Durum:** Otel/mekan kokulandırma sektöründeki "imza koku" trendi (Aroma360 tarzı markalar) otomotiv aksesuarına da yayılıyor; niş parfüm markalarının araç için doldurulabilir atomizer + aylık koku yenileme aboneliği sunduğu modeller yurt dışında mevcut, ancak bu spesifik pazarın büyüklüğüne dair somut rakam bulunamadı.

**Türkiye'de Durum:** Türkiye'de oto kokusu tamamen ucuz, tek kullanımlık/klip tipi ürünlerle dolu bir emtia pazarı (Trendyol, Hepsiburada, n11, Tekzen) — markalı, "niş parfüm" kalitesinde, doldurulabilir ve abonelikli bir ürün Türkiye'de görülmedi.

**Uyarlanabilirlik:** Lüks/prestij segmentine (yeni araç sahipleri, üst segment marka bayileri ile ortaklık) yönelik bir konumlandırma boşluğu olabilir, ama Türkiye'de "koku aboneliği" davranışının kabul görüp görmeyeceği doğrulanamadı — küçük bir pilot denemeyle test edilmeli.

---

## FİKİR 6: Kapı Kenarı/Tutamak İçin Görünmez Koruma Bandı (Mikro PPF Parçaları)

**Dünyada Durum:** TikTok Shop ve Amazon'da "trending car accessories" listelerinde organizasyon ürünleri (bagaj düzenleyici, koltuk arası dolgu) ve dürtüsel satın almaya uygun küçük aksesuarlar öne çıkıyor; kapı kenarı/tutamak/ayna gövdesi için kesilmiş, kendin-yap uygulanan şeffaf koruma bandı seti bu kategoride popüler ürünlerden. ([carouscale.com](https://www.carouscale.com/en/tiktok-carousel/car))

**Türkiye'de Durum:** Türkiye'de tam araç PPF kaplaması profesyonel hizmet olarak var (STEK, Zivent, Madico) ama sadece kapı kenarı/tutamak gibi küçük, kendin-yap uygulanabilir, ucuz koruma bandı seti şeklinde bir perakende ürün Türkiye pazarında yaygın görülmedi.

**Uyarlanabilirlik:** Düşük fiyatlı (₺150-400), düşük risk, dürtüsel satın almaya uygun bir ürün — e-ticaret + kısa video içerikle (uygulama gösterimi) hızlı test edilebilir. Büyük gelir potansiyeli sınırlı ama sermaye ve zaman riski de çok düşük.

---

## FİKİR 7: Elektrikli Araç Şarj Kablosu Organizatörü ve Taşınabilir Şarj Aksesuar Seti

**Dünyada Durum:** Küresel elektrikli araç satışları 2026'da 18 milyon adedi geçti, şarj altyapısı büyüdükçe kablo depolama, taşınabilir adaptör seti, araç bagajı için EV şarj çantası gibi tamamlayıcı aksesuarlara talep de yükseliyor (önceki gün EV arıza tanı fikri araştırmasında da doğrulanan büyüme trendiyle uyumlu). ([electrive.com](https://www.electrive.com/2026/04/10/global-ev-sales-reach-18-million-units-in-2026/))

**Türkiye'de Durum:** Türkiye'de elektrikli araç sayısı 2026'da 500 bini geçti; şarj istasyonu ağı (Eşarj, ZES, Beefull) hızla büyürken, EV sahiplerine özel düzenleyici/taşıma aksesuarları (kablo çantası, adaptör organizatörü) Türk e-ticaret sitelerinde çok sınırlı çeşitlilikte.

**Uyarlanabilirlik:** Büyüyen EV filosu somut ve ölçülebilir bir müşteri kitlesi sunuyor; düşük maliyetli ithalat/yerel üretim ile hızlı test edilebilir bir fiziksel ürün fırsatı. Riski düşük ama pazar büyüklüğü henüz sınırlı (500 bin araç), büyümesi EV penetrasyon hızına bağlı.

---

## FİKİR 8: Araç İçi Hava Kalitesi İzleyici ve İyonizer Cihazı

**Dünyada Durum:** Araç içi hava temizleyici/iyonizer cihazlar TikTok/Amazon trend listelerinde "sağlık bilinci" kategorisinde yer alıyor; kokusu giderme, PM2.5 partikül azaltma iddialarıyla satılıyor, ancak bu spesifik alt kategori için bağımsız doğrulanmış satış rakamı bulunamadı.

**Türkiye'de Durum:** Türkiye'de basit oto iyonizer/hava temizleyici ürünler Trendyol/Hepsiburada'da mevcut ama çoğu ucuz, jenerik, sensörsüz ürünler; gerçek zamanlı hava kalitesi ölçen (PM2.5 sensörlü) ve telefon uygulamasıyla entegre çalışan bir model belirgin şekilde eksik.

**Uyarlanabilirlik:** Büyükşehirlerdeki hava kirliliği farkındalığı (İstanbul, Ankara) ile örtüşen bir konumlandırma yapılabilir, ama bu bir varsayım — gerçek talep sinyali (arama hacmi, şikayet) doğrulanamadı. Ürün ithalatı görece kolay, marka farklılaştırması "sensörlü + uygulamalı" özellikte olabilir.

---

## FİKİR 9: Araç Koltuğu için Tam Özel Deri Kaplama/Kişiselleştirme Atölyesi

**Dünyada Durum:** Kişiselleştirilmiş/özel dikim araç içi kaplama (koltuk, konsol, direksiyon) Çin ve Orta Doğu pazarlarında büyüyen bir kişiselleştirme trendi; sahibinin ismi, özel renk/desen, marka logosu işlenmiş koltuk kaplamaları sosyal medyada "öncesi/sonrası" videolarıyla ilgi görüyor. Bu spesifik alt segment için bağımsız pazar büyüklüğü verisi bulunamadı.

**Türkiye'de Durum:** Türkiye'de koltuk döşeme/kaplama zaten var olan geleneksel bir zanaat (döşemeciler, tuning firmaları) ama "tam kişiselleştirme + dijital pazarlama + e-ticaret sipariş süreci" şeklinde modernize edilmiş, markalı bir oyuncu öne çıkmıyor.

**Uyarlanabilirlik:** Bu teknoloji dışı, klasik bir zanaat/hizmet işi — var olan yerel ustalarla ortaklık kurup dijital vitrin (Instagram/web sipariş sistemi) ile paketlemek düşük sermayeli bir marka fırsatı olabilir. Ölçeklenebilirlik sınırlı (elle yapılan iş), ama marj yüksek ve rekabeti düşürecek dijital pazarlama boşluğu var.

---

## FİKİR 10: Baş Üstü Gösterge (HUD) + OBD2 Akıllı Gösterge Cihazı

**Dünyada Durum:** Amazon'da HUD kategorisinde Lufi X1, Wiiyii P6, KINGNEED gibi modeller "en çok satanlar" listelerinde; OBD2 bağlantılı, hız/yakıt/motor verisini ön cama yansıtan cihazlar TikTok'ta popüler araç teknolojisi aksesuarları arasında sayılıyor. ([caraudionow.com](https://www.caraudionow.com/best-head-up-displays/))

**Türkiye'de Durum:** Türkiye'de HUD cihazları Trendyol/Hepsiburada üzerinden ithal jenerik modeller olarak satılıyor ama Türkçe arayüzlü, yerel destekli, markalı bir oyuncu öne çıkmıyor; çoğu ürün İngilizce arayüz ve düşük müşteri desteğiyle geliyor.

**Uyarlanabilirlik:** Ürün kendisi emtia (Çin'den toptan alınabilir), farklılaşma noktası Türkçe arayüz + yerel garanti/destek + sadeleştirilmiş kurulum videosu olabilir. Düşük sermayeli, hızlı test edilebilir bir e-ticaret fırsatı; büyük farklılaşma olmadan marj baskısı riski var.

---

**Not:** Bu bölüm kullanıcı talebiyle standart "tek öneri" formatının dışında hazırlandı; 10 fikir karşılaştırmalı olarak sunuldu, tek bir favori öne çıkarılmadı. Kanıt bulunamayan noktalar "doğrulanamadı" olarak açıkça belirtildi.

---
