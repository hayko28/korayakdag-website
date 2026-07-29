export default function Expertise() {
  const items = [
    {
      title: "🎯 Stratejik Danışmanlık",
      text: "Şirketlerin sürdürülebilir büyüme hedefleri doğrultusunda stratejik yol haritaları oluşturuyorum.",
    },
    {
      title: "📈 İş Geliştirme",
      text: "Yeni pazarlar, yeni müşteriler ve stratejik büyüme fırsatları geliştiriyorum.",
    },
    {
      title: "🤝 Stratejik İş Ortaklıkları",
      text: "Yüksek katma değer sağlayan iş birlikleri kuruyor ve yönetiyorum.",
    },
    {
      title: "💼 Satış Yönetimi",
      text: "Satış süreçlerinin geliştirilmesi ve performansın artırılması konusunda danışmanlık veriyorum.",
    },
    {
      title: "📊 Yönetim Danışmanlığı",
      text: "Yönetim ekiplerinin karar alma süreçlerini güçlendirecek çözümler sunuyorum.",
    },
    {
      title: "🚀 Kurumsal Büyüme",
      text: "Şirketlerin sürdürülebilir ve ölçeklenebilir büyüme stratejileri oluşturmasına destek oluyorum.",
    },
  ];

  return (
    <section
      id="expertise"
      className="bg-white py-16 lg:py-20 scroll-mt-16 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-lg sm:text-xl font-bold uppercase tracking-[2px] mb-3">
            Uzmanlık Alanları
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A2F]">
            Deneyimle Güçlenen Uzmanlık
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-[#071A2F] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}