import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { exploring, stacks, whatIDo } from "../constants";
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
  { to: "https://x.com/nuseeX", icon: FaXTwitter, label: "X" },
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
  useSectionReveal(".about-stacks");
  useSectionReveal(".about-explore");

  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="section-shell space-y-16 md:space-y-20">
        <section className="about-intro space-y-10 md:space-y-12">
          <header className="reveal-item max-w-3xl space-y-4">
            <p className="label-mono">
              Software Developer · Frontend Engineer · Web3 Builder
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink leading-tight">
              Building web applications, digital products, and
              blockchain-powered experiences.
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
                I’m Yusrah Eruaga Mohammed, a software developer with strong
                frontend experience. I build practical digital products across
                the web, and I’m expanding into backend and blockchain.
              </p>
              <p>
                I started with interfaces: HTML, CSS, JavaScript, React,
                TypeScript, Next.js. That work pushed me into APIs, databases,
                deployment, open source, and Web3 product experiences.
              </p>
              <p>
                Frontend is still my strongest craft. Product development is
                where I spend more of my time now. Web3 is an area I’m going
                deeper in, not the only box I sit in.
              </p>
              <p>
                I also teach beginners and volunteer with NDCN on maternal and
                child nutrition outreach in Kaduna. Technology should serve real
                people.
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

        <section className="about-what">
          <p className="reveal-item label-mono mb-3">what I build</p>
          <h2 className="reveal-item font-display text-2xl md:text-3xl font-semibold text-ink mb-8">
            Four areas of focus
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

        <section className="about-stacks">
          <p className="reveal-item label-mono mb-3">stack</p>
          <h2 className="reveal-item font-display text-2xl md:text-3xl font-semibold text-ink mb-8">
            How I work technically
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stacks.map((group) => (
              <div
                key={group.title}
                className="reveal-item border border-line bg-paper rounded-lg p-5 space-y-3"
              >
                <h3 className="font-display text-base font-semibold text-ink">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[11px] text-muted border border-line px-2 py-1 rounded"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="about-explore">
          <p className="reveal-item label-mono mb-3">currently exploring</p>
          <h2 className="reveal-item font-display text-2xl md:text-3xl font-semibold text-ink mb-6">
            Going deeper
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
