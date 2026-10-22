import { Hero } from "@/components/hero/Hero";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Services } from "@/components/services/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Services />
    </main>
  );
}
