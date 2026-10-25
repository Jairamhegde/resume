import { useEffect } from "react";
import { usePortfolio } from "./hooks/usePortfolio.js";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";

export default function App() {
  const { data, error, loading } = usePortfolio();

  useEffect(() => {
    if (data) document.title = `${data.profile.name} — Portfolio`;
  }, [data]);

  if (loading) return <p className="status">Loading…</p>;
  if (error) {
    return <p className="status">Could not load the portfolio. {error.message} Is the API running?</p>;
  }

  return (
    <main className="page">
      <Hero profile={data.profile} contact={data.contact} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Education education={data.education} />
      <footer className="footer">
        © {new Date().getFullYear()} {data.profile.name} ·{" "}
        <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
      </footer>
    </main>
  );
}
