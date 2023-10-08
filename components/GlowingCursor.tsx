"use client";
import { ElementChild } from "@/types";
import { useEffect, useState } from "react";

export default function GlowingCursor({ children }: ElementChild) {
  const [mouseCoordinate, setMouseCoordinate] = useState({ x: 10, y: 10 });

  const handleMouseMovement = (event: MouseEvent) => {
    setMouseCoordinate({
      x: event.clientX,
      y: window.scrollY + event.clientY,
    });
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMovement);
    return () => {
      document.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);
  return (
    <div className="relative">
      <div
        className="fixed inset-0 z-30 lg:absolute pointer-events-none"
        style={{
          background: `radial-gradient(400px at ${mouseCoordinate.x}px ${mouseCoordinate.y}px, rgba(29, 78, 216, 0.1), transparent 80% )`,
          // background: `radial-gradient(400px at ${mouseCoordinate.x}px ${mouseCoordinate.y}px, red, transparent 80% )`,
        }}
      ></div>
      {children}
    </div>
  );
}
