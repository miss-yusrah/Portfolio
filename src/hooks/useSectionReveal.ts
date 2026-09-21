import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import type { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

/** Stagger pieces into place as a section enters view. */
export function useSectionReveal(
  sectionSelector: string,
  itemSelector = ".reveal-item"
) {
  useGSAP(() => {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const items = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll(itemSelector)
    );
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.from(items, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
        opacity: 0,
        y: 48,
        scale: 0.96,
        stagger: 0.12,
        duration: 0.75,
        ease: "power2.out",
        clearProps: "transform",
      });
    }, section);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [sectionSelector, itemSelector]);
}

/** Each item animates when it scrolls into view (better for long pages). */
export function useItemReveal(containerRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const items = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".reveal-item")
      );
      if (!items.length) return;

      const triggers: ScrollTrigger[] = [];

      items.forEach((item) => {
        const tween = gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
          opacity: 0,
          y: 40,
          scale: 0.97,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "transform",
        });
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
      });

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    { dependencies: [containerRef], scope: containerRef }
  );
}
