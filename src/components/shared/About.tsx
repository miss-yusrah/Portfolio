import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTelegram,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".about-img", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out",
    })
      .from(".about-text", { opacity: 0, x: 50, duration: 1 }, "-=0.7")
      .from(
        ".about-social > *",
        { opacity: 0, y: 20, stagger: 0.2, duration: 0.5 },
        "-=0.5"
      );
  }, []);

  return (
    <section className="about-section bg-tetiary md:gap-50 my-5 md:my-10 md:mx-30 p-4 md:p-14">
      <div className="flex  justify-left gap-5 md:gap-40">
        <img
          src="/about.jpeg"
          alt="AboutImg"
          className="about-img w-45 h-80 md:w-85 md:h-150 hidden md:block"
        />
        <div className="about-text">
          <h2 className="text-primary text-3xl font-bold ">About Me</h2>
          <p className="text-secondary pt-2 text-xs md:text-lg">
            Hello, I’m Yusrah Eruaga Mohammed, a Frontend Developer
            <br className="hidden md:block" /> passionate about building clean, responsive,
            <br className="hidden md:block" /> and user-focused web interfaces.
          </p>
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="flex gap-3 items-center text-primary md:hidden"
            >
              <p> See More</p> <FaChevronDown />
            </button>
          )}
          <div className="hidden md:block">
            <p className="text-secondary pt-2 text-xs md:text-lg">
              My experience spans HTML, CSS, JavaScript, TypeScript, React, and Tailwind CSS,
              <br className="hidden md:block" /> with hands-on work developing functional, accessible,
              <br className="hidden md:block" /> and modern digital solutions.
            </p>
            <p className="text-secondary pt-2 text-xs md:text-lg">
              I’ve worked with teams to build real-world applications and improve user experience
              <br className="hidden md:block" /> using responsive design and modern frontend practices.
              <br className="hidden md:block" /> I also sharpen my skills through coding challenges,
              <br className="hidden md:block" /> hackathons, and continuous learning.
            </p>
            <p className="text-secondary pt-2 text-xs md:text-lg">
              I’m passionate about writing clean code, building reusable components,
              <br className="hidden md:block" /> optimizing performance, and continuously improving my skills.
            </p>
          </div>
          {isExpanded && (
            <div className="md:hidden">
              <p className="text-secondary pt-2 text-xs md:text-lg">
                My experience spans HTML, CSS, JavaScript, TypeScript, React, and Tailwind CSS,
                <br className="hidden md:block" /> with hands-on work developing functional, accessible,
                <br className="hidden md:block" /> and modern digital solutions.
              </p>
              <p className="text-secondary pt-2 text-xs md:text-lg">
                I’ve worked with teams to build real-world applications and improve user experience
                <br className="hidden md:block" /> using responsive design and modern frontend practices.
                <br className="hidden md:block" /> I also sharpen my skills through coding challenges,
                <br className="hidden md:block" /> hackathons, and continuous learning.
              </p>
              <p className="text-secondary pt-2 text-xs md:text-lg">
                I’m passionate about writing clean code, building reusable components,
                <br className="hidden md:block" /> optimizing performance, and continuously improving my skills.
              </p>
              <button
                onClick={() => setIsExpanded(false)}
                className="flex gap-3 items-center text-primary"
              >
                <p> See Less</p> <FaChevronUp />
              </button>
            </div>
          )}
          <div className="about-social md:flex justify-left gap-8 mt-8 hidden">
            <Link
              to="https://www.linkedin.com/in/yusrah-mohammed-513133312/"
              target="_blank"
            >
              <FaLinkedin className="text-primary size-6" />
            </Link>
             <Link
               to="https://discord.com/users/1462768883978080271"
               target="_blank"
             >
              <FaDiscord className="text-primary size-6" />
             </Link>
            <Link to="https://x.com/MohammedNusee" target="_blank">
              <FaXTwitter className="text-primary  size-6" />
            </Link>
            <Link to="https://github.com/miss-yusrah" target="_blank">
              <FaGithub className="text-primary size-6" />
            </Link>
            <Link to="https://t.me/miss_nusee" target="_blank">
              <FaTelegram className="text-primary  size-6" />
            </Link>
            <Link to="https://medium.com/@mohammedyusi6" target="_blank">
             <FaMedium className="text-primary  size-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="about-social flex justify-center gap-8 mt-8 md:hidden">
        <Link to="https://www.linkedin.com/in/yusrah-mohammed-513133312/" target="_blank">
          <FaLinkedin className="text-primary size-6" />
        </Link>
        <Link to="https://discord.com/users/1462768883978080271" target="_blank">
          <FaDiscord className="text-primary size-6" />
        </Link>
        <Link to="https://x.com/MohammedNusee" target="_blank">
          <FaXTwitter className="text-primary  size-6" />
        </Link>
        <Link to="https://github.com/miss-yusrah" target="_blank">
          <FaGithub className="text-primary size-6" />
        </Link>
        <Link to="https://t.me/miss_nusee" target="_blank">
          <FaTelegram className="text-primary  size-6" />
        </Link>
        <Link to="https://https://medium.com/@mohammedyusi6" target="_blank">
          <FaMedium className="text-primary  size-6" />
        </Link>
      </div>
    </section>
  );
};
export default About;
