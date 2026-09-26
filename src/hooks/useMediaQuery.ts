"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string, defaultMatches = false) {
  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/** True on phones/tablets where continuous canvas + heavy blur tanks FPS.
 * Defaults to true until measured so the first paint stays lightweight. */
export function useIsMobilePerf() {
  return useMediaQuery("(max-width: 768px), (pointer: coarse)", true);
}
