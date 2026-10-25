import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Stack({ section, index, skills }) {
  return (
    <Section section={section} index={index}>
      <div className="stack-grid">
        {skills.map((group, i) => (
          <Reveal key={group.group} className="stack-card" delay={(i % 3) * 80}>
            <div className="stack-card-head">
              <span className="stack-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="stack-title">{group.group}</h3>
              <span className="stack-count">{group.items.length}</span>
            </div>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className="chip chip--lg">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
