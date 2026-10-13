import { About } from "./_components/about";
import { Approach } from "./_components/approach";
import { Contact } from "./_components/contact";
import { Experience } from "./_components/experience";
import { Hero } from "./_components/hero";
import { RevealObserver } from "./_components/reveal-observer";
import { SiteFooter } from "./_components/site-footer";
import { SiteNav } from "./_components/site-nav";
import { Skills } from "./_components/skills";
import { Work } from "./_components/work";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Approach />
        <Contact />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
