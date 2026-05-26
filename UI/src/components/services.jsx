import { useState } from "react";
import useMobile from "../utils/useMobile";
import AnimatedSection from "../utils/animatedSection";
import SectionLabel from "../utils/sectionLabel";
import SectionHeading from "../utils/sectionHeading";


const SERVICES = [
    { icon: "✂️", title: "Custom Stitching", desc: "Blouses, salwar suits, lehengas tailored to your exact measurements and style." },
    { icon: "👗", title: "Dress Alterations", desc: "Expert alterations so every outfit fits you like it was made just for you." },
    { icon: "🪡", title: "Embroidery Work", desc: "Intricate hand and machine embroidery to add elegance to your garments." },
    { icon: "👰", title: "Bridal Outfits", desc: "Stunning bridal wear crafted with love for the most special day of your life." },
    { icon: "🧵", title: "Kids Clothing", desc: "Adorable, comfortable and durable stitching for your little ones." },
    { icon: "🌟", title: "Designer Wear", desc: "Trendy, fashionable designer outfits stitched from your own fabric." },
  ];
  
export default function ServicesSection() {
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
  