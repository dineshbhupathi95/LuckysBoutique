import React, { useState, useEffect,useRef } from 'react';
import useMobile from '../utils/useMobile';



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

export default function HeroSection() {
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