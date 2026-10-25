export default function Skills({ skills }) {
  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((group) => (
          <div key={group.group} className="card">
            <h3>{group.group}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
