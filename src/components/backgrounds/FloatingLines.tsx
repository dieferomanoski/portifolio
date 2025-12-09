"use client";

import { useEffect, useRef } from "react";

export default function FloatingLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Line {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      speedX: number;
      speedY: number;
      opacity: number;
      hue: number;
      canvas: HTMLCanvasElement;
      ctx: CanvasRenderingContext2D;

      constructor(canvasEl: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvasEl;
        this.ctx = context;
        this.x1 = Math.random() * this.canvas.width;
        this.y1 = Math.random() * this.canvas.height;
        this.x2 = this.x1 + (Math.random() - 0.5) * 200;
        this.y2 = this.y1 + (Math.random() - 0.5) * 200;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.3 + 0.2;
        this.hue = Math.random() * 60 + 180;
      }

      update() {
        this.x1 += this.speedX;
        this.y1 += this.speedY;
        this.x2 += this.speedX;
        this.y2 += this.speedY;

        if (this.x1 < 0 || this.x1 > this.canvas.width) this.speedX *= -1;
        if (this.y1 < 0 || this.y1 > this.canvas.height) this.speedY *= -1;
      }

      draw() {
        const gradient = this.ctx.createLinearGradient(this.x1, this.y1, this.x2, this.y2);
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, 0)`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, 60%, ${this.opacity})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 70%, 60%, 0)`);
        
        this.ctx.strokeStyle = gradient;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x1, this.y1);
        this.ctx.lineTo(this.x2, this.y2);
        this.ctx.stroke();
      }
    }

    const lines: Line[] = [];
    const lineCount = 30;

    for (let i = 0; i < lineCount; i++) {
      lines.push(new Line(canvas, ctx));
    }

    const animate = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        line.update();
        line.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
