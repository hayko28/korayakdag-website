# SEO Denetimi, 23 Kasım 2026

Kapsam: canlı site (curl ile 12 sayfa, robots, sitemap, yönlendirmeler) ve kod okuma (app/layout.tsx, app/sitemap.ts, sayfa metadata). Kodda değişiklik yapılmadı. Search Console verisi yok, performans ölçümü yapılmadı (yalnızca TTFB).

## Kritik

### 1. Kanonik etiketi yüzlerce sayfada ana sayfaya işaret ediyor
Neden: [app/layout.tsx](../app/layout.tsx) içinde `alternates.canonical: "/"` tanımlı. Kendi canonical'ını tanımlamayan her sayfa bunu miras alıyor ve Google'a "asıl sayfa ana sayfa" diyor.

Etkilenenler (kaynakta canonical yok):
- /makaleler/* altındaki 122 sayfanın tamamı
- /blog (liste), /guncel-gelismeler, /kosgeb-danismanlik, /web-sitesi-paketi, /en, /tubitak-danismanlik, /yatirim-tesvik-belgesi-danismanligi, /ihracat-destekleri-danismanligi, /tesvik-takvimi, /destek-uygunluk-analizi, /en/blog

Canlıda doğrulananlar: /makaleler/tubitak-1507..., /kosgeb-danismanlik, /guncel-gelismeler, /web-sitesi-paketi, /blog, /en. Diğerleri kaynak okumasından çıkarım.

Doğru çalışanlar: 145 statik blog yazısı, EN blog yazıları, KDV ve kıdem hesaplayıcıları, /ornek-senaryolar.

Düzeltme: layout'taki genel canonical'ı kaldırmak ve eksik sayfalara kendi canonical'ını eklemek. Makaleler için tek bir yerden (ortak bileşen veya şablon) çözülebilir mi, bakılmalı.

## Yüksek

### 2. Sitemap eksik ve tarihsiz
- `lastmod` yok (312 URL'nin hiçbirinde). Güncel içerik sinyali veremiyor.
- Sitemap'te olmayan sayfalar: /guncel-gelismeler, /web-sitesi-paketi, /ornek-senaryolar, /kdv-iadesi-hesaplama, /kidem-tazminati-hesaplama.
- İki hesaplayıcı arama trafiği potansiyeli taşıyor.

### 3. /en sayfalarında dil ve hreflang hatası
- /en ve /en/blog/* sayfalarında `<html lang="tr">`.
- /en ana sayfasının title ve description'ı Türkçe.
- DÜZELTME: Blog çevirilerinde (18 çift) hreflang vardı, ilk taramada büyük/küçük harf yüzünden kaçırıldı. Eksik olan ana sayfa ve liste sayfalarıydı, eklendi.

## Orta

### 4. Meta description uzunlukları
Birçok sayfada 200-570 karakter (blog 370, makale 573, ornek-senaryolar 320). Google yaklaşık 155-160 karakterde kesiyor. Sadece ana sayfa uygun (159).

### 5. Başlık ve description tekrarı
/blog ve /en sayfalarının title ve description'ı ana sayfayla aynı ("Koray Akdağ | Stratejik Danışmanlık").

### 6. Sayfa ağırlığı
/blog liste sayfası yaklaşık 600 KB HTML. Yazı sayısı arttıkça büyüyor. Sayfalama veya "daha fazla yükle" düşünülebilir. TTFB iyi (0,1-0,2 sn). LCP/CLS ölçülmedi.

## Düşük

- www.korayakdag.com bağlantı kuramıyor (kod 000). Kullanıcı www yazarsa site açılmayabilir. DNS/Vercel domain ayarı kontrol edilmeli.
- FAQPage şeması blog yazılarında var. Google artık FAQ zengin sonucu vermiyor, zararsız ama kazanç beklenmemeli.

## Sağlam olanlar
- robots.txt doğru (yonetim ve api kapalı, sitemap bağlı).
- http→https 308, trailing slash tutarlı, 404 doğru kodla dönüyor.
- Her sayfada tek H1, title'lar anlamlı.
- JSON-LD: Person, ProfessionalService, Article, BreadcrumbList blog ve makalelerde mevcut.

## Önerilen sıra
1. Canonical düzeltmesi (en büyük etki, küçük kod değişikliği).
2. Sitemap'e eksik sayfalar ve lastmod.
3. EN sayfaları: lang ve hreflang.
4. Meta description kısaltma (yeni yazılarda kural, eskilerde kademeli).
5. www domain kontrolü.

## Bilinmeyenler
Search Console'daki dizinleme durumu ("Alternatif sayfa, uygun kanonik etiketi var" gibi) bu bulguyu doğrulayabilir. Koray'ın GSC'de Sayfalar raporuna bakması önerilir.

## Uygulananlar (23 Kasım 2026)
- Canonical düzeltmesi: layout'taki genel canonical kaldırıldı, 128 makale ve 13+ sayfaya kendi canonical'ı eklendi.
- Sitemap'e 5 eksik sayfa eklendi (lastmod hâlâ yok).
- Ana sayfa ve blog liste sayfalarına TR-EN hreflang eklendi.
- Yapılmadı: html lang (tek kök layout, riskli), meta description kısaltma, www domain, lastmod.
