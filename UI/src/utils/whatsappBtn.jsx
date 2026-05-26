import React from "react";
import useMobile from "./useMobile";

const WHATSAPP = "919959557710";      


export default function WhatsAppFAB() {
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

