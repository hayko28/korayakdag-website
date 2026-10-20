import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "teknoloji-sirketi-satisinda-rekabet-kurulu-esigi-250-milyon-tl"
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
        İstanbul merkezli bir fintek girişimi, yurt dışından gelen bir
        devralma teklifini kabul etmeye hazırlanıyordu. Hukuk ekibi
        sözleşmeyi incelerken basit bir soru sordu: Rekabet Kurulu&apos;na
        bildirim gerekiyor mu? Kurucu ekip, cironun genel eşiklerin çok
        altında kaldığını düşünerek &quot;hayır&quot; cevabını bekliyordu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Genel eşik dört kata çıkarken teknoloji şirketleri aynı yerde kaldı
      </h2>
      <p>
        11 Şubat 2026&apos;da Resmî Gazete&apos;de yayımlanan tebliğ
        değişikliğiyle Rekabet Kurulu&apos;nun birleşme ve devralmalarda
        aradığı genel ciro eşikleri büyük ölçüde yükseltildi: taraflardan
        birinin Türkiye cirosunun eşiği 250 milyon TL&apos;den 1 milyar
        TL&apos;ye, tarafların toplam Türkiye cirosu eşiği de 750 milyon
        TL&apos;den 3 milyar TL&apos;ye çıktı. Aynı değişiklik, dijital
        platform, yazılım ve oyun yazılımı, fintek, biyoteknoloji,
        farmakoloji, tarım kimyasalları ve sağlık teknolojileri alanında
        faaliyet gösteren &quot;teknoloji teşebbüsleri&quot; için ayrı bir
        rejim kurdu: işlemde bir teknoloji teşebbüsü taraf olduğunda,
        devralınan tarafın Türkiye cirosu 250 milyon TL&apos;yi aşıyorsa
        diğer eşiklere bakılmaksızın bildirim zorunlu kalmaya devam ediyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        250 milyon TL, büyük bir rakam değil
      </h2>
      <p>
        Birkaç yıl önce kurulmuş, orta ölçekli bir yazılım ya da fintek
        şirketi için 250 milyon TL ciro kolayca ulaşılabilir bir seviye.
        Oysa benzer büyüklükte bir üretim ya da hizmet şirketi, yeni 1
        milyar TL&apos;lik genel eşiğin altında kaldığı için artık hiçbir
        bildirime gerek kalmadan satılabiliyor. Aynı gün satışa çıkan iki
        şirketten biri, sadece faaliyet alanı yüzünden kurul onayını
        beklemek zorunda kalabiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sözleşme masasına oturmadan önce sorulması gereken soru
      </h2>
      <p>
        Girişimci ve danışmanların devralma görüşmelerine başlamadan önce
        netleştirmesi gereken soru artık ciro büyüklüğü değil, şirketin
        tebliğdeki teknoloji teşebbüsü tanımına girip girmediği. Cevap
        evetse bildirim yükümlülüğü genel eşiklerden bağımsız olarak
        devam ediyor; bildirim yapılmadan kapatılan bir işlem, sonradan
        para cezası ve işlemin geçersizliği riskiyle karşılaşabiliyor. Son
        satış görüşmesinde bu soru, taraflar masaya oturmadan önce
        soruldu mu?
      </p>
    </MakaleLayout>
  );
}
