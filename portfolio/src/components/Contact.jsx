import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { SectionHead } from "./Section.jsx";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${text}`;
    }
  };
  return (
    <button type="button" className="btn btn-ghost" onClick={copy} aria-live="polite">
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}

export default function Contact({ section, index, contact, profile }) {
  const [user, domain] = contact.email.split("@");

  return (
    <section id={section.id} className="contact" aria-labelledby={`${section.id}-title`}>
      <div className="contact-inner">
        <SectionHead section={section} index={index} />

        <Reveal as="p" className="contact-lead" delay={60}>
          Have a backend to build, <em>or a role to fill?</em>
        </Reveal>

        <Reveal delay={140}>
          <a href={`mailto:${contact.email}`} className="contact-email">
            <span>{user}</span>
            <span className="at">@</span>
            <wbr />
            <span>{domain}</span>
          </a>
        </Reveal>

        <Reveal className="contact-actions" delay={220}>
          <a href={`mailto:${contact.email}`} className="btn btn-solid">
            Email me <span aria-hidden="true">→</span>
          </a>
          <CopyButton text={contact.email} />
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </Reveal>

        <footer className="footer">
          <span>
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
          </span>
          <span>{profile.location}</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
