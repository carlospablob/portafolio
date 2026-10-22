"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

type MobileMenuProps = {
  children: ReactNode;
  labels: {
    mobileNavigationLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
  };
  whatsappButton: ReactNode;
};

export function MobileMenu({ children, labels, whatsappButton }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={isOpen ? labels.closeMenuLabel : labels.openMenuLabel}
        onClick={() => setIsOpen((open) => !open)}
        className="text-navy hover:text-primary focus-visible:outline-primary inline-flex size-11 items-center justify-center rounded-md border border-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {isOpen ? (
            <path d="M5 5l14 14M19 5L5 19" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div
        id={menuId}
        className={`${isOpen ? "block" : "hidden"} absolute inset-x-0 top-full z-10 border-b border-slate-200 bg-white px-6 py-4 shadow-sm sm:px-10`}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a[href]")) {
            setIsOpen(false);
          }
        }}
      >
        <nav aria-label={labels.mobileNavigationLabel}>
          {children}
        </nav>
        {whatsappButton && <div className="mt-4 border-t border-slate-200 pt-4">{whatsappButton}</div>}
      </div>
    </div>
  );
}
