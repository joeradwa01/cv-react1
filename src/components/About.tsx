import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaLinux, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiSalesforce, SiMysql, SiTypescript } from "react-icons/si";
import aboutPhoto from "../assets/df5393e2-4d1e-4954-8ac4-f85b9335136b.jpg";
import { useScrollReveal } from "../hooks/useScrollReveal";

const SKILLS = [
  { icon: <FaReact color="#61DAFB" size={22} />, name: "React" },
  { icon: <FaJs color="#F7DF1E" size={22} />, name: "JavaScript" },
  { icon: <SiTypescript color="#3178C6" size={20} />, name: "TypeScript" },
  { icon: <FaHtml5 color="#E34F26" size={22} />, name: "HTML5" },
  { icon: <FaCss3Alt color="#1572B6" size={22} />, name: "CSS3" },
  { icon: <SiTailwindcss color="#06B6D4" size={20} />, name: "Tailwind CSS" },
  { icon: <SiMysql color="#4479A1" size={22} />, name: "SQL" },
  { icon: <SiSalesforce color="#00A1E0" size={20} />, name: "Salesforce" },
  { icon: <FaLinux color="#FCC624" size={22} />, name: "Linux" },
  { icon: <FaGithub color="#fff" size={20} />, name: "Git / GitHub" },
];

const TABS = ["Skills", "Education", "Certifications"];

export const About = () => {
  const [tab, setTab] = useState("Skills");
  const { ref: photoRef, visible: photoVisible } = useScrollReveal();
  const { ref: contentRef, visible: contentVisible } = useScrollReveal();

  return (
    <section id="about" className="s-section" style={{
      padding: "120px 0",
      background: "var(--bg)",
    }}>
      <div className="s-inner">

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <span style={{
            fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.18em", color: "var(--accent2)", textTransform: "uppercase",
          }}>03 — About</span>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>

        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 54px)",
          fontWeight: 800, letterSpacing: "-0.04em",
          color: "var(--text)", marginBottom: 64, lineHeight: 1.1,
        }}>
          The person<br /><span style={{ color: "var(--text3)" }}>behind the code</span>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 80, alignItems: "start",
        }} className="about-grid">

          {/* Left — photo */}
          <div
            ref={photoRef as React.RefObject<HTMLDivElement>}
            style={{
              position: "relative",
              opacity: photoVisible ? 1 : 0,
              transform: photoVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}>
            <div style={{
              position: "absolute", inset: -1,
              background: `linear-gradient(135deg, var(--accent)30, var(--accent2)20)`,
              borderRadius: 20, zIndex: 0,
            }} />
            <img src={aboutPhoto} alt="Yousuf Radwan"
              style={{
                position: "relative", zIndex: 1,
                width: "100%", borderRadius: 18,
                display: "block", filter: "grayscale(15%)",
              }} />
            {/* Floating stat */}
            <div style={{
              position: "absolute", bottom: -20, right: -20, zIndex: 2,
              background: "var(--surface)",
              border: "1px solid var(--border2)",
              borderRadius: 14, padding: "16px 20px",
              backdropFilter: "blur(12px)",
              textAlign: "center",
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--accent)", lineHeight: 1 }}>3+</div>
              <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4, fontWeight: 400 }}>Years<br />Experience</div>
            </div>
          </div>

          {/* Right — content */}
          <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}>
            <p style={{
              fontSize: 15, color: "var(--text2)", lineHeight: 1.85,
              fontWeight: 400, marginBottom: 36,
            }}>
              I'm a frontend developer and CS graduate with a passion for building interfaces that feel effortless to use. My background spans web development, IT support, and customer-facing tech environments — giving me a rare mix of technical depth and people-first thinking.
            </p>
            <p style={{
              fontSize: 15, color: "var(--text3)", lineHeight: 1.85,
              fontWeight: 400, marginBottom: 40,
            }}>
              Currently based in Orlando, FL, working as a Connectivity Expert at AT&T while deepening my React and Salesforce knowledge. Apple Certified iOS Technician. Always building something.
            </p>

            {/* Tabs */}
            <div style={{ borderBottom: "1px solid var(--border)", marginBottom: 28 }}>
              <div style={{ display: "flex", gap: 2 }}>
                {TABS.map(t => (
                  <button key={t} onClick={() => setTab(t)} style={{
                    padding: "10px 20px",
                    background: "none", border: "none",
                    borderBottom: `2px solid ${tab === t ? "var(--accent)" : "transparent"}`,
                    color: tab === t ? "var(--text)" : "var(--text3)",
                    fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 13,
                    letterSpacing: "0.04em", cursor: "pointer",
                    transition: "color 0.2s",
                    marginBottom: -1,
                  }}>{t}</button>
                ))}
              </div>
            </div>

            {tab === "Skills" && (
              <div className="skills-grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 10,
              }}>
                {SKILLS.map(({ icon, name }) => (
                  <div key={name} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "11px 14px", borderRadius: 10,
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}>
                    <div style={{
                      width: 34, height: 34, borderRadius: 8,
                      background: "var(--surface2)",
                      border: "1px solid var(--border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>{icon}</div>
                    <span style={{
                      fontSize: 13, fontWeight: 500, color: "var(--text2)",
                    }}>{name}</span>
                  </div>
                ))}
              </div>
            )}

            {tab === "Education" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{
                  padding: "20px 22px", borderRadius: 12,
                  background: "var(--surface)", border: "1px solid var(--border)",
                }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 6 }}>
                    B.Sc. Computer Science
                  </div>
                  <div style={{ fontSize: 13, color: "var(--accent2)", marginBottom: 4 }}>Jordan University of Science & Technology</div>
                  <div style={{ fontSize: 12, color: "var(--text3)" }}>2019 — 2023</div>
                </div>
                <div style={{
                  padding: "20px 22px", borderRadius: 12,
                  background: "var(--surface)", border: "1px solid var(--border)",
                }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 6 }}>
                    Apple Certified iOS Technician
                  </div>
                  <div style={{ fontSize: 13, color: "var(--accent2)", marginBottom: 4 }}>Apple Inc.</div>
                  <div style={{ fontSize: 12, color: "var(--text3)" }}>Professional Certification</div>
                </div>
              </div>
            )}

            {tab === "Certifications" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{
                  padding: "20px 22px", borderRadius: 12,
                  background: "var(--surface)", border: "1px solid rgba(0,161,224,0.3)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <SiSalesforce color="#00A1E0" size={20} />
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text)" }}>
                      Salesforce Administrator
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text3)" }}>In progress via Trailhead — actively studying</div>
                  <div style={{ marginTop: 12, height: 4, background: "var(--surface2)", borderRadius: 2 }}>
                    <div style={{ height: "100%", width: "60%", background: "var(--accent2)", borderRadius: 2 }} />
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4 }}>~60% complete</div>
                </div>
                <div style={{
                  padding: "20px 22px", borderRadius: 12,
                  background: "var(--surface)", border: "1px solid var(--border)",
                }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 6 }}>
                    Apple Certified iOS Technician
                  </div>
                  <div style={{ fontSize: 13, color: "var(--accent)" }}>✓ Certified</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
