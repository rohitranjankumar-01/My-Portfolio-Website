import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
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
          background: "linear-gradient(135deg, #0B1320 0%, #111D30 100%)",
          borderRadius: "36px",
          border: "4px solid #38BDF8",
          boxShadow: "0 0 30px rgba(56, 189, 248, 0.4)",
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            fontFamily: "system-ui, -apple-system, sans-serif",
            background: "linear-gradient(180deg, #38BDF8 0%, #0284C7 100%)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-6px",
          }}
        >
          R
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
