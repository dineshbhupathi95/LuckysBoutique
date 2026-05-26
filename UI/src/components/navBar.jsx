import { useEffect, useState } from "react";
import useMobile from "../utils/useMobile";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMobile();
  
    useEffect(() => {
      const fn = () => setScrolled(window.scrollY > 40);
      window.addEventListener("scroll", fn);
      return () => window.removeEventListener("scroll", fn);
    }, []);
  
    const links = [
      "Home",
      "Services",
      "Gallery",
      "Testimonials",
      "Location",
      "Contact",
    ];
  
    return (
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,245,251,.96)" : "transparent",
          backdropFilter: "blur(12px)",
          padding: "0 5vw",
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontWeight: 800,
            fontSize: 20,
            color: "#B03070",
          }}
        >
          Lucky's Boutique
        </div>
  
        {!isMobile && (
          <div style={{ display: "flex", gap: 24 }}>
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "#6A1040",
                  fontWeight: 600,
                }}
              >
                {l}
              </a>
            ))}
          </div>
        )}
  
        {isMobile && (
          <>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                border: "none",
                background: "transparent",
                fontSize: 26,
                cursor: "pointer",
              }}
            >
              ☰
            </button>
  
            {mobileOpen && (
              <div
                style={{
                  position: "absolute",
                  top: 70,
                  left: 0,
                  right: 0,
                  background: "#fff",
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  boxShadow: "0 8px 30px rgba(0,0,0,.1)",
                }}
              >
                {links.map((l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      textDecoration: "none",
                      color: "#6A1040",
                      fontWeight: 600,
                    }}
                  >
                    {l}
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </nav>
    );
  }