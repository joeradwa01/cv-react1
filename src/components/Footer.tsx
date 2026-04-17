import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: "var(--bg2)",
      borderTop: "1px solid var(--border)",
      paddingLeft: 64,
    }} className="s-section">
      <div className="s-inner" style={{ padding: "48px 48px" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}>
          {/* Logo */}
          <div style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800, fontSize: 18,
            color: "var(--accent)",
            letterSpacing: "0.04em",
          }}>YR</div>

          {/* Copyright */}
          <p style={{
            fontSize: 13, color: "var(--text3)",
            fontWeight: 400,
          }}>
            © {currentYear} Yousuf Radwan. All rights reserved.
          </p>

          {/* Socials */}
          <div style={{ display: "flex", gap: 12 }}>
            {[
              { href: "https://www.linkedin.com/in/yousuf-radwan-bb430b2b3/", icon: <FaLinkedinIn size={16} /> },
              { href: "mailto:yousuf.radwan01@gmail.com", icon: <MdOutlineEmail size={17} /> },
              { href: "https://github.com/", icon: <FaGithub size={16} /> },
            ].map(({ href, icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 36, height: 36, borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text3)",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--accent)"; el.style.borderColor = "rgba(0,212,170,0.3)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--text3)"; el.style.borderColor = "var(--border)"; }}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .s-inner > div {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
