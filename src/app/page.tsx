import { Hero } from "@/components/hero/Hero";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Services } from "@/components/services/Services";
import { WorkProcess } from "@/components/process/WorkProcess";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Services />
      <WorkProcess />
      <Contact />
    </main>
  );
}
