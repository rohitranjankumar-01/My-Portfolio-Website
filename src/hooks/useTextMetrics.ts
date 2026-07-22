"use client";

import { useCallback, useRef } from "react";

export interface TextMetricsResult {
  width: number;
  height: number;
  lines: string[];
}

/**
 * Custom hook providing layout-shift-free text measurement via Canvas API
 * (inspired by @chenglou/pretext logic).
 */
export function useTextMetrics() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const getCanvas = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!canvasRef.current) {
      canvasRef.current = document.createElement("canvas");
    }
    return canvasRef.current;
  }, []);

  const measureText = useCallback(
    (
      text: string,
      font: string = "16px sans-serif",
      maxWidth?: number
    ): TextMetricsResult => {
      const canvas = getCanvas();
      if (!canvas) {
        return { width: 0, height: 24, lines: [text] };
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return { width: 0, height: 24, lines: [text] };
      }

      ctx.font = font;

      if (!maxWidth) {
        const metrics = ctx.measureText(text);
        const fontHeight =
          metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent || 24;
        return {
          width: metrics.width,
          height: fontHeight,
          lines: [text],
        };
      }

      // Word wrapping calculation
      const words = text.split(" ");
      const lines: string[] = [];
      let currentLine = "";
      let maxLineWidth = 0;

      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
          maxLineWidth = Math.max(maxLineWidth, ctx.measureText(currentLine).width);
        } else {
          currentLine = testLine;
          maxLineWidth = Math.max(maxLineWidth, testWidth);
        }
      }
      if (currentLine) {
        lines.push(currentLine);
      }

      const approxLineHeight = 28;
      return {
        width: maxLineWidth,
        height: lines.length * approxLineHeight,
        lines,
      };
    },
    [getCanvas]
  );

  return { measureText };
}
