import { useState, useEffect } from "react";
import { HiOutlineHome, HiOutlineCode, HiOutlineUser, HiBriefcase, HiOutlineMail } from "react-icons/hi";

const NAV = [
  { id: "main",     icon: <HiOutlineHome size={16} />,  label: "Home" },
  { id: "projects", icon: <HiOutlineCode size={16} />,  label: "Projects" },
  { id: "about",    icon: <HiOutlineUser size={16} />,  label: "About" },
  { id: "work",     icon: <HiBriefcase size={16} />,    label: "Experience" },
  { id: "contact",  icon: <HiOutlineMail size={16} />,  label: "Contact" },
];

export const SideNav = () => {
  const [active, setActive] = useState("main");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 200;
      for (const { id } of [...NAV].reverse()) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop side nav */}
      <nav style={{
        position: "fixed", left: 0, top: 0, bottom: 0, width: 64,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", gap: 8, zIndex: 100,
        borderRight: "1px solid var(--border)",
        background: "rgba(8,11,16,0.7)",
        backdropFilter: "blur(12px)",
      }} className="sidenav-desktop">
        <div style={{
          position: "absolute", top: 24,
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: 13, color: "var(--accent)",
          letterSpacing: "0.05em",
        }}>YR</div>

        {NAV.map(({ id, icon, label }) => (
          <a key={id} href={`#${id}`}
            onClick={() => setActive(id)}
            title={label}
            style={{
              width: 40, height: 40, borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: active === id ? "var(--accent)" : "var(--text3)",
              background: active === id ? "rgba(0,212,170,0.1)" : "transparent",
              border: active === id ? "1px solid rgba(0,212,170,0.25)" : "1px solid transparent",
              textDecoration: "none",
              transition: "all 0.2s",
              position: "relative",
            }}
            onMouseEnter={e => { if (active !== id) (e.currentTarget as HTMLElement).style.color = "var(--text2)"; }}
            onMouseLeave={e => { if (active !== id) (e.currentTarget as HTMLElement).style.color = "var(--text3)"; }}>
            {icon}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          position: "fixed", top: 20, right: 20, zIndex: 200,
          width: 44, height: 44, borderRadius: 8,
          border: "1px solid var(--border2)",
          background: "rgba(8,11,16,0.9)",
          backdropFilter: "blur(12px)",
          color: "var(--text)", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: 4,
        }}
        className="mobile-menu-btn">
        <span style={{ width: 18, height: 1.5, background: mobileOpen ? "var(--accent)" : "var(--text2)", display: "block", transition: "all 0.2s", transform: mobileOpen ? "rotate(45deg) translate(2px, 4px)" : "none" }} />
        <span style={{ width: 18, height: 1.5, background: mobileOpen ? "transparent" : "var(--text2)", display: "block", transition: "all 0.2s" }} />
        <span style={{ width: 18, height: 1.5, background: mobileOpen ? "var(--accent)" : "var(--text2)", display: "block", transition: "all 0.2s", transform: mobileOpen ? "rotate(-45deg) translate(2px, -4px)" : "none" }} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 150,
          background: "rgba(8,11,16,0.97)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 16,
        }}>
          {NAV.map(({ id, icon, label }) => (
            <a key={id} href={`#${id}`}
              onClick={() => { setActive(id); setMobileOpen(false); }}
              style={{
                display: "flex", alignItems: "center", gap: 16,
                color: active === id ? "var(--accent)" : "var(--text2)",
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em",
                transition: "color 0.2s",
              }}>
              {icon} {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .sidenav-desktop { display: none !important; } }
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } }
      `}</style>
    </>
  );
};

export default SideNav;
