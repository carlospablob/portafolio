import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getGitHubHref, getLinkedInHref } from "@/lib/links";

export function Footer() {
  const {
    description,
    navigationLabel,
    profilesLabel,
    linkedInLabel,
    githubLabel,
    copyrightNotice,
  } = siteConfig.footer;
  const navigationItems = siteConfig.navigation.filter(({ href }) => href.trim());
  const linkedInHref = getLinkedInHref(siteConfig.contact.linkedin);
  const githubHref = getGitHubHref(siteConfig.contact.github);
  const currentYear = new Date().getFullYear();
  const hasSocialLinks = Boolean(linkedInHref || githubHref);

  return (
    <footer className="border-t border-slate-200 bg-background">
      <div
        className={`mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 sm:px-10 md:gap-16 md:py-14 ${
          hasSocialLinks
            ? "md:grid-cols-[minmax(0,1fr)_auto_auto]"
            : "md:grid-cols-[minmax(0,1fr)_auto]"
        }`}
      >
        <div className="max-w-sm">
          <Link
            href={siteConfig.navigation[0].href}
            aria-label={`${siteConfig.name} — ${siteConfig.navigation[0].label}`}
            className="focus-visible:outline-primary inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <span className="text-navy text-xl font-extrabold tracking-tight">
              {siteConfig.monogram}
            </span>
            <span className="text-navy text-sm font-semibold">{siteConfig.name}</span>
          </Link>
          <p className="text-muted mt-4 text-sm leading-7">{description}</p>
        </div>

        <nav aria-label={navigationLabel}>
          <h2 className="text-navy text-sm font-semibold">{navigationLabel}</h2>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 md:flex-col md:gap-2">
            {navigationItems.map(({ id, label, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="text-muted hover:text-primary focus-visible:outline-primary rounded-sm text-sm focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {(linkedInHref || githubHref) && (
          <nav aria-label={profilesLabel}>
            <h2 className="text-navy text-sm font-semibold">{profilesLabel}</h2>
            <ul className="mt-3 flex gap-5">
              {linkedInHref && (
                <li>
                  <a
                    href={linkedInHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary focus-visible:outline-primary rounded-sm text-sm focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    {linkedInLabel}
                  </a>
                </li>
              )}
              {githubHref && (
                <li>
                  <a
                    href={githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary focus-visible:outline-primary rounded-sm text-sm focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    {githubLabel}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>

      <div className="border-t border-slate-200">
        <p className="text-muted mx-auto w-full max-w-7xl px-6 py-5 text-xs sm:px-10">
          © {currentYear} {siteConfig.name}. {copyrightNotice}
        </p>
      </div>
    </footer>
  );
}
