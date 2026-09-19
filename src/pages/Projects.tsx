import { projectData } from "../constants";
import { useSectionReveal } from "../hooks/useSectionReveal";

const Projects = () => {
  useSectionReveal(".projects-page");

  return (
    <section className="projects-page pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="section-shell space-y-10 md:space-y-14">
        <div className="reveal-item max-w-2xl space-y-3">
          <p className="label-mono">work / archive</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink">
            Problems I’ve worked on, products I’ve shipped
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Live builds across web applications and blockchain-powered products.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {projectData.map((project, index) => (
            <article
              key={project.project_title}
              className="reveal-item grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block overflow-hidden rounded-xl border border-line bg-ink/5 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.project_title} preview`}
                  className="w-full aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </a>

              <div
                className={`space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <p className="label-mono">{project.category}</p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                  {project.project_title}
                </h2>
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-xs text-muted border border-line bg-paper px-2.5 py-1 rounded"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ink text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-accent transition-colors"
                >
                  View live project
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
