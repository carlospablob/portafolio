import Link from "next/link";
import Image from "next/image";
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
  const [primaryProject, secondaryProject] = siteConfig.projects.items;

  return (
    <section
      data-hero
      aria-labelledby="hero-title"
      className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-12 sm:gap-12 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:py-16"
    >
      <div className="min-w-0 max-w-2xl">
        <p
          data-hero-enter="fade"
          data-hero-step="1"
          className="text-navy text-[clamp(1.625rem,2.5vw,2.125rem)] leading-tight font-semibold tracking-tight"
        >
          {siteConfig.name}
        </p>
        <p
          data-hero-enter="fade"
          data-hero-step="2"
          className="text-primary mt-2 text-base leading-relaxed font-medium sm:text-lg"
        >
          {siteConfig.role}
        </p>

        <h1
          data-hero-enter="rise"
          data-hero-step="3"
          id="hero-title"
          className="text-navy mt-8 text-[clamp(2.125rem,4.8vw,3.5rem)] leading-[1.12] font-semibold tracking-tight"
        >
          {siteConfig.headline}
        </h1>

        <p
          data-hero-enter="rise"
          data-hero-step="4"
          className="text-muted mt-6 max-w-[60ch] text-base leading-7 sm:text-lg sm:leading-8"
        >
          {siteConfig.description}
        </p>

        <ul
          data-hero-enter="rise"
          data-hero-step="5"
          aria-label={siteConfig.hero.technologiesLabel}
          className="mt-7 flex flex-wrap gap-2 border-t border-slate-200 pt-5"
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
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {whatsappHref && (
              <a
                data-hero-enter="rise"
                data-hero-step="6"
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
                data-hero-enter="rise"
                data-hero-step="7"
                href={projectsHref}
                className="text-navy hover:text-primary focus-visible:outline-primary inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {siteConfig.actions.viewProjects}
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
        <div
          data-hero-enter="image"
          data-hero-step="8"
          className="relative ml-auto aspect-[1920/989] w-[94%] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
        >
          <Image
            src={primaryProject.image.src}
            alt={primaryProject.image.alt}
            fill
            sizes="(max-width: 640px) 94vw, 530px"
            className="object-contain"
            loading="eager"
            fetchPriority="high"
            unoptimized
          />
        </div>
        <div
          data-hero-enter="image"
          data-hero-step="9"
          className="relative -mt-8 aspect-[1920/989] w-[70%] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:-mt-14"
        >
          <Image
            src={secondaryProject.image.src}
            alt={secondaryProject.image.alt}
            fill
            sizes="(max-width: 640px) 70vw, 390px"
            className="object-contain"
            loading="lazy"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
