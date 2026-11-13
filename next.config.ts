import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Arama API'si statik blog sayfalarının kaynak dosyalarını runtime'da fs ile
  // okuyor; Next'in dosya izleyicisi bunu otomatik algılayamadığı için üretim
  // paketine dahil edilmesini açıkça belirtiyoruz.
  outputFileTracingIncludes: {
    "/api/posts": ["./app/blog/**/page.tsx", "./app/en/blog/**/page.tsx"],
    "/api/admin/tesvik-takip": ["./research/tesvik-takip/**"],
    "/api/destek-uygunluk": ["./research/tesvik-takip/**"],
  },
  // Sitenin eski sürümünden Google'ın hafızasında kalan, artık var olmayan bir
  // URL. 404 yerine ana sayfaya yönlendirip Search Console hatasını temizliyoruz.
  async redirects() {
    return [
      {
        source: "/sirket-degerleme-hesaplama",
        destination: "/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026",
        permanent: true,
      },
      {
        source: "/page",
        destination: "/",
        permanent: true,
      },
      {
        source: "/page/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
