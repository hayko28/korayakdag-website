# Koray Akdağ Website - Claude Code Rules

## Proje amacı

Bu proje Koray Akdağ'ın kişisel marka ve iş geliştirme platformudur.

Konumlandırma:
- Strateji ve İş Geliştirme Danışmanı
- Ana hedef: güven oluşturmak, uzmanlığı göstermek, organik trafik ve potansiyel müşteri/iş fırsatları üretmek.
- Site yalnızca görsel bir kişisel web sitesi olarak değil, uzun vadede Koray'ın bağımsız müşteri ve gelir kanalı olarak geliştirilmelidir.
- İçerik alanları: devlet destekleri, yatırım teşvikleri, TÜBİTAK/KOSGEB, Ticaret Bakanlığı destekleri, yurt dışında şirket kuruluşu, şirket değerleme, iş geliştirme, stratejik danışmanlık ve ilgili kurumsal konular.

## Teknoloji

- Next.js 16
- TypeScript
- App Router
- Tailwind CSS
- Mevcut proje yapısını koru.
- Mevcut çalışan özellikleri gereksiz yere yeniden yazma.

## Çalışma prensipleri

1. Önce mevcut yapıyı ve ilgili dosyaları incele, sonra değişiklik yap.
2. Kullanıcı açıkça istemedikçe büyük çaplı değişiklik yapma.
3. Çalışan kodu sırf daha farklı yapmak için değiştirme.
4. Bir işi tamamlamak için gereken en az sayıda dosyayı değiştir.
5. Gereksiz yeni component, dependency, dosya veya mimari oluşturma.
6. Aynı işi tekrar yapma.
7. Hata oluşursa önce hatanın gerçek nedenini tespit et; rastgele çözüm denemeleri yapma.
8. Değişiklik sonrasında mümkün olan en hafif doğrulamayı yap.
9. Büyük veya çok dosyalı işlerde önce kısa bir plan oluştur; küçük işlerde gereksiz planlama yapma.
10. Kullanıcı "yap" dediğinde gereksiz uzun açıklamalar yerine doğrudan işe geç.
11. Türkçe kullanıcı içeriğini doğal, profesyonel ve insan tarafından yazılmış gibi hazırla.

## Token ve context optimizasyonu

- Token kullanımını mümkün olan en düşük seviyede tut.
- Gereksiz proje taraması yapma.
- Daha önce elde edilmiş bilgiyi tekrar analiz etme.
- Gereksiz uzun açıklama ve tekrar üretme.
- Bir bilgi veya analiz kalıcı olarak gerekiyorsa uygun dokümana kaydetmek, tekrar tekrar context'e taşımaktan daha değerlidir.
- Token tasarrufu kaliteyi veya güvenliği bozacaksa gerekli tokenı kullan.
- Amaç: minimum gereksiz token + maksimum çıktı kalitesi.

## Kod değişiklikleri

- Önce ilgili dosyayı oku.
- Sadece gerekli bölümü değiştir.
- Mevcut tasarım dilini ve responsive yapıyı koru.
- Kullanıcı istemedikçe mevcut sayfa yapısını bozma.
- Dosya silmeden veya büyük bir mimari değişiklik yapmadan önce nedenini belirt.
- Yeni bir dependency eklemek gerçekten gerekli değilse ekleme.

## Web sitesi stratejisi

Site uzun vadede şu sistemi desteklemelidir:

Web sitesi
→ kaliteli uzmanlık içerikleri
→ SEO / organik trafik
→ potansiyel müşteri
→ iletişim / talep
→ danışmanlık veya iş fırsatı
→ gelir

Bu nedenle teknik geliştirmelerde yalnızca görünüş değil;
- SEO
- performans
- güven
- içerik üretilebilirliği
- dönüşüm
- kullanıcı deneyimi
- sürdürülebilir bakım
öncelikli düşünülmelidir.

## AI ve otomasyon

İlerleyen aşamalarda site ve iş geliştirme süreçlerinde AI/agent tabanlı otomasyonlar değerlendirilecektir.

Ancak:
- Önce mevcut ihtiyacı belirle.
- Gereksiz AI özelliği ekleme.
- AI kullanımı gerçek bir zaman, kalite, satış veya gelir avantajı sağlıyorsa uygula.
- Gereksiz API maliyeti oluşturma.

## Güvenlik

- `.env` ve gizli anahtarları asla commit etme.
- API anahtarlarını, şifreleri veya kişisel bilgileri kod içine yazma.
- Mevcut authentication ve database yapısını kullanıcı istemeden bozma.

## Öncelik sırası

1. Doğruluk
2. Kullanıcının gerçek amacı
3. Mevcut sistemi korumak
4. Sadelik
5. Performans
6. Token/context verimliliği
7. Görsel iyileştirme@AGENTS.md
