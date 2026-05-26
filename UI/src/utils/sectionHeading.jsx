
export default function SectionHeading({ text, light }) {
    return (
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(30px, 4vw, 44px)",
        fontWeight: 800,
        color: light ? "#fff" : "#6A1040",
        margin: 0,
      }}>{text}</h2>
    );
  }