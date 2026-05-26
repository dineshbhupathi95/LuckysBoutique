export default function StarRating({ count }) {
    return (
      <div style={{ display: "flex", gap: 3 }}>
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} style={{ color: "#FFBE3D", fontSize: 15 }}>★</span>
        ))}
      </div>
    );
  }
  
  