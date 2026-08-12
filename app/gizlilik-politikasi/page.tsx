import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni | Koray Akdağ",
  description:
    "Koray Akdağ web sitesinde kişisel verilerin işlenmesine ilişkin KVKK aydınlatma metni ve gizlilik politikası.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function GizlilikPolitikasiPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[78px]" />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-[2px] text-orange-500">
          Yasal
        </p>
        <h1 className="mb-4 text-3xl font-bold text-[#071A2F] lg:text-4xl">
          Gizlilik Politikası ve KVKK Aydınlatma Metni
        </h1>
        <p className="mb-12 text-sm text-gray-500">Son güncelleme: Ağustos 2026</p>

        <div className="space-y-10 text-[15px] leading-7 text-gray-700">
          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">1. Veri Sorumlusu</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, bu
              internet sitesi (korayakdag.com) üzerinden elde edilen kişisel verileriniz,
              veri sorumlusu sıfatıyla <strong>Koray Akdağ</strong> tarafından aşağıda
              açıklanan kapsamda işlenmektedir.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">2. İşlenen Kişisel Veriler</h2>
            <p className="mb-3">
              Site üzerindeki iletişim/teklif formunu doldurmanız halinde aşağıdaki kişisel
              verileriniz işlenmektedir:
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Ad soyad</li>
              <li>E-posta adresi</li>
              <li>Konu ve mesaj içeriğinde paylaştığınız bilgiler</li>
              <li>İlgilendiğinizi belirttiğiniz hizmet alanları</li>
            </ul>
            <p className="mt-3">
              Formu doldurmadığınız sürece, siteyi ziyaretiniz sırasında ad, e-posta gibi
              kimliğinizi belirleyici herhangi bir veri toplanmaz.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">
              3. Kişisel Verilerin İşlenme Amaçları
            </h2>
            <p>Paylaştığınız kişisel veriler;</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Talebinizi/mesajınızı değerlendirip sizinle iletişime geçebilmek,</li>
              <li>Talep ettiğiniz danışmanlık hizmetleri hakkında bilgi verebilmek,</li>
              <li>İletişim kayıtlarının takibini ve gerektiğinde sonraki yazışmaları yürütebilmek</li>
            </ul>
            <p className="mt-3">amaçlarıyla sınırlı olarak işlenmektedir.</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">
              4. Toplama Yöntemi ve Hukuki Sebep
            </h2>
            <p>
              Kişisel verileriniz, internet sitesindeki formu doldurup göndermeniz suretiyle,
              elektronik ortamda ve tamamen sizin inisiyatifinizle paylaşılmanız yoluyla elde
              edilir. Veriler, KVKK&apos;nın 5. maddesinde yer alan &quot;açık rızanızın
              bulunması&quot; ve &quot;ilgili kişinin temel hak ve özgürlüklerine zarar
              vermemek kaydıyla veri sorumlusunun meşru menfaati için veri işlenmesinin
              zorunlu olması&quot; hukuki sebeplerine dayanılarak işlenmektedir.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">5. Kişisel Verilerin Aktarımı</h2>
            <p>
              Formda paylaştığınız veriler; talebinizin tarafıma iletilebilmesi ve
              kaydedilebilmesi amacıyla, site altyapısı, barındırma (hosting) ve e-posta
              iletim hizmeti aldığım teknik hizmet sağlayıcılarıyla, yalnızca bu hizmetin
              ifası için gerekli ölçüde paylaşılmaktadır. Kullanılan bu hizmet sağlayıcılardan
              bazıları yurt dışında yerleşik olabilir. Verileriniz, yukarıda belirtilen
              amaçlar dışında üçüncü kişilerle paylaşılmaz, satılmaz veya pazarlama amacıyla
              kullanılmaz.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">6. Saklama Süresi</h2>
            <p>
              Kişisel verileriniz, talebinizin sonuçlandırılması ve olası hukuki
              yükümlülüklerin yerine getirilmesi için gerekli olan süre boyunca saklanır; bu
              sürenin sonunda talebiniz üzerine veya re&apos;sen silinir, yok edilir ya da
              anonim hale getirilir.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">7. Çerezler (Cookies)</h2>
            <p>
              Bu site, ziyaretçi davranışını kişiselleştirmek veya izlemek amacıyla reklam ya
              da pazarlama çerezi kullanmamaktadır. Anonim ziyaret istatistiklerinin
              ölçülmesi için çerez kullanmayan bir analiz altyapısından faydalanılmaktadır.
              Site yönetim paneline yalnızca site sahibinin erişimini sağlamak amacıyla,
              teknik olarak zorunlu bir oturum çerezi kullanılmakta olup bu çerez ziyaretçi
              trafiğini etkilemez.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">
              8. KVKK Kapsamındaki Haklarınız
            </h2>
            <p className="mb-3">KVKK&apos;nın 11. maddesi uyarınca herkes, veri sorumlusuna başvurarak;</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Kişisel verisinin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
              <li>Eksik/yanlış işlenmişse düzeltilmesini isteme,</li>
              <li>KVKK&apos;nın 7. maddesindeki şartlar çerçevesinde silinmesini/yok edilmesini isteme,</li>
              <li>Yapılan işlemlerin, aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
              <li>
                Münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhine bir sonucun
                ortaya çıkmasına itiraz etme,
              </li>
              <li>Kanuna aykırı işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
            </ul>
            <p className="mt-3">haklarına sahiptir.</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">9. Başvuru Yöntemi</h2>
            <p>
              Yukarıda sayılan haklarınıza ilişkin taleplerinizi,{" "}
              <a
                href="mailto:koray.akdag@sistemglobal.com.tr"
                className="font-semibold text-orange-500 hover:underline"
              >
                koray.akdag@sistemglobal.com.tr
              </a>{" "}
              adresine e-posta göndererek iletebilirsiniz. Talepleriniz, niteliğine göre en
              kısa sürede ve en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">10. Değişiklikler</h2>
            <p>
              Bu metin, yasal düzenlemelerdeki değişiklikler veya site üzerinde sunulan
              hizmetlerdeki güncellemeler doğrultusunda zaman zaman revize edilebilir. Güncel
              metin her zaman bu sayfada yayımlanır.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
