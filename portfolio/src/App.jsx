import { useMemo } from "react";
import {
  profile,
  contact,
  sections,
  about,
  experience,
  projects,
  skills,
  education,
  coursework,
  certifications,
} from "./data/portfolio.js";
import { useActiveSection } from "./hooks/useActiveSection.js";
import Topbar from "./components/Topbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Stack from "./components/Stack.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const ids = useMemo(() => sections.map((s) => s.id), []);
  const active = useActiveSection(ids);
  // Each section gets its heading and number from `sections`.
  const meta = (id) => ({ section: sections.find((s) => s.id === id), index: ids.indexOf(id) + 1 });

  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Topbar profile={profile} sections={sections} active={active} />
      <Hero profile={profile} />
      <main className="page">
        <About {...meta("about")} about={about} experience={experience} />
        <Projects {...meta("work")} projects={projects} />
        <Stack {...meta("stack")} skills={skills} />
        <Education
          {...meta("education")}
          education={education}
          coursework={coursework}
          certifications={certifications}
        />
      </main>
      <Contact {...meta("contact")} contact={contact} profile={profile} />
    </>
  );
}
