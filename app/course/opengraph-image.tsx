import { ImageResponse } from "next/og";

export const alt =
  "Shopify Store Mastery — Stores, Freelancing & Digital Products, by Kashan Iqbal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function CourseOpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7FAFC",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -140,
            width: 720,
            height: 720,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(27,169,232,0.18) 0%, rgba(247,250,252,0) 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            left: -120,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(27,169,232,0.12) 0%, rgba(247,250,252,0) 65%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 26px",
            borderRadius: 9999,
            background: "rgba(27,169,232,0.1)",
            border: "1px solid rgba(27,169,232,0.35)",
            color: "#1180b8",
            fontSize: 21,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Shopify · Freelancing · Digital Products
        </div>

        <div
          style={{
            marginTop: 38,
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#10222e",
            display: "flex",
          }}
        >
          Shopify Store Mastery
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 27,
            color: "#5b6b78",
            display: "flex",
          }}
        >
          14 hours · 62 lectures · Lifetime access · Mentorship included
        </div>

        <div
          style={{
            marginTop: 44,
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "16px 42px",
              borderRadius: 9999,
              background: "linear-gradient(135deg, #2FBDF7 0%, #1BA9E8 100%)",
              color: "#ffffff",
              fontSize: 27,
              fontWeight: 800,
              boxShadow: "0 18px 40px -14px rgba(27,169,232,0.55)",
            }}
          >
            Enroll for $299
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 27,
              color: "#8b95a1",
              textDecoration: "line-through",
            }}
          >
            $799
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 42,
            fontSize: 18,
            color: "#8b95a1",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          kashaniqbal.com/course
        </div>
      </div>
    ),
    size
  );
}
