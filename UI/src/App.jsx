import { useState, useEffect, useRef } from "react";
import kid1 from './static/images/lucky/WhatsApp Image 2026-05-25 at 4.18.30 PM.jpeg'
import kid2 from './static/images/lucky/WhatsApp Image 2026-05-25 at 4.18.30 PM (1).jpeg'
import kid3 from './static/images/lucky/WhatsApp Image 2026-05-25 at 4.18.30 PM (2).jpeg'
import kid4 from './static/images/lucky/WhatsApp Image 2026-05-25 at 4.18.30 PM (3).jpeg'
import kid5 from './static/images/lucky/WhatsApp Image 2026-05-25 at 4.18.30 PM (4).jpeg'



function useMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const onResize = () => {
      setMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return mobile;
}
// ─── CONFIG — update these when you have real info ───────────────────────────
const BRAND = "Lucky's Boutique";
const TAGLINE = "Where Every Stitch Tells a Story";
const PHONE = "+91 9959557710";       
const WHATSAPP = "919959557710";      
const EMAIL = "lucky.boutique2022@gmail.com"
const TIMING = "9 AM – 8 PM, Mon–Sat";
// Location — paste your Google Maps embed src URL below (from maps.google.com → Share → Embed)
const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4247083455543!2d78.29928257454357!3d17.53495479853848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d000481b9bf%3A0x33c0125cf11edffc!2sLucky%20Ladies%20Tailor!5e0!3m2!1sen!2sin!4v1779706690187!5m2!1sen!2sin"
const LOCATION_TEXT = "Hno 14-1018/12/A, Anugraha Homes Rd, Raghavendra Colony, Hyderabad, Ramachandrapuram (BHEL Township), Telangana 502032"; // ← replace with full address

// ─── Sample image placeholders — replace src with your real image URLs ────────
// Format: { src: "URL_OR_PATH", alt: "description", label: "card label", category: "filter tag" }
const GALLERY_ITEMS = [
  // { src: "", alt: "Bridal Lehenga", label: "Bridal Lehenga", category: "Bridal", accent: "#D4A5C9", emoji: "👰" },
  // { src: "", alt: "Silk Saree Blouse", label: "Silk Saree Blouse", category: "Blouse", accent: "#F4C8A0", emoji: "🥻" },
  // { src: "", alt: "Anarkali Suit", label: "Anarkali Suit", category: "Suits", accent: "#A8D8B9", emoji: "👗" },
  // { src: "", alt: "Embroidered Kurti", label: "Embroidered Kurti", category: "Kurti", accent: "#D8A0A0", emoji: "🌺" },
  // { src: "", alt: "Party Gown", label: "Party Gown", category: "Gown", accent: "#C9B8E8", emoji: "✨" },
  { src: kid1, alt: "Kids Frock", label: "Kids Frock", category: "Kids", accent: "#A0D4D8", emoji: "🎀" },
    { src: kid2, alt: "Kids Frock", label: "Kids Frock", category: "Kids", accent: "#A0D4D8", emoji: "🎀" },
    { src: kid3, alt: "Kids Frock", label: "Kids Frock", category: "Kids", accent: "#A0D4D8", emoji: "🎀" },
    { src: kid4, alt: "Kids Frock", label: "Kids Frock", category: "Kids", accent: "#A0D4D8", emoji: "🎀" },
    { src: kid5, alt: "Kids Frock", label: "Kids Frock", category: "Kids", accent: "#A0D4D8", emoji: "🎀" },
];

const GALLERY_FILTERS = ["All",  "Kids","Bridal", "Blouse", "Suits", "Kurti", "Gown"];

const SERVICES = [
  { icon: "✂️", title: "Custom Stitching", desc: "Blouses, salwar suits, lehengas tailored to your exact measurements and style." },
  { icon: "👗", title: "Dress Alterations", desc: "Expert alterations so every outfit fits you like it was made just for you." },
  { icon: "🪡", title: "Embroidery Work", desc: "Intricate hand and machine embroidery to add elegance to your garments." },
  { icon: "👰", title: "Bridal Outfits", desc: "Stunning bridal wear crafted with love for the most special day of your life." },
  { icon: "🧵", title: "Kids Clothing", desc: "Adorable, comfortable and durable stitching for your little ones." },
  { icon: "🌟", title: "Designer Wear", desc: "Trendy, fashionable designer outfits stitched from your own fabric." },
];

