export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-20 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Sol Taraf */}

        <div>

          <div className="pt-10 lg:pt-16">
            <p className="text-orange-500 text-2xl font-bold uppercase tracking-[2px] mb-5">
              Hakkımda
            </p>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#071A2F] leading-tight">
            Strateji ile büyüyen,
            <br />
            güven ve kalıcı değer
            oluşturan iş birlikleri.
          </h2>

        </div>

        {/* Sağ Taraf */}

        <div>

          <p className="text-gray-700 text-xl leading-8 mb-6">
            İş dünyasında sürdürülebilir başarının; doğru strateji,
            güçlü iş birlikleri ve güvene dayalı ilişkilerle mümkün
            olduğuna inanıyorum.
          </p>

          <p className="text-gray-700 text-xl leading-8 mb-6">
            Satış yönetimi, iş geliştirme ve stratejik iş ortaklıkları
            alanlarında edindiğim deneyimle; şirketlerin uzun vadeli
            büyüme hedeflerine katkı sağlayan çözümler geliştiriyorum.
          </p>

          <p className="text-gray-700 text-xl leading-8">
            Güven, sürdürülebilir ilişkiler ve sonuç odaklı çalışma
            anlayışıyla kurumlara değer katan, uzun vadeli iş birlikleri
            oluşturuyorum.
          </p>

        </div>

      </div>
    </section>
  );
}