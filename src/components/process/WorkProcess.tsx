import { siteConfig } from "@/config/site";

export function WorkProcess() {
  const { title, steps } = siteConfig.workProcess;

  return (
    <section
      id="como-trabajo"
      aria-labelledby="work-process-title"
      className="border-t border-slate-200 bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:py-28">
        <h2
          id="work-process-title"
          className="text-navy max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title: stepTitle, description }, index) => {
            const dividerClasses = [
              "border-t border-slate-200 py-7 md:px-6 md:py-8 lg:border-t-0",
              index === 0 ? "border-t-0 md:border-t-0 lg:border-l-0" : "lg:border-l",
              index < 2 ? "md:border-t-0" : "md:border-t",
              index % 2 === 1 ? "md:border-l" : "",
            ].join(" ");

            return (
              <li key={stepTitle} className={dividerClasses}>
                <p
                  aria-hidden="true"
                  className="text-primary text-sm font-semibold tracking-[0.16em]"
                >
                  {index + 1}
                </p>
                <h3 className="text-navy mt-4 text-lg font-semibold tracking-tight sm:text-xl">
                  {stepTitle}
                </h3>
                <p className="text-muted mt-3 text-sm leading-7 sm:text-base">
                  {description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