const TESTIMONIALS = [
  { name: "Swathi Reddy", location: "Hyderabad", text: "Nice outfit perfect finishing in stiching . Thanks to lucky tailor Rani garu . Thanks for your designer blouse.", stars: 5, initial: "S" },
  { name: "Anusha", location: "Hyderabad", text: "Good", stars: 5, initial: "A" },
  // { name: "Meera Patel", location: "Hyderabad", text: "The embroidery work on my lehenga was stunning. Everyone at the wedding was asking who made it!", stars: 5, initial: "M" },
  // { name: "Anitha Sharma", location: "Kukatpally", text: "Got my daughter's school uniform stitched here. Perfect fit and great quality fabric handling. Very affordable too!", stars: 5, initial: "A" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function StarRating({ count }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#FFBE3D", fontSize: 15 }}>★</span>
      ))}
    </div>
  );
}

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedSection({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

function SectionLabel({ text }) {
  return (
    <p style={{
      fontFamily: "'Lato', sans-serif",
      fontSize: 12, letterSpacing: 3,
      color: "#E87AAA", fontWeight: 700,
      textTransform: "uppercase", marginBottom: 12,
    }}>{text}</p>
  );
}

function SectionHeading({ text, light }) {
  return (
    <h2 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: "clamp(30px, 4vw, 44px)",
      fontWeight: 800,
      color: light ? "#fff" : "#6A1040",
      margin: 0,
    }}>{text}</h2>
  );
}

// ─── Image placeholder with emoji fallback ───────────────────────────────────
function GalleryImage({ item, onClick, active }) {
  const [imgError, setImgError] = useState(!item.src);
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        background: `linear-gradient(135deg, ${item.accent}99, ${item.accent})`,
        aspectRatio: "3/4",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        transform: active ? "scale(1.03)" : "scale(1)",
        boxShadow: active ? "0 20px 50px rgba(0,0,0,0.22)" : "0 4px 20px rgba(0,0,0,0.09)",
      }}
    >
      {!imgError && item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          onError={() => setImgError(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <div style={{
          width: "100%", height: "100%",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 12,
        }}>
          <span style={{ fontSize: 64 }}>{item.emoji}</span>
          <span style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: 11, letterSpacing: 2,
            color: "rgba(80,20,40,0.55)", fontWeight: 700,
            textTransform: "uppercase",
          }}>Add Photo</span>
        </div>
      )}

      {/* Overlay label */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: active
          ? "linear-gradient(0deg, rgba(176,48,112,0.92) 0%, transparent 100%)"
          : "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 70%)",
        padding: "32px 16px 14px",
        transition: "all 0.3s",
      }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 14, fontWeight: 700,
          color: "#fff", margin: 0, textAlign: "center",
        }}>{item.label}</p>
        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: 11, color: "rgba(255,220,240,0.85)",
          textAlign: "center", margin: "4px 0 0", letterSpacing: 1,
        }}>{item.category}</p>
      </div>
    </div>
  );
}

// ─── Floating Particles ───────────────────────────────────────────────────────
function FloatingParticles() {
  const particles = useRef(
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 7 + Math.random() * 7,
      size: 10 + Math.random() * 14,
      emoji: ["✂️","🪡","🌸","💎","✨","🌺","🎀","💫"][Math.floor(Math.random() * 8)],
    }))
  ).current;
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: "absolute", left: `${p.left}%`, bottom: "-30px",
          fontSize: p.size, opacity: 0.22,
          animation: `floatUp ${p.duration}s ${p.delay}s infinite linear`,
        }}>{p.emoji}</div>
      ))}
    </div>
  );
}

