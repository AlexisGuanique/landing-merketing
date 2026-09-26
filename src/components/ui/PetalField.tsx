"use client";

import { useEffect, useRef } from "react";

type Petal = {
  x: number;
  y: number;
  size: number;
  fallSpeed: number;
  swaySpeed: number;
  swayAmp: number;
  swayPhase: number;
  rotation: number;
  rotationSpeed: number;
  hue: number;
  opacity: number;
};

const PETAL_COLORS = [
  { fill: "251,207,232", accent: "244,114,182" },
  { fill: "253,224,232", accent: "251,113,133" },
  { fill: "243,232,255", accent: "192,132,252" },
  { fill: "255,241,242", accent: "253,164,175" },
];

function drawPetal(ctx: CanvasRenderingContext2D, size: number, colorIdx: number) {
  const c = PETAL_COLORS[colorIdx % PETAL_COLORS.length];
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.bezierCurveTo(size * 0.9, -size * 0.6, size * 0.7, size * 0.5, 0, size);
  ctx.bezierCurveTo(-size * 0.7, size * 0.5, -size * 0.9, -size * 0.6, 0, -size);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, -size, 0, size);
  grad.addColorStop(0, `rgba(${c.fill},0.95)`);
  grad.addColorStop(1, `rgba(${c.accent},0.85)`);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.75);
  ctx.lineTo(0, size * 0.75);
  ctx.strokeStyle = `rgba(${c.accent},0.35)`;
  ctx.lineWidth = Math.max(0.4, size * 0.05);
  ctx.stroke();
}

export function PetalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let petals: Petal[] = [];
    let animationId = 0;
    let windPhase = 0;
    let running = true;

    function makePetal(randomY = false): Petal {
      return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : -20 - Math.random() * 80,
        size: Math.random() * 7 + 6,
        fallSpeed: Math.random() * 0.5 + 0.35,
        swaySpeed: Math.random() * 0.012 + 0.006,
        swayAmp: Math.random() * 40 + 20,
        swayPhase: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        hue: Math.floor(Math.random() * PETAL_COLORS.length),
        opacity: Math.random() * 0.35 + 0.65,
      };
    }

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(28, Math.max(12, Math.floor((width * height) / 55000)));
      petals = Array.from({ length: density }, () => makePetal(true));
    }

    function draw(time: number) {
      if (!ctx || !running) return;
      ctx.clearRect(0, 0, width, height);

      if (reduceMotion) {
        for (const p of petals) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.globalAlpha = p.opacity;
          drawPetal(ctx, p.size, p.hue);
          ctx.restore();
        }
        return;
      }

      windPhase += 0.003;
      const wind = Math.sin(windPhase) * 0.4;

      for (const p of petals) {
        p.y += p.fallSpeed;
        p.x += Math.sin(time * p.swaySpeed + p.swayPhase) * 0.6 + wind;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          Object.assign(p, makePetal(false));
        }
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        drawPetal(ctx, p.size, p.hue);
        ctx.restore();
      }

      animationId = requestAnimationFrame(draw);
    }

    function onVisibility() {
      running = document.visibilityState === "visible";
      if (running) animationId = requestAnimationFrame(draw);
      else cancelAnimationFrame(animationId);
    }

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    animationId = requestAnimationFrame(draw);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-30"
      aria-hidden="true"
    />
  );
}
