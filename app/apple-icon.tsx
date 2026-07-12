import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontSize: 96,
          fontWeight: 700,
          fontFamily: "sans-serif",
          background:
            "linear-gradient(150deg, #8FD0F5 -30%, #7C6AF0 35%, #4F46E5 100%)",
        }}
      >
        K
      </div>
    ),
    size
  );
}
