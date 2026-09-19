import { experienceData } from "../constants";
import { useSectionReveal } from "../hooks/useSectionReveal";

const Experience = () => {
  useSectionReveal(".experience-page");

  return (
    <section className="experience-page pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="section-shell space-y-10 md:space-y-12">
        <div className="reveal-item max-w-2xl space-y-3">
          <p className="label-mono">experience</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink">
            Where I’ve been building
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Roles where I’ve shipped interfaces, worked with teams, and grown
            past the frontend into fuller product work.
          </p>
        </div>

        {experienceData.map((project) => (
          <article
            key={project.project_title}
            className="reveal-item border border-line bg-paper rounded-2xl p-6 md:p-10 space-y-6"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                  {project.project_title}
                </h2>
                <p className="text-muted mt-1">
                  {project.institution} · {project.location}
                </p>
              </div>
              <p className="text-sm text-muted shrink-0">{project.date}</p>
            </div>
            <ul className="space-y-3 text-muted text-base leading-relaxed list-disc pl-5">
              {project.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {project.images?.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {project.images.map((img) => (
                  <img
                    key={img}
                    src={img}
                    alt=""
                    className="reveal-item w-full aspect-[4/3] object-cover rounded-lg border border-line"
                  />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
