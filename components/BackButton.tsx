"use client";

import { useRouter } from "next/navigation";

const LABELS = {
  tr: "↩ Geri Dön",
  en: "↩ Go Back",
};

export default function BackButton({
  lang = "tr",
  fallbackHref,
  className = "",
}: {
  lang?: "tr" | "en";
  fallbackHref: string;
  className?: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    // window.history.length güvenilir değil: sekmenin kendi "boş" ilk durumunu
    // da sayabiliyor. Bunun yerine NavDepthTracker'ın site içinde gerçekten kaç
    // farklı sayfa gezildiğini tuttuğu sayaca bakıyoruz — 1'den büyükse gerçek
    // bir önceki sayfa vardır, değilse (örn. sayfa direkt URL ile açıldıysa)
    // bilinen ve doğru bir hedefe yönlendiriyoruz.
    const depth =
      typeof window !== "undefined"
        ? Number(sessionStorage.getItem("nav-depth") ?? "0")
        : 0;

    if (depth > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }

    // router.back() önceki sayfanın kaydırma konumunu koruyor; tüm blog
    // yazıları aynı düzeni kullandığı için bu, kullanıcıya sanki hiçbir şey
    // olmamış (hep yorum kısmında kalmış) gibi görünüyordu. Hedef sayfayı
    // her zaman en üstten göstererek gerçek bir geçiş hissi veriyoruz.
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {LABELS[lang]}
    </button>
  );
}
