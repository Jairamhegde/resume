export default function Education({ education }) {
  return (
    <section className="section">
      <h2>College</h2>
      <div className="grid">
        {education.map((ed) => (
          <div key={ed.institution} className="card">
            <div className="card-head">
              <h3>{ed.institution}</h3>
              {ed.period && <span className="date">{ed.period}</span>}
            </div>
            <p>{ed.degree}</p>
            <p className="muted">
              {[ed.score, ed.place].filter(Boolean).join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
