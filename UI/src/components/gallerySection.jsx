import { useState } from "react";
import useMobile from "../utils/useMobile";
import AnimatedSection from "../utils/animatedSection";
import SectionLabel from "../utils/sectionLabel";
import SectionHeading from "../utils/sectionHeading";

import kid1 from "../static/images/lucky/WhatsApp Image 2026-05-25 at 4.18.30 PM.jpeg";
import kid2 from "../static/images/lucky/WhatsApp Image 2026-05-25 at 4.18.30 PM (1).jpeg";
import kid3 from "../static/images/lucky/WhatsApp Image 2026-05-25 at 4.18.30 PM (2).jpeg";
import kid4 from "../static/images/lucky/WhatsApp Image 2026-05-25 at 4.18.30 PM (3).jpeg";
import kid5 from "../static/images/lucky/WhatsApp Image 2026-05-25 at 4.18.30 PM (4).jpeg";

const GALLERY_ITEMS = [
  {
    src: kid1,
    alt: "Kids Frock",
    label: "Kids Frock",
    category: "Kids",
    accent: "#A0D4D8",
    emoji: "🎀",
  },
  {
    src: kid2,
    alt: "Kids Frock",
    label: "Kids Frock",
    category: "Kids",
    accent: "#A0D4D8",
    emoji: "🎀",
  },
  {
    src: kid3,
    alt: "Kids Frock",
    label: "Kids Frock",
    category: "Kids",
    accent: "#A0D4D8",
    emoji: "🎀",
  },
  {
    src: kid4,
    alt: "Kids Frock",
    label: "Kids Frock",
    category: "Kids",
    accent: "#A0D4D8",
    emoji: "🎀",
  },
  {
    src: kid5,
    alt: "Kids Frock",
    label: "Kids Frock",
    category: "Kids",
    accent: "#A0D4D8",
    emoji: "🎀",
  },
];

const GALLERY_FILTERS = [
  "All",
  "Kids",
  "Bridal",
  "Blouse",
  "Suits",
  "Kurti",
  "Gown",
];

function GalleryImage({ item, onClick, active }) {
  const [imgError, setImgError] = useState(!item.src);

  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        background: `linear-gradient(135deg, ${item.accent}99, ${item.accent})`,
        aspectRatio: "3/4",
        transform: active ? "scale(1.03)" : "scale(1)",
        transition: "all .3s",
      }}
    >
      {!imgError && item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          onError={() => setImgError(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 50,
          }}
        >
          {item.emoji}
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 16,
          background:
            "linear-gradient(0deg, rgba(0,0,0,.6), transparent)",
        }}
      >
        <p
          style={{
            color: "#fff",
            margin: 0,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          {item.label}
        </p>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const isMobile = useMobile();

  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [visibleCount, setVisibleCount] = useState(6);

  const filtered =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(
          (g) => g.category === filter
        );

  const visibleImages =
    filtered.slice(0, visibleCount);

  const nextImage = () => {
    if (
      selectedImage <
      visibleImages.length - 1
    ) {
      setSelectedImage(
        (prev) => prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(
        (prev) => prev - 1
      );
    }
  };

  return (
    <section
      id="gallery"
      style={{
        padding: "100px 5vw",
        background:
          "linear-gradient(180deg,#FFF0F8,#FDE8F8)",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <AnimatedSection
          style={{
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          <SectionLabel text="Our Work" />
          <SectionHeading text="Stunning Creations" />
        </AnimatedSection>

        {/* filters */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setVisibleCount(6);
                setSelectedImage(null);
              }}
              style={{
                padding: "8px 20px",
                borderRadius: 50,
                border: "none",
                background:
                  filter === f
                    ? "#B03070"
                    : "#fff",
                color:
                  filter === f
                    ? "#fff"
                    : "#B03070",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* gallery */}
        {filtered.length > 0 ? (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  isMobile
                    ? "1fr"
                    : "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {visibleImages.map(
                (item, i) => (
                  <AnimatedSection
                    key={i}
                    delay={i * 0.08}
                  >
                    <GalleryImage
                      item={item}
                      active={active === i}
                      onClick={() => {
                        setActive(i);
                        setSelectedImage(i);
                      }}
                    />
                  </AnimatedSection>
                )
              )}
            </div>

            {/* load more */}
            {filtered.length >
              visibleCount && (
              <div
                style={{
                  textAlign:
                    "center",
                  marginTop: 30,
                }}
              >
                <button
                  onClick={() =>
                    setVisibleCount(
                      (prev) =>
                        prev + 6
                    )
                  }
                  style={{
                    padding:
                      "12px 28px",
                    borderRadius: 50,
                    border: "none",
                    background:
                      "#B03070",
                    color: "#fff",
                    cursor:
                      "pointer",
                    fontWeight: 700,
                  }}
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: 30,
              background: "#fff",
              borderRadius: 20,
              color: "#B03070",
            }}
          >
            No gallery photos available
          </div>
        )}

        {/* modal */}
        {selectedImage !== null && (
          <div
            onClick={() =>
              setSelectedImage(null)
            }
            style={{
              position: "fixed",
              inset: 0,
              background:
                "rgba(0,0,0,.8)",
              zIndex: 999,
              display: "flex",
              justifyContent:
                "center",
              alignItems:
                "center",
              padding: 20,
            }}
          >
            <div
              onClick={(e) =>
                e.stopPropagation()
              }
              style={{
                position:
                  "relative",
                background:
                  "#fff",
                borderRadius: 20,
                padding: 20,
                maxWidth:
                  "95vw",
              }}
            >
              {selectedImage > 0 && (
                <button
                  onClick={
                    prevImage
                  }
                  style={{
                    position:
                      "absolute",
                    left: 10,
                    top: "50%",
                    transform:
                      "translateY(-50%)",
                    fontSize: 26,
                    border:
                      "none",
                    cursor:
                      "pointer",
                  }}
                >
                  ←
                </button>
              )}

              <img
                src={
                  visibleImages[
                    selectedImage
                  ].src
                }
                alt={
                  visibleImages[
                    selectedImage
                  ].alt
                }
                style={{
                  maxWidth:
                    "100%",
                  maxHeight:
                    "70vh",
                  borderRadius: 14,
                }}
              />

              {selectedImage <
                visibleImages.length -
                  1 && (
                <button
                  onClick={
                    nextImage
                  }
                  style={{
                    position:
                      "absolute",
                    right: 10,
                    top: "50%",
                    transform:
                      "translateY(-50%)",
                    fontSize: 26,
                    border:
                      "none",
                    cursor:
                      "pointer",
                  }}
                >
                  →
                </button>
              )}

              <div
                style={{
                  textAlign:
                    "center",
                  marginTop: 20,
                }}
              >
                <button
                  onClick={() =>
                    setSelectedImage(
                      null
                    )
                  }
                  style={{
                    padding:
                      "12px 28px",
                    border: "none",
                    borderRadius: 40,
                    background:
                      "#B03070",
                    color: "#fff",
                    cursor:
                      "pointer",
                  }}
                >
                  Cancel ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}