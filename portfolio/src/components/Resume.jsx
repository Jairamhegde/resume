import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v8.5M4.5 7.5 8 11l3.5-3.5M2.5 13.5h11" />
    </svg>
  );
}

export default function Resume({ section, index, resume }) {
  // BASE_URL is "/resume/" on GitHub Pages, so the link works there and locally.
  const href = `${import.meta.env.BASE_URL}${resume.file}`;

  return (
    <Section section={section} index={index}>
      <div className="resume">
        <Reveal className="resume-info">
          <p className="resume-summary">{resume.summary}</p>

          <dl className="resume-details">
            {resume.details.map((d) => (
              <div key={d.label} className="fact">
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>

          <div className="resume-actions">
            <a href={href} download={resume.downloadName} className="resume-btn resume-btn--solid">
              <DownloadIcon />
              Download PDF
            </a>
            <a href={href} target="_blank" rel="noreferrer" className="resume-btn">
              Open in new tab <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="resume-viewer" delay={120}>
          <div className="viewer-bar">
            <span className="viewer-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="viewer-name">{resume.downloadName}</span>
          </div>
          <object data={`${href}#view=FitH&toolbar=0`} type="application/pdf" className="viewer-frame" aria-label="Resume preview">
            <div className="viewer-fallback">
              <p>Your browser can&rsquo;t show the preview here.</p>
              <a href={href} target="_blank" rel="noreferrer" className="resume-btn">
                Open the PDF <span aria-hidden="true">↗</span>
              </a>
            </div>
          </object>
        </Reveal>
      </div>
    </Section>
  );
}
