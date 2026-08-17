# Günlük Fikir Araştırması - 17 Ağustos 2026

**Araştırmacı:** Fikir Avcısı Ajanı  
**Tarih:** 17 Ağustos 2026  
**Hedef:** Koray Akdağ'ın stratejik danışmanlık işine uygun, kanıtlanmış pazarlı fikirler

---

## FİKİR 1: KOSGEB/TÜBİTAK AI Başvuru Asistanı

### Ne Bu?
KOBİ'lerin (Küçük ve Orta Ölçekli İşletmeleri) KOSGEB ve TÜBİTAK desteklerine başvurma sürecini otomatikleştiren AI-powered SaaS aracı. Yazılım, başvuru dokümanlarini hazırlar, uyum kontrolleri yapar, başvuru öncesi eksiklik raporları sunar.

### Kanıt (Kaynaklar)
- [KOSGEB 2026 Destekleri Rehberi - Paraşüt](https://www.parasut.com/blog/kosgeb-nedir-basvuru-ve-destekler)
- [KOSGEB Başvuru Rehberi - Sun & Sun International](https://www.sunandsun.com.tr/kosgeb-kapasite-gelistirme-destek-programi-nedir-2026-basvuru-rehberi/)
- [2026 KOBİ Destekleri - Faturaport](https://faturaport.com/blog/on-muhasebe/2026-kobi-destekleri-nelerdir-kosgeb-tubitak-sgk)

**Gerçek Sorun:** Başvuruların reddedilme sebebi hata/eksiklikler (faaliyet kodu yanlış, YODA raporu eksik, KOBİ beyannamesinde yanlış bilgi). Çoğu KOBİ profesyonel danışman alamıyor.

### Gelir Modeli
- Freemium: Temel form kontrolü ücretsiz, başvuru dosyası düzenleme ₺499/başvuru
- Premium (Danışman): Canlı danışman desteği ₺2,000-5,000/proje
- B2B: Muhasebe firmaları, hukuk müşavirler, danışmanlık şirketlerine lisans (₺5,000-10,000/ay)
- Affiliate: Danışman bulsturması (başarılı başvuru başına %10)

### Türkiye Pazar Uyumu
**Rakip:** Minimal. Otomatik başvuru asistanı yok. Danışmanlar manuel hizmet veriyor (çok pahalı).  
**Talep Sinyalleri:** 
- 2026 ikinci dönem başvuruları Nisan-Mayıs'ta kapandı (talep var)
- KOBİ'ler "danışman maliyet"inden şikayet ediyor
- Türkiye'de 1.4+ milyon KOBİ, ≈%30'u destek başvurusu yapıyor = 400K+ potansiyel müşteri

**Neden Heyecan Verici:** KOSGEB devlet destekli, yıllık ₺50M+ bütçe. Kamu desteği sorgulanmaz, talep garantili.

### İlk Hafta Adımı
1. KOSGEB website'den 5 farklı destek programının başvuru şartlarını indir
2. Claude + Next.js ile basit checklist aracı yap (form validation)
3. Koray'ın kendisi bir KOBİ başvurusu scenario'sunu test et
4. 5-10 muhasebe firmasına erişim talebi gönder (beta tester)

### Zorluk/Risk
- KOSGEB kuralları sıkça güncelleniyor (kurala uyum zorlayacak)
- Yasal sorumluluk (yanlış başvuru reddedilince kim cevap verir?)
- Uzmanlık gerektirme (Türk vergi/hukuk bilgisi şart)
- Deregumasyon riski (KOSGEB sistemi tamamen online hale gelirse talep azalır)

**Risk Derecesi:** ORTA (talep garantili ama yasal risk var)

---

## FİKİR 2: Türkçe Content Repurposing Platform

### Ne Bu?
Long-form içeriği (blog yazısı, podcast, video) otomatik olarak short-form formatlara (TikTok, Instagram Reels, YouTube Shorts, LinkedIn post) dönüştüren AI aracı. Türkçe-native, Türkiye'ye özel influencer/yayıncı pazarına yönelik.

Örnek: Koray'ın 3,000 kelimeli stratejik danışmanlık blog yazısını otomatik olarak 5 kısa video, 10 sosyal post, 1 podcast klibi yapıyor.

### Kanıt (Kaynaklar)
- [Content Repurposing AI Tools 2026 - Pictory Blog](https://pictory.ai/blog/best-ai-content-repurposing-tools-2026)
- [Blotato: 9 Best Content Repurposing Tools](https://www.blotato.com/blog/ai-content-repurposing-tools)
- [AI Content Repurposing Guide - Distribution.ai](https://www.distribution.ai/blog/ai-content-repurposing-guide)

**Pazar Kanıtı:** 
- 91% işletme video pazarlama yapıyor, 82% ROI görüyor
- AI repurposing productivity +7x, view increase +2,000x
- Content teama baskı: LinkedIn, TikTok, Shorts, email, blog aynı anda

### Gelir Modeli
- Freemium: 1 repurposing/ay ücretsiz, video/post export ₺99/ay
- Pro: ₺499/ay (10 long-form → unlimited short-form, brand voice öğren)
- Premium: ₺1,499/ay (API access, custom export, analytics)
- B2B: Ajanslar/yayıncılar için white-label (₺10,000+/ay)

### Türkiye Pazar Uyumu
**Rakip:** Pictory, Wistia, Clippable yurt dışında başarılı. **Türkiye'de benzeri yok.**  
**Talep Sinyalleri:**
- Türkiye creator economy 205B→549B (2026→2030) büyüyor
- 77M internet kullanıcı, yüksek social engagement
- Podcast pazar "henüz başlangıçta ama büyüme potansiyeli yüksek"
- Sosyal medya influencerler video dağıtım yükünden şikayet ediyor

**Neden Heyecan Verici:** Global tool'lar Türkçe optimize değil (metin parsing hatası, kültür uyumsuz). Native Türkçe tool boş pazar.

### İlk Hafta Adımı
1. Koray'ın blog yazılarından 1 tanesini manual olarak video + 3 post'a çevir (benchmark)
2. Claude + OpenAI API ile otomatik transcript → short-form script generator yap
3. HeyGen/Pictory API'yi test et (integration maliyet check)
4. 10-20 Türk YouTuber/podcast yapımcısına pilot access teklifi gönder

### Zorluk/Risk
- Yurt dışı aynı pazarın 100x büyüğü (Pictory, Wistia, Synthesia rakip)
- API maliyeti yüksek (video generation, transcription = ₺1,000+/ay)
- Türkçe NLP kalitesi İngilizce kadar değil (algoritma hata yapabilir)
- Influencer pazarı erişim zor (satış/pazarlama maliyeti)

**Risk Derecesi:** ORTA-YÜKSEK (teknisyen takım gerekli, API maliyeti, yurt dışı rekabet)

---

## FİKİR 3: Stratejist AI Araştırma Asistanı

### Ne Bu?
Koray gibi stratejik danışmanlar, pazarlama müdürleri, M&A uzmanları için AI araştırma aracı. "Şirket XYZ'nin pazardaki konumu nedir?", "Bu endüstride yatırım trendleri neler?", "Rakip A'nın stratejik hamleleri nelerdir?" sorularını otomatik araştırıyor, rapor yazıyor.

Yurt dışı rakip: Klue, VAL, AlphaSense. **Türkiye'de özel hali yok.**

### Kanıt (Kaynaklar)
- [Meet VAL - AI Research Assistant](https://valonaintelligence.com/market-intelligence-software/ai-research-assistant)
- [Klue 2026: Compete Agent](https://klue.com/topics/how-ai-helps-with-competitive-intelligence)
- [AI Tools for Competitive Intelligence 2026 - Change Connect](https://www.changeconnect.ca/post/7-ai-tools-for-competitive-intelligence-in-2026-never-lose-a-deal-to-a-blindsight-again)

**Pazar:** Consultants için "strategy bottleneck" artık data değil, synthesis. Klue'ün 2026'da Gartner Magic Quadrant'ta leader olması pazar bulunduğunu kanıtlıyor.

### Gelir Modeli
- Per-report: 1 detaylı şirket analizi raporu ₺500-1,000
- Subscription: ₺1,999/ay (unlimited araştırma, batch analysis)
- B2B: Danışmanlık firmaları, yatırım fonları (₺5,000-15,000/ay white-label)
- Affiliate: Koray kendi müşterilerine öner (commission %20)

### Türkiye Pazar Uyumu
**Rakip:** Türkiye'de A101, CarrefourSA gibi şirketleri analyze eden AI tool yok.  
**Talep Sinyalleri:**
- M&A, PE, VC pazarı hızlıyor (2025-2026)
- Danışman 30% zamanı "araştırma"ye gidiyor (verimsiz)
- Türkçe kaynaklara özel akses (borsabahis.com, stkbilgisi, halka arz blogleri vs)

**Neden Heyecan Verici:** 
- Koray kendisi TARGET CUSTOMER = Product-founder fit
- Kendi müşterilerine satabilir (Trojan horse)
- Türk pazar için specialized data source (borsa, yatırım grupları, startup DB)

### İlk Hafta Adımı
1. 5-10 Türk şirketi (Teknosa, Vestel, Ticicar vs) hakkında manual research yap
2. Claude + Perplexity API/WebSearch ile otomatik araştırma özeti üret
3. Koray kendi kullanıp feedback ver
4. 3-5 danışman arkadaşına "bu raporlar sizin araştırmanızı 50% azaltır mı?" sor

### Zorluk/Risk
- Veri doğruluğu kritik (yanlış analiz kredibilite kaybı)
- Türkçe kaynak kalitesi değişken (yanlış bilgi riski)
- Klue/VAL gibi yurt dışı araçlar hızlı Türkiye'ye girebilir
- Pazar (danışman + investor) niche ama profesyonel (high-touch satış şart)

**Risk Derecesi:** DÜŞÜK-ORTA (Koray kullanıcı, talep açık, veri riski manage edilebilir)

---

## FİKİR 4: Türk Creators İçin Podcast Monetization Toolkit

### Ne Bu?
Türk podcasters, YouTuber, content creator'lar için gelir çeşitlendirme ve otomasyon aracı. Sponsor bulmayı, üyelik sistemini, affiliate pazarlamayı, dinamik reklam eklemeyi otomatikleştiriyor.

Örnek: Metin Doğan Podcast haftada 1 saat sponsorluk bulması 5 dakikaya düşüyor.

### Kanıt (Kaynaklar)
- [Beehiiv Launches Podcast Hosting Tools](https://variety.com/2026/digital/news/beehiiv-podcast-hosting-shows-1236705198/)
- [Podcast Monetization Strategies 2026 - Content Allies](https://contentallies.com/learn/top-advanced-podcast-monetization-strategies)
- [Content Creator Economy Market 2026 - Research & Markets](https://www.researchandmarkets.com/reports/6089983/content-creator-economy-market-report)

**Pazar:** Creator economy 205B (2026) → 549B (2030). Podcast "henüz olgun değil ama potansiyel yüksek" (Türkiye).

### Gelir Modeli
- Take-rate: Creator başına 15-20% + sponsor fee
- Tiered Freemium: 0-500 dinleyici ücretsiz, 500+ sponsor match ₺199/ay
- Pro: ₺499/ay (advanced sponsor intelligence, multi-channel sync)
- Platform fee: Başarılı sponsor deal başına 10% (0% eğer direkt bulursa)

### Türkiye Pazar Uyumu
**Rakip:** Spotify for Creators dışında Turkish-native tool yok.  
**Talep Sinyalleri:**
- 77M Türk internet kullanıcı, yüksek social engagement
- Podcast market "maturity'ye doğru yol alıyor"
- Creators: "Sponsor bulmak zaman alıcı", "Farklı gelir kaynakları istiyorum"

**Neden Heyecan Verici:** 
- Global platform'lar henüz Türkçe sponsor marketplace yok
- Türk markaları (Hepsiburada, Trendyol vs) podcast sponsorluk bütçe yeni açıyor
- B2B potential: Sponsor vermek isteyen markalara creator match ediyor

### İlk Hafta Adımı
1. 20-30 Türk podcast bulup dinle, çıkış notları al
2. 5 sponsor (Notion, Skillshare, Masterclass, udemy, Coursera türü) hedefle
3. Koray'ın audio content + 2-3 podcast creator ile MVP sözleşmesi imzala
4. İlk sponsor match'ini el ile yap, sonra otomasyon planla

### Zorluk/Risk
- Creator acquisition zor (satış/pazarlama maliyeti)
- Sponsor flywheel yavaş (First 10 creator'a kadar loss-making)
- Türkçe/Türk sponsorluk pazarı yeni (bütçe çekinimli)
- Beehiiv, Spotify gibi yurt dışı platform'lar Türkiye'ye girebilir

**Risk Derecesi:** ORTA-YÜKSEK (network effect gerekli, iki taraf pazarlaması)

---

## FİKİR 5: B2B Startup Compliance Helper

### Ne Bu?
Yeni kurulan startuplar, freelancer'lar, KOBİ'ler için vergi, hukuki, HR uyumluluk otomasyonu. "Hangi vergi dosyalama tarihi?", "Kaç çalışan istihdam edebilirim?", "Proje sözleşmesi nasıl yazılmalı?" sorularını AI otomatik cevaplıyor, şablon sunar.

Türkiye-specific: SGK, KDV, Gelir Vergisi, İş Kanunu.

### Kanıt (Kaynaklar)
- [Turkey Business Process Management Market 2034 - Imarc Group](https://www.imarcgroup.com/turkey-business-process-management-market)
- [Top Automation Software Companies Turkey 2026 - Ensun](https://ensun.io/search/automation-software/turkey)
- [Compliance Automation Market Trend 2026 - IdeaPlan](https://www.ideaplan.io/ideas/trends/compliance-automation)

**Pazar:** Turkey BPM market USD 320.2M by 2034, +8.23% CAGR. Compliance automation fastest-growing subcategory.

### Gelir Modeli
- Freemium: Temel şablon/checklist ücretsiz, İK sözleşme şablonu ₺299/yıl
- Startup pack: ₺499/yıl (vergi calendar, HR sözleşmeleri, SGK forma)
- Professional: ₺1,499/yıl (canlı hukuk danışmanı access, custom contract review)
- B2B: Muhasebe firmaları, kuluçka merkezleri, kredi kurumları white-label (₺5,000+/ay)

### Türkiye Pazar Uyumu
**Rakip:** Compliance tool'lar var (yapı denetim, İSO auditor) ama startup-focused, Turkish-native yok.  
**Talep Sinyalleri:**
- Startup kuruluş maliyeti 5K-15K ₺ danışman ücretleri
- KOBİ'ler "Hangi kaynağa güveneyim?" çıkmazında kalmış
- KOSGEB başvuru şartları → compliance check şart

**Neden Heyecan Verici:** 
- Hukuki riski lower (şablon liability kısıtlı)
- Passif gelir modeli (sanal ürün)
- Integrations: KOSGEB, vergi danışmanları, accountant ekosisteminde çalışabilir

### İlk Hafta Adımı
1. Türk İş Kanunu, SGK kurallı önemli milestones list yap (takvim)
2. Claude + legal API ile 5 startup sözleşme şablonu oluştur
3. 3 startup kuluçka merkezi (Galata, İstanbul, Ankara) ile konuşmalı yap
4. Feedback al, roadmap yap

### Zorluk/Risk
- Yasal sorumluluk yüksek (yanlış bilgi mahkeme davası)
- Hukuk uzmanı gerekli (AI yetmez, review şart)
- KOBİ'ler danışman seviyesi desteğe alışmış (self-serve tool almaz)
- Deregulasyon riski (e-devlet portal'ı gelişebilir)

**Risk Derecesi:** YÜKSEK (yasal risk + expert gerekli)

---

## ÖZET: Koray'a Uygunluk Analizi

| Fikir | Talep | Teknik | Yasal Risk | Gelir Model | Koray Fit |
|-------|-------|--------|-----------|-------------|-----------|
| **KOSGEB Asistanı** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Content Repurposing** | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Stratejist AI** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Podcast Toolkit** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Compliance Helper** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ |

**Koray'a En Uygun 3:**
1. **Stratejist AI Araştırma Asistanı** (Kendisi kullanıcı, müşteri kanal, düşük risk)
2. **KOSGEB Asistanı** (Garantili talep, danışmanlık paraleli, gelir model net)
3. **Content Repurposing Platform** (Yüksek pazar potansiyel ama teknisyen takım şart)

---

## Kaynaklar

**KOSGEB/TÜBİTAK:**
- [Paraşüt KOSGEB Blog](https://www.parasut.com/blog/kosgeb-nedir-basvuru-ve-destekler)
- [Sun & Sun Capacity Program Guide](https://www.sunandsun.com.tr/kosgeb-kapasite-gelistirme-destek-programi-nedir-2026-basvuru-rehberi/)
- [Faturaport 2026 KOBİ Destekleri](https://faturaport.com/blog/on-muhasebe/2026-kobi-destekleri-nelerdir-kosgeb-tubitak-sgk)

**Content Repurposing:**
- [Pictory AI Blog](https://pictory.ai/blog/best-ai-content-repurposing-tools-2026)
- [Blotato: 9 Best Tools](https://www.blotato.com/blog/ai-content-repurposing-tools)
- [Distribution.ai Guide](https://www.distribution.ai/blog/ai-content-repurposing-guide)

**Creator Economy:**
- [Research & Markets 2026 Report](https://www.researchandmarkets.com/reports/6089983/content-creator-economy-market-report)
- [Beehiiv Podcast Hosting](https://variety.com/2026/digital/news/beehiiv-podcast-hosting-shows-1236705198/)
- [Content Allies Monetization](https://contentallies.com/learn/top-advanced-podcast-monetization-strategies)

**Competitive Intelligence:**
- [VAL Intelligence](https://valonaintelligence.com/market-intelligence-software/ai-research-assistant)
- [Klue Compete Agent](https://klue.com/topics/how-ai-helps-with-competitive-intelligence)

**Compliance/BPM:**
- [Imarc Turkey BPM Market](https://www.imarcgroup.com/turkey-business-process-management-market)
- [IdeaPlan Compliance Automation](https://www.ideaplan.io/ideas/trends/compliance-automation)

