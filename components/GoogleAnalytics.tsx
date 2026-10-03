"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-VS2SKEPK24";
const CONSENT_KEY = "ga-consent";

const STRINGS = {
  tr: {
    text: "Siteyi iyileştirmek için anonim ziyaret istatistikleri (Google Analytics) kullanıyoruz.",
    accept: "Kabul et",
    reject: "Reddet",
  },
  en: {
    text: "We use anonymous visit statistics (Google Analytics) to improve the site.",
    accept: "Accept",
    reject: "Decline",
  },
};

const INIT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
try { if (localStorage.getItem('${CONSENT_KEY}') === 'granted') { gtag('consent', 'update', { analytics_storage: 'granted' }); } } catch (e) {}
gtag('js', new Date());
gtag('config', '${GA_ID}');
`;

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const t = STRINGS[pathname?.startsWith("/en") ? "en" : "tr"];
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setShowBanner(true);
    } catch {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!href) return;
      if (href.startsWith("https://wa.me") || href.includes("api.whatsapp.com")) {
        trackEvent("whatsapp_click", { page_path: window.location.pathname });
      } else if (href.startsWith("tel:")) {
        trackEvent("phone_click", { page_path: window.location.pathname });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { page_path: window.location.pathname });
      } else if (href.includes("#contact")) {
        trackEvent("cta_click", { page_path: window.location.pathname });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const choose = (granted: boolean) => {
    try {
      localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {}
    if (granted && typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "granted" });
    }
    setShowBanner(false);
  };

  return (
    <>
      <Script id="ga-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: INIT_SCRIPT }} />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie"
          className="fixed bottom-0 left-0 right-0 z-[60] border-t border-gray-200 bg-white p-4 shadow-lg sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-md sm:rounded-2xl sm:border"
        >
          <p className="text-sm leading-6 text-gray-700">{t.text}</p>
          <div className="mt-3 flex gap-3">
            <button
              type="button"
              onClick={() => choose(true)}
              className="rounded-lg bg-[#071A2F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0b2a4a]"
            >
              {t.accept}
            </button>
            <button
              type="button"
              onClick={() => choose(false)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              {t.reject}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
