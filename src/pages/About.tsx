import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { exploring, whatIDo } from "../constants";
import { useSectionReveal } from "../hooks/useSectionReveal";

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

const AboutPage = () => {
  useSectionReveal(".about-intro");
  useSectionReveal(".about-what");
  useSectionReveal(".about-explore");

  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="section-shell space-y-16 md:space-y-20">
        <section className="about-intro space-y-10 md:space-y-12">
          <header className="reveal-item max-w-3xl space-y-4">
            <p className="label-mono">about</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink leading-tight">
              Software developer. Builder across web and blockchain.
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 lg:items-stretch">
            <div className="reveal-item lg:col-span-4 relative overflow-hidden rounded-lg border border-line aspect-[4/5] lg:aspect-auto">
              <img
                src="/Hero.jpeg"
                alt="Yusrah Eruaga Mohammed"
                className="w-full h-full object-cover object-top lg:absolute lg:inset-0"
              />
            </div>
            <div className="reveal-item lg:col-span-8 flex flex-col justify-center space-y-5 text-muted text-base md:text-lg leading-relaxed">
              <p>
                I’m Yusrah Eruaga Mohammed. I build practical digital products:
                web applications and blockchain-powered experiences.
              </p>
              <p>
                I started in frontend: learning how to turn designs into
                responsive, usable interfaces. That curiosity pushed me past the
                UI into APIs, databases, open-source work, and onchain systems.
              </p>
              <p>
                Today I ship products around payments, grants, coordination
                tools, and interactive apps. Frontend is still the craft I trust
                most. Web3 is where I’m going deeper.
              </p>
              <p>
                I’m still learning. The constant is simple: take an idea, figure
                out how it can work, and build it. I also volunteer with NDCN on
                maternal and child nutrition outreach in Kaduna. Technology
                should serve real people.
              </p>
              <p>
                Based in Kaduna, Nigeria. Currently building at CoLAB Innovation
                Hub and shipping live products across web and blockchain.
              </p>
              <div className="flex flex-wrap gap-5 pt-1">
                {socials.map(({ to, icon: Icon, label }) => (
                  <Link key={label} to={to} target="_blank" aria-label={label}>
                    <Icon className="size-5 text-ink hover:text-accent transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-what pt-4 md:pt-6">
          <p className="reveal-item label-mono mb-3">what I do</p>
          <h2 className="reveal-item font-display text-2xl md:text-3xl font-semibold text-ink mb-8">
            How I spend my time
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatIDo.map((item, i) => (
              <div
                key={item.title}
                className="reveal-item border border-line bg-paper rounded-lg p-5 md:p-6 space-y-2"
              >
                <p className="label-mono">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-explore">
          <p className="reveal-item label-mono mb-3">currently exploring</p>
          <h2 className="reveal-item font-display text-2xl md:text-3xl font-semibold text-ink mb-6">
            Going deeper into the stack
          </h2>
          <ul className="flex flex-wrap gap-2">
            {exploring.map((item) => (
              <li
                key={item}
                className="reveal-item font-mono text-xs md:text-sm text-ink border border-line bg-paper px-3 py-2 rounded"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
