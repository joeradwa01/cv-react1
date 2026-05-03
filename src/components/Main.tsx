import { useEffect, useRef } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiArrowDown } from "react-icons/hi";
import joe from "../assets/joe1.jpeg";

const ROLES = ["Frontend Developer", "React Engineer", "CS Graduate", "Problem Solver"];

export const Main = () => {
  const roleRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = ROLES[roleIdx];
      if (!roleRef.current) return;

      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % ROLES.length;
        }
      }
      timeout = setTimeout(type, deleting ? 60 : 90);
    };

    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="main" className="s-section" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      background: "var(--bg)",
      overflow: "hidden",
    }}>
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
      }} />

      {/* Glow blobs */}
      <div style={{
        position: "absolute", top: "10%", right: "15%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,212,170,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", left: "10%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,145,255,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Two-column layout */}
      <div className="s-inner hero-grid" style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 60,
        position: "relative",
        zIndex: 1,
        paddingTop: 40,
        paddingBottom: 40,
      }}>

        {/* LEFT — text */}
        <div style={{ flex: "1 1 0", minWidth: 0 }}>

          {/* Available badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 100,
            border: "1px solid rgba(0,212,170,0.3)",
            background: "rgba(0,212,170,0.05)",
            marginBottom: 36,
            animation: "fadeUp 0.6s ease both",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
            <span style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.08em", fontFamily: "var(--font-display)", fontWeight: 500 }}>
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 6vw, 88px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: 12,
            animation: "fadeUp 0.6s 0.1s ease both",
          }}>
            <span style={{ display: "block", color: "var(--text)" }}>Yousuf</span>
            <span style={{ display: "block", color: "var(--text2)" }}>Radwan</span>
          </h1>

          {/* Typewriter */}
          <div style={{
            fontSize: "clamp(17px, 2vw, 22px)",
            color: "var(--text2)",
            marginBottom: 28,
            fontWeight: 400,
            animation: "fadeUp 0.6s 0.2s ease both",
            minHeight: 36,
          }}>
            <span ref={roleRef} style={{ color: "var(--accent2)", fontWeight: 500 }} />
            <span ref={cursorRef} style={{
              display: "inline-block", width: 2, height: "1em",
              background: "var(--accent2)", marginLeft: 3,
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
            }} />
          </div>

          {/* Bio */}
          <p style={{
            fontSize: 15,
            color: "var(--text2)",
            maxWidth: 480,
            lineHeight: 1.8,
            marginBottom: 44,
            fontWeight: 400,
            animation: "fadeUp 0.6s 0.3s ease both",
          }}>
            CS graduate from Jordan University of Science & Technology. Building clean, fast interfaces with React — and expanding into Salesforce ecosystems. Based in Orlando, FL.
          </p>

          {/* CTAs */}
          <div style={{
            display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
            marginBottom: 48,
            animation: "fadeUp 0.6s 0.4s ease both",
          }}>
            <a href="#projects" style={{
              padding: "13px 32px", borderRadius: 8,
              background: "var(--accent)",
              color: "var(--bg)",
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              fontWeight: 600, fontSize: 14,
              letterSpacing: "0.04em",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.opacity = "0.85"; (e.target as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}>
              View Projects
            </a>

            <a href="/YousufR.pdf" download style={{
              padding: "13px 32px", borderRadius: 8,
              border: "1px solid var(--border2)",
              color: "var(--text2)",
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              fontWeight: 500, fontSize: 14,
              letterSpacing: "0.04em",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; (e.target as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "var(--border2)"; (e.target as HTMLElement).style.color = "var(--text2)"; }}>
              Download CV
            </a>
          </div>

          {/* Social links */}
          <div style={{
            display: "flex", alignItems: "center", gap: 20,
            animation: "fadeUp 0.6s 0.5s ease both",
          }}>
            {[
              { href: "https://www.linkedin.com/in/yousuf-radwan-bb430b2b3/", icon: <FaLinkedinIn size={18} />, label: "LinkedIn" },
              { href: "mailto:contact@yousuf-radwan.com", icon: <MdOutlineEmail size={20} />, label: "Email" },
              { href: "https://github.com/", icon: <FaGithub size={18} />, label: "GitHub" },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  color: "var(--text3)", textDecoration: "none", fontSize: 13,
                  fontWeight: 400,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--text)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text3)"}>
                {icon} {label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — photo */}
        <div style={{
          width: 420,
          minWidth: 420,
          flexShrink: 0,
          position: "relative",
          animation: "fadeUp 0.7s 0.3s ease both",
        }} className="hero-photo">

          {/* Accent ring */}
          <div style={{
            position: "absolute", inset: -3,
            borderRadius: 24,
            background: "linear-gradient(135deg, var(--accent)50, var(--accent2)30, transparent 60%)",
            zIndex: 0,
          }} />

          {/* Photo */}
          <div style={{
            position: "relative", zIndex: 1,
            borderRadius: 22,
            overflow: "hidden",
            background: "var(--surface)",
          }}>
            <img
              src={joe}
              alt="Yousuf Radwan"
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                filter: "grayscale(10%)",
              }}
            />
            {/* Bottom gradient overlay so text if any blends */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: "40%",
              background: "linear-gradient(to top, rgba(8,11,16,0.7) 0%, transparent 100%)",
            }} />
          </div>

          {/* Floating "Available" badge */}
          <div style={{
            position: "absolute", bottom: -16, left: -16, zIndex: 2,
            background: "var(--surface)",
            border: "1px solid var(--border2)",
            borderRadius: 12, padding: "12px 18px",
            backdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)", flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "var(--text)", lineHeight: 1 }}>Open to Work</div>
              <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 2, fontWeight: 400 }}>Orlando, FL · Remote</div>
            </div>
          </div>

          {/* Floating tech badge */}
          <div style={{
            position: "absolute", top: -16, right: -16, zIndex: 2,
            background: "var(--surface)",
            border: "1px solid rgba(0,145,255,0.25)",
            borderRadius: 12, padding: "12px 18px",
            backdropFilter: "blur(12px)",
            textAlign: "center",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--accent2)", lineHeight: 1 }}>5+</div>
            <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 3, fontWeight: 400 }}>Years Exp.</div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#projects" style={{
        position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        color: "var(--text3)", textDecoration: "none", fontSize: 11,
        letterSpacing: "0.1em", fontFamily: "var(--font-display)",
        animation: "float 2.5s ease-in-out infinite",
        zIndex: 1,
      }}>
        <span>SCROLL</span>
        <HiArrowDown size={14} />
      </a>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
};

export default Main;
