import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center px-6 py-16 sm:px-10">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-primary text-sm font-semibold tracking-[0.16em] uppercase">
          {siteConfig.name}
        </p>
        <p className="text-muted mt-4 text-base sm:text-lg">
          {siteConfig.role}
        </p>
        <h1 className="text-navy mt-6 max-w-3xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          {siteConfig.headline}
        </h1>
      </div>
    </main>
  );
}
