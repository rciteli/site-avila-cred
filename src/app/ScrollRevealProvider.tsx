"use client";

import { useEffect } from "react";

export default function ScrollRevealProvider() {
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduce) {
      // usuários com preferência de menos movimento: revela tudo sem animar
      els.forEach((el) => el.setAttribute("data-visible", "true"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          const once = el.getAttribute("data-reveal-once") !== "false"; // default = true
          if (entry.isIntersecting) {
            el.setAttribute("data-visible", "true");
            if (once) io.unobserve(el);
          } else if (!once) {
            el.setAttribute("data-visible", "false");
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
