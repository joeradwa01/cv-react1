import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const JOBS = [
  {
    title: "Connectivity Expert",
    company: "AT&T",
    location: "Orlando, FL",
    period: "Mar 2024 — Present",
    type: "Full-time",
    accent: "#00A8E0",
    bullets: [
      "Provide technical support for mobile devices, tablets, and smart home products to 50+ customers daily",
      "Troubleshoot connectivity issues across iOS, Android, and AT&T network infrastructure",
      "Consistently exceed monthly sales targets through consultative selling and upsell techniques",
      "Manage customer accounts via CRM platforms — tracking service issues, upgrades, and follow-ups",
    ],
  },
  {
    title: "Sales Representative & Shift Leader",
    company: "Alliance Wireless (Metro by T-Mobile)",
    location: "Milwaukee, WI",
    period: "Jun 2021 — Feb 2024",
    type: "Full-time",
    accent: "#E20074",
    bullets: [
      "Led shifts of 3–5 team members, managing daily operations, inventory, and customer escalations",
      "Processed 100+ transactions/week across new activations, upgrades, and accessory sales",
      "Resolved complex billing and technical support cases using carrier CRM and ticketing tools",
      "Trained new hires on sales methodology, product knowledge, and customer service standards",
    ],
  },
];

const JobCard = ({ job, index }: { job: typeof JOBS[0]; index: number }) => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        position: "relative",
        marginBottom: index < JOBS.length - 1 ? 52 : 0,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-24px)",
        transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`,
      }}>

      {/* Timeline dot */}
      <div style={{
        position: "absolute", left: -32, top: 16,
        width: 14, height: 14, borderRadius: "50%",
        background: job.accent,
        boxShadow: `0 0 12px ${job.accent}60`,
        border: "2px solid var(--bg2)",
      }} />

      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 16, padding: "28px 32px",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = job.accent + "50"}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}>

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
          <div>
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 20, color: "var(--text)", letterSpacing: "-0.02em",
              marginBottom: 4,
            }}>{job.title}</h3>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 14, color: job.accent, fontWeight: 500 }}>{job.company}</span>
              <span style={{ fontSize: 12, color: "var(--text3)" }}>· {job.location}</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
            <span style={{
              padding: "4px 12px", borderRadius: 100,
              background: `${job.accent}15`,
              border: `1px solid ${job.accent}30`,
              color: job.accent, fontSize: 12,
              fontFamily: "var(--font-display)", fontWeight: 500,
            }}>{job.type}</span>
            <span style={{ fontSize: 12, color: "var(--text3)" }}>{job.period}</span>
          </div>
        </div>

        <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {job.bullets.map((b, j) => (
            <li key={j} style={{ display: "flex", gap: 12, fontSize: 14, color: "var(--text3)", lineHeight: 1.65, fontWeight: 400 }}>
              <span style={{ color: job.accent, flexShrink: 0, marginTop: 2, fontSize: 12 }}>▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Experience = () => {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();

  return (
    <section id="work" className="s-section" style={{
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
              letterSpacing: "0.18em", color: "var(--accent3)", textTransform: "uppercase",
            }}>04 — Experience</span>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 54px)",
            fontWeight: 800, letterSpacing: "-0.04em",
            color: "var(--text)", marginBottom: 64, lineHeight: 1.1,
          }}>
            Where I've<br /><span style={{ color: "var(--text3)" }}>Worked</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="timeline-wrap" style={{ position: "relative", paddingLeft: 32 }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 7, top: 12, bottom: 12,
            width: 1, background: "var(--border)",
          }} />

          {JOBS.map((job, i) => (
            <JobCard key={i} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
