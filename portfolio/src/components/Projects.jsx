import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function ProjectCard({ project, number, delay }) {
  return (
    <Reveal as="article" className="project-card" delay={delay} aria-labelledby={`${project.slug}-name`}>
      <div className="card-top">
        <span className="card-num">{String(number).padStart(2, "0")}</span>
        <span className="card-period">{project.period}</span>
      </div>

      <p className="card-category">{project.category}</p>
      <h3 id={`${project.slug}-name`} className="card-name">
        {project.name}
      </h3>
      <p className="card-tagline">{project.tagline}</p>

      <p className="card-brief">{project.brief}</p>

      <div className="card-stack">
        <p className="card-label">Tech stack</p>
        <ul className="chips" aria-label={`${project.name} tech stack`}>
          {project.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <a href={project.github} target="_blank" rel="noreferrer" className="card-link">
        <GitHubIcon />
        View on GitHub
        <span className="arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </Reveal>
  );
}

export default function Projects({ section, index, projects }) {
  return (
    <Section section={section} index={index}>
      <div className="project-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} number={i + 1} delay={i * 120} />
        ))}
      </div>
    </Section>
  );
}
