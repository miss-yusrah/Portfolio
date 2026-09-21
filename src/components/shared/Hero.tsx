import Button from "../ui/Button.tsx";
import { useSectionReveal } from "../../hooks/useSectionReveal";

const Hero = () => {
  useSectionReveal(".hero-section");

  return (
    <section className="hero-section pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            <p className="reveal-item label-mono">
              Software Developer · Frontend Engineer · Web3 Builder
            </p>
            <h1 className="reveal-item font-display text-[1.75rem] leading-snug sm:text-4xl md:text-[3.25rem] md:leading-[1.08] font-semibold text-ink max-w-3xl">
              Software developer building web applications, digital products,
              and blockchain-powered experiences.
            </h1>
            <p className="reveal-item text-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              Strong frontend foundation. Expanding into backend, product
              development, and Web3. I take ideas from design to something
              people can use.
            </p>
            <div className="reveal-item flex flex-wrap gap-3 pt-1">
              <a href="/projects">
                <Button
                  title="View work"
                  containerClass="bg-ink text-fog hover:bg-accent hover:text-fog"
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
            <p className="label-mono">focus</p>
            <dl className="space-y-3 font-mono text-sm">
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">01</dt>
                <dd className="text-ink text-right">Web Development</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">02</dt>
                <dd className="text-ink text-right">Frontend Engineering</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">03</dt>
                <dd className="text-ink text-right">Product Development</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">04</dt>
                <dd className="text-ink text-right">Blockchain & Web3</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
