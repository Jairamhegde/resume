export default function Hero({ profile, contact }) {
  return (
    <header className="card hero">
      <h1>{profile.name}</h1>
      {profile.quote && <p className="quote">“{profile.quote}”</p>}
      <div className="actions">
        <a className="button" href={`mailto:${contact.email}`}>Contact me</a>
        {contact.github && (
          <a className="button button-light" href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {contact.linkedin && (
          <a className="button button-light" href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
      </div>
    </header>
  );
}
