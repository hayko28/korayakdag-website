"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const CONTAINER_ID = "article-content";

export default function SearchHighlight() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    if (!query || query.trim().length < 2) return;
    const container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    const timeout = setTimeout(() => {
      const needle = query.trim().toLocaleLowerCase();
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
      let node: Node | null;

      while ((node = walker.nextNode())) {
        const text = node.textContent || "";
        if (!text.toLocaleLowerCase().includes(needle)) continue;

        const target = node.parentElement;
        if (!target) continue;

        target.scrollIntoView({ behavior: "smooth", block: "center" });
        const originalBackground = target.style.backgroundColor;
        target.style.transition = "background-color 0.4s ease";
        target.style.backgroundColor = "#fef08a";
        setTimeout(() => {
          target.style.backgroundColor = originalBackground;
        }, 2200);
        break;
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);

  return null;
}
