import Button from "../ui/Button.tsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".hero-title", {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power2.out",
    })
      .from(".hero-desc", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
      .from(".hero-buttons", { opacity: 0, y: 15, duration: 0.6 }, "-=0.3")
      .from(".hero-img", { opacity: 0, x: 50, duration: 0.8 }, "-=0.3");
  }, []);

  return (
    <section className="hero-section flex flex-col-reverse md:flex-row items-center justify-center bg-tetiary md:gap-50 md:mt-40 md:mx-30 p-5 md:p-10 ">
      <div className="space-y-5 md:space-y-10">
        <h1 className="hero-title font-bold text-3xl md:text-5xl text-center md:text-left text-primary mt-5 md:mt-0">
          Hi, I'm Yusrah <br className="hidden md:block" />
          Frontend Developer
        </h1>
        <p className="hero-desc text-secondary text-center md:text-left">
          Passionate about building clean, responsive,
          <br className="hidden md:block" /> and user-focused web interfaces.
          <br className="hidden md:block" /> I specialize in HTML, CSS, JavaScript,
          <br className="hidden md:block" /> TypeScript, React, and Tailwind CSS.
        </p>
        <div className="hero-buttons space-x-5 ml-5 md:ml-0">
          <a
            href="https://drive.google.com/file/d/1Jx4i8DuK_e6ERnQaCehi63Yc6O1jXz45/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              title="View My CV"
              containerClass="bg-primary text-white hover:scale-105 cursor-pointer hover:bg-blue-900 "
            />
          </a>
          <a href="mailto:mohammedyusi6@gmail.com" target="_blank">
            <Button
              title="Contact Me"
              containerClass="hover:scale-105 cursor-pointer hover:bg-primary hover:text-white "
            />
          </a>
        </div>
      </div>
      <img
        src="/Hero.jpeg"
        alt="Yusrah Portrait"
        className="hero-img md:h-100 rounded-lg"
      />
    </section>
  );
};
export default Hero;
