import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="404 · Page Not Found" />
      <Page>
        <div
          style={{
            textAlign: "center",
            padding: "4rem 1rem",
          }}
        >
          <h1>404</h1>
          <p>Page not found.</p>
          <a href="/">Go back home</a>
        </div>
      </Page>
    </>
  );
}
