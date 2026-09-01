import { ImageResponse } from "next/og";
import { personalData } from "@/data/personalData";

export const alt = `${personalData.fullName} - Portfolio & Featured Works`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          background: "linear-gradient(135deg, #0B1320 0%, #0F172A 50%, #111D30 100%)",
          color: "#E2E8F0",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow Effects */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-100px",
            width: "450px",
            height: "450px",
            background: "radial-gradient(circle, rgba(2, 132, 199, 0.2) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)",
                borderRadius: "12px",
                color: "#0B1320",
                fontSize: "26px",
                fontWeight: "900",
                boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
              }}
            >
              R
            </div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                letterSpacing: "3px",
                color: "#38BDF8",
                textTransform: "uppercase",
              }}
            >
              Rohit Ranjan Kumar
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(56, 189, 248, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              padding: "8px 18px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#38BDF8",
              letterSpacing: "1.5px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10B981",
                boxShadow: "0 0 8px #10B981",
              }}
            />
            PORTFOLIO // LIVE
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: "900",
              lineHeight: "1.1",
              letterSpacing: "-1px",
              color: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>DATA SCIENCE &amp;</span>
            <span
              style={{
                background: "linear-gradient(90deg, #38BDF8 0%, #818CF8 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              AI SYSTEMS PORTFOLIO
            </span>
          </div>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.5",
              color: "#94A3B8",
              maxWidth: "950px",
              margin: "0",
            }}
          >
            B.Tech CSE student specializing in Data Science, Data Engineering, LLMs &amp; Full-Stack AI solutions.
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            {[
              "Data Science",
              "AI & LLM Systems",
              "Data Engineering",
              "Next.js & React",
              "Oracle Certified",
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#E2E8F0",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "20px",
            borderTop: "1px solid rgba(56, 189, 248, 0.15)",
            fontSize: "15px",
            color: "#64748B",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <span>⚡ Interactive HUD &amp; Projects</span>
            <span>🎓 8.98 CGPA</span>
            <span>🏆 10+ Certifications</span>
          </div>
          <div style={{ color: "#38BDF8", fontWeight: "600" }}>
            github.com/rohitranjankumar-01
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
