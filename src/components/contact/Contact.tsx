import { siteConfig } from "@/config/site";
import { getLinkedInHref, getWhatsAppHref } from "@/lib/links";

export function Contact() {
  const { title, description } = siteConfig.contactSection;
  const whatsappHref = getWhatsAppHref(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.whatsappMessage,
  );
  const linkedInHref = getLinkedInHref(siteConfig.contact.linkedin);

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start px-6 py-20 sm:px-10 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <h2
            id="contact-title"
            className="text-navy text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          <p className="text-muted mt-5 text-base leading-8 sm:text-lg">
            {description}
          </p>
        </div>

        {(whatsappHref || linkedInHref) && (
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary focus-visible:outline-primary inline-flex min-h-12 items-center justify-center rounded-md px-6 text-sm font-semibold text-white hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {siteConfig.actions.whatsapp}
              </a>
            )}
            {linkedInHref && (
              <a
                href={linkedInHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-primary focus-visible:outline-primary inline-flex min-h-11 items-center rounded-sm text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {siteConfig.actions.linkedin}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
