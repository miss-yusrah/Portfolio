import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

/** Stagger pieces into place as a section enters view. */
export function useSectionReveal(
  sectionSelector: string,
  itemSelector = ".reveal-item"
) {
  useGSAP(() => {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const items = section.querySelectorAll(itemSelector);
    if (!items.length) return;

    gsap.from(items, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 48,
      scale: 0.96,
      stagger: 0.12,
      duration: 0.75,
      ease: "power2.out",
      clearProps: "transform",
    });
  }, []);
}
