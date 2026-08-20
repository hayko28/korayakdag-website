# KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı (evaluator kaynağı)

## Kaynak
Sitede zaten yayınlanmış, sourced blog yazısı: `app/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026/page.tsx`.

## Evaluator mantığı (lib/destek-uygunluk/programlar.ts → kosgebArgeUrgeInovasyonDegerlendir)
- Dernek/vakıf/kooperatif/birlik/adi ortaklık statüsü kapsam dışı.
- Kurulu şirketse KOBİ ölçek şartı (kobiOlceguHesapla) — kobi_disi ise ret. Henüz şirketi olmayan "Yeni Girişimci" (sirketTuru boş/sahis) bu kontrolden muaf tutuldu.
- Asgari personel sayısı / teknopark / ciro şartı YOK (Ar-Ge Merkezi'nden temel farkı) — bu yüzden diğer KOSGEB programlarına göre daha az kısıtlayıcı, sonuç "uygun" dönebilir.
- Toplam destek üst limiti 900.000 TL (gider kalemine göre %75-%100, makine-teçhizatta kısmi geri ödemeli).

## Not
Ür-Ge kapsamı (yalnızca KOSGEB'in desteklediği sektörler + önceki Ar-Ge/patent/TÜR belgesi şartı) form seviyesinde ayrıca sorgulanmadı, uyarı metninde belirtildi — aşırı kısıtlayıcı olmaması için.
