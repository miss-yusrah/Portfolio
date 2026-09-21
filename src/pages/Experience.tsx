import { useRef } from "react";
import { experienceData } from "../constants";
import { useItemReveal } from "../hooks/useSectionReveal";

const Experience = () => {
  const pageRef = useRef<HTMLElement>(null);
  useItemReveal(pageRef);

  return (
    <section
      ref={pageRef}
      className="experience-page pt-28 md:pt-36 pb-16 md:pb-24"
    >
      <div className="section-shell space-y-10 md:space-y-14">
        <div className="reveal-item max-w-2xl space-y-3">
          <p className="label-mono">experience</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink">
            How I’ve grown as a builder
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Not just job titles. Product work, open source, teaching, and the
            path from frontend into software and Web3.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {experienceData.map((role) => (
            <article
              key={role.id}
              className="reveal-item border border-line bg-paper rounded-xl p-5 sm:p-6 md:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-4 space-y-3">
                  <p className="label-mono">{role.id}</p>
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-ink leading-snug">
                    {role.title}
                  </h2>
                  <p className="text-muted text-sm md:text-base">{role.org}</p>
                  <p className="font-mono text-xs text-muted">{role.date}</p>
                  {role.tags.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5 pt-2">
                      {role.tags.map((tag) => (
                        <li
                          key={tag}
                          className="font-mono text-[11px] text-muted border border-line px-2 py-1 rounded"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="lg:col-span-8 space-y-5">
                  <p className="text-muted text-base md:text-lg leading-relaxed">
                    {role.summary}
                  </p>
                  <div>
                    <p className="label-mono mb-3">highlights</p>
                    <ul className="space-y-2.5 text-muted text-sm md:text-base leading-relaxed list-disc pl-5">
                      {role.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  {role.images.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                      {role.images.map((img) => (
                        <img
                          key={img}
                          src={img}
                          alt=""
                          className="w-full aspect-[4/3] object-cover rounded-lg border border-line"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
