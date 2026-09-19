import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const GridSec = () => {
  useGSAP(() => {
    gsap.from(".grid-item", {
      scrollTrigger: {
        trigger: ".grid-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 32,
      stagger: 0.12,
      duration: 0.65,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="grid-section py-6 md:py-10">
      <div className="section-shell">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="grid-item bg-tetiary rounded-2xl px-6 py-6 md:px-8 md:py-7">
            <h3 className="text-primary text-xl sm:text-2xl font-bold">
              Languages
            </h3>
            <p className="text-base md:text-lg text-secondary mt-2">
              English (fluent, written and spoken)
            </p>
          </div>

          <div className="grid-item bg-tetiary rounded-2xl px-6 py-6 md:px-8 md:py-7 space-y-4">
            <h3 className="text-primary text-xl sm:text-2xl font-bold">
              Work & collaboration
            </h3>
            <div>
              <p className="text-base md:text-lg text-secondary font-bold">
                Frontend Developer
              </p>
              <p className="text-secondary text-sm md:text-base mt-1">
                CoLAB Innovation Hub, Kaduna. Building responsive web apps with
                designers and developers using React, TypeScript, and Tailwind.
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg text-secondary font-bold">
                Team project work
              </p>
              <p className="text-secondary text-sm md:text-base mt-1">
                Shipped UIs in small teams, managed work through Git/GitHub, and
                helped get releases out the door.
              </p>
            </div>
          </div>

          <div className="grid-item bg-tetiary rounded-2xl px-6 py-6 md:px-8 md:py-7 space-y-3">
            <h3 className="text-primary text-xl sm:text-2xl font-bold">
              Community
            </h3>
            <p className="text-base md:text-lg text-secondary font-bold">
              NDCN volunteer
            </p>
            <p className="text-secondary text-sm md:text-base">
              Nutrition and Dietetics Community of Nigeria. Outreach on maternal
              and child nutrition across Kaduna State.
            </p>
          </div>

          <div className="grid-item bg-tetiary rounded-2xl px-6 py-6 md:px-8 md:py-7 space-y-3">
            <h3 className="text-primary text-xl sm:text-2xl font-bold">
              Focus
            </h3>
            <p className="text-base md:text-lg text-secondary font-bold">
              Frontend product work
            </p>
            <p className="text-secondary text-sm md:text-base">
              Interfaces for products, dashboards, and tools that need to work
              well on both phone and desktop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSec;
