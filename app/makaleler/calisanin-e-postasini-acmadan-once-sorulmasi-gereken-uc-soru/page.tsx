import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "calisanin-e-postasini-acmadan-once-sorulmasi-gereken-uc-soru"
)!;

export const metadata: Metadata = {
  title: `${meta.title} | Koray Akdağ`,
  description: meta.excerpt,
};

export default function MakalePage() {
  return (
    <MakaleLayout
      title={meta.title}
      tag={meta.tag}
      date={meta.date}
      readTime={meta.readTime}
      slug={meta.slug}
    >
      <p>
        Bir üretim şirketinde satış departmanından ayrılan bir çalışanın
        kurumsal e-posta hesabı, &quot;müşteri talebi gelebilir&quot;
        gerekçesiyle aylarca açık bırakılıyor; yöneticisi zaman zaman gelen
        kutusuna girip kendisi yanıtlıyor. Kimse bunu bir sorun olarak
        görmüyor, çünkü hesap zaten şirketin.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Mülkiyet, okuma hakkı vermiyor
      </h2>
      <p>
        Kişisel Verileri Koruma Kurulu&apos;nun Ekim ayında yürürlüğe giren
        ilke kararı, tam olarak bu varsayımı hedef alıyor. Karara göre bir
        e-posta hesabının işverene ait olması, içeriğine serbestçe
        bakılabileceği anlamına gelmiyor; bu ayrı bir hukuki sebep ister.
        Dolayısıyla denetime başlamadan önce sorulması gereken ilk soru şu
        hâle geliyor: bu hesaba bakmamızın somut ve yazılı bir gerekçesi var
        mı, yoksa sadece alışkanlık mı konuşuyor?
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İkinci ve üçüncü soru
      </h2>
      <p>
        İkinci soru, doğrudan içeriğe mi bakılıyor yoksa önce kim kime ne
        zaman yazmış bilgisiyle mi yetiniliyor; Kurul, içerik erişimini
        ancak daha hafif bir inceleme somut bir şüphe ortaya çıkardığında
        meşru sayıyor. Üçüncü soru ise çalışana işe girerken imzalattırılan
        tek bir rıza formunun hâlâ yeterli görülüp görülmediği: güç
        dengesizliği nedeniyle Kurul bu rızaya artık mesafeli bakıyor.
      </p>

      <p>
        Bu üç soruya net cevabı olmayan bir şirket için risk, idari para
        cezasından önce başka bir yerde başlıyor: denetim alışkanlığının bir
        gün bir işten çıkarma davasının gerekçesi olarak mahkeme önüne
        çıkması.
      </p>
    </MakaleLayout>
  );
}
