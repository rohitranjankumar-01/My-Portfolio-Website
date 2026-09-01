import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "7px",
          border: "1.5px solid #38BDF8",
          boxShadow: "0 0 8px rgba(56, 189, 248, 0.4)",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 900,
            fontFamily: "system-ui, -apple-system, sans-serif",
            background: "linear-gradient(180deg, #38BDF8 0%, #0284C7 100%)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-1px",
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
