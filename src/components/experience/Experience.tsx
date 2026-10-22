import { siteConfig } from "@/config/site";
import { getLinkedInHref } from "@/lib/links";

export function Experience() {
  const { title, description, capabilities, positions, linkedInLabel } =
    siteConfig.experience;
  const linkedInHref = getLinkedInHref(siteConfig.contact.linkedin);

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-title"
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 lg:py-28">
        <div>
          <h2
            id="experience-title"
            className="text-navy max-w-lg text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          <p className="text-muted mt-6 max-w-xl text-base leading-8 sm:text-lg">
            {description}
          </p>

          <ul className="mt-10 max-w-xl divide-y divide-slate-200 border-y border-slate-200">
            {capabilities.map((capability) => (
              <li key={capability} className="text-navy py-4 text-sm font-medium sm:text-base">
                {capability}
              </li>
            ))}
          </ul>

          {linkedInHref && (
            <a
              href={linkedInHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary focus-visible:outline-primary mt-8 inline-flex rounded-sm text-sm font-semibold hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {linkedInLabel}
            </a>
          )}
        </div>

        <ol className="ml-1 self-start border-l border-slate-200 pl-7">
          {positions.map(({ company, role, period, description: positionDescription }) => (
            <li key={`${company}-${period}`} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="border-primary absolute -left-[34px] top-1.5 size-3 rounded-full border-2 bg-white"
              />
              <p className="text-muted text-sm">{period}</p>
              <h3 className="text-navy mt-2 text-xl font-semibold tracking-tight">
                {company}
              </h3>
              <p className="text-primary mt-1 text-sm font-medium">{role}</p>
              <p className="text-muted mt-3 max-w-lg text-sm leading-7 sm:text-base">
                {positionDescription}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
