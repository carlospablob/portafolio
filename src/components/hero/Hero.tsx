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
      className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-12 sm:gap-12 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 lg:py-16"
    >
      <div className="min-w-0 max-w-2xl">
        <p className="text-primary text-sm font-semibold tracking-[0.16em] uppercase">
          {siteConfig.name}
        </p>
        <p className="text-muted mt-3 text-base leading-relaxed sm:text-lg">
          {siteConfig.role}
        </p>

        <h1
          id="hero-title"
          className="text-navy mt-6 text-[clamp(2.125rem,4.8vw,3.5rem)] leading-[1.12] font-semibold tracking-tight"
        >
          {siteConfig.headline}
        </h1>

        <p className="text-muted mt-6 max-w-[60ch] text-base leading-7 sm:text-lg sm:leading-8">
          {siteConfig.description}
        </p>

        <ul
          aria-label={siteConfig.hero.technologiesLabel}
          className="mt-6 flex flex-wrap gap-2"
        >
          {siteConfig.technologies.map((technology) => (
            <li
              key={technology}
              className="text-navy rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm leading-5 font-medium"
            >
              {technology}
            </li>
          ))}
        </ul>

        {(whatsappHref || projectsHref) && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

      <div aria-hidden="true" className="relative mx-auto w-full max-w-lg lg:max-w-none">
        <div className="ml-auto w-[88%] rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <div className="aspect-[16/10] rounded-lg border border-slate-100 bg-white" />
        </div>
        <div className="relative -mt-10 w-[62%] rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:-mt-16 sm:p-3">
          <div className="aspect-[16/10] rounded-lg border border-slate-100 bg-white" />
        </div>
      </div>
    </section>
  );
}
