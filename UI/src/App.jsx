import { useState, useEffect, useRef } from "react";
import Navbar from "./components/navBar";
import HeroSection from "./components/Hero";
import StatsSection from "./components/stats";
import ServicesSection from "./components/services";
import TestimonialsSection from "./components/testimonalSection";
import GallerySection from "./components/gallerySection";
import LocationSection from "./components/locationSection";
import ContactSection from "./components/contactSection";
import Footer from "./components/footerSection";
import WhatsAppFAB from "./utils/whatsappBtn";


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