"use client"; // because we use React state/effect

import { useEffect, useState } from "react";

export default function FloatingCircles() {
  const [circles, setCircles] = useState([]);

  // Initialize circles with random positions, sizes, and speeds
  useEffect(() => {
    const temp = [];
    const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#9B5DE5"];
    for (let i = 0; i < 7; i++) {
      temp.push({
        id: i,
        size: Math.random() * 50 + 20, // 20px - 70px
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 2, // movement speed
        dy: (Math.random() - 0.5) * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setCircles(temp);
  }, []);

  // Animate circles
  useEffect(() => {
    const interval = setInterval(() => {
      setCircles((prev) =>
        prev.map((c) => {
          let newX = c.x + c.dx;
          let newY = c.y + c.dy;

          // Bounce off edges
          if (newX < 0 || newX + c.size > window.innerWidth) c.dx *= -1;
          if (newY < 0 || newY + c.size > window.innerHeight) c.dy *= -1;

          return { ...c, x: newX, y: newY };
        })
      );
    }, 16); // ~60fps

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
          }}
          className="absolute rounded-full opacity-40 pointer-events-none"
        ></div>
      ))}
    </>
  );
}
