import React from "react";
import { FiMail, FiMapPin, FiLinkedin } from "react-icons/fi";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { ref: leftRef, visible: leftVisible } = useScrollReveal();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal();

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@yousuf-radwan.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="s-section" style={{
      padding: "120px 0",
      background: "var(--bg)",
    }}>
      <div className="s-inner">

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <span style={{
            fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.18em", color: "var(--accent)", textTransform: "uppercase",
          }}>05 — Contact</span>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 80, alignItems: "start",
        }} className="contact-grid">

          {/* Left — headline */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.55s ease, transform 0.55s ease",
            }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 800, letterSpacing: "-0.04em",
              color: "var(--text)", lineHeight: 1.05, marginBottom: 24,
            }}>
              Let's build<br />something<br /><span style={{ color: "var(--accent)" }}>together.</span>
            </h2>
            <p style={{
              fontSize: 15, color: "var(--text3)", lineHeight: 1.75, fontWeight: 400,
              marginBottom: 40, maxWidth: 380,
            }}>
              Open to frontend dev roles, CRM/Salesforce positions, and IT-adjacent opportunities in Orlando, FL or remote. Drop me a line — I reply within 24 hours.
            </p>

            {/* Contact items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  icon: <FiMail size={18} />, label: "Email",
                  value: "contact@yousuf-radwan.com",
                  action: copyEmail,
                  actionLabel: copied ? "Copied!" : "Copy",
                  color: "var(--accent)",
                },
                {
                  icon: <FiLinkedin size={18} />, label: "LinkedIn",
                  value: "linkedin.com/in/yousuf-radwan-bb430b2b3",
                  href: "https://www.linkedin.com/in/yousuf-radwan-bb430b2b3/",
                  actionLabel: "Open",
                  color: "var(--accent2)",
                },
                {
                  icon: <FiMapPin size={18} />, label: "Location",
                  value: "Orlando, FL — open to remote",
                  color: "var(--accent3)",
                },
              ].map(({ icon, label, value, action, href, actionLabel, color }) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "18px 20px", borderRadius: 12,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: `${color}12`,
                    border: `1px solid ${color}25`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color, flexShrink: 0,
                  }}>{icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-display)", letterSpacing: "0.06em", marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: 13, color: "var(--text2)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{value}</div>
                  </div>
                  {(action || href) && (
                    <button
                      onClick={action ?? (() => window.open(href, "_blank"))}
                      style={{
                        padding: "6px 14px", borderRadius: 6,
                        background: "transparent",
                        border: `1px solid ${color}30`,
                        color, fontSize: 11, cursor: "pointer",
                        fontFamily: "var(--font-display)", fontWeight: 500,
                        flexShrink: 0,
                        transition: "background 0.2s",
                      }}>
                      {actionLabel}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.55s ease 0.15s, transform 0.55s ease 0.15s",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 20, padding: "36px 32px",
            }}>
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20,
              color: "var(--text)", marginBottom: 24, letterSpacing: "-0.02em",
            }}>Send a message</h3>

            <form action="https://formspree.io/f/mwkjlgnb" method="POST"
              style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: "block", fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-display)", letterSpacing: "0.06em", marginBottom: 6 }}>{f.label}</label>
                    <input name={f.name} type={f.type} placeholder={f.placeholder} required
                      style={{
                        width: "100%", padding: "11px 14px", borderRadius: 8,
                        background: "var(--bg2)", border: "1px solid var(--border)",
                        color: "var(--text)", fontSize: 13, outline: "none",
                        fontFamily: "var(--font-body)",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = "var(--accent)"}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = "var(--border)"} />
                  </div>
                ))}
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-display)", letterSpacing: "0.06em", marginBottom: 6 }}>Subject</label>
                <input name="subject" type="text" placeholder="What's this about?" required
                  style={{
                    width: "100%", padding: "11px 14px", borderRadius: 8,
                    background: "var(--bg2)", border: "1px solid var(--border)",
                    color: "var(--text)", fontSize: 13, outline: "none",
                    fontFamily: "var(--font-body)",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = "var(--accent)"}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = "var(--border)"} />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-display)", letterSpacing: "0.06em", marginBottom: 6 }}>Message</label>
                <textarea name="message" rows={5} placeholder="Tell me about the opportunity..." required
                  style={{
                    width: "100%", padding: "11px 14px", borderRadius: 8,
                    background: "var(--bg2)", border: "1px solid var(--border)",
                    color: "var(--text)", fontSize: 13, outline: "none", resize: "vertical",
                    fontFamily: "var(--font-body)", lineHeight: 1.6,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = "var(--accent)"}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = "var(--border)"} />
              </div>

              <button type="submit" style={{
                width: "100%", padding: "14px",
                background: "var(--accent)", color: "var(--bg)",
                border: "none", borderRadius: 8,
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 14, letterSpacing: "0.04em", cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
