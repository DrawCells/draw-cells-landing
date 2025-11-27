"use client";

import { useEffect, useRef } from "react";
import basophil2dGreen from "./cell-patterns/basophil-2d_green.svg";
import dendriticCell2dYellow from "./cell-patterns/dendritic-cell-2d_yellow.svg";
import fibroblast2dPurple from "./cell-patterns/fibroblast-2d_purple.svg";
import microglia2dRed from "./cell-patterns/microglia-2d_red.svg";
import bCell2dBlue from "./cell-patterns/b-cell-2d_blue.svg";

interface Cell {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  patternIndex: number;
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

    // Create SVG patterns for cell fills
    const patterns: CanvasPattern[] = [];
    const svgFiles = [
      basophil2dGreen,
      dendriticCell2dYellow,
      fibroblast2dPurple,
      microglia2dRed,
      bCell2dBlue,
    ];

    // Convert SVG files to canvas patterns
    svgFiles.forEach((svgFile) => {
      const img = new Image();
      img.onload = () => {
        const pattern = ctx.createPattern(img, "no-repeat");
        if (pattern) {
          patterns.push(pattern);
        }
      };
      img.src = svgFile.src;
    });

    const initCells = () => {
      cellsRef.current = [];
      const numCells = Math.floor(canvas.height / 50);
      const minDistance = 100; // Minimum distance between cell centers

      const isOverlapping = (newCell: Cell, existingCells: Cell[]) => {
        return existingCells.some((cell) => {
          const dx = newCell.x - cell.x;
          const dy = newCell.y - cell.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDist = newCell.radius + cell.radius + minDistance;
          return distance < minDist;
        });
      };

      for (let i = 0; i < numCells; i++) {
        let attempts = 0;
        let newCell: Cell;

        // Try to find a non-overlapping position
        do {
          const radius = Math.random() * 30 + 20;
          newCell = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: radius,
            patternIndex: Math.floor(Math.random() * svgFiles.length),
          };
          attempts++;
        } while (isOverlapping(newCell, cellsRef.current) && attempts < 50);

        // Only add the cell if we found a good position
        if (attempts < 50) {
          cellsRef.current.push(newCell);
        }
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

        // Draw cell with SVG pattern
        const pattern = patterns[cell.patternIndex];
        if (pattern) {
          ctx.save();
          ctx.translate(cell.x, cell.y);
          ctx.scale((cell.radius * 2) / 100, (cell.radius * 2) / 100);
          ctx.translate(-50, -50);

          ctx.fillStyle = pattern;
          ctx.fillRect(0, 0, 100, 100);

          ctx.restore();
        }
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
