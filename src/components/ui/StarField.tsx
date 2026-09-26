"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  driftX: number;
  driftY: number;
};

type Meteor = {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  life: number;
  maxLife: number;
};

type Rocket = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  scale: number;
  wobbleSeed: number;
};

const ROCKET_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 100">
  <path d="M30 4 C42 18 44 46 40 74 L20 74 C16 46 18 18 30 4 Z" fill="#f4f6ff" stroke="#c7d2fe" stroke-width="1.5"/>
  <path d="M30 4 C36 12 39 24 40 34 L20 34 C21 24 24 12 30 4 Z" fill="#fb7185"/>
  <path d="M20 58 L7 78 L20 73 Z" fill="#a855f7"/>
  <path d="M40 58 L53 78 L40 73 Z" fill="#a855f7"/>
  <circle cx="30" cy="41" r="7.5" fill="#22d3ee" stroke="#0e7490" stroke-width="1.5"/>
  <circle cx="30" cy="41" r="3.2" fill="#ecfeff"/>
</svg>`;

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const rocketImg = new Image();
    let rocketReady = false;
    rocketImg.onload = () => {
      rocketReady = true;
    };
    rocketImg.src = `data:image/svg+xml;utf8,${encodeURIComponent(ROCKET_SVG)}`;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    let rockets: Rocket[] = [];
    let animationId = 0;
    let lastMeteorAt = 0;
    let lastRocketAt = 0;
    let running = true;

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

      const density = Math.min(120, Math.floor((width * height) / 12000));
      stars = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.3 + 0.3,
        baseAlpha: Math.random() * 0.6 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.03,
        driftY: (Math.random() - 0.5) * 0.03,
      }));
    }

    function spawnMeteor() {
      meteors.push({
        x: Math.random() * width * 0.6 + width * 0.2,
        y: Math.random() * height * 0.2,
        length: Math.random() * 90 + 60,
        speed: Math.random() * 9 + 7,
        angle: (Math.PI / 4) * (Math.random() * 0.3 + 0.9),
        life: 0,
        maxLife: 60,
      });
    }

    function spawnRocket() {
      const fromLeft = Math.random() > 0.5;
      const startX = fromLeft ? -80 : width + 80;
      const startY = height * (0.25 + Math.random() * 0.55);
      const dirX = fromLeft ? 1 : -1;
      const speed = Math.random() * 0.9 + 1.1;
      rockets.push({
        x: startX,
        y: startY,
        vx: dirX * speed,
        vy: -(Math.random() * 0.35 + 0.15),
        life: 0,
        maxLife: 640,
        scale: Math.random() * 0.3 + 0.45,
        wobbleSeed: Math.random() * Math.PI * 2,
      });
    }

    function draw(time: number) {
      if (!ctx || !running) return;
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        s.x += s.driftX;
        s.y += s.driftY;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        const twinkle = reduceMotion
          ? s.baseAlpha
          : s.baseAlpha + Math.sin(time * s.twinkleSpeed + s.twinklePhase) * 0.3;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, twinkle))})`;
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) {
        if (time - lastMeteorAt > 3500 + Math.random() * 3500) {
          lastMeteorAt = time;
          spawnMeteor();
        }

        meteors = meteors.filter((m) => m.life < m.maxLife);
        for (const m of meteors) {
          m.life += 1;
          m.x += Math.cos(m.angle) * m.speed;
          m.y += Math.sin(m.angle) * m.speed;
          const progress = m.life / m.maxLife;
          const alpha = progress < 0.15 ? progress / 0.15 : 1 - (progress - 0.15) / 0.85;

          const tailX = m.x - Math.cos(m.angle) * m.length;
          const tailY = m.y - Math.sin(m.angle) * m.length;
          const gradient = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
          gradient.addColorStop(0, `rgba(168,85,247,${alpha})`);
          gradient.addColorStop(1, "rgba(168,85,247,0)");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
        }

        if (rocketReady) {
          if (time - lastRocketAt > 3000 + Math.random() * 4000) {
            lastRocketAt = time;
            spawnRocket();
          }

          rockets = rockets.filter(
            (r) => r.life < r.maxLife && r.x > -120 && r.x < width + 120
          );
          for (const r of rockets) {
            r.life += 1;
            const wobble = Math.sin(r.life * 0.05 + r.wobbleSeed) * 0.35;
            const vyEff = r.vy + wobble * 0.4;
            r.x += r.vx;
            r.y += vyEff;

            const moveLen = Math.hypot(r.vx, vyEff) || 1;
            const dirX = r.vx / moveLen;
            const dirY = vyEff / moveLen;

            const w = 46 * r.scale;
            const h = (46 * r.scale * 100) / 60;
            const fadeAlpha =
              r.life < 40 ? r.life / 40 : r.life > r.maxLife - 40 ? (r.maxLife - r.life) / 40 : 1;

            const flicker = 0.75 + Math.sin(r.life * 0.6) * 0.15 + Math.random() * 0.1;
            const baseX = r.x - dirX * (h * 0.34);
            const baseY = r.y - dirY * (h * 0.34);
            const flameLen = h * 0.9 * flicker;
            const tipX = baseX - dirX * flameLen;
            const tipY = baseY - dirY * flameLen;

            ctx.globalAlpha = fadeAlpha;

            const outerGrad = ctx.createLinearGradient(baseX, baseY, tipX, tipY);
            outerGrad.addColorStop(0, "rgba(251,191,36,0.85)");
            outerGrad.addColorStop(0.5, "rgba(251,146,60,0.55)");
            outerGrad.addColorStop(1, "rgba(251,113,60,0)");
            ctx.strokeStyle = outerGrad;
            ctx.lineWidth = w * 0.42;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(baseX, baseY);
            ctx.lineTo(tipX, tipY);
            ctx.stroke();

            const coreLen = flameLen * 0.55;
            const coreX = baseX - dirX * coreLen;
            const coreY = baseY - dirY * coreLen;
            const coreGrad = ctx.createLinearGradient(baseX, baseY, coreX, coreY);
            coreGrad.addColorStop(0, "rgba(255,247,214,0.95)");
            coreGrad.addColorStop(1, "rgba(253,224,71,0)");
            ctx.strokeStyle = coreGrad;
            ctx.lineWidth = w * 0.2;
            ctx.beginPath();
            ctx.moveTo(baseX, baseY);
            ctx.lineTo(coreX, coreY);
            ctx.stroke();

            const angle = Math.atan2(vyEff, r.vx) + Math.PI / 2;
            ctx.save();
            ctx.translate(r.x, r.y);
            ctx.rotate(angle);
            ctx.drawImage(rocketImg, -w / 2, -h / 2, w, h);
            ctx.restore();

            ctx.globalAlpha = 1;
          }
        }
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
