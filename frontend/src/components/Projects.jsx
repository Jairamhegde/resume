function ProjectCard({ project }) {
  return (
    <article className="card project">
      <div className="card-head">
        <div>
          <h3>{project.name}</h3>
          <p className="muted">{project.tagline}</p>
        </div>
        {project.period && <span className="date">{project.period}</span>}
      </div>

      <ul className="points">
        {project.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {project.stack.length > 0 && (
        <ul className="tags">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      )}

      {project.deployment && <p className="muted small">Deployed: {project.deployment}</p>}

      {project.link && (
        <a className="button" href={project.link} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      )}
    </article>
  );
}

export default function Projects({ projects }) {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
