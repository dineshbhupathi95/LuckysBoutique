import React, { useEffect, useState } from "react";
import useMobile from "../utils/useMobile";
import AnimatedSection from "../utils/animatedSection";
import SectionLabel from "../utils/sectionLabel";
import SectionHeading from "../utils/sectionHeading";
import StarRating from "../utils/starRating";

const TESTIMONIALS = [
  { name: "Swathi Reddy", location: "Hyderabad", text: "Nice outfit perfect finishing in stiching . Thanks to lucky tailor Rani garu . Thanks for your designer blouse.", stars: 5, initial: "S" },
  { name: "Anusha", location: "Hyderabad", text: "Good", stars: 5, initial: "A" },
];

export default function TestimonialsSection() {
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
  