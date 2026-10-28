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
    const pendingCards = new Map<HTMLElement, () => void>();
    const animations: Array<{ complete: () => void }> = [];
    let active = true;

    /** Restaura el estilo final sin dejar estados iniciales en línea. */
    const showCards = () => {
      cards.forEach((card) => {
        card.style.opacity = "";
        card.style.transform = "";
      });
    };

    /** Revela tarjetas que el scroll o un cambio de tamaño dejó atrás. */
    const revealSkippedCards = (includeVisible = false) => {
      pendingCards.forEach((stop, card) => {
        const bounds = card.getBoundingClientRect();
        if (
          bounds.bottom > 0 &&
          !(includeVisible && bounds.top < window.innerHeight)
        ) return;

        stop();
        pendingCards.delete(card);
        card.style.opacity = "";
        card.style.transform = "";
      });
    };

    const handleScroll = () => revealSkippedCards();
    const handleResize = () => revealSkippedCards(true);

    cards.forEach((card, index) => {
      const bounds = card.getBoundingClientRect();

      // No reinicia la entrada si la tarjeta ya era visible al hidratar.
      if (bounds.top < window.innerHeight || bounds.bottom <= 0) return;

      card.style.opacity = "0.4";
      card.style.transform = "translateY(16px)";

      const stop = inView(
        card,
        () => {
          if (reducedMotion.matches) return;

          pendingCards.delete(card);

          const animation = animate(
            card,
            {
              opacity: [0.4, 1],
              transform: ["translateY(16px)", "translateY(0)"],
            },
            { duration: 0.65, delay: index * 0.11, ease: "easeOut" },
          );
          animations.push(animation);
          void animation.then(() => {
            if (active) {
              card.style.opacity = "";
              card.style.transform = "";
            }
          });
        },
        { amount: 0.35 },
      );
      stopObservers.push(stop);
      pendingCards.set(card, stop);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    const finishForReducedMotion = () => {
      if (!reducedMotion.matches) return;

      active = false;
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      stopObservers.forEach((stop) => stop());
      animations.forEach((animation) => animation.complete());
      showCards();
    };

    reducedMotion.addEventListener("change", finishForReducedMotion);

    return () => {
      active = false;
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      reducedMotion.removeEventListener("change", finishForReducedMotion);
      stopObservers.forEach((stop) => stop());
      animations.forEach((animation) => animation.complete());
      showCards();
    };
  }, []);

  return null;
}
