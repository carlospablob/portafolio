"use client";

import { useEffect } from "react";
import { inView } from "motion";
import { animate } from "motion/mini";

/** Anima cada tarjeta una vez al entrar en pantalla, sin ocultarla en el HTML inicial. */
export function ProjectsEntrance() {
  useEffect(() => {
    const section = document.getElementById("proyectos");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section || reducedMotion.matches) return;

    const cards = section.querySelectorAll<HTMLElement>("[data-project-enter]");
    const stopObservers: Array<() => void> = [];
    const animations: Array<{ complete: () => void }> = [];

    cards.forEach((card, index) => {
      const bounds = card.getBoundingClientRect();

      // No reinicia la entrada si la tarjeta ya era visible al hidratar.
      if (bounds.top < window.innerHeight && bounds.bottom > 0) return;

      stopObservers.push(
        inView(
          card,
          () => {
            if (reducedMotion.matches) return;

            animations.push(
              animate(
                card,
                {
                  opacity: [0.65, 1],
                  transform: ["translateY(12px)", "translateY(0)"],
                },
                { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
              ),
            );
          },
          { amount: 0.2 },
        ),
      );
    });

    const finishForReducedMotion = () => {
      if (!reducedMotion.matches) return;

      stopObservers.forEach((stop) => stop());
      animations.forEach((animation) => animation.complete());
    };

    reducedMotion.addEventListener("change", finishForReducedMotion);

    return () => {
      reducedMotion.removeEventListener("change", finishForReducedMotion);
      stopObservers.forEach((stop) => stop());
      animations.forEach((animation) => animation.complete());
    };
  }, []);

  return null;
}
