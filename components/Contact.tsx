export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="max-w-6xl mx-auto px-8">

        <p className="text-orange-500 text-2xl font-bold uppercase tracking-[2px] mb-5">
          İletişim
        </p>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#071A2F] mb-12">
          Benimle iletişime geçin.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Kişisel Mail */}

          <div className="bg-[#071A2F] text-white rounded-2xl p-8 shadow-lg">

            <div className="text-4xl mb-5">📧</div>

            <h3 className="text-xl font-bold mb-4">
              Kişisel E-posta
            </h3>

            <a
              href="mailto:koray_akdag@hotmail.com"
              className="text-orange-400 hover:underline break-all"
            >
              koray_akdag@hotmail.com
            </a>

          </div>

          {/* Kurumsal Mail */}

          <div className="bg-[#071A2F] text-white rounded-2xl p-8 shadow-lg">

            <div className="text-4xl mb-5">📧</div>

            <h3 className="text-xl font-bold mb-4">
              Kurumsal E-posta
            </h3>

            <a
              href="mailto:koray.akdag@sistemglobal.com.tr"
              className="text-orange-400 hover:underline break-all"
            >
              koray.akdag@sistemglobal.com.tr
            </a>

          </div>

          {/* LinkedIn */}

          <div className="bg-[#071A2F] text-white rounded-2xl p-8 shadow-lg">

            <div className="mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <path
                  fill="#0A66C2"
                  d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.88v1.91h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V22h-3v-7.1c0-1.7-.03-3.88-2.36-3.88-2.37 0-2.73 1.85-2.73 3.76V22h-3V8z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-4">
              LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/koray-akda%C4%9F-07709368/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 hover:underline"
            >
              LinkedIn profilimi ziyaret etmek için tıklayınız →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}