import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <div
        style={{
          position: "fixed",
          top: "calc(var(--header-height, 5rem) / 2 - 17px)",
          right: "80px",
          zIndex: 1000,
        }}
      >
        <ThemeToggle />
      </div>
    </>
  );
}
