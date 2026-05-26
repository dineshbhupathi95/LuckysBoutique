import React, { useState } from "react";
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
  
export default function ContactSection() {
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