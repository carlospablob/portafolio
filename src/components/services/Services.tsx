import { siteConfig } from "@/config/site";

export function Services() {
  const { title, description, items } = siteConfig.services;

  return (
    <section
      id="servicios"
      aria-labelledby="services-title"
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <h2
            id="services-title"
            className="text-navy text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          <p className="text-muted mt-5 text-base leading-8 sm:text-lg">
            {description}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ name, description: serviceDescription }, index) => {
            const dividerClasses = [
              "border-t border-slate-200 py-7 md:px-6 md:py-8 lg:border-t-0",
              index === 0 ? "border-t-0 md:border-t-0 lg:border-l-0" : "lg:border-l",
              index < 2 ? "md:border-t-0" : "md:border-t",
              index % 2 === 1 ? "md:border-l" : "",
            ].join(" ");

            return (
              <li key={name} className={dividerClasses}>
                <h3 className="text-navy text-lg font-semibold tracking-tight sm:text-xl">
                  {name}
                </h3>
                <p className="text-muted mt-3 text-sm leading-7 sm:text-base">
                  {serviceDescription}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
