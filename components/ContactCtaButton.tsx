"use client";

import { ReactNode } from "react";
import { OPEN_CONTACT_FORM_EVENT } from "@/components/Contact";

// Sunucu bileşeni sayfalarda (metadata gerektiren) OPEN_CONTACT_FORM_EVENT'i
// tetiklemek için küçük, yeniden kullanılabilir istemci bileşeni.
export default function ContactCtaButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONTACT_FORM_EVENT))}
      className={className}
    >
      {children}
    </button>
  );
}
