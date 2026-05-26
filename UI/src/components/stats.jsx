import { useEffect, useRef, useState } from "react";
import useMobile from "../utils/useMobile";
import useInView from "../utils/useView";

export default function StatsSection() {
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