// ─── WhatsApp Button ──────────────────────────────────────────────────────────
function WhatsAppFAB() {
  const isMobile = useMobile();
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=Hi!%20I%20want%20to%20book%20an%20appointment%20at%20Lucky's%20Boutique`}
      target="_blank"
      rel="noreferrer"
      title="Chat on WhatsApp"
      style={{
        position: "fixed", right: isMobile ? 16 : 28,
        bottom: isMobile ? 16 : 28, zIndex: 200,
        width: isMobile ? 52 : 58,
height: isMobile ? 52 : 58, borderRadius: "50%",
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: isMobile ? 24 : 28,
        boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
        textDecoration: "none",
        animation: "waPulse 2.5s ease-in-out infinite",
      }}
    >💬</a>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
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
// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 120); }, []);
  const isMobile = useMobile();

  return (
    <section id="home" style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #FFF0F6 0%, #FDE8F5 50%, #F0E0FF 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      padding: "90px 5vw 50px",
    }}>
      <FloatingParticles />
      {/* Soft orbs */}
      <div style={{ position:"absolute", top:"8%", right:"4%", width:450, height:450, borderRadius:"50%", background:"radial-gradient(circle, rgba(220,130,180,0.2) 0%, transparent 70%)", animation:"pulse 5s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"8%", left:"2%", width:320, height:320, borderRadius:"50%", background:"radial-gradient(circle, rgba(150,80,220,0.14) 0%, transparent 70%)", animation:"pulse 7s ease-in-out infinite reverse", pointerEvents:"none" }} />

      <div style={{ maxWidth: 1000, width:"100%", display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: isMobile ? 30 : 60, alignItems:"center" }}>
        {/* Text */}
        <div>
          <div style={{ opacity: loaded?1:0, transform: loaded?"translateY(0)":"translateY(24px)", transition:"all 0.7s ease 0.1s" }}>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"linear-gradient(90deg,#E87AAA,#B03070)",
              color:"#fff", padding:"6px 18px", borderRadius:50,
              fontSize:11, fontFamily:"'Lato',sans-serif",
              fontWeight:700, letterSpacing:2.5, marginBottom:22,
              textTransform:"uppercase",
            }}>
              <span>✨</span> Est. 2020 · Hyderabad
            </div>
          </div>
          <div style={{ opacity: loaded?1:0, transform: loaded?"translateY(0)":"translateY(36px)", transition:"all 0.8s ease 0.3s" }}>
            <h1 style={{
              fontFamily:"'Playfair Display', serif",
              fontSize:"clamp(38px,5.5vw,62px)",
              fontWeight:800, lineHeight:1.12,
              color:"#6A1040", margin:"0 0 18px",
            }}>
              Where Every<br />
              <span style={{ background:"linear-gradient(135deg,#E8409A,#B03070)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Stitch Tells
              </span><br />
              a Story
            </h1>
          </div>
          <div style={{ opacity: loaded?1:0, transform: loaded?"translateY(0)":"translateY(36px)", transition:"all 0.8s ease 0.5s" }}>
            <p style={{
              fontFamily:"'Lato', sans-serif",
              fontSize:17, color:"#7A4060", lineHeight:1.85,
              marginBottom:16,
            }}>
              <strong style={{ color:"#B03070" }}>Lucky's Boutique</strong> has been crafting beautiful outfits with love and precision. From bridal lehengas to everyday kurtis — your dream outfit is just a stitch away.
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:36 }}>
              <span style={{ fontSize:22 }}>⭐⭐⭐⭐⭐</span>
              <span style={{ fontFamily:"'Lato', sans-serif", fontSize:14, color:"#7A4060", fontWeight:600 }}>500+ happy customers</span>
            </div>
            <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
              <a href="#contact" style={{
                padding:"14px 32px",
                background:"linear-gradient(135deg,#E8409A,#B03070)",
                color:"#fff", borderRadius:50,
                fontFamily:"'Lato', sans-serif",
                fontWeight:700, fontSize:16,
                textDecoration:"none",
                boxShadow:"0 8px 24px rgba(180,48,112,0.38)",
                transition:"all 0.25s",
                display:"inline-block",
              }}
                onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";e.currentTarget.style.boxShadow="0 14px 36px rgba(180,48,112,0.52)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="0 8px 24px rgba(180,48,112,0.38)";}}
              >Book Appointment</a>
              <a href="#gallery" style={{
                padding:"14px 32px",
                background:"transparent",
                color:"#B03070",
                border:"2px solid #E87AAA",
                borderRadius:50,
                fontFamily:"'Lato', sans-serif",
                fontWeight:700, fontSize:16,
                textDecoration:"none",
                transition:"all 0.25s",
                display:"inline-block",
              }}
                onMouseEnter={e=>e.currentTarget.style.background="#FDE0EE"}
                onMouseLeave={e=>e.currentTarget.style.background="transparent"}
              >Our Work ↓</a>
            </div>
          </div>
        </div>

        {/* Hero visual — replace the inner <img> src once you have a photo */}
        <div style={{
          opacity: loaded?1:0,
          transform: loaded?"scale(1)":"scale(0.88)",
          transition:"all 1s ease 0.4s",
          display:"flex", justifyContent:"center",
        }}>
          <div style={{
            width: isMobile ? "100%" : 320,
            height: isMobile ? 320 : 400,
            borderRadius:"60% 40% 55% 45% / 50% 55% 45% 55%",
            background:"linear-gradient(135deg,#FBCFE8,#F9A8D4,#F472B6)",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 24px 64px rgba(180,48,112,0.28)",
            animation:"floatSvg 4s ease-in-out infinite",
            position:"relative", overflow:"hidden",
          }}>
            {/* ↓ Replace this emoji with an <img src="your-photo.jpg"> for real photo */}
            <span style={{ fontSize:110, userSelect:"none" }}>👗</span>

            {/* Badge top right */}
            <div style={{
              position:"absolute", top:24, right:16,
              background:"rgba(255,255,255,0.85)", borderRadius:50,
              padding:"8px 14px",
              fontFamily:"'Lato', sans-serif",
              fontSize:11, fontWeight:800, color:"#B03070",
              letterSpacing:1, textTransform:"uppercase",
              backdropFilter:"blur(8px)",
            }}>✂️ Custom Fit</div>

            {/* Badge bottom left */}
            <div style={{
              position:"absolute", bottom:24, left:16,
              background:"rgba(255,255,255,0.85)", borderRadius:50,
              padding:"8px 14px",
              fontFamily:"'Lato', sans-serif",
              fontSize:11, fontWeight:800, color:"#B03070",
              letterSpacing:1, textTransform:"uppercase",
              backdropFilter:"blur(8px)",
            }}>🌟 10+ Years</div>
          </div>
        </div>
      </div>

      <div style={{
        position:"absolute", bottom:28, left:"50%", transform:"translateX(-50%)",
        animation:"bounce 2s ease-in-out infinite",
        fontSize:26, color:"#E87AAA",
      }}>↓</div>
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsSection() {
  const [ref, visible] = useInView();
  const isMobile = useMobile();

  const stats = [
    { value:"10+", label:"Years Experience", icon:"🏆" },
    { value:"500+", label:"Happy Customers", icon:"❤️" },
    { value:"50+", label:"Designs Crafted", icon:"✨" },
    { value:"100%", label:"Quality Promise", icon:"🌟" },
  ];
  return (
    <section ref={ref} style={{
      background:"linear-gradient(135deg,#B03070,#7A1050)",
      padding:"60px 5vw",
    }}>
      <div style={{ maxWidth:960, margin:"0 auto", display:"grid", gridTemplateColumns: isMobile
  ? "repeat(2,1fr)"
  : "repeat(4,1fr)", gap:20 }}>
        {stats.map((s,i)=>(
          <div key={s.label} style={{
            textAlign:"center",
            opacity: visible?1:0,
            transform: visible?"translateY(0)":"translateY(28px)",
            transition:`all 0.6s ease ${i*0.12}s`,
          }}>
            <div style={{ fontSize:32, marginBottom:6 }}>{s.icon}</div>
            <div style={{ fontFamily:"'Playfair Display', serif", fontSize:44, fontWeight:800, color:"#FFD0E8", lineHeight:1 }}>{s.value}</div>
            <div style={{ fontFamily:"'Lato', sans-serif", fontSize:13, color:"rgba(255,210,235,0.78)", marginTop:6, letterSpacing:0.5 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function ServicesSection() {
  const [hovered, setHovered] = useState(null);
  const isMobile = useMobile();

  return (
    <section id="services" style={{ padding:"100px 5vw", background:"#FFF8FC" }}>
      <div style={{ maxWidth:960, margin:"0 auto" }}>
        <AnimatedSection style={{ textAlign:"center", marginBottom:64 }}>
          <SectionLabel text="What We Offer" />
          <SectionHeading text="Our Services" />
          <p style={{ fontFamily:"'Lato', sans-serif", fontSize:16, color:"#8A5070", marginTop:14, maxWidth:480, margin:"14px auto 0" }}>
            Every garment is stitched with care, skill, and an eye for perfection.
          </p>
        </AnimatedSection>
        <div style={{ display:"grid", gridTemplateColumns:
  isMobile
    ? "1fr"
    : "repeat(3,1fr)", gap:24 }}>
          {SERVICES.map((s,i)=>(
            <AnimatedSection key={s.title} delay={i*0.09}>
              <div
                onMouseEnter={()=>setHovered(i)}
                onMouseLeave={()=>setHovered(null)}
                style={{
                  background: hovered===i ? "linear-gradient(135deg,#E8409A,#B03070)" : "#fff",
                  border:"2px solid", borderColor: hovered===i?"transparent":"#F9D0E8",
                  borderRadius:22, padding:"38px 28px",
                  cursor:"pointer", transition:"all 0.38s ease",
                  transform: hovered===i?"translateY(-10px)":"translateY(0)",
                  boxShadow: hovered===i?"0 24px 56px rgba(180,48,112,0.32)":"0 4px 20px rgba(180,48,112,0.07)",
                }}
              >
                <div style={{ fontSize:44, marginBottom:16 }}>{s.icon}</div>
                <h3 style={{
                  fontFamily:"'Playfair Display', serif", fontSize:20, fontWeight:700,
                  color: hovered===i?"#fff":"#6A1040", marginBottom:10,
                }}>{s.title}</h3>
                <p style={{
                  fontFamily:"'Lato', sans-serif", fontSize:14, lineHeight:1.75,
                  color: hovered===i?"rgba(255,255,255,0.88)":"#8A5070", margin:0,
                }}>{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery with Filter ───────────────────────────────────────────────────────
function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === filter);

  const isMobile = useMobile();

  return (
    <section
      id="gallery"
      style={{
        padding: "100px 5vw",
        background: "linear-gradient(180deg,#FFF0F8,#FDE8F8)",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: 48 }}>
          <SectionLabel text="Our Work" />
          <SectionHeading text="Stunning Creations" />
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection
          delay={0.1}
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setActive(null);
              }}
              style={{
                padding: "8px 20px",
                borderRadius: 50,
                border: "2px solid",
                borderColor: filter === f ? "transparent" : "#F0C0DC",
                background:
                  filter === f
                    ? "linear-gradient(135deg,#E8409A,#B03070)"
                    : "#fff",
                color: filter === f ? "#fff" : "#B03070",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {f}
            </button>
          ))}
        </AnimatedSection>

        {/* Gallery grid */}
{filtered.length > 0 ? (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
      gap: 20,
    }}
  >
    {filtered.map((item, i) => (
      <AnimatedSection key={i} delay={i * 0.08}>
        <GalleryImage
          item={item}
          active={active === i}
          onClick={() => {
            setActive(i);
            setSelectedImage(item);
          }}
        />
      </AnimatedSection>
    ))}
  </div>
) : (
  <div
    style={{
      textAlign: "center",
      padding: "40px",
      borderRadius: "20px",
      background: "#fff",
      color: "#B03070",
      fontWeight: 600,
    }}
  >
      No gallery photos available for selected Category
  </div>
)}

        {/* Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.75)",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: 20,
                maxWidth: "95vw",
                maxHeight: "90vh",
                textAlign: "center",
                boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  borderRadius: 16,
                  objectFit: "contain",
                }}
              />

              <div style={{ marginTop: 18 }}>
                <button
                  onClick={() => setSelectedImage(null)}
                  style={{
                    padding: "12px 28px",
                    border: "none",
                    borderRadius: 40,
                    background:
                      "linear-gradient(135deg,#E8409A,#B03070)",
                    color: "#fff",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: 15,
                  }}
                >
                  Cancel ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const isMobile = useMobile();
  useEffect(() => {
    const t = setInterval(()=>setCurrent(c=>(c+1)%TESTIMONIALS.length), 4500);
    return ()=>clearInterval(t);
  }, []);
  const avatarColors = ["#E8409A","#B03070","#7A40C8","#E87040"];
  return (
    <section id="testimonials" style={{ padding:"100px 5vw", background:"#FFF8FC" }}>
      <div style={{ maxWidth:1000, margin:"0 auto" }}>
        <AnimatedSection style={{ textAlign:"center", marginBottom:64 }}>
          <SectionLabel text="Customer Love" />
          <SectionHeading text="What Our Clients Say" />
        </AnimatedSection>
        <div style={{ display:"grid", gridTemplateColumns:
  isMobile
    ? "1fr"
    : "repeat(2,1fr)", gap:24 }}>
          {TESTIMONIALS.map((t,i)=>(
            <AnimatedSection key={t.name} delay={i*0.12}>
              <div
                onClick={()=>setCurrent(i)}
                style={{
                  background: current===i ? "linear-gradient(135deg,#E8409A,#B03070)" : "#fff",
                  border:"2px solid", borderColor: current===i?"transparent":"#F9D0E8",
                  borderRadius:24, padding:"32px 28px",
                  cursor:"pointer", transition:"all 0.38s ease",
                  boxShadow: current===i?"0 18px 50px rgba(180,48,112,0.3)":"0 4px 20px rgba(180,48,112,0.07)",
                }}
              >
                <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:18 }}>
                  <div style={{
                    width:48, height:48, borderRadius:"50%",
                    background: current===i ? "rgba(255,255,255,0.22)" : avatarColors[i],
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontFamily:"'Playfair Display', serif",
                    fontWeight:800, fontSize:20, color:"#fff",
                    flexShrink:0,
                  }}>{t.initial}</div>
                  <div>
                    <div style={{
                      fontFamily:"'Playfair Display', serif",
                      fontSize:16, fontWeight:700,
                      color: current===i?"#fff":"#6A1040",
                    }}>{t.name}</div>
                    <div style={{
                      fontFamily:"'Lato', sans-serif",
                      fontSize:12, color: current===i?"rgba(255,210,235,0.8)":"#A07090",
                    }}>📍 {t.location}</div>
                  </div>
                  <div style={{ marginLeft:"auto" }}>
                    <StarRating count={t.stars} />
                  </div>
                </div>
                <p style={{
                  fontFamily:"'Lato', sans-serif",
                  fontSize:15, lineHeight:1.8,
                  color: current===i?"rgba(255,255,255,0.92)":"#7A4060",
                  fontStyle:"italic", margin:0,
                }}>"{t.text}"</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        {/* Dot indicators */}
        <div style={{ display:"flex", gap:8, justifyContent:"center", marginTop:32 }}>
          {TESTIMONIALS.map((_,i)=>(
            <button key={i} onClick={()=>setCurrent(i)} style={{
              width: current===i?28:10, height:10,
              borderRadius:5, border:"none",
              background: current===i ? "#E8409A" : "#F9D0E8",
              cursor:"pointer", transition:"all 0.3s",
              padding:0,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Location Section ─────────────────────────────────────────────────────────
function LocationSection() {
  const isMobile = useMobile();
  return (
    <section id="location" style={{
      padding:"100px 5vw",
      background:"linear-gradient(180deg,#FFF0F8,#FDE8F8)",
    }}>
      <div style={{ maxWidth:1000, margin:"0 auto" }}>
        <AnimatedSection style={{ textAlign:"center", marginBottom:56 }}>
          <SectionLabel text="Find Us" />
          <SectionHeading text="Visit Lucky's Boutique" />
          <p style={{ fontFamily:"'Lato', sans-serif", fontSize:16, color:"#8A5070", marginTop:14 }}>
            We'd love to meet you and discuss your dream outfit in person!
          </p>
        </AnimatedSection>

        <div style={{ display:"grid", gridTemplateColumns:
  isMobile
    ? "1fr"
    : "1fr 1fr", gap:32, alignItems:"start" }}>
          {/* Map embed */}
          <AnimatedSection delay={0.1}>
            <div style={{
              borderRadius:24, overflow:"hidden",
              border:"3px solid #F9D0E8",
              boxShadow:"0 12px 40px rgba(180,48,112,0.15)",
              height: isMobile ? 280 : 380,
              background:"linear-gradient(135deg,#FDE0EE,#F9C8E0)",
              display:"flex", flexDirection:"column",
              alignItems:"center", justifyContent:"center",
            }}>
              {MAPS_EMBED_URL ? (
                <iframe
                  src={MAPS_EMBED_URL}
                  width="100%" height="100%"
                  style={{ border:0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lucky's Boutique Location"
                />
              ) : (
                /* Placeholder — remove this block once you set MAPS_EMBED_URL */
                <div style={{ textAlign:"center", padding:32 }}>
                  <div style={{ fontSize:64, marginBottom:16 }}>📍</div>
                  <p style={{
                    fontFamily:"'Playfair Display', serif",
                    fontSize:18, fontWeight:700, color:"#B03070",
                    marginBottom:8,
                  }}>Map Coming Soon</p>
                  <p style={{
                    fontFamily:"'Lato', sans-serif",
                    fontSize:13, color:"#A07090", lineHeight:1.6,
                    maxWidth:260,
                  }}>
                    Paste your Google Maps embed URL in the <code style={{ background:"#F9D0E8", padding:"2px 6px", borderRadius:4, color:"#B03070" }}>MAPS_EMBED_URL</code> variable at the top of this file.
                  </p>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Info cards */}
          <AnimatedSection delay={0.2}>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {[
                { icon:"📍", label:"Address", value: LOCATION_TEXT, link: null },
                { icon:"📞", label:"Phone", value: PHONE, link:`tel:${PHONE.replace(/\s/g,"")}` },
                { icon:"💬", label:"WhatsApp", value:"Chat with us directly", link:`https://wa.me/${WHATSAPP}` },
                { icon:"📧", label:"Email", value: EMAIL, link:`mailto:${EMAIL}` },
                { icon:"🕐", label:"Working Hours", value: TIMING, link:null },
                { icon:"🚗", label:"Parking", value:"Street parking available", link:null },
              ].map((c,i)=>(
                <div key={c.label} style={{
                  display:"flex", alignItems:"flex-start", gap:16,
                  background:"#fff",
                  border:"1.5px solid #F9D0E8",
                  borderRadius:16, padding:"18px 22px",
                  transition:"all 0.25s",
                  cursor: c.link ? "pointer" : "default",
                }}
                  onMouseEnter={e=>{ if(c.link) { e.currentTarget.style.borderColor="#E8409A"; e.currentTarget.style.boxShadow="0 6px 20px rgba(180,48,112,0.12)"; }}}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor="#F9D0E8"; e.currentTarget.style.boxShadow="none"; }}
                  onClick={()=>c.link && window.open(c.link,"_blank")}
                >
                  <div style={{
                    width:44, height:44, borderRadius:12,
                    background:"linear-gradient(135deg,#FDE0EE,#F9C8E0)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:22, flexShrink:0,
                  }}>{c.icon}</div>
                  <div>
                    <div style={{
                      fontFamily:"'Lato', sans-serif",
                      fontSize:11, letterSpacing:1.5,
                      color:"#E87AAA", fontWeight:700,
                      textTransform:"uppercase", marginBottom:3,
                    }}>{c.label}</div>
                    <div style={{
                      fontFamily:"'Playfair Display', serif",
                      fontSize:15, fontWeight:600,
                      color:"#6A1040",
                    }}>{c.value}</div>
                  </div>
                  {c.link && <div style={{ marginLeft:"auto", fontSize:18, color:"#E87AAA", alignSelf:"center" }}>→</div>}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Directions button */}
        <AnimatedSection delay={0.4} style={{ textAlign:"center", marginTop:44 }}>
          <a
            href={`https://maps.app.goo.gl/DqsvQ7idTr4XYzt1A`}
            target="_blank" rel="noreferrer"
            style={{
              display:"inline-block", padding:"14px 36px",
              background:"linear-gradient(135deg,#E8409A,#B03070)",
              color:"#fff", borderRadius:50,
              fontFamily:"'Lato', sans-serif",
              fontWeight:700, fontSize:16,
              textDecoration:"none",
              boxShadow:"0 8px 24px rgba(180,48,112,0.32)",
              transition:"transform 0.2s",
            }}
            onMouseEnter={e=>e.currentTarget.style.transform="scale(1.04)"}
            onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
          >📍 Get Directions</a>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── Contact / Booking ────────────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({ name:"", phone:"", service:"", date:"", message:"" });
  const [sent, setSent] = useState(false);
  const isMobile = useMobile();

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    const msg = `Hi Lucky's Boutique! 👗%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service||"Not specified"}%0ADate: ${form.date||"Flexible"}%0AMessage: ${form.message||"—"}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setSent(true);
    setForm({ name:"", phone:"", service:"", date:"", message:"" });
    setTimeout(()=>setSent(false), 5000);
  };

  const inputStyle = {
    width:"100%", padding:"14px 18px",
    borderRadius:14,
    border:"1px solid rgba(255,255,255,0.3)",
    background:"rgba(255,255,255,0.13)",
    color:"#fff", fontSize:15,
    fontFamily:"'Lato', sans-serif",
    outline:"none", boxSizing:"border-box",
  };

  return (
    <section id="contact" style={{
      padding:"100px 5vw",
      background:"linear-gradient(135deg,#6A1040,#B03070)",
      position:"relative", overflow:"hidden",
    }}>
      <div style={{ position:"absolute", top:-120, right:-120, width:450, height:450, borderRadius:"50%", background:"rgba(255,255,255,0.05)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:-100, left:-100, width:350, height:350, borderRadius:"50%", background:"rgba(255,255,255,0.05)", pointerEvents:"none" }} />

      <div style={{ maxWidth:800, margin:"0 auto", position:"relative", zIndex:2 }}>
        <AnimatedSection style={{ textAlign:"center", marginBottom:56 }}>
          <SectionLabel text="Get In Touch" />
          <SectionHeading text="Book Your Appointment" light />
          <p style={{ fontFamily:"'Lato', sans-serif", color:"rgba(255,210,235,0.85)", fontSize:16, marginTop:12 }}>
            Fill the form below — we'll send you a WhatsApp confirmation!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div style={{
            background:"rgba(255,255,255,0.10)",
            backdropFilter:"blur(20px)",
            borderRadius:28, padding: isMobile ? "28px 20px" : "44px",
            border:"1px solid rgba(255,255,255,0.2)",
          }}>
            {sent && (
              <div style={{
                background:"rgba(255,255,255,0.18)", borderRadius:14,
                padding:"16px 24px", marginBottom:28,
                fontFamily:"'Lato', sans-serif",
                color:"#fff", fontSize:16, textAlign:"center", fontWeight:700,
              }}>✅ Opening WhatsApp... we'll see you there!</div>
            )}
            <div style={{ display:"grid", gridTemplateColumns:
  isMobile
    ? "1fr"
    : "1fr 1fr", gap:18, marginBottom:18 }}>
              <input style={inputStyle} type="text" placeholder="Your Name *" value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} />
              <input style={inputStyle} type="tel" placeholder="Phone Number *" value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))} />
            </div>
            <div style={{ display:"grid", gridTemplateColumns:
  isMobile
    ? "1fr"
    : "1fr 1fr", gap:18, marginBottom:18 }}>
              <select style={{...inputStyle, color: form.service?"#fff":"rgba(255,255,255,0.55)"}}
                value={form.service} onChange={e=>setForm(p=>({...p,service:e.target.value}))}>
                <option value="" disabled>Select Service</option>
                {SERVICES.map(s=>(
                  <option key={s.title} value={s.title} style={{ color:"#333", background:"#fff" }}>{s.title}</option>
                ))}
              </select>
              <input style={{...inputStyle, colorScheme:"dark"}} type="date" value={form.date} onChange={e=>setForm(p=>({...p,date:e.target.value}))} />
            </div>
            <textarea style={{...inputStyle, resize:"vertical", marginBottom:28}} rows={4}
              placeholder="Describe your requirement (fabric, design, occasion)..."
              value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} />
            <button onClick={handleSubmit} style={{
              width:"100%", padding:"16px",
              background:"linear-gradient(135deg,#F9A8D4,#E87AAA)",
              color:"#6A1040", border:"none", borderRadius:50,
              fontFamily:"'Lato', sans-serif",
              fontWeight:800, fontSize:18,
              cursor:"pointer", letterSpacing:0.5,
              transition:"all 0.3s",
              boxShadow:"0 8px 28px rgba(0,0,0,0.22)",
            }}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.03)";e.currentTarget.style.boxShadow="0 14px 40px rgba(0,0,0,0.32)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="0 8px 28px rgba(0,0,0,0.22)";}}
            >💬 Send via WhatsApp</button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const isMobile = useMobile();
  return (
    <footer style={{ background:"#3D0820", padding:"50px 5vw 30px" }}>
      <div style={{ maxWidth:960, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:
  isMobile
    ? "1fr"
    : "2fr 1fr 1fr", gap:40, marginBottom:40 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
              <div style={{
                width:44, height:44, borderRadius:"50%",
                background:"linear-gradient(135deg,#E8409A,#B03070)",
                display:"flex", alignItems:"center", justifyContent:"center", fontSize:22,
              }}>✂️</div>
              <div>
                <div style={{ fontFamily:"'Playfair Display', serif", fontSize:20, fontWeight:800, color:"#F9A8D4" }}>Lucky's Boutique</div>
                <div style={{ fontFamily:"'Lato', sans-serif", fontSize:11, color:"rgba(249,168,212,0.6)", letterSpacing:2, textTransform:"uppercase" }}>Premium Tailoring</div>
              </div>
            </div>
            <p style={{ fontFamily:"'Lato', sans-serif", fontSize:14, color:"rgba(249,168,212,0.65)", lineHeight:1.8, maxWidth:280 }}>
              Crafting beautiful outfits with love and precision since 2020. Your dream outfit, stitched to perfection.
            </p>
          </div>
          <div>
            <div style={{ fontFamily:"'Playfair Display', serif", fontSize:16, fontWeight:700, color:"#F9A8D4", marginBottom:16 }}>Quick Links</div>
            {["Home","Services","Gallery","Testimonials","Location","Contact"].map(l=>(
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                display:"block", fontFamily:"'Lato', sans-serif",
                fontSize:14, color:"rgba(249,168,212,0.65)",
                textDecoration:"none", marginBottom:8,
                transition:"color 0.2s",
              }}
                onMouseEnter={e=>e.currentTarget.style.color="#F9A8D4"}
                onMouseLeave={e=>e.currentTarget.style.color="rgba(249,168,212,0.65)"}
              >{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontFamily:"'Playfair Display', serif", fontSize:16, fontWeight:700, color:"#F9A8D4", marginBottom:16 }}>Contact</div>
            {[
              { icon:"📞", text: PHONE },
              { icon:"💬", text:"WhatsApp Us" },
              { icon:"📧", text: EMAIL },
              { icon:"📍", text:"Hyderabad, TS" },
            ].map(c=>(
              <div key={c.text} style={{
                display:"flex", gap:8, alignItems:"center",
                fontFamily:"'Lato', sans-serif",
                fontSize:13, color:"rgba(249,168,212,0.65)",
                marginBottom:10,
              }}>
                <span>{c.icon}</span><span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          borderTop:"1px solid rgba(249,168,212,0.12)",
          paddingTop:24, textAlign:"center",
          fontFamily:"'Lato', sans-serif",
          fontSize:13, color:"rgba(249,168,212,0.45)",
        }}>
          © 2026 Lucky's Boutique · Crafted with ❤️ in Beeramguda and Ameenpur Hyderabad, Telangana
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function LuckysBoutique() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lato:ital,wght@0,400;0,600;0,700;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      * { margin:0; padding:0; box-sizing:border-box; }
      html { scroll-behavior:smooth; }
      body { background:#FFF0F6; }
      @keyframes floatUp {
        0%   { transform:translateY(0) rotate(0deg); opacity:0; }
        10%  { opacity:0.22; }
        90%  { opacity:0.12; }
        100% { transform:translateY(-100vh) rotate(360deg); opacity:0; }
      }
      @keyframes floatSvg {
        0%,100% { transform:translateY(0); }
        50%     { transform:translateY(-16px); }
      }
      @keyframes pulse {
        0%,100% { transform:scale(1); opacity:0.7; }
        50%     { transform:scale(1.1); opacity:1; }
      }
      @keyframes bounce {
        0%,100% { transform:translateX(-50%) translateY(0); }
        50%     { transform:translateX(-50%) translateY(10px); }
      }
      @keyframes waPulse {
        0%,100% { box-shadow:0 6px 24px rgba(37,211,102,0.45); }
        50%     { box-shadow:0 6px 36px rgba(37,211,102,0.75); }
      }
      input::placeholder, textarea::placeholder { color:rgba(255,255,255,0.5); }
      input[type=date]::-webkit-calendar-picker-indicator { filter:invert(1) opacity(0.6); }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}