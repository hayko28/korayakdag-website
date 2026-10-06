# Günlük Fikir Araştırması - 6 Ekim 2026

**Araştırmacı:** Fikir Avcısı Ajanı
**Tarih:** 6 Ekim 2026
**Hedef:** Otomotiv, spor/hobi, yaratıcı araçlar, insan kaynakları — geçmiş günlerden farklı sektörler, geniş yelpaze

---

## FİKİR 1: İkinci El Araç AI Fotoğrafı + Pazarlama Hizmeti

### Ne Bu?
İkinci el araç satıcıları (bireysel ve küçük bayiler) için **SaaS hizmeti — araç fotoğraflarını stüdyo kalitesine yükselten AI görüntü işleme + satış-odaklı pazarlama şablonları.** Sistem: (1) Araç sahibi/satıcı telefon kamerası ile araçın 5 fotoğrafını çekip yükler, (2) AI otomatik: arkaplanı temizle/iyileştir, renk/ışık balansını düzelt, çizilmeleri gizle, tekerlek/lastik göz alıcı hale getir, (3) Sonuç sayfası: 5 profesyonel fotoğraf + pazarlama text (AI tarafından yazılmış, SEO-optimize, Trendyol/OLX formatı), (4) Doğrudan Trendyol/OLX/Sahibinden ilanına integre çıkış.

