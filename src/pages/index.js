import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ThemeToggle from "../components/ThemeToggle";

export default function IndexPage() {
  return (
    <>
      <Seo title="Victor Véliz | Full Stack Developer">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Victor Véliz",
            "url": "https://victor-jvp.github.io/",
            "sameAs": [
              "https://github.com/victor-jvp",
              "https://www.linkedin.com/in/victor-jvp",
              "https://twitter.com/VicTorJVP",
            ],
            "jobTitle": "Full Stack Developer",
          })}
        </script>
      </Seo>
      <Page>
        <HeroSection sectionId="hero" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <AboutSection sectionId="about" heading="A little about me" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ContactSection sectionId="contact" heading="Contact" />
        <ThemeToggle />
      </Page>
      <ScrollToTopButton />
    </>
  );
}
