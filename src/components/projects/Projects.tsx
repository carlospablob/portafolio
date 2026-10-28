import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getExternalProjectHref } from "@/lib/links";
import { ProjectsEntrance } from "./ProjectsEntrance";

export function Projects() {
  const { title, linkLabel, technologiesLabel, items } = siteConfig.projects;

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-title"
      className="border-t border-slate-200 bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:py-28">
        <h2
          id="projects-title"
          className="text-navy max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => {
            const { name, category, description, technologies, image } = project;
            const projectHref = getExternalProjectHref(
              "url" in project ? project.url : undefined,
            );

            return (
              <div key={name} data-project-enter className="min-w-0">
                <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm motion-safe:transition motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-[3px] motion-safe:hover:border-slate-300 motion-safe:hover:shadow-md motion-safe:focus-within:-translate-y-[3px] motion-safe:focus-within:border-slate-300 motion-safe:focus-within:shadow-md">
                  <div className="relative aspect-[1920/989] overflow-hidden border-b border-slate-200 bg-white">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1023px) calc((100vw - 104px) / 2), 384px"
                      className="object-contain motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:scale-[1.02] motion-safe:group-focus-within:scale-[1.02]"
                      loading="lazy"
                      unoptimized
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-primary text-sm leading-5 font-semibold">
                      {category}
                    </p>
                    <h3 className="text-navy mt-3 text-xl font-semibold tracking-tight">
                      {name}
                    </h3>
                    <p className="text-muted mt-4 text-base leading-7">{description}</p>

                    <ul
                      className="mt-6 flex flex-wrap gap-2"
                      aria-label={`${name}: ${technologiesLabel}`}
                    >
                      {technologies.map((technology) => (
                        <li
                          key={technology}
                          className="text-navy rounded-full border border-slate-200 px-3 py-1 text-sm leading-5 font-medium"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>

                    {projectHref && (
                      <a
                        href={projectHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${linkLabel}: ${name}`}
                        className="text-primary hover:text-navy focus-visible:outline-primary mt-auto inline-flex self-start rounded-sm pt-8 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
                      >
                        {linkLabel}
                      </a>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
        <ProjectsEntrance />
      </div>
    </section>
  );
}
