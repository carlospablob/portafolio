import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/header/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.publicUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  verification: {
    google: siteConfig.seo.googleVerification,
  },
  openGraph: {
    url: siteConfig.seo.publicUrl,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
    locale: "es_MX",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:bg-primary focus:outline-navy focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-md focus:px-4 focus:text-sm focus:font-semibold focus:text-white focus:outline-2 focus:outline-offset-2"
        >
          {siteConfig.header.skipToContentLabel}
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
