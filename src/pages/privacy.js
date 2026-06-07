import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import ThemeToggle from "../components/ThemeToggle";

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="privacy" heading="Privacy Policy" />
        <ThemeToggle />
      </Page>
    </>
  );
}
