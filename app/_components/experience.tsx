import { Container } from "./container";
import { ExperienceTabs } from "./experience-tabs";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative border-t border-gunmetal">
      <Container className="py-20 md:py-28">
        <SectionHeading id="experience-heading" title="Experience" intro="Four roles, newest first. Pick one to see what I did there." />
        <div data-reveal className="mt-14">
          <ExperienceTabs />
        </div>
      </Container>
    </section>
  );
}
