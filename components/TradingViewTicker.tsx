"use client";

import { useEffect, useRef } from "react";

// TradingView'in ücretsiz, herkese açık "Ticker Tape" widget'ı.
// API key gerekmez. Resmi embed formatı: bir container div içine,
// JSON config'i script içeriği olan bir <script> tag'i eklenir.
// Lisans şartı gereği alttaki "TradingView" atıf linki kaldırılmamalı.
//
// Not: "BIST:XU100" (Borsa Istanbul'un kendi feed'i) TradingView'in
// ücretsiz/anonim embed widget'larında veri lisansı kısıtlaması
// nedeniyle ÇALIŞMIYOR — TradingView'in kendi belgelerine göre bazı
// borsalar (BIST dahil) ücretsiz gömülü widget'larda desteklenmiyor,
// gerçek zamanlı/gecikmeli veri için borsayla doğrudan lisans anlaşması
// gerekiyor. Bu yüzden site sahibinin isteğiyle BIST 100 ticker'dan
// kaldırıldı (yanlış/vekil bir sembol göstermek yerine). Gerçek BIST 100
// istenirse investing.com'un kendi widget sistemi (tr.investing.com/
// webmaster-tools) üzerinden manuel alınacak bir embed koduyla eklenebilir
// — o sistem etkileşimli bir yapılandırıcı gerektiriyor, otomatik alınamadı.
export default function TradingViewTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // React StrictMode/yeniden render'da script'in iki kez eklenmesini önle
    if (container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FX_IDC:USDTRY", title: "USD/TRY" },
        { proName: "FX_IDC:EURTRY", title: "EUR/TRY" },
        { proName: "FX_IDC:GBPTRY", title: "GBP/TRY" },
        { proName: "TVC:GOLD", title: "Altın (Ons/USD)" },
        { proName: "FX_IDC:XAUTRYG", title: "Gram Altın/TL" },
        { proName: "FX_IDC:XAGTRYG", title: "Gram Gümüş/TL" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin/USD" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "tr",
    });

    container.appendChild(script);
  }, []);

  return (
    <div className="border-b border-white/10 bg-[#071A2F]">
      <div className="tradingview-widget-container" ref={containerRef}>
        <div className="tradingview-widget-container__widget" />
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
            className="text-[11px] text-[#9FB2C9] hover:text-white"
          >
            Piyasa verileri TradingView tarafından sağlanmaktadır
          </a>
        </div>
      </div>
    </div>
  );
}
