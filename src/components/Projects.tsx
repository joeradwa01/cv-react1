import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";
import project1 from "../assets/project 1.png";
import project2 from "../assets/project 2.png";
import project3 from "../assets/project 3.png";
import project4 from "../assets/project 4.png";

const PROJECTS = [
  {
    id: 1, img: project1, category: "react",
    title: "Game Discovery Platform",
    description: "Responsive web app for discovering and exploring games by genre, rating, and platform. Built with external API integration and optimized filtering UX.",
    tech: ["React", "REST API", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "#",
    accent: "#00d4aa",
  },
  {
    id: 2, img: project2, category: "javascript",
    title: "Crypto Tracker Dashboard",
    description: "Real-time cryptocurrency dashboard tracking prices and trends with interactive Chart.js visualizations and live API polling.",
    tech: ["JavaScript", "Chart.js", "REST API"],
    github: "https://github.com/",
    demo: "#",
    accent: "#0091ff",
  },
  {
    id: 3, img: project3, category: "react",
    title: "Time Management App",
    description: "Productivity application for task tracking and time analysis with persistent local storage and visual progress indicators.",
    tech: ["React", "React Hooks", "localStorage"],
    github: "https://github.com/",
    demo: "#",
    accent: "#ff6b35",
  },
  {
    id: 4, img: project4, category: "javascript",
    title: "Property Listing Platform",
    description: "Real estate browsing platform with advanced search, filtering, and property detail views. Firebase-backed for real-time data.",
    tech: ["JavaScript", "Bootstrap", "Firebase"],
    github: "https://github.com/",
    demo: "#",
    accent: "#c084fc",
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "react", label: "React" },
  { key: "javascript", label: "JavaScript" },
];

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s, border-color 0.3s`,
        background: "var(--surface)",
        border: `1px solid ${hovered ? project.accent + "40" : "var(--border)"}`,
        borderRadius: 16,
        overflow: "hidden",
      }}>
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
        <img src={project.img} alt={project.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover", objectPosition: "top",
            transition: "transform 0.5s",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            display: "block",
          }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to top, ${project.accent}22, transparent 60%)`,
        }} />
        {/* Links on hover */}
        <div style={{
          position: "absolute", top: 14, right: 14,
          display: "flex", gap: 8,
          opacity: hovered ? 1 : 0, transition: "opacity 0.25s",
        }}>
          {[
            { href: project.github, icon: <FaGithub size={14} />, label: "GitHub" },
            { href: project.demo, icon: <FaExternalLinkAlt size={12} />, label: "Live" },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "6px 12px", borderRadius: 6,
                background: "rgba(8,11,16,0.85)", backdropFilter: "blur(8px)",
                color: "var(--text)", textDecoration: "none",
                fontSize: 11, fontFamily: "var(--font-display)", fontWeight: 600,
                border: "1px solid var(--border2)",
                letterSpacing: "0.03em",
              }}>
              {icon} {label}
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "22px 24px 24px" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8, marginBottom: 10,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: project.accent, flexShrink: 0,
            boxShadow: `0 0 8px ${project.accent}`,
          }} />
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 17, color: "var(--text)", letterSpacing: "-0.02em",
          }}>
            {project.title}
          </h3>
        </div>
        <p style={{
          fontSize: 13, color: "var(--text3)", lineHeight: 1.7,
          marginBottom: 18, fontWeight: 400,
        }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.map(t => (
            <span key={t} style={{
              padding: "3px 10px", borderRadius: 100,
              fontSize: 11, fontFamily: "var(--font-display)", fontWeight: 500,
              color: project.accent,
              border: `1px solid ${project.accent}30`,
              background: `${project.accent}08`,
              letterSpacing: "0.03em",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();

  return (
    <section id="projects" className="s-section" style={{
      padding: "120px 0",
      background: "var(--bg2)",
    }}>
      <div className="s-inner">

        {/* Section label + heading */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <span style={{
              fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 600,
              letterSpacing: "0.18em", color: "var(--accent)", textTransform: "uppercase",
            }}>02 — Projects</span>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 54px)",
            fontWeight: 800, letterSpacing: "-0.04em",
            color: "var(--text)", marginBottom: 48, lineHeight: 1.1,
          }}>
            Selected<br /><span style={{ color: "var(--text3)" }}>Work</span>
          </h2>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, marginBottom: 48 }}>
          {FILTERS.map(({ key, label }) => (
            <button key={key} onClick={() => setFilter(key)} style={{
              padding: "8px 20px", borderRadius: 8,
              fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 13,
              letterSpacing: "0.04em", cursor: "pointer",
              background: filter === key ? "var(--accent)" : "transparent",
              color: filter === key ? "var(--bg)" : "var(--text3)",
              border: filter === key ? "1px solid var(--accent)" : "1px solid var(--border)",
              transition: "all 0.2s",
            }}>
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        {/* GitHub CTA */}
        <div style={{ marginTop: 52, textAlign: "center" }}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 32px", borderRadius: 8,
              border: "1px solid var(--border2)",
              color: "var(--text2)", textDecoration: "none",
              fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14,
              letterSpacing: "0.04em",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--accent)"; el.style.color = "var(--accent)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border2)"; el.style.color = "var(--text2)"; }}>
            <FaGithub size={16} /> View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
