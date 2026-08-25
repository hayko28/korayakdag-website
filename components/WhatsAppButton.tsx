"use client";

import { usePathname } from "next/navigation";

const PHONE = "905060931828";

const STRINGS = {
  tr: {
    message: "Merhaba, danışmanlık hizmetleriniz hakkında bilgi almak istiyorum.",
    label: "WhatsApp'tan yazın",
  },
  en: {
    message: "Hello, I'd like to get information about your consulting services.",
    label: "Message us on WhatsApp",
  },
};

export default function WhatsAppButton() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/en") ? "en" : "tr";
  const t = STRINGS[lang];
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(t.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.label}
      className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-2.5 rounded-full bg-[#25D366] px-5 shadow-lg transition hover:scale-105 hover:shadow-xl"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 flex-shrink-0 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.29.638 4.43 1.744 6.256L4 29l7.94-1.706A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.36l-.355-.21-4.71 1.012 1.03-4.59-.232-.373A9.71 9.71 0 0 1 5.25 15c0-5.93 4.824-10.75 10.754-10.75S26.75 9.07 26.75 15 21.934 24.75 16.004 24.75Zm5.5-7.32c-.3-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.3-.778.978-.953 1.178-.176.2-.351.226-.65.075-.3-.15-1.267-.467-2.414-1.49-.892-.796-1.494-1.78-1.669-2.08-.176-.3-.02-.463.13-.612.134-.133.3-.35.45-.525.15-.176.2-.3.3-.5.1-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.24-.245-.588-.494-.508-.678-.517l-.578-.01c-.2 0-.526.075-.802.375s-1.053 1.028-1.053 2.507 1.078 2.906 1.228 3.106c.15.2 2.122 3.24 5.144 4.542.719.31 1.28.495 1.717.634.721.229 1.377.196 1.896.119.578-.086 1.78-.728 2.031-1.43.25-.7.25-1.302.176-1.43-.075-.125-.276-.2-.577-.35Z" />
      </svg>
      <span className="whitespace-nowrap font-semibold text-white">{t.label}</span>
    </a>
  );
}
