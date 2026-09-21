import { Link } from "react-router-dom";
import { useSectionReveal } from "../../hooks/useSectionReveal";

const AboutTeaser = () => {
  useSectionReveal(".about-teaser");

  return (
    <section className="about-teaser py-14 md:py-20">
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="reveal-item lg:col-span-3">
            <p className="label-mono">01 / about</p>
          </div>
          <div className="lg:col-span-7 space-y-5">
            <h2 className="reveal-item font-display text-2xl md:text-3xl font-semibold text-ink max-w-xl">
              Frontend first. Growing into products, backend, and Web3.
            </h2>
            <p className="reveal-item text-muted text-base md:text-lg leading-relaxed max-w-xl">
              I started by shipping interfaces. Now I build digital products
              end to end where I can: web apps, APIs, data, deployment, and
              blockchain experiences.
            </p>
            <Link
              to="/about"
              className="reveal-item inline-flex font-mono text-sm text-accent hover:underline underline-offset-4"
            >
              read the full story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
