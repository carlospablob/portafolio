"use client";

import { useEffect } from "react";
import { animate } from "motion/mini";

/** Activa la entrada del Hero solo tras hidratar, sin ocultar el HTML estático. */
export function HeroEntrance() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!hero || reducedMotion.matches) return;

    const elements = hero.querySelectorAll<HTMLElement>("[data-hero-enter]");
    const animations = Array.from(elements, (element, index) => {
      const isImage = element.dataset.heroEnter === "image";
      const isFadeOnly = element.dataset.heroEnter === "fade";

      return animate(
        element,
        {
          opacity: [isImage ? 0.6 : 0.65, 1],
          ...(isFadeOnly
            ? {}
            : { transform: ["translateY(12px)", "translateY(0)"] }),
        },
        {
          duration: isImage ? 0.6 : 0.55,
          delay: index * 0.09,
          ease: "easeOut",
        },
      );
    });

    const finishForReducedMotion = () => {
      if (reducedMotion.matches) {
        animations.forEach((animation) => animation.complete());
      }
    };

    reducedMotion.addEventListener("change", finishForReducedMotion);

    return () => {
      reducedMotion.removeEventListener("change", finishForReducedMotion);
      animations.forEach((animation) => animation.complete());
    };
  }, []);

  return null;
}
