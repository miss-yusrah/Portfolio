import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { skillIcons } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".skills-title", {
      opacity: 0,
      y: -20,
      duration: 0.65,
      ease: "power2.out",
    }).from(
      ".skill-item",
      { opacity: 0, y: 24, stagger: 0.12, duration: 0.6 },
      "-=0.35"
    );

    gsap.to(".skill-icons", {
      x: "-50%",
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="skills-section py-6 md:py-10">
      <div className="section-shell">
        <div className="bg-tetiary rounded-2xl p-6 sm:p-8 md:p-10">
          <h2 className="skills-title text-primary text-2xl sm:text-3xl font-bold">
            Skills
          </h2>
          <div className="space-y-6 pt-5">
            <div className="skill-item text-secondary">
              <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                Frontend
              </h3>
              <p className="mt-1 text-sm sm:text-base leading-relaxed">
                HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js,
                Tailwind CSS, responsive design, accessibility basics
              </p>
            </div>
            <div className="skill-item text-secondary">
              <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                Tools
              </h3>
              <p className="mt-1 text-sm sm:text-base leading-relaxed">
                Git & GitHub, Vite, npm, REST APIs, clean component structure
              </p>
            </div>
            <div className="skill-item text-secondary">
              <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                Also comfortable with
              </h3>
              <p className="mt-1 text-sm sm:text-base leading-relaxed">
                Microsoft Office, content writing, and social media management
              </p>
            </div>
            <div className="overflow-hidden pt-2">
              <div className="skill-icons flex gap-6 sm:gap-8 items-center w-max">
                {[...skillIcons, ...skillIcons].map((skill, index) => (
                  <img
                    key={index}
                    src={skill.icon}
                    alt=""
                    className="w-9 h-9 sm:w-10 sm:h-10 shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
