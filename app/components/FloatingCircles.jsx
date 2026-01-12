"use client";

import { useEffect, useState } from "react";

const TOP_OFFSET = 80; // height of the header

export default function FloatingCircles() {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const colors = [
      "#FF6B6B",
      "#6BCB77",
      "#2461b6ff",
      "#c4b267ff",
      "#9B5DE5",
      "#97db77ff",
      "#6068c0ff",
      "#5294c3e3",
      "#97db77ff",
    ];

    const temp = Array.from({ length: 25 }).map((_, i) => {
      const size = Math.random() * 80 + 70; // 70 - 150px
      const x = Math.random() * (window.innerWidth - size);
      const y =
        Math.random() * (window.innerHeight - TOP_OFFSET - size) + TOP_OFFSET;

      return {
        id: i,
        size,
        x,
        y,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.25 + 0.05,
      };
    });

    setCircles(temp);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCircles((prev) =>
        prev.map((c) => {
          let nextX = c.x + c.dx;
          let nextY = c.y + c.dy;
          let dx = c.dx;
          let dy = c.dy;

          // Horizontal bounds
          if (nextX <= 0) {
            nextX = 0;
            dx *= -1;
          } else if (nextX + c.size >= window.innerWidth) {
            nextX = window.innerWidth - c.size;
            dx *= -1;
          }

          // Vertical bounds
          if (nextY <= TOP_OFFSET) {
            nextY = TOP_OFFSET;
            dy *= -1;
          } else if (nextY + c.size >= window.innerHeight) {
            nextY = window.innerHeight - c.size;
            dy *= -1;
          }

          return { ...c, x: nextX, y: nextY, dx, dy };
        })
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {circles.map((c) => (
        <div
          key={c.id}
          style={{
            width: c.size,
            height: c.size,
            backgroundColor: c.color,
            top: c.y,
            left: c.x,
            opacity: c.opacity,
          }}
          className="absolute rounded-full pointer-events-none"
        />
      ))}
    </>
  );
}
