import { useState, useEffect } from "react";
import useInView from "./useView";

export default function AnimatedSection({ children, delay = 0, style = {} }) {
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