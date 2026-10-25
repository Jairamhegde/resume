import Reveal from "./Reveal.jsx";

// Section heading in the style "02 — WORK / Selected work."
export function SectionHead({ section, index }) {
  return (
    <Reveal className="section-head">
      <p className="section-kicker">
        <span className="section-index">{String(index).padStart(2, "0")}</span>
        <span className="section-dash" aria-hidden="true" />
        {section.label}
      </p>
      <h2 id={`${section.id}-title`} className="section-title">
        <span className="title-light">{section.heading}</span> <span className="title-strong">{section.emphasis}</span>
      </h2>
    </Reveal>
  );
}

export default function Section({ section, index, children }) {
  return (
    <section id={section.id} className="section" aria-labelledby={`${section.id}-title`}>
      <SectionHead section={section} index={index} />
      {children}
    </section>
  );
}
