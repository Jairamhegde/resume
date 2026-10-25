import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
    try {
      if (theme) localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const toggle = () => {
    const current =
      theme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(current === "dark" ? "light" : "dark");
  };
  return toggle;
}

export default function Topbar({ profile, sections, active }) {
  const toggleTheme = useTheme();

  return (
    <>
      <header className="topbar">
        <a href="#top" className="monogram" aria-label={`${profile.firstName} ${profile.lastName}, back to top`}>
          {profile.firstName[0]}
          {profile.lastName[0]}
          <span className="monogram-dot" aria-hidden="true" />
        </a>
        <div className="topbar-actions">
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle colour theme">
            <span className="theme-toggle-icon" aria-hidden="true" />
          </button>
          <a href="#contact" className="topbar-cta">
            Contact
          </a>
        </div>
      </header>

      <nav className="side-index" aria-label="Sections">
        <ol>
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={active === s.id ? "is-active" : ""}>
                <span className="side-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="side-line" aria-hidden="true" />
                <span className="side-label">{s.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
