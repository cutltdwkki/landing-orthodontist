"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = [...document.querySelectorAll<HTMLElement>("main .section, .site-footer")];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    for (const node of nodes) {
      node.classList.add("reveal");
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
