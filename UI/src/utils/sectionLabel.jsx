

export default function SectionLabel({ text }) {
    return (
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: 12, letterSpacing: 3,
        color: "#E87AAA", fontWeight: 700,
        textTransform: "uppercase", marginBottom: 12,
      }}>{text}</p>
    );
  }
  