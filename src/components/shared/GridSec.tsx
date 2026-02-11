import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GridSec = () => {
  useGSAP(() => {
    gsap.from(".grid-item", {
      scrollTrigger: {
        trigger: ".grid-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

 return (
  <section className="grid-section my-5 md:my-10 md:mx-20 md:p-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
      
      {/* Language Skills */}
      <div className="grid-item bg-tetiary max-w-3xl md:h-44 px-9 py-6">
        <h3 className="text-primary text-3xl font-bold">Language Skills</h3>
        <p className="text-xl text-secondary">
          English Language (Fluent – written & spoken)
        </p>
      </div>

      {/* Leadership & Collaboration Experience */}
      <div className="grid-item bg-tetiary max-w-3xl md:h-[326px] px-9 py-6 space-y-6">
        <h3 className="text-primary text-3xl font-bold">
          Leadership & <br /> Collaboration Experience
        </h3>

        <div>
          <p className="text-xl text-secondary font-bold">
            Frontend Developer Trainee
          </p>
          <p className="text-secondary">
            Colab Innovation Hub, Kaduna — collaborating with designers and
            developers to build responsive, user-focused web applications using
            React, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div>
          <p className="text-xl text-secondary font-bold">
            Team-Based Project Contributor
          </p>
          <p className="text-secondary">
            Worked in small development teams (5+ members) on internal and client
            projects, contributing to UI implementation, version control with
            Git/GitHub, and deployment workflows.
          </p>
        </div>
      </div>

      {/* Volunteering & Community Service */}
      <div className="grid-item bg-tetiary max-w-3xl md:h-[326px] px-9 py-6 space-y-6 md:-mt-40">
        <h3 className="text-primary text-3xl font-bold">
          Volunteering & Community <br /> Engagement
        </h3>

        <div>
          <p className="text-xl text-secondary font-bold">
            Community Health & Nutrition Outreach Volunteer
          </p>
          <p className="text-secondary pt-3">
            Nutrition and Dietetics Community of Nigeria (NDCN) — actively
            involved in public health outreach programs focused on maternal and
            child nutrition, health education, and community well-being across
            Kaduna State.
          </p>
        </div>
      </div>

      {/* Professional Interests & Affiliations */}
      <div className="grid-item bg-tetiary max-w-3xl md:h-44 px-9 py-6 -mt-2">
        <h3 className="text-primary text-3xl font-bold">
          Professional Focus & <br /> Interests
        </h3>
        <div>
          <p className="text-xl text-secondary font-bold pt-2">
            Frontend Development & Digital Health
          </p>
          <p className="text-secondary">
            Strong interest in building accessible, responsive web solutions,
            especially within health, community-focused, and social-impact
            domains.
          </p>
        </div>
      </div>

    </div>
  </section>
);

};
export default GridSec;
