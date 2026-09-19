import Button from "../ui/Button.tsx";
import { useSectionReveal } from "../../hooks/useSectionReveal";

const Hero = () => {
  useSectionReveal(".hero-section");

  return (
    <section className="hero-section pt-28 md:pt-32 pb-14 md:pb-20">
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          <div className="lg:col-span-8 space-y-6">
            <p className="reveal-item label-mono">
              yusrah.mohammed // portfolio
            </p>
            <h1 className="reveal-item font-display text-4xl sm:text-5xl md:text-[3.4rem] font-semibold text-ink leading-[1.08] max-w-3xl">
              Software developer building web &amp; blockchain products.
            </h1>
            <p className="reveal-item text-muted text-base md:text-lg leading-relaxed max-w-xl">
              Frontend is my foundation. I use it to ship practical interfaces,
              dashboards, and onchain experiences people can actually use.
            </p>
            <div className="reveal-item flex flex-wrap gap-3 pt-1">
              <a href="/projects">
                <Button
                  title="View work"
                  containerClass="bg-ink text-white hover:bg-accent"
                />
              </a>
              <a href="mailto:mohammedyusi6@gmail.com">
                <Button
                  title="Get in touch"
                  containerClass="bg-paper text-ink border border-line hover:border-ink"
                />
              </a>
            </div>
          </div>

          <aside className="reveal-item lg:col-span-4 border border-line bg-paper rounded-lg p-5 md:p-6 space-y-4">
            <p className="label-mono">status</p>
            <dl className="space-y-3 font-mono text-sm">
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">role</dt>
                <dd className="text-ink text-right">Software Developer</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">based</dt>
                <dd className="text-ink text-right">Kaduna, NG</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">focus</dt>
                <dd className="text-ink text-right">Web · Web3</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">stack</dt>
                <dd className="text-ink text-right">React · TS · Next</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
