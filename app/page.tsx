import { About } from "./_components/about";
import { Approach } from "./_components/approach";
import { Contact } from "./_components/contact";
import { Experience } from "./_components/experience";
import { Hero } from "./_components/hero";
import { RevealObserver } from "./_components/reveal-observer";
import { SiteFooter } from "./_components/site-footer";
import { SiteNav } from "./_components/site-nav";
import { Skills } from "./_components/skills";
import { Spotlight } from "./_components/spotlight";
import { Work } from "./_components/work";

export default function Home() {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[60rem] overflow-hidden">
        <div className="aurora"><span /><span /><span /></div>
        <div className="dots absolute inset-0" />
      </div>
      <SiteNav />
      <main id="main" tabIndex={-1} className="relative outline-none">
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
      <Spotlight />
    </>
  );
}
