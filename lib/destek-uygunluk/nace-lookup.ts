// En sık kullanılan ~80 NACE Rev.2 kodu için kısa açıklama sözlüğü.
// Tam liste ~700 alt kod içerir; bu tam kapsamlı DEĞİL, sadece kullanıcı
// deneyimini iyileştiren bir yardımcı — kod bulunamazsa sessizce hiçbir
// şey göstermiyoruz, "yanlış/eksik" bir şey iddia etmiyoruz.
export const NACE_ACIKLAMALARI: Record<string, string> = {
  "01": "Bitkisel ve hayvansal üretim ile avcılık ve ilgili hizmet faaliyetleri",
  "10": "Gıda ürünlerinin imalatı",
  "13": "Tekstil ürünlerinin imalatı",
  "14": "Giyim eşyalarının imalatı",
  "16": "Ağaç, ağaç ürünleri ve mantar ürünleri imalatı",
  "17": "Kağıt ve kağıt ürünlerinin imalatı",
  "20": "Kimyasalların ve kimyasal ürünlerin imalatı",
  "21": "Temel eczacılık ürünlerinin ve eczacılığa ilişkin malzemelerin imalatı",
  "22": "Kauçuk ve plastik ürünlerin imalatı",
  "23": "Diğer metalik olmayan mineral ürünlerin imalatı",
  "24": "Ana metal sanayii",
  "24.44": "Bakırın çekilmesi ve haddelenmesi",
  "24.44.04": "Bakırın çekilmesi ve haddelenmesi ile tüp, boru, bağlantı elemanları, bar, çubuk, tel ve profil imalatı",
  "25": "Fabrikasyon metal ürünleri imalatı (makine ve teçhizat hariç)",
  "26": "Bilgisayarların, elektronik ve optik ürünlerin imalatı",
  "27": "Elektrikli teçhizat imalatı",
  "28": "Başka yerde sınıflandırılmamış makine ve ekipman imalatı",
  "29": "Motorlu kara taşıtı, treyler (römork) ve yarı treyler (yarı römork) imalatı",
  "30": "Diğer ulaşım araçlarının imalatı",
  "31": "Mobilya imalatı",
  "32": "Diğer imalatlar",
  "33": "Makine ve ekipmanların kurulumu ve onarımı",
  "35": "Elektrik, gaz, buhar ve havalandırma sistemi üretim ve dağıtımı",
  "36": "Suyun toplanması, arıtılması ve dağıtılması",
  "41": "Bina inşaatı",
  "42": "Bina dışı yapıların inşaatı",
  "43": "Özel inşaat faaliyetleri",
  "45": "Motorlu kara taşıtlarının ve motosikletlerin toptan ve perakende ticareti ile onarımı",
  "46": "Motorlu kara taşıtları ve motosikletler dışında kalan toptan ticaret",
  "47": "Motorlu kara taşıtları ve motosikletler dışında kalan perakende ticaret",
  "49": "Kara taşımacılığı ve boru hattı taşımacılığı",
  "50": "Su yolu taşımacılığı",
  "51": "Hava yolu taşımacılığı",
  "52": "Taşımacılık için depolama ve destekleyici faaliyetler",
  "55": "Konaklama",
  "56": "Yiyecek ve içecek hizmeti faaliyetleri",
  "58": "Yayıncılık faaliyetleri",
  "61": "Telekomünikasyon",
  "62": "Bilgisayar programlama, danışmanlık ve ilgili faaliyetler",
  "62.01": "Bilgisayar programlama faaliyetleri",
  "62.02": "Bilgisayar danışmanlık faaliyetleri",
  "63": "Bilgi hizmet faaliyetleri",
  "64": "Finansal hizmet faaliyetleri (sigorta ve emeklilik fonları hariç)",
  "69": "Hukuk ve muhasebe faaliyetleri",
  "70": "İdare merkezi faaliyetleri; idari danışmanlık faaliyetleri",
  "71": "Mimarlık ve mühendislik faaliyetleri; teknik test ve analiz faaliyetleri",
  "72": "Bilimsel araştırma ve geliştirme faaliyetleri",
  "73": "Reklamcılık ve piyasa araştırması",
  "74": "Diğer mesleki, bilimsel ve teknik faaliyetler",
  "77": "Kiralama ve leasing faaliyetleri",
  "78": "İstihdam faaliyetleri",
  "79": "Seyahat acentesi, tur operatörü ve diğer rezervasyon hizmetleri ile ilgili faaliyetler",
  "82": "Büro yönetimi, büro idaresi ve diğer iş destek faaliyetleri",
  "85": "Eğitim",
  "86": "İnsan sağlığı hizmetleri",
  "87": "Yatılı bakım faaliyetleri",
  "88": "Barınacak yer sağlanmaksızın verilen sosyal hizmet faaliyetleri",
};

export function naceAciklamaBul(naceKodu: string): string | null {
  const temiz = naceKodu.trim();
  if (!temiz) return null;
  const parcalar = temiz.split(".").filter(Boolean);
  // Önce tam kodu dener (24.44.04), sonra son parçayı ata ata daralır (24.44, 24).
  for (let n = parcalar.length; n >= 1; n--) {
    const aday = parcalar.slice(0, n).join(".");
    if (NACE_ACIKLAMALARI[aday]) return NACE_ACIKLAMALARI[aday];
  }
  return null;
}
