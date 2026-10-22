import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getWhatsAppHref } from "@/lib/links";
import { MobileMenu } from "./MobileMenu";

function NavigationItems() {
  return (
    <ul className="flex flex-col gap-1 xl:flex-row xl:items-center xl:gap-1">
      {siteConfig.navigation.map(({ id, label, href }) => (
        <li key={id}>
          {href ? (
            <Link
              href={href}
              aria-current={id === "home" ? "page" : undefined}
              className="text-navy hover:text-primary focus-visible:outline-primary block rounded-md px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {label}
            </Link>
          ) : (
            <span className="text-muted block px-3 py-2 text-sm">
              {label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  const whatsappHref = getWhatsAppHref(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.whatsappMessage,
  );

  const whatsappButton = whatsappHref ? (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary focus-visible:outline-primary inline-flex min-h-10 items-center justify-center rounded-md px-4 text-sm font-semibold text-white hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {siteConfig.actions.whatsapp}
    </a>
  ) : null;

  return (
    <header className="relative border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-6 px-6 sm:px-10">
        <Link
          href={siteConfig.navigation[0].href}
          className="focus-visible:outline-primary inline-flex shrink-0 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-label={`${siteConfig.name} — ${siteConfig.navigation[0].label}`}
        >
          <span className="text-navy text-xl font-extrabold tracking-tight">
            {siteConfig.monogram}
          </span>
          <span className="text-navy text-xs font-semibold sm:text-sm">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label={siteConfig.header.desktopNavigationLabel} className="hidden xl:block">
          <NavigationItems />
        </nav>

        {whatsappButton && <div className="hidden xl:block">{whatsappButton}</div>}

        <MobileMenu labels={siteConfig.header} whatsappButton={whatsappButton}>
          <NavigationItems />
        </MobileMenu>
      </div>
    </header>
  );
}
