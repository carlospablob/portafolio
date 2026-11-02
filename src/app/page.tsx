import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getGitHubHref, getLinkedInHref } from "@/lib/links";
import { Hero } from "@/components/hero/Hero";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Services } from "@/components/services/Services";
import { WorkProcess } from "@/components/process/WorkProcess";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  alternates: { canonical: siteConfig.seo.publicUrl },
};

export default function Home() {
  const sameAs = [
    getLinkedInHref(siteConfig.contact.linkedin),
    getGitHubHref(siteConfig.contact.github),
  ].filter((url): url is string => url !== null);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.seo.publicUrl,
      },
      {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        url: siteConfig.seo.publicUrl,
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Experience />
        <Projects />
        <Services />
        <WorkProcess />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
