import { Link } from "react-router-dom";
import { projectData } from "../../constants";
import { useSectionReveal } from "../../hooks/useSectionReveal";

const SelectedWork = () => {
  const featured = projectData.slice(0, 2);
  useSectionReveal(".selected-work");

  return (
    <section className="selected-work py-14 md:py-20" id="work">
      <div className="section-shell">
        <div className="reveal-item flex items-baseline justify-between gap-4 mb-8 md:mb-10">
          <div className="space-y-2">
            <p className="label-mono">02 / featured</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
              Selected work
            </h2>
          </div>
          <Link
            to="/projects"
            className="font-mono text-xs md:text-sm text-accent hover:underline underline-offset-4"
          >
            all projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {featured.map((project, i) => (
            <a
              key={project.project_title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-item group flex flex-col border border-line bg-paper rounded-lg overflow-hidden hover:border-ink/30 transition-colors"
            >
              <div className="overflow-hidden bg-fog border-b border-line">
                <img
                  src={project.image}
                  alt=""
                  className="w-full aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6 space-y-2 flex-1 flex flex-col">
                <p className="label-mono">
                  {String(i + 1).padStart(2, "0")} · {project.category}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                  {project.project_title}
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>
                <p className="font-mono text-xs text-accent pt-2">
                  open live ↗
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
