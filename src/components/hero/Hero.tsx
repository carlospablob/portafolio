import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getWhatsAppHref } from "@/lib/links";

export function Hero() {
  const whatsappHref = getWhatsAppHref(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.whatsappMessage,
  );
  const projectsHref = siteConfig.navigation.find(
    (item) => item.id === "projects",
  )?.href;

  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto grid min-h-[calc(100svh-4.5rem)] w-full max-w-7xl items-center gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 lg:py-24"
    >
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-semibold tracking-[0.16em] uppercase">
          {siteConfig.name}
        </p>
        <p className="text-muted mt-4 text-base sm:text-lg">{siteConfig.role}</p>

        <h1
          id="hero-title"
          className="text-navy mt-8 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-[3.4rem]"
        >
          {siteConfig.headline}
        </h1>

        <p className="text-muted mt-7 max-w-xl text-base leading-8 sm:text-lg">
          {siteConfig.description}
        </p>

        <ul
          aria-label={siteConfig.hero.technologiesLabel}
          className="mt-8 flex flex-wrap gap-2"
        >
          {siteConfig.technologies.map((technology) => (
            <li
              key={technology}
              className="text-navy rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium sm:text-sm"
            >
              {technology}
            </li>
          ))}
        </ul>

        {(whatsappHref || projectsHref) && (
          <div className="mt-10 flex flex-wrap gap-3">
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary focus-visible:outline-primary inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold text-white hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {siteConfig.actions.contact}
              </a>
            )}
            {projectsHref && (
              <Link
                href={projectsHref}
                className="text-navy hover:text-primary focus-visible:outline-primary inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {siteConfig.actions.viewProjects}
              </Link>
            )}
          </div>
        )}
      </div>

      <div aria-hidden="true" className="relative mx-auto w-full max-w-xl lg:max-w-none">
        <div className="ml-auto w-[88%] rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <div className="aspect-[4/3] rounded-lg border border-slate-100 bg-white" />
        </div>
        <div className="relative -mt-10 w-[62%] rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:-mt-16 sm:p-3">
          <div className="aspect-[4/3] rounded-lg border border-slate-100 bg-white" />
        </div>
      </div>
    </section>
  );
}
