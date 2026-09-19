import { exploring } from "../../constants";

const Exploring = () => {
  return (
    <section className="pb-16 md:pb-24">
      <div className="section-shell pt-12 md:pt-16">
        <p className="text-sm tracking-[0.16em] uppercase text-muted mb-2">
          Currently exploring
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-8 max-w-xl">
          Going deeper into the stack
        </h2>
        <ul className="flex flex-wrap gap-2 md:gap-3">
          {exploring.map((item) => (
            <li
              key={item}
              className="text-sm md:text-base text-ink border border-line bg-paper px-4 py-2 rounded-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Exploring;
