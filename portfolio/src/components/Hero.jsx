import NetworkBackground from "./NetworkBackground.jsx";

// Each word animates in letter by letter; the stagger flows across words.
function AnimatedWord({ word, offset, className }) {
  return (
    <span className={`word ${className}`} aria-hidden="true">
      {word.split("").map((ch, i) => (
        <span key={i} className="char" style={{ "--i": offset + i }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function Hero({ profile }) {
  const { firstName, lastName } = profile;

  return (
    <header className="hero" id="top">
      <NetworkBackground />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner">
        <p className="hero-hi">Hi, I&rsquo;m</p>

        <h1 className="hero-name" aria-label={`${firstName} ${lastName}`}>
          <AnimatedWord word={firstName} offset={0} className="word-light" />
          <AnimatedWord word={lastName} offset={firstName.length + 1} className="word-strong" />
          <span className="name-dot" aria-hidden="true">
            .
          </span>
        </h1>

        <p className="hero-role">{profile.role}</p>

        <div className="hero-actions">
          <a href="#work" className="link-cta">
            See my work <span aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="link-cta link-cta--muted">
            Contact me
          </a>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about">
        <span className="scroll-line" aria-hidden="true" />
      </a>
    </header>
  );
}
