import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Education({ section, index, education, coursework, certifications }) {
  return (
    <Section section={section} index={index}>
      <div className="ledger">
        {education.map((ed, i) => (
          <Reveal key={ed.institution} className="ledger-row" delay={i * 80}>
            <span className="ledger-period">
              {ed.period}
              {ed.note && <small>{ed.note}</small>}
            </span>
            <div className="ledger-main">
              <h3>{ed.degree}</h3>
              <p>
                {ed.institution} <span className="muted">· {ed.place}</span>
              </p>
            </div>
            <span className="ledger-score">
              {ed.score}
              <small>{ed.scale}</small>
            </span>
          </Reveal>
        ))}
      </div>

      <div className="extras">
        <Reveal className="extra">
          <h3 className="extra-title">Coursework</h3>
          <ul>
            {coursework.map((c) => (
              <li key={c.name}>
                <strong>{c.name}</strong>
                <span>{c.detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="extra" delay={100}>
          <h3 className="extra-title">Certifications</h3>
          <ul>
            {certifications.map((c) => (
              <li key={c.name}>
                <strong>{c.name}</strong>
                <span>{c.issuer}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
