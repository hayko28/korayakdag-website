"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "nav-depth";

export default function NavDepthTracker() {
  const pathname = usePathname();
  const lastPathname = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const current = Number(sessionStorage.getItem(STORAGE_KEY) ?? "0");

    if (lastPathname.current === null) {
      if (current === 0) sessionStorage.setItem(STORAGE_KEY, "1");
    } else if (lastPathname.current !== pathname) {
      sessionStorage.setItem(STORAGE_KEY, String(current + 1));
    }

    lastPathname.current = pathname;
  }, [pathname]);

  return null;
}
