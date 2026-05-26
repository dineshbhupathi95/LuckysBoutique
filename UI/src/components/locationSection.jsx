import React from "react";
import AnimatedSection from "../utils/animatedSection";
import SectionLabel from "../utils/sectionLabel";
import SectionHeading from "../utils/sectionHeading";
import useMobile from "../utils/useMobile";


const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4247083455543!2d78.29928257454357!3d17.53495479853848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d000481b9bf%3A0x33c0125cf11edffc!2sLucky%20Ladies%20Tailor!5e0!3m2!1sen!2sin!4v1779706690187!5m2!1sen!2sin"
const LOCATION_TEXT = "Hno 14-1018/12/A, Anugraha Homes, Near Roas internation school, Narreguda,Ameenpur, Hyderabad, Telangana 502032";

const PHONE = "+91 9959557710";       
const WHATSAPP = "919959557710";      
const EMAIL = "lucky.boutique2022@gmail.com"
const TIMING = "9 AM – 8 PM, Mon–Sat";


export default function LocationSection() {
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
  