import { useState, useEffect } from "react";

export function useMediaQuery(query, callback) {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    setMatch(mediaQuery.matches);

    const handleMatch = () => {
      const next = mediaQuery.matches;
      setMatch(next);
      if (callback) callback(next);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMatch);
      return () => mediaQuery.removeEventListener("change", handleMatch);
    } else {
      mediaQuery.addListener(handleMatch);
      return () => mediaQuery.removeListener(handleMatch);
    }
  }, []);

  return match;
}
