"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let lenis;

    function updateScrolling() {
      lenis?.destroy();
      lenis = motionPreference.matches
        ? undefined
        : new Lenis({ autoRaf: true, anchors: true });
    }

    updateScrolling();
    motionPreference.addEventListener("change", updateScrolling);

    return () => {
      motionPreference.removeEventListener("change", updateScrolling);
      lenis?.destroy();
    };
  }, []);

  return null;
}
