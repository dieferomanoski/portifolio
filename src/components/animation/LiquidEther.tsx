"use client";

import { useRef } from "react";
import { useLiquidEther } from "@/hooks/useLiquidEther";

export default function LiquidEther() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useLiquidEther(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-40"
      style={{ pointerEvents: "none" }}
    />
  );
}
