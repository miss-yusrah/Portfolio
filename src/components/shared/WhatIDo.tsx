import { whatIDo } from "../../constants";

const WhatIDo = () => {
  return (
    <section className="pb-16 md:pb-24">
      <div className="section-shell">
        <p className="text-sm tracking-[0.16em] uppercase text-muted mb-2">
          What I do
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-8 md:mb-12 max-w-xl">
          From interfaces to systems behind them
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden">
          {whatIDo.map((item) => (
            <div key={item.title} className="bg-fog p-6 md:p-8 space-y-3">
              <h3 className="font-display text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="text-muted text-base leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
