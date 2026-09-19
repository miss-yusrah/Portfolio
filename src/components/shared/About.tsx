import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";

const socials = [
  {
    to: "https://www.linkedin.com/in/yusrah-mohammed-513133312/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    to: "https://github.com/miss-yusrah",
    icon: FaGithub,
    label: "GitHub",
  },
  { to: "https://x.com/MohammedNusee", icon: FaXTwitter, label: "X" },
  {
    to: "https://medium.com/@mohammedyusi6",
    icon: FaMedium,
    label: "Medium",
  },
  {
    to: "https://discord.com/users/1462768883978080271",
    icon: FaDiscord,
    label: "Discord",
  },
  { to: "https://t.me/miss_nusee", icon: FaTelegram, label: "Telegram" },
];

const About = () => {
  return (
    <section className="pb-16 md:pb-24" id="about">
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <img
              src="/Hero.jpeg"
              alt="Yusrah Eruaga Mohammed"
              className="w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] object-cover rounded-xl border border-line"
            />
          </div>
          <div className="lg:col-span-8 space-y-5">
            <p className="text-sm tracking-[0.16em] uppercase text-muted">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
              From frontend into systems across the web and blockchain
            </h2>
            <div className="space-y-4 text-muted text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                I’m Yusrah, a software developer focused on building practical
                digital products across the web and blockchain.
              </p>
              <p>
                I started in frontend development: learning how to turn ideas
                and designs into responsive, usable interfaces. Over time that
                curiosity pushed me beyond the interface into backend systems,
                databases, APIs, open-source work, and blockchain technologies.
              </p>
              <p>
                Today I work on products that sit between technology and
                real-world problems: payments and remittance experiences, grant
                infrastructure, collaborative tools, and interactive apps. I’m
                especially interested in Web3 and building systems that feel
                open, transparent, and usable.
              </p>
              <p>
                I’m still learning, experimenting, and going deeper technically.
                One thing has stayed consistent: I like taking an idea, figuring
                out how it can work, and building it.
              </p>
              <p>
                Outside of product work, I volunteer with the Nutrition and
                Dietetics Community of Nigeria on maternal and child nutrition
                outreach in Kaduna. A reminder that good technology should serve
                real people.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 pt-2">
              {socials.map(({ to, icon: Icon, label }) => (
                <Link key={label} to={to} target="_blank" aria-label={label}>
                  <Icon className="size-5 text-ink hover:text-accent transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
