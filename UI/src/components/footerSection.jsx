
import useMobile from "../utils/useMobile";

const PHONE = "+91 9959557710";       
const EMAIL = "lucky.boutique2022@gmail.com"

export default function Footer() {
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
  