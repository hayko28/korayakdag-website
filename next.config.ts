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
  },
};

export default nextConfig;
