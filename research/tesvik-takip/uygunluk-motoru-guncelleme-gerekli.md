# Uygunluk Motoru Güncelleme Gereken Konular

## TÜBİTAK 1501 2026-2 Çağrısı Kapandı — 27 Ekim 2026

- Dosya: lib/destek-uygunluk/programlar.ts (tubitak1501Degerlendir fonksiyonu, satır 412-485)
- Değişiklik: TÜBİTAK 1501 2026-2 çağrısı 26 Ekim 2026'da kapandı. Fonksiyonun 473 ve 483. satırlarında "26 Ekim 2026 (2026-2 çağrısı; ön kayıt 22 Ekim)" şeklinde sabit bir tarih yazılı. Motor bu çağrıyı hâlâ "mevcut" bir çağrı olarak görüyor. Sonuc() çağrılarında `cagriKapali: true` bayrağı eklenmelidir (veya mevcut varsa true yapılmalı), ya da tarih metni "26 Ekim 2026'da kapandı" şeklinde güncellenmeli.
- Kaynak: https://www.tubitak.gov.tr/tr/duyuru/1501-sanayi-ar-ge-destek-programi-ve-1507-kobi-ar-ge-baslangic-destek-programi-2026-yili-1-cagrilari-basvuru-takvimi-guncellendi
