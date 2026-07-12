import { ImageResponse } from "next/og";

export const alt =
  "Kashan Iqbal — AI Engineer, Full-Stack Developer, Educator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#ffffff",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* violet & ice auras */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(206,199,250,0.55) 0%, rgba(255,255,255,0) 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            right: -100,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(143,208,245,0.4) 0%, rgba(255,255,255,0) 65%)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: 88,
            height: 88,
            borderRadius: 24,
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: 44,
            fontWeight: 700,
            background:
              "linear-gradient(150deg, #8FD0F5 -30%, #7C6AF0 35%, #4F46E5 100%)",
            boxShadow: "0 24px 60px -20px rgba(93,78,232,0.5)",
          }}
        >
          K
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#111111",
            display: "flex",
          }}
        >
          Build. Automate. Scale.
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 26,
            color: "#666666",
            letterSpacing: "0.02em",
            display: "flex",
          }}
        >
          Kashan Iqbal — AI Engineer · Full-Stack Developer · Educator
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 44,
            fontSize: 18,
            color: "#9a9da6",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          kashaniqbal.com
        </div>
      </div>
    ),
    size
  );
}