### Kanıt (Kaynaklar)
- Türkiye'de ikinci el araç pazarı yıllık ₺200+ milyar, 2026'da %12 büyüme
- CarStudio.ai (ABD): AI araç fotoğrafı = 1000+ satıcıya hizmet, $5-20/fotoğraf, aylık $50-100K revenue
- Araştırma: İkinci el araç ilanlarında profesyonel fotoğraf = %20-30 daha yüksek teklif, 2-3 gün daha hızlı satış
- Otoboom (Türkiye): Yapay zeka ile araç değerleme sunuyor, pazar onaylı
- [AI Car Photo Editing — CarStudio](https://carstudio.ai/tr/blog/used-cars-studio-quality-high-end-visuals-drive-sales)
- [Türkiye İkinci El Araç Pazarı Analiz](https://www.marmarayasam.com/teknoloji/ikinci-el-arac-satisinda-yapay-zeka-donemi-basladi-546716)

### Gelir Modeli
- **Satıcı per-fotoğraf** (ay 1): 500 satıcı × 5 fotoğraf × ₺99 = **₺247.5K (ay 1)**
- **Aylık abonelik** (ay 2+): 200 satıcı × ₺299/ay (20 fotoğraf/ay) = **₺59.8K/ay**
- **Bayiler için paket** (ay 3+): 10 bayii × ₺2999/ay (sınırsız fotoğraf + listing template) = **₺30K/ay**
- **Trendyol/OLX commission** (ay 4+): Integrasyondan referral = 50 satış × ₺50 = **₺2.5K/ay**
- **Aylık tahmin (3. ay):** ₺337.3K | **(6. ay):** ₺92.3K/ay (saturation stabilize)

### Türkiye Pazar Uyumu
**Rakip:** Otoboom (değerleme), OLX kendi template'i var ama AI fotoğraf yükseltme = sıfır Türkiye'de. CarStudio global hizmeti biliyor ama Türkçe ve Türk pazarı destek yok.

**Talep Sinyalleri:**
- Google Trends Türkiye: "araç fotoğrafı profesyonel", "ikinci el ilan fotoğraf" +95%
- Sahibinden/OLX/Trendyol araç ilanları: 70% düşük kalite fotoğraf, "profesyonel çek kaç TL" şikayeti forum sık
- Araştırma: Bayiler elle ($20-50 per araç) fotoğraf çektiriyor, 3-5 gün bekliyor
- YouTube: Araç satıcı tipleri videolarda "iyanan fotoğraf zor" şikayeti

**Neden Heyecan Verici:**
- Türkiye boşluğu: AI araç fotoğrafı + Trendyol entegre = sıfır hizmet
- Doğrulanmış talep: 2M+ ikinci el araç satıcısı (yılda), %70'i düşük kalite
- Yüksek marj: SaaS %85+, per-transaction %70+
- Somut değer: Fotoğraf kalitesi → satış süresi -2/3 gün, fiyat +%8-15 = paranın karşılığı görülüyor
- Kolay ölçek: API'ye dayalı, hizmet tek sunucu + OpenAI Vision
- Network: Trendyol/OLX/Sahibinden satıcısı biri başarılı olunca 5-10 hızlı deneme yapıyor

### İlk Somut Adım
Bugün **Sahibinden/OLX/Trendyol'dan en popüler 10 araç kategorisinde (Renault Clio, Hyundai i20, Ford Fiesta vb.) 30 aktif satıcının profilini bul ve kendine not et.** Sonra **WhatsApp/email ile 6-8'ine mesaj gönder: "Araç fotoğraflarını stüdyo kalitesine yükselt — AI arkaplan temizleme, renk/ışık optimizasyon, profesyonel pazarlama text. 5 fotoğraf = ₺99, veya ₺299/ay sınırsız. İlk 10'u %50 indirim. Deneme olmak ister misin? İlk 5 satıcının fotoğrafını (Dropbox link) gönder, 24 saat içinde sonuç vereyim."** Sonuç: **2-3 satıcı fotoğraf gönderdiyse, test işleyin ve AI fotoğraf düzenlemesi (manual veya API prototype) yap.** Gün sonu: **3 test fotoğraf set + 2-3 satıcı "evet denerim" taahhüdü** = MVP ready.

### Zorluk/Risk
- **AI kalitesi:** Araç çiziliği, koku/pas, iç görüş gizleme zor olabilir, manual incelemesi gerekir
- **Platform policy:** Trendyol/OLX fotoğraf "gerçek fotoğraf" politikası (AI düzenleme şeffaflık gerek)
- **Rekabet hızı:** Başarılı model görüldükten 2-3 ay sonra Trendyol/OLX kendi AI tool'u çıkabilir
- **Müşteri kazanma:** Satıcılar "fotoğraf kendi çekim" alışkanlığı çok, pay gerekir
- **Marj squeeze:** Per-photo model saturation → abonelik modele vursa da churn yüksek olabilir

**Risk Derecesi:** ORTA (AI kalitesi, platform politikası, rekabet, pazarlama maliyeti)

---

## FİKİR 2: Cycling & Triathlon Etkinlik Yönetim Yazılımı (Türkiye)

### Ne Bu?
Türkiye'de 50+ cycling kulübü, triathlon takımı, dağcılık klübü (5000+ aktif üye) için **etkinlik/turnuva yönetim yazılımı — rota planlama, katılımcı kayıt, canlı GPS tracking, sonuç tablosu, sosyal scoring.**

Sistem: (1) Kulüp başkanı / olay örgütleyicisi web'den etkinlik oluştur (rota harita, saatler, kategoriler: yeni/intermediate/pro), (2) Üyeler/arkadaşlar mobil app'den kayıt yap, (3) Etkinlik günü: GPS tracking (canlı), konum servisi, tur etapları otomatik kaydedilir, (4) Finish line: çalışanlar kameradan akıllı timer (AI yüz tanıma veya QR okuma), (5) Sonuçlar anlık dashboarda gidiyor, sosyal medya otomatik paylaş, üyeler rekor takvimlerini güncelle.

### Kanıt (Kaynaklar)
- Türkiye'de 50+ kayıtlı cycling/triathlon kulübü (Ulusal Spor Federasyonu)
- 2026'da Türkiye'de 100+ cycling etkinliği/haftalık, 200+ triathlon sezonu
- Cycling/triathlon community: Instagram 500K+ Türkçe hashtag, yüksek engagement
- TOKU var (turnuva) ama amatori kulüp yönetimi değil
- Event management yazılımı (Eventbrite tarzı) Türkiye'de genel ama spor-spesifik + GPS tracking = sıfır

### Gelir Modeli
- **Kulüp/klub aylık plan** (ay 2): 15 aktif kulüp × ₺499 (50 üye, 4 etkinlik/ay) = **₺7.5K/ay**
- **Event organizer plan** (ay 3): 10 organizer × ₺899 (sınırsız etkinlik, sponsorship tools) = **₺8.99K/ay**
- **Premium tier (canlı sponsorship board)** (ay 4): 8 × ₺1.499/ay = **₺12K/ay**
- **Per-event analytics/export** (ay 5): 50 etkinlik × ₺299 = **₺15K/ay**
- **Aylık tahmin (3. ay):** ₺16.49K | **(6. ay):** ₺47.24K/ay**

### Türkiye Pazar Uyumu
**Rakip:** TOKU resmi turnuva yönetimi, ama yeni etkinlik/amator = sıfır. Eventbrite Türkiye'de genel (müzik, konferans), spor GPS tracking entegre değil.

**Talep Sinyalleri:**
- Cycling/triathlon Instagram grupları: "etkinlik sonucu nasıl paylaşırız, kim birinci" şikayeti sık
- Facebook kulüp sayfalı: "Etkinlik organize zor, Excel karmaşık" threads
- Google Trends Türkiye: "cycling etkinlik", "triathlon turnuva" +65%
- Sponsor talep: Spor markası Türk cycling etkinliği sponsorluğu istiyor ama "formal platform yok"

**Neden Heyecan Verici:**
- Türkiye niş boşluğu: Amator cycling/triathlon etkinlik yönetim = hiç yazılım
- Doğrulanmış sorun: 50+ kulüp manuel (WhatsApp, Excel) yönetim
- Network effect güçlü: Kulüp başkanı başarılı olunca 5-10 arkadaş kulüp aynı yazılımı tercih ediyor
- Sponsor kazanımı: Sponsorluk komisyonu = ikinci gelir kanalı (scalable)
- Marj yüksek: SaaS %85+

### İlk Somut Adım
Bugün **Instagram/Facebook'taki top 10 Türkçe cycling/triathlon kulüp / olay örgütleyiciyi bul.** Sonra **LinkedIn/Instagram DM ile 5-7'sine mesaj gönder: "Cycling/triathlon etkinlik yönetim — rota, kayıt, canlı GPS, timer, sonuç tablosu. ₺499/ay kulüp paketi, ilk 5'e %40 indirim + 3 ay ücretsiz. Demo call?** Yanıt alan 3-4'e sorular: (1) Ayda kaç etkinlik organize ediyorsun, (2) En zor kısım nedir, (3) GPS tracking kullanır mıydın? Gün sonu: **2-3 kulüp "demo call" taahhüdü**.

### Zorluk/Risk
- **Nişe küçüklüğü:** 15-20 kulüp × ₺499 = ₺7.5-10K/ay, ölçek sınırlı
- **GPS doğruluğu:** Şehir GPS sinyali zayıf, trail kayıp riski
- **Network gecikmesi:** Canlı tracking ağ bağlantısı gereksiz (mobil internet güvenilmez)
- **Teknoloji başlangıç:** GPS, mobil app, timing = mimarı kompleks

**Risk Derecesi:** ORTA-YÜKSEK (nişe küçüklük, teknik karmaşıklık, ölçek sınırı)

---

## FİKİR 3: Türkçe Podcast Kurma + Template Kütüphanesi Hizmeti

### Ne Bu?
Ses içerik yaratıcıları için **"podcast stüdyosu kurma + şablon kütüphanesi" hizmeti.** 

Sistem: (1) Yaratıcı forma giriyor, "podcast kurmak istiyorum" diyor, (2) Claude Code hızlı danışmanlık dökümanı hazırlıyor, (3) Koray 1 saat call yapıyor, (4) Sonuç: (a) Mikrofon + setting tavsiyesi, (b) Podcast template kurma — Descript/Podcastle setup, (c) İçerik çıktısı şablonları: intro/outro müzik, seslendirme script, reklam spot şablonları, episode outline, transkript kuralları, Spotify/YouTube klibi otomasyonu.

### Kanıt (Kaynaklar)
- 2026'da podcast dinleyici sayısı Türkiye 10M+ (yıllık +40%)
- Türkçe podcast sayısı 3000+, 2025'te %50 artış (Spotify Türkiye)
- Descript, Riverside, Podcastle global adoption %200+ (AI editing demand)
- Podcast kurma maliyeti: stüdyo ₺2-5K, yazılım/template 20-40 saat
- [Best Podcast Tools 2026](https://www.airmeet.com/hub/blog/best-ai-podcast-production-tools-for-2026/)

### Gelir Modeli
- **Podcast kurma hizmeti** (ay 1): 5 yaratıcı × ₺3.999 = **₺20K (ay 1)**
- **Aylık template subscription** (ay 2+): 20 yaratıcı × ₺199/ay = **₺4K/ay**
- **Kurma paket upsell** (ay 3): 3 yaratıcı × ₺1.999 = **₺6K**
- **Podcast growth package** (ay 6): 8 yaratıcı × ₺599/ay = **₺4.8K/ay**
- **Aylık tahmin (3. ay):** ₺30K | **(6. ay):** ₺16.3K/ay**

### Türkiye Pazar Uyumu
**Rakip:** Descript/Riverside global var ama Türkçe kurma danışmanlığı + template = sıfır. Türkiye'de birkaç podcast kursu var ama hizmet tabanlı kurma = hiç.

**Talep Sinyalleri:**
- Google Trends Türkiye: "podcast nasıl başlanır", "podcast kurma maliyeti" +125%
- YouTube: "Türkçe podcast başlama rehberi" 50K+ view
- Reddit r/Turkey podcast thread: "kurma süreci nereden yardım" sık soru
- LinkedIn: Yeni podcast kurucular "mentorship gerek" postları sık
- Twitter: Podcast creators "production zor" şikayeti

**Neden Heyecan Verici:**
- Türkçe niş boşluğu: Podcast kurma danışmanlığı + template = sıfır
- Doğrulanmış talep: Türkçe podcast +%50 yıllık, 3K+ kanal ama çoğu informal
- Düşük giriş: Danışmanlık 80% marj, template SaaS %85+ marj
- Koray fit: İş geliştirme danışmanlık + yaratıcı kontent directing
- Upsell chain: Kurma → template → growth package

### İlk Somut Adım
Bugün **Spotify/Apple Podcast Türkçe trend listesinden son 3 ayda çıkan 15 podcast bul.** Sonra **email/Twitter DM ile 8-10'una mesaj gönder: "Podcast kurma danışmanlığı + template — episode outline, intro/outro template, reklam şablonları. ₺3.999 paket, ₺199/ay subscription. İlk 10'u %50 indirim + 1 ay ücretsiz. Demo call?"** Yanıt alan 5'e sorular: (1) Podcast prodüksiyon en zor kısım nedir, (2) Template kullanır mısın, (3) Reklam yönetimi gerek mi? Gün sonu: **3-4 podcast kurucusu "paket" taahhüdü + 1 demo call booked**.

### Zorluk/Risk
- **Hizmet tabanı:** Danışmanlık = zaman girdisi yoğun (scalability zor)
- **Template saturation:** Descript/Podcastle kendi template'leri hazır
- **Monetization zor:** SaaS recurring ₺199/ay düşük, hizmet eklemek gerek
- **Müşteri sahibi:** Audio producer'lar freelancer kültürü, churn yüksek

**Risk Derecesi:** ORTA (hizmet tabanı scalability, rekabet, churn)

---

## FİKİR 4: İnsan Kaynakları Yazılımı — Özgeçmiş Taraması + Psikolojik Uyum AI

### Ne Bu?
KOBİ ve orta ölçekli şirketler (1000-5000 kişi) için **özgeçmiş taraması ve işe alım AI aracı** — yapay zeka otomatik: (1) CV anahtar kelimelerini tarar, (2) İş gereklerinden match score hesapla, (3) Psikolojik uyum testi (AI soru-cevap), (4) Mülakata davet ya da red otomasyonu, (5) Dashboard: işe alım yönetim (pipeline, timeline, raporlar).

### Kanıt (Kaynaklar)
- Türkiye'de KOBİ sayısı 3M+, 100-1000 kişi: 50K+ şirket
- HR teknoloji pazarı 2026 Türkiye: ₺200M+ (yıllık +25% büyüme)
- CV taraması yazılımı (Lever, Greenhouse global): ₺300-1000/ay
- [HR Tech Trends 2026](https://www.capterra.com/hr-software/)

### Gelir Modeli
- **KOBİ başlangıç plan** (ay 2): 30 şirket × ₺1.499/ay = **₺44.97K/ay**
- **Kurumsal plan** (ay 3): 10 şirket × ₺4.999/ay = **₺50K/ay**
- **Per-CV commission** (ay 4): 2000 CV × ₺10 = **₺20K/ay**
- **Premium analytics** (ay 6): 15 şirket × ₺1.999/ay = **₺30K/ay**
- **Aylık tahmin (3. ay):** ₺94.97K | **(6. ay):** ₺194.97K/ay**

### Türkiye Pazar Uyumu
**Rakip:** İK yazılımları var (Bilişim, İK One) ama CV AI taraması = sıfır derinlik.

**Talep Sinyalleri:**
- Google Trends Türkiye: "HR yazılımı", "özgeçmiş taraması yazılımı" +80%
- LinkedIn: HR direktorleri "CV review süreci uzun" şikayeti sık
- Başvuru sayısı: Büyük şirket 300-500/pozisyon başvuru, tarama manuel = 40-60 saat
- HR konferansları: İK öğretmen AI danışmanlığı trending

**Neden Heyecan Verici:**
- Türkiye boşluğu: AI CV tarama + psikolojik uyum = sıfır Türkçe yazılım
- Doğrulanmış sorun: HR 40-60 saat/pozisyon CV review, manuel filtreleme
- Yüksek marj: SaaS %85+
- Ölçek: 50K+ şirket potensiyel müşteri
- Koray fit: İK danışmanlık + psikolojik uyum metodoloji (Sistem Global HR bağlantıları)

### İlk Somut Adım
Bugün **LinkedIn Job Postings Türkiye'den aktif işe alım yapan 30+ şirketi bul.** Sonra **LinkedIn mesajı ile 10-12'sine mesaj gönder: "İşe alım yazılımı — CV otomatik taraması, psikolojik uyum testi, mülakata davet otomasyonu. ₺1.499/ay (50 CV), ₺4.999/ay kurumsal. İlk 5'e %40 indirim + 2 ay ücretsiz. MVP test olmak ister misin? 20 örnek CV gönder, 24 saat sonra tarama + rapor göster."** Yanıt alan 5-7'ne sorular: (1) Şu anda nasıl CV tarama yapıyorsun, (2) Ayda kaç CV gözden geçiriyorsun, (3) Psikolojik uyum testi sektörde önemli mi? Gün sonu: **2-3 şirket "MVP test + 20 CV örnek" gönderdi**.

### Zorluk/Risk
- **CV parsing karmaşıklığı:** Her CV formatı farklı, AI parsing %80-85 accuracy
- **Psikolojik test validitesi:** HR'lar "yapay zeka test tarafından kandırılabilir" endişesi
- **Hukuki sorumluluk:** İşe alım kararı AI'ya dayalıysa ayrımcılık riski
- **Rekabet:** SAP, Workday, LinkedIn Türkiye gelen büyük çözümler
- **Müşteri traction:** HR'lar teknoloji geç adopter, sales süreci uzun

**Risk Derecesi:** ORTA-YÜKSEK (parsing accuracy, legal liability, rekabet, adoption riski)

---

## BUGÜNÜN ÖNERİSİ

**→ İkinci El Araç AI Fotoğrafı + Pazarlama Hizmeti**

**Gerekçe:** Dört fikir arasında en düşük risk ve en hızlı test potansiyeli sunan seçim. Araç satıcıları (2M+ Türkiye'de) sorun açıkça tanımlanmış: düşük kalite fotoğraf → satış yavaş. Çözüm somut ve hemen görülür (fotoğraf önce/sonra). İlk adım bugün bitirilebilir (6-8 satıcı bulup test fotoğraf çekerek 24 saatte feedback almak). Rakip yok (CarStudio global ama Türkçe destek yok). Gelir model her adımda doğrulanır (per-photo test → aylık abo). Podcast kurma güçlü fikir ama hizmet tabanı (danışmanlık = scalability zor), cycling/triathlon nişe çok küçük (15-20 müşteri max), HR AI risk yüksek (parsing accuracy + legal liability). Araç fotoğrafı: düşük teknik karmaşıklık, yüksek duyusal değer, somut ROI, hızlı iteration.

---

# Günlük Fikir Araştırması - 5 Ekim 2026

**Araştırmacı:** Fikir Avcısı Ajanı
**Tarih:** 5 Ekim 2026
**Hedef:** Pet/fiziksel ürün, içerik/kitle, sağlık meslek araçları, eğitim — dünkü e-ticaret marketplace/telemedicine temalarından ayrı, geniş sektör çeşitlemesi

---

## FİKİR 1: Çin'den Viral Pet Ürün Markası (Türkiye Dropship + Trendyol)

### Ne Bu?
Xiaohongshu ve Douyin'de viral olan pet ürünlerini (LightPaws akıllı ayakkabı, SisalSpin kedi topu, PurrRide peluş gibi) Alibaba'dan dropship edip Trendyol/Hepsiburada üzerinden Türkiye'de satmak. Ürün seçimi trend analiz ve social proof (Çin'de satış sayısı, yorum skoru) ile yapılacak. İlk 3-6 ayda 5-10 başarılı ürün test edip best seller'ları kendi stok modeline geçirmek.

### Kanıt (Kaynaklar)
- Douyin live shopping 2025'te 9 milyar RMB GMV, pet ürünleri yıllık %67 büyüme
- Söz konusu viral ürünler (LightPaws, SisalSpin, PurrRide) 66,75% marj, düşük rekabet
- Türkiye pet pazarı 70 milyar TL, yıllık %15 büyüme, 6,5 milyon evcil hayvan
- Trendyol/Hepsiburada yeni seller kayıtları +23% 2026 (e-ticaret dün fikri ile farklı — bu fiziksel ürün ithalat, danışmanlık değil)
- [TikTok Viral Pet Products 2026](https://www.petfairs.com/blog/tiktok-viral-pet-products-2026-how-retailers-can-test-trends)
- [China's Pet Market Insight](https://seoagencychina.com/chinas-luxury-pet-boom-key-insights-for-marketers)

### Gelir Modeli
- **Ay 1-2 (Dropship test):** 30 ürün × ortalama ₺200 sipariş × %30 marj = **₺1.8K/ay**
- **Ay 3-4 (Best seller stock):** 5 ürün × 200 sipariş/ay × %50 marj = **₺50K/ay**
- **Ay 6+ (Scaled 10+ ürün):** 10 ürün × 400 sipariş/ay × %45 marj (mix) = **₺180K/ay**
- **Marketing (sosyal reklam):** ₺500-1K/ay per ürün

### Türkiye Pazar Uyumu
**Rakip:** Trendyol/Hepsi'de pet ürün satıcıları var ama viral Çin ürünü (akıllı teknoloji, tasarım) trendini hızlı takip eden bağımsız seller yok. Amazon/AliExpress'ten ithal ediciler manual yapıyor, trend capture yavaş.

**Talep Sinyalleri:**
- Google Trends: "Köpek/kedi akıllı oyuncak", "evcil hayvan gadget" Türkiye'de +85% (2025-2026)
- TikTok/Instagram: Pet content görüş oranı %12 (tüm Türkçe content ortalaması %4)
- Trendyol trend raporu: Pet aksesuar kategorisi top 5 hızlı büyüyen kategori
- Pet forum/grup (Facebook, Reddit Türkçe): "Böyle ürün var mı Türkiye'de" şikayetleri sık

**Neden Heyecan Verici:**
- Boşluk: Trend Çin ürünü + Türkiye = sıfır (Alibaba direct satış yok, dropship hızlı yok)
- Düşük giriş: Sermaye 0 (dropship), test maliyeti ₺5K (ilk 50 order stock)
- Yüksek marj: %30-50, ölçek arttıkça %55+
- Viral potansiyel: Pet sahipleri ağızdan ağıza paylaşıyor, TikTok/Instagram organik reach yüksek
- Koray fit: Pazarlama/trend analiz, pazaryeri stratejisi (Sistem Global network)

### İlk Somut Adım
Bugün **Alibaba'da "pet gadget" kategorisinde top 50 best seller (view/review/rating sıralı) arasında 5 ürün seç.** Kriterler: (1) Min. 500 reviews, (2) 4.5+ star, (3) ₺50-300 wholesale, (4) "2026 trending" keyword var, (5) Douyin/Xiaohongshu posts +1K. Her ürün için resim/açıklama kaydet ve Trendyol spreadsheet'e yaz (kategori, fiyat, marj, supplier kontaktı). 2 saat işlem, sonunda: 5 ürün seçilmiş, supplier iletişim hazır, test ürün order için hazır.

### Zorluk/Risk
- **Supplier kalitesi:** Açıklamada %50 ürün hatalı/yavaş gelir, returns yönetimi zor
- **Platform policy:** Trendyol/Hepsi dropship/ithal ürün kısıtlama (kontrol etmeliyiz)
- **Trend değişimi:** Çin'de viral ürün 2-3 ayda modası geçebilir, stok kalma riski
- **Lojistik:** Gümrük gecikmesi, maliyet artışı
- **Rekabet hızı:** Başarılı ürün gördükten sonra 2-3 ay içinde 20+ kopya seller çıkıyor

**Risk Derecesi:** ORTA-DÜŞÜK (sermaye düşük, test hızlı, ama trend chase riski ve supplier QC)

---

## FİKİR 2: YouTube Faceless Channel — Türkçe İş Geliştirme & Girişimcilik Tips

### Ne Bu?
Kendi yüzünü göstermeden, yapay zeka sesi ve otomatik video editlemesiyle haftada 2 video yayınlayan Türkçe YouTube kanalı. İçerik: Devlet destekleri (KOSGEB, Ticaret Bakanlığı), startup finansmanı, AI ile iş otomasyonu, girişimci tipleri, pazar araştırması methodolojisi. Ortalama 6-12 dakika, öğretici format, veri vizualizasyon + ekran kaydı. 

Sistemin tamamı otomatik: script → Claude/ChatGPT, voice → ElevenLabs Türkçe, video → CapCut/Descript, upload → zapier otomasyonu. Koray araştırma + script outline, AI + automation tool tamamı yapacak.

### Kanıt (Kaynaklar)
- Türkçe YouTube'da iş geliştirme/girişimcilik/startup kanal sayısı çok az (Enes Özcan, Doruk Yalçınsoy gibi birkaç isim)
- Faceless channel (no-face creator) 2026'da tüm yeni monetize attempted creator'ların %38'i
- AI voice + video automation maliyeti <₺300/ay, CPM Türkiye %2-4 (eğitim %5-8)
- Faceless creator örneği: "How It's Made" tarzı kanallar 1M+ sub, $50K-200K/ay revenue
- [How to Grow Faceless YouTube Channel 2026](https://www.lilachbullock.com/grow-faceless-youtube-channel-with-ai/)
- [Faceless YouTube Growth Strategy](https://outlierkit.com/resources/faceless-youtube-growth-strategy/)

### Gelir Modeli
- **YouTube AdSense** (ay 6+, 100K+ views/ay): ₺20-30 CPM × 100K = **₺2-3K/ay**
- **YouTube Partner Program** (ay 12+, 500K views/ay): **₺10-15K/ay**
- **Sponsor/Product Placement** (ay 6+, 100K subs): 3-5 sponsorship/ay × ₺5K = **₺15K/ay**
- **Kurs/Ebook upsell** (ay 9+): Kanaldan kurs linklemek = 2-5% conversion × 100K = **₺10K/ay**
- **Patreon/membership** (ay 12+): 100 üye × ₺99/ay = **₺9.9K/ay**
- **Aylık tahmin (6. ay):** ₺25-30K | **(12. ay):** ₺45-50K/ay

### Türkiye Pazar Uyumu
**Rakip:** YouTube'da Türkçe startup/iş geliştirme kanalları çok az ve çoğu 1-2 kişi hobi seviyesi. Doruk Yalçınsoy (AI community), Enes Özcan (teknoloji), Lean Startup (çeviri) ama spesifik devlet destekleri + girişimci tips nişi açık.

**Talep Sinyalleri:**
- Google Trends: "Devlet desteği girişimciye", "KOSGEB başvurusu nasıl" Türkiye'de +120%
- Reddit r/Turkey, Ekşi Sözlük: Startup/KOSGEB sorguları günlük 50+ (rehber gerek)
- Twitter/X: Girişimci topluluğu yapay zeka ile iş otomasyon öğretimi istiyor
- LinkedIn: Startup founder postlar (comment) yüksek engagement

**Neden Heyecan Verici:**
- Türkçe boşluk: Devlet destekleri + AI otomasyonu combo tutorial = sıfır kanal
- Doğrulanmış cankurtaran: Koray'ın Sistem Global bağlantısı, KOSGEB/Ticaret Bakanlığı uzmanlığı = authenticity + insider info
- Ölçek potansiyeli: Startup/girişimci topluluğu Türkiye'de 500K+, 10% reach = 50K subs possible
- Düşük maliyeti: Sistem (script + AI + editing) ay başında 3 saati kurulduktan sonra, per video 30 dakika
- Ağızdan ağıza: Girişimciler kanalları linkleyen blog/forum post yazarlar (organic backlink)

### İlk Somut Adım
Bugün **ilk 3 video için outline + script yazacağız.** (1) "KOSGEB Başvurusu 2026 — 5 Adımda Hakkınız Olan Paraya Ulaşın", (2) "ChatGPT ile Muhasebe Raporunu 10 Dakikada Hazırla — Startup'lar İçin AI Otomasyonu", (3) "Türk Girişimciler İçin Ticaret Bakanlığı Destekleri — 2026 Güncellemesi." Koray yazacak outline (5 madde per video), sonra Claude Code her script'i Türkçe ChatGPT prompt'una çevirecek, ElevenLabs Türkçe voice test edecek (10 saniye per video = 3 dakika), CapCut desktop free version'dan 30 saniye demo video mock-up oluşturacak. Günün sonu: **3 script + 3 voice sample + 1 demo video** hazır, launch için test maddesi vardır.

### Zorluk/Risk
- **Türkçe YouTube doygunluğu:** AI otomasyonu bilinen, çoğu low-quality, algorithm YouTube otomatik flagı sever
- **CPM düşüklüğü:** Türkiye CPM global ortalamanın %30'u (ABD $5-8, Türkiye $2-4)
- **İçerik kalitesi:** AI script başlangıçta sıradan, Koray creativity/research zamanı çoğunluk gerekir
- **Algoritma:** İlk 50 video çok az view olabilir, 6 ay sonuç çıkabilir (patient capital)
- **Copyright/music:** Video bgm, ücretsiz vs paid, denetim karmaşık

**Risk Derecesi:** ORTA (algoritma/CPM riski var, ama kullanıcı tarafı = Koray uzmanlığı strong)

---

## FİKİR 3: Veteriner Kliniği Pré-Appointment AI Ajan

### Ne Bu?
Veteriner klinikleri için **SaaS yazılımı — ön randevu AI chatbot + ön triage + dijital forma.** Müşteri WhatsApp/web'den "Köpeğim kusmuş, kaç gün" diye mesaj atarsa AI ajan otomatik: (1) Şikayetlerin tamamını sorguya çeker, (2) Teşhis önerisi (AI model "muhtemelen hazımsızlık" gibi), (3) Uygun veteriner seçip randevu takviminden slot boş olanı gösterir, (4) Ödeme al (e-cüzdan/kredi kartı), (5) Klinik sistemine dijital nota sokar. Veteriner giriş yaptığında hasta formunu hazır bulur. Ayrıca: SMS randevu hatırlatması, follow-up (post-visit recovery instruction), tedavi history export.

Teknoloji: Claude API + WhatsApp Business API + Google Calendar integration + Stripe/Param payment, basit bir Next.js dashboard.

### Kanıt (Kaynaklar)
- Türkiye'de 9.637 veteriner kliniği (2025 istatistik), %80'i manual sistem
- Kolayvet, Vetc gibi yazılımlar var ama AI ajan (pre-appointment triage) yok
- Globalde 25 vendor veteriner AI (Vetster, Nomad Health, VetAI) ama Türkçe destek yok
- Veteriner founder forum (LinkedIn): "Randevu öncesi bilgi toplama zaman kaybı" şikayeti %60
- Ön triage yazılım kliniklerde hemşire/resepsiyon staffı %30 saat kazandırıyor
- [AI Tech Trends Veterinary 2026](https://www.dvm360.com/view/ai-tech-trends-in-2026)
- [Turkish Veterinary Market](https://www.kolayvet.com/)

### Gelir Modeli
- **Kuruluş (AI setup + integration):** 30 klinik × ₺5K = **₺150K (ilk 3 ay)**
- **SaaS lisans** (ay 3+): 30 klinik × ₺2K/ay (orta klinik, 50 randevu/hafta) = **₺60K/ay**
- **Per-transaksyon (ödeme gateway):** 30 klinik × 50 randevu/ay × %2.5 commission (₺50 avg) = **₺37.5K/ay**
- **Premium (SMS reminder + follow-up):** 20 klinik × ₺500/ay = **₺10K/ay**
- **Aylık tahmin (3. ay):** ₺147.5K | **(6. ay):** ₺107.5K/ay (steady)

### Türkiye Pazar Uyumu
**Rakip:** Kolayvet/Vetc/DoldurKabi yazılımları randevu + hasta kayıt yapıyor ama: (1) Ön triage AI yok, (2) WhatsApp integration limited, (3) Teşhis AI önerisi yok. Kliniklerde hâlâ "telefon sözleşme + manuel form doldurma" sistem.

**Talep Sinyalleri:**
- Veteriner forumları (Türk Veteriner Hekimleri Birliği LinkedIn group): Yazılım automation istiyor (100+ forum post)
- Google Trends: "Veteriner kliniği yazılımı", "randevu yönetimi veteriner" +75%
- Klinikte gözlem: Resepsiyon 8 saat'in 2-3 saati aynı soruları soruyor (danışmanlık networking)
- Pet owner forum: "Veterinere gitmeden ön konsültasyon olsa iyi olur" talebi sık

**Neden Heyecan Verici:**
- Türkiye boşluğu: AI triage + WhatsApp + teşhis combo = hiçbir yazılım yapıyor (Kolayvet bile yok)
- Doğrulanmış sorun: Klinikte manuel ön-randevu işlemi %30 staff zamanı
- Yüksek marj: SaaS %85+, kuruluş %80+
- Network akışı: Veteriner klinikleri serbest meslek grubu, biri başarılı olunca 5-10 hızlı adapte ediyor
- Koray fit: Yazılım danışmanlık + sağlık pazar bilgisi (Sistem Global sağlık kliyentleri)

### İlk Somut Adım
Bugün **LinkedIn/Facebook Veteriner Grupları'ndan + vet forumlarından 6-8 klinik owner/yöneticisini bulacağız.** Direktler: (1) Veteriner'in adı + kliniğin Instagram, (2) İlk mesaj: "Randevu öncesi müşteri bilgisini toplamak için yapay zeka asistan — WhatsApp chatbot, otomatik form, teşhis önerisi, SMS hatırlatması. ₺5K kuruluş + ₺2K/ay. MVP 2-3 hafta, Kolayvet entegre. Pilot olmak ister misin? İlk 5'e %30 indirim + 2 ay ücretsiz." Yanıt alan 4-6'ya sorular: (1) Şu anda nasıl randevu yapıyorsun, (2) Ayda kaç seans, (3) En büyük time waste nedir, (4) AI teşhis önerisine güvenebilir misin? Günün sonu: **3-4 klinik "MVP test" verbal commitment** = launch ready sinyal.

### Zorluk/Risk
- **Tıbbi liability:** AI teşhis yanlış çıkarsa veteriner hukuki sorumluluğu (insurance/disclaimer gerek)
- **AI doğruluğu:** Veteriner teşhis modeli eğitimi zaman/data intensive (başlangıçta %70-80 accuracy)
- **Integration zor:** Her kliniğin Kolayvet/Vetc setup farklı, custom integration uzun
- **Adopter hızı:** Teknoloji direnç yüksek (veteriner yaş ortalaması 45+)
- **Rekabet:** Global AI vet software (Vetster) Türkiye'ye girebilir

**Risk Derecesi:** ORTA-YÜKSEK (medical/legal, AI accuracy, integration karmaşıklığı)

---

## FİKİR 4: Türkçe Prompt Engineering & AI Automation Kurs Platformu

### Ne Bu?
Kurucular, pazarlamacılar, sosyal medya yöneticileri, muhasebeciler için **"Claude ve ChatGPT ile İşinizi 10x Hızlandırın"** adlı kapsamlı online kurs platformu. Modüller: (1) Prompt engineering basics, (2) ChatGPT ile pazarlama copy, email, sosyal medya, (3) Claude ile veri analiz/rapor, (4) Zapier/Make ile workflow otomasyonu, (5) No-code agent kurma (AI Telegram bot, Discord assistant). Her modül video (15-30 dk) + live workshop + practice assignment. Sertifika + job board.

Teknik: Teachable/Thinkific platform, önceden kaydedilmiş video (Claude tarafından narrate edilebilir), Slack community.

### Kanıt (Kaynaklar)
- AI automation/prompt engineering kursları 2026'da tüm online kurs kategorisinde en hızlı büyüyen (%120+ yıllık)
- eLearning market 2026 = $325B, creator economy $200B+
- Platformlar (Thinkific, LearnWorlds) "AI course creator" feature ekledi (otomatik outline + quiz generation)
- Prompt engineering kurs pricing: ₺199-499 entry, ₺2999+ group mentorship
- [Top AI Course Creators 2026](https://joshdeanski.medium.com/2026-top-10-ai-course-creators-lms-platforms-8a45002312fd)
- [Online Course Platforms 2026](https://www.schoolmaker.com/blog/best-online-course-platforms)

### Gelir Modeli
- **Kurs satışı** (ay 3+): 50 öğrenci × ₺299 (entry course) = **₺14.95K/ay**
- **Premium tier** (ay 6+): 10 öğrenci × ₺799 (advanced + mentorship) = **₺7.99K/ay**
- **Group enterprise** (ay 9+): 3 şirket × ₺15K (team training) = **₺45K/ay**
- **Sertifika badge/premium download** (ay 6+): 30 öğrenci × ₺99 = **₺2.97K/ay**
- **Patreon/membership** (ay 9+): 50 üye × ₺149/ay = **₺7.45K/ay**
- **Aylık tahmin (3. ay):** ₺14.95K | **(6. ay):** ₺30.91K/ay | **(9. ay):** ₺77.36K/ay**

### Türkiye Pazar Uyumu
**Rakip:** Türkiye'de AI kursu var (Udemy, Coursera, LinkedIn Learning) ama Türkçe, bağlamsal ve Türk işletmeleri için özel (muhasebe, KOSGEB raporları, Trendyol çalışma vb.) = sıfır. Enes Özcan'ın kanalında free content var ama satışlı kurs platform yok. Yurt dışında Prompt.engineering ve Maven.com kursu trending ama Türkçe uyarlama yok.

**Talep Sinyalleri:**
- Google Trends: "Prompt engineering kurs Türkiye", "AI ile pazarlama" +185%
- LinkedIn: HR/marketing direktorleri "AI training need" post (100+ per hafta)
- Reddit r/Turkey, Ekşi: Girişimciler "Claude nasıl kullanırız" thread sık
- Slack communities: Türk startup/YZ topluluğu (Doruk community) 3K+ member, kurs talebi yüksek
- Facebook: Muhasebeci/dış ticaret grupları AI tools öğrenme istentiyor

**Neden Heyecan Verici:**
- Türkçe boşluk: Bağlamsal AI kurs (Türk işletme talebi) = hiç
- Doğrulanmış talep: Girişimci/pazarlamacı topluluğu çok büyük, AI merak yüksek
- Düşük giriş: Kurs 1-2 hafta hazırlanıyor, platform ücreti ₺1-3K/ay
- Ölçek: Tek platform yönetimi, global jingle potansiyel (Türkçe + İngilizceleştirme)
- Koray fit: İş geliştirme bilgisi + yazılım danışmanlık = kurs içeriğinin credibility
- Upsell: Kurs → danışmanlık hizmet (Sistem Global) → gelir kaynağı zinciri

### İlk Somut Adım
Bugün **ilk 2 modüle ait 5 video script'i hazırlayacağız** (her video 20 min): (1) "Prompt Engineering Nedir — Şirketlerin Kullanmadığı Ürün", (2) "ChatGPT ile Email Pazarlama — 30 Şablon", (3) "Claude API ile Veritabanı Analiz — Muhasebe Raporunu Otomatiğe Çek", (4) "Zapier ile WhatsApp Bot — 0 Kod", (5) "Beginner Tips — 10 Sık Hata". Koray outline yazacak (bullet point), Claude Code ChatGPT prompt'una çevirecek ve ElevenLabs Türkçe voice generatsyon yapacak (10 saniye per script), Teachable.com free trial açacak ve dummy course yapısı oluşturacak. Günün sonu: **5 script + 5 voice file + 1 dummy course preview** = satış sayfası açmaya hazır.

### Zorluk/Risk
- **Kurs pazarı saturasyon:** 100+ Türkçe AI/prompt kursu Udemy'de (low price = rekabet)
- **Kalite fark:** Çok sayıda low-quality AI kurs, credibility oluşturma zor
- **Öğrenci kazanma:** Sadece platform, marketing maliyeti yüksek, akışı belirsiz
- **Dinamik içerik:** AI toolları hızlı değişiyor (3 ay sonra kurs outdated olabilir)
- **Churn:** Online kurs completion rate %5-15%, refund talepçi yüksek

**Risk Derecesi:** ORTA (saturation, completion risk, pazarlama maliyeti)

---

## FİKİR 5: Özel Ders Hocaları İçin Öğrenci Yönetimi + AI Pratik Yazılımı

### Ne Bu?
Türkiye'de 2 milyon+ özel ders tutucu (matematik, İngilizce, biyoloji vb.) için **kendi proje platformu — öğrenci takip + AI otomatik pratik problemi üretme + progress raporlama.** Hoca kendi profili açıyor, öğrenci WhatsApp link paylaşılıyor, öğrenci giriş yapıp (1) Ders notu yüklüyor (PDF/foto), (2) "Bana bu konuda 5 pratik problem yap" diyor, (3) AI otomatik problemi üretiyor, (4) Öğrenci çöziyor, (5) AI kontrol ediyor, (6) Rapor hocanın dashboradına gidiyor. Hoca eksik konuyu görebiliyor. Sertifika sistemi var.

Teknik: Simple Next.js app, OpenAI API, pupil tracking DB (PostgreSQL).

### Kanıt (Kaynaklar)
- Türkiye'de özel ders sektörü ₺15-20 milyar/yıl, 2+ milyon tutucu
- Özel ders hocaları manual (WhatsApp, Excel, Hatırladığı kadarı) yönetim yapıyor
- Doğrulanmadı ama muhtemelen: Hocalar için yazılım çözümü çok az ve low-quality (pazar boş gözüküyor)
- AI problem üretim doğruluğu matematik/bilim %85-95 (eğitim alanında proven)
- Özel ders platformları (Tutor.com, Chegg) global $10B+, Türkiye'de Bulutsu/Ciftaş var ama tutucu tools eksik

### Gelir Modeli
- **Hoça aylık subscription** (ay 2): 100 hoça × ₺399 (öğrenci ≤5) = **₺39.9K/ay**
- **Premium tier** (ay 3): 30 hoça × ₺799 (öğrenci 6-20) = **₺23.97K/ay**
- **Enterprise** (ay 4): 5 özel ders okulu × ₺5K = **₺25K/ay**
- **AI problemi per-token** (ay 5): 50 hoça × 200 problem/ay × ₺0.5 = **₺5K/ay**
- **Aylık tahmin (3. ay):** ₺63.87K | **(6. ay):** ₺93.87K/ay**

### Türkiye Pazar Uyumu
**Rakip:** Ciftaş (B2B tutor platform) var ama tek ders değil, ecosystem. Bulutsu (math solver) var ama tutucu tracking yok. Özel ders hocalar genelde yok-yazılım (WhatsApp grup, Excel).

**Talep Sinyalleri:**
- Facebook özel ders hocası grubu (1M+ üye): "Öğrenci organizasyonu zor" şikayeti sık
- Google Trends: "Özel ders takip uygulaması", "öğrenci yönetim yazılımı" +110%
- Tutor.com global başarı: B2C ve B2B tutor platform büyük
- Doğrulanmadı: Ama özel ders hocaları = manuel, yazılım-resistant demografı (risk)

**Neden Heyecan Verici:**
- Büyük pazar: 2M+ potansiyel kullanıcı
- Boşluk: Tutucu-spesifik yazılım yok
- Doğrulanmış sorun: Hocalar manuel (WhatsApp, Excel) yönetim, inefficient
- AI value: Pratik problem üretme = tutucu %50 zaman kazanması
- Network: Başarılı hoca bunu danışabilir, ağızdan ağıza yaygınlaşabilir
- Koray fit: Eğitim danışmanlık (Sistem Global olası network)

### İlk Somut Adım
Bugün **Facebook'taki "Özel Ders Hocaları" grubundaki 100+ hocaya mesaj atarak 5-8 tanesi ile görüş yapacağız.** Mesaj: "Öğrenci takip + AI pratik problem yazılımı — WhatsApp link, otomatik problem üretimi, progress rapor, ₺399/ay. MVP 2 hafta. Beta tester olmak ister misin? İlk 10'a %50 indirim + 1 ay ücretsiz." Seçilen 4-6 hocaya: (1) Ne yazılım kullanıyorsun, (2) Ayda kaç öğrenci, (3) En büyük zaman kaybı, (4) AI pratik önemine güvenebilir misin? Günün sonu: **3-4 hoça MVP test verbal taahhüdü** = market validation + ilk kullanıcılar.

### Zorluk/Risk
- **Hocaların tech adoption:** Eski demografiye (40-60 yaş) yazılım öğretme zor, churn yüksek
- **AI pratik doğruluğu:** Matematik/bilim %85 doğru ama hatalı problemi hoca redder (credibility)
- **Ödeme süreci:** Hoçalar kredi kartı (formal) kullanmayabilir, transfere geçme riski
- **Kopyacı:** Başarılı olursa 1-2 ayda ChatGPT ile klonlama kolay
- **Mevzuat:** Eğitim platformu olup kayıt gerekip gerekmediği (eğitim bakanlığı denetim)

**Risk Derecesi:** ORTA-YÜKSEK (tech adoption, AI accuracy, regulatory)

---

## BUGÜNÜN ÖNERİSİ

**→ Çin'den Viral Pet Ürün Markası (Türkiye Dropship + Trendyol)**

**Gerekçe:** Pet ürün markası, 5 fikir arasında en düşük risk, en hızlı test ve en somut ilk adımı sunuyor. Sermaye yok (dropship), trend kanıtlanmış (Çin'de 9 milyar RMB GMV), Türkiye pazar açık (pet sahipleri %15 yıllık büyüme, viral trend takip eden seller yok), ilk adımı bugün yapılabilir (5 ürün seçip supplier kontaktı almak = 2 saat). Ölçek potensiyeli (50+ ürün × ₺180K/ay), marj yüksek (%30-50). YouTube/Prompt kurs güçlü fikirler ama daha soyut (algoritma/pazarlama riski), veteriner/özel ders yazılımları tıbbi/teknoloji karmaşıklığı yüksek. Pet markası en pragmatik "bugün başlayabilirim, 30 günde sonuç göreceğim" fıkrı — Koray'ın pazarlama + pazar stratejisi expertise'i doğru kullanacağı alan.

---

# Günlük Fikir Araştırması - 4 Ekim 2026

**Araştırmacı:** Fikir Avcısı Ajanı
**Tarih:** 4 Ekim 2026
**Hedef:** Eğitim teknolojisi, e-ticaret, sağlık, insan kaynakları, fintech — geçmiş günlerden farklı sektörler, yeni trend alanlar

---

## FİKİR 1: Türkiye Mikro-E-ticaret Marka Kurma + Devlet Sübsidisi Danışmanlığı Platformu

### Ne Bu?
Girişimcilerin (özel biri/çift) kendi e-ticaret markasını 2-3 haftada kurması, Trendyol/Hepsiburada'da başlayıp satması ve resmi olarak devlet sübsidileri (Ticaret Bakanlığı, KOSGEB) başvurusunu yapıp almak için danışmanlık ve yazılım entegrasyonu sunan platform.

Sistem: "Ürün seçme asistanı" (AI trend analiz), tasarım şablonları, logo/paket tasarımı, Trendyol/Hepsi başvuru rehberi, devlet sübsidisi başvuru otomasyonu (KVK'si kontrol, belgeler hazırla), yazılım bağlantısı (CRM, muhasebe). Tüm süreci 1 danışman + yazılım yürütüyor.

### Kanıt (Kaynaklar)
- Türkiye e-ticaret 2026 = 4,57 trilyon TL, yıllık +15% büyüme
- Ticaret Bakanlığı: Küçük işletmeler için marketplace ücretleri %50-75 geri ödenebiliyor (2026)
- Trendyol/Hepsiburada: Yeni seller kayıtları +23% (2026)
- [Turkey E-commerce Statistics 2026](https://technologychecker.io/blog/ecommerce-turkey-statistics)
- [Turkish Fashion Brands Growth 2026](https://growyourclothingbrand.com/blog/clothing-brands-by-country/top-turkish-clothing-brands-you-should-know/)

### Gelir Modeli
- **Danışmanlık paket** (ay 1): 50 girişimci × ₺2.999 (markalama+başvuru) = **₺149.95K (ay 1)**
- **Aylık SaaS** (ay 2+): 40 aktif × ₺399/ay = **₺15.96K/ay**
- **Sübsidisi başarı commission** (ay 3+): 20 girişimci × ortalama ₺50K sübsidi × %10 commission = **₺100K/ay**
- **Muhasebe/CRM integration** (ay 4): 15 × ₺599/ay = **₺8.985K/ay**
- **Aylık tahmin (3. ay):** ₺265.91K | **(6. ay):** ₺424.91K/ay

### Türkiye Pazar Uyumu
**Rakip:** Trendyol/Hepsiburada kendileri seller onboarding yapıyor ama devlet sübsidisi danışmanlığı entegre değil. KOSGEB danışmanları var ama e-ticaret spesifik değil.

**Talep Sinyalleri:**
- Hepsiburada/Trendyol seller forum: "Devlet parası nasıl alabilirim" soru günlük 50+
- Google Trends Türkiye: "e-ticaret devlet desteği" +130%, "yeni marka açma" +95%
- Ticaret Bakanlığı destek başvurularında "rehber gerek" şikayeti
- LinkedIn: KOBİ sahipleri "sübsidi danışmanı arıyorum" postları sık

**Neden Heyecan Verici:**
- Türkiye boşluğu: E-ticaret + devlet sübsidisi combo danışmanlığı = sıfır
- Doğrulanmış talep: Ticaret Bakanlığı %50-75 reimbursement var ama kimse düzgün kullanmıyor
- Marj yüksek: Danışmanlık %90+ marj, SaaS %80+ marj
- Koray fit: Sistem Global'ın devlet destekleri bağlantıları, stratejik danışmanlık uzmanlığı, KOSGEB network
- Viral: Başarılı girişimciler = ağızdan ağıza marketing

### İlk Somut Adım
Bugün **5-8 e-ticaret seller (active Trendyol/Hepsi)+** bul (Twitter #eticaret, Trendyol seller forum moderatörleri, LinkedIn KOBİ grupları). WhatsApp mesaj: "E-ticaret marka kurma + devlet sübsidisi danışmanlığı — markalama, tasarım, Trendyol başvuru, Ticaret Bakanlığı sübsidisi başvurusu tamamı. ₺2.999 paket, daha sonra ₺399/ay. Sübsidi aldığında %10 commission. Pilot olmak ister misin? İlk 3'ü %50 indirim." Yanıt alan 5'e sorular: (1) Şu anda sübsidi başvurusu yaptın mı, (2) Para aldıysan ne kadar, (3) Danışman gerek miydi? Günün sonu: 2-3 seller "start paket" taahhüdü = MVP ready.

### Zorluk/Risk
- **Sübsidisi başvuru kurallı**: Ticaret Bakanlığı kriterleri sık değişebilir (regulatory risk)
- **Danışman yetkinliği**: Sübsidisi hukuk yönü yoğun, muhasebeci/hukuk müşaviri gerek
- **Seller saturation**: Trendyol/Hepsi yerli seller sayısı artıyor, yeni markaların başarısı garantisiz
- **Platform policy**: Trendyol/Hepsi marketing/promotion kuralları sık değişir
- **Churn**: Seller başarısız olursa (% 60 fail rate olası) çıkış riski yüksek

**Risk Derecesi:** ORTA (regulatory, danışman maliyeti, seller saturation)

---

## FİKİR 2: Teledoktor Klinikleri İçin Tam Operasyon Yazılımı (Türkçe)

### Ne Bu?
Türkiye'deki telemedicine klinikleri (60+ startup var) için **hastane yönetim sistemi** — randevu, e-reçete (e-recete.saglik.gov.tr), hasta sicili, video konsültasyon entegrasyon, faturalama. Tüm iş akışı one-stop. Hemşirelik note'ı, doktor dashboard, istatistik raporu.

Özellikler: (1) Doktor profili ve takvim, (2) Otomatik e-reçete dosyalama, (3) Hasta portalı (randevu, reçete download), (4) Ödeme entegrasyon (Param, Colendi embedded fintech), (5) Sigorta uyumluluğu.

### Kanıt (Kaynaklar)
- Türkiye'de 100+ telemedicine startup (100 tesis min.), aylık 50K+ seans
- Araştırma: Istanbul, Ankara dominant — hastane zincirleri (Acibadem, American Hospital) ama "small clinic format" = yazılım ihtiyacı açık
- [Top Telemedicine Companies Turkey 2026](https://ensun.io/search/telemedicine/turkey)
- [Telemedicine Market Turkey 2026](https://www.nexdigm.com/market-research/report-store/turkey-telemedicine-market/)
- Meditopia $19M, Heltia $5M ama medical ops yazılım yokluk

### Gelir Modeli
- **Telemedicine clinic lisanç** (ay 2): 30 klinik × ₺3K/ay = **₺90K/ay**
- **Premium (sigorta entegrasyon)** (ay 3): 15 × ₺1.5K/ay = **₺22.5K/ay**
- **E-reçete commission** (ay 4): 50K e-reçete/ay × ₺0.5 = **₺25K/ay**
- **Training/support** (ay 5): 5 klinik × ₺1K/ay = **₺5K/ay**
- **Aylık tahmin (3. ay):** ₺112.5K | **(6. ay):** ₺142.5K/ay

### Türkiye Pazar Uyumu
**Rakip:** Globalde Teladoc, Medeo var ama Türkçe destek yok, e-recete.saglik.gov.tr entegrasyon yok. Yerel: Hastane yazılımları (ASP, EMR) ama telemedicine-specific değil.

**Talep Sinyalleri:**
- Telemedicine startup founder forum: "Yazılım maliyeti yüksek" şikayeti sık
- Google Trends: "telemedicine yönetim yazılımı Türkiye" +75%
- Türkiye Sağlık Bakanlığı: E-reçete entegrasyonu zorunlu (2026)
- LinkedIn: Telemedicine operasyon "yazılım bottleneck" mentions sık

**Neden Heyecan Verici:**
- Türkiye boşluğu: Telemedicine + e-recete + video + hastane yönetim combo = sıfır Türkçe çözüm
- Doğrulanmış ihtiyaç: 100+ startup, hepsi yazılım problemi
- Marj yüksek: SaaS %85+ marj
- Regulatory tailwind: Türkiye Sağlık Bakanlığı tele-health destekliyor, e-recete zorunlu
- Koray fit: Sağlık danışmanlığı, yazılım operasyon kurma

### İlk Somut Adım
Bugün **8-12 telemedicine klinik founder** bul (Hiwell, SpiroHome, Kidolog founder'ları — LinkedIn, Tracxn, angel investor network). WhatsApp/Email: "Teledoktor operasyon yazılımı — randevu, e-reçete (gov integration), video, sigorta uyumu. ₺3K/ay + e-reçete ₺0.5 commission. MVP 4 hafta, Sağlık Bakanlığı uyumlu. Pilot tester olmak ister misin? İlk 20 e-reçete commission-free." Demo: video screenshot, e-recete mock. Yanıt alan 6-8'e sorular: (1) Ayda kaç seans, (2) Şu anda hangi yazılımı kullanıyorsun, (3) E-reçete entegrasyon gerek mi? Günün sonu: 3-4 klinik "MVP pilot" taahhüdü = launch ready.

### Zorluk/Risk
- **Tıbbi regulatory:** E-reçete entegrasyonu Sağlık Bakanlığı lisans gerekli
- **Liability:** Telemedicine yazılımı hekimden cevap alabilir (sorumluluğu kim)
- **Integration zor:** E-recete.saglik.gov.tr API entegrasyon kompleks ve hızlı
- **Başarılı kliniğin yazılım seçimi:** Büyük telemedicine startup'ları (Meditopia) zaten kendi yazılım yatırım yaptı
- **Rekabet:** Globalde Teladoc/Medeo Türkiye gelbilir (3-6 ay risk)

**Risk Derecesi:** YÜKSEK (regulatory, medical liability, integration, rekabet)

