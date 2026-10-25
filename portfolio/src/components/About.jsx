import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

// Turns "*word*" into highlighted spans.
function Highlighted({ text }) {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") ? (
      <em key={i} className="hl">
        {part.slice(1, -1)}
      </em>
    ) : (
      part
    )
  );
}

export default function About({ section, index, about, experience }) {
  return (
    <Section section={section} index={index}>
      <div className="about">
        <Reveal as="p" className="about-statement">
          <Highlighted text={about.statement} />
        </Reveal>

        <div className="about-body">
          <Reveal className="about-text" delay={100}>
            {about.intro && <p className="about-intro">{about.intro}</p>}
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal as="dl" className="about-facts" delay={200}>
            {about.facts.map((f) => (
              <div key={f.label} className="fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>

        {experience.length > 0 && (
          <div className="now">
            {experience.map((job) => (
              <Reveal key={job.organization + job.role} className="now-item" delay={150}>
                <span className="now-tag">
                  <span className="pulse-dot" aria-hidden="true" /> Now
                </span>
                <div>
                  <p className="now-title">
                    {job.role} <span className="muted">at</span> {job.organization}
                  </p>
                  <p className="now-team">{job.team}</p>
                  <p className="now-summary">{job.summary}</p>
                </div>
                <span className="now-period">{job.period}</span>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
