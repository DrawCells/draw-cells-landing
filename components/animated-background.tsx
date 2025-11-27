"use client";

import { useEffect, useRef } from "react";

interface Cell {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellsRef = useRef<Cell[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = [
      "rgba(16, 185, 129, 0.15)",
      "rgba(20, 184, 166, 0.15)",
      "rgba(59, 130, 246, 0.15)",
      "rgba(168, 85, 247, 0.12)",
      "rgba(236, 72, 153, 0.12)",
    ];

    const initCells = () => {
      cellsRef.current = [];
      const numCells = Math.floor((canvas.width * canvas.height) / 60000);

      for (let i = 0; i < numCells; i++) {
        cellsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 30 + 20,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initCells();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      cellsRef.current.forEach((cell) => {
        const dx = mouseRef.current.x - cell.x;
        const dy = mouseRef.current.y - cell.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const pushRadius = 150;

        if (distance < pushRadius) {
          const force = (pushRadius - distance) / pushRadius;
          const angle = Math.atan2(dy, dx);
          cell.vx -= Math.cos(angle) * force * 0.5;
          cell.vy -= Math.sin(angle) * force * 0.5;
        }

        cell.vx *= 0.98;
        cell.vy *= 0.98;

        cell.vx += (Math.random() - 0.5) * 0.1;
        cell.vy += (Math.random() - 0.5) * 0.1;

        const maxSpeed = 2;
        const speed = Math.sqrt(cell.vx * cell.vx + cell.vy * cell.vy);
        if (speed > maxSpeed) {
          cell.vx = (cell.vx / speed) * maxSpeed;
          cell.vy = (cell.vy / speed) * maxSpeed;
        }

        cell.x += cell.vx;
        cell.y += cell.vy;

        if (cell.x < -cell.radius) cell.x = canvas.width + cell.radius;
        if (cell.x > canvas.width + cell.radius) cell.x = -cell.radius;
        if (cell.y < -cell.radius) cell.y = canvas.height + cell.radius;
        if (cell.y > canvas.height + cell.radius) cell.y = -cell.radius;

        ctx.beginPath();
        ctx.arc(cell.x, cell.y, cell.radius, 0, Math.PI * 2);
        ctx.fillStyle = cell.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cell.x, cell.y, cell.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = cell.color
          .replace("0.15", "0.25")
          .replace("0.12", "0.2");
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
