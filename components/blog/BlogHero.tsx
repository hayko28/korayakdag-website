const BlogHero = () => {
  return (
    <section className="bg-white pb-4 pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="mb-3 text-lg font-bold uppercase tracking-[2px] text-orange-500 sm:text-xl">
          Blog
        </p>

        <h1 className="text-3xl font-black text-[#071A2F] sm:text-4xl lg:text-5xl">
          Yazılarım
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Devlet destekleri, yatırım teşvikleri, teknopark ve Ar-Ge süreçleri
          üzerine kapsamlı rehberler.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
