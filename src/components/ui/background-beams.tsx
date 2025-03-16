"use client";

import React, { useEffect, useRef, useState } from "react";

interface BackgroundBeamsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BackgroundBeams = React.memo(
  ({ className = "", ...props }: BackgroundBeamsProps) => {
    const [opacity, setOpacity] = useState(0);
    const beamsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setOpacity(0.2); // Reduced opacity for better performance
            } else {
              setOpacity(0);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (beamsRef.current) {
        observer.observe(beamsRef.current);
      }

      return () => {
        if (beamsRef.current) {
          observer.unobserve(beamsRef.current);
        }
      };
    }, []);

    return (
      <div
        ref={beamsRef}
        className={`fixed inset-0 overflow-hidden ${className}`}
        {...props}
      >
        <div
          className="absolute top-0 -left-40 h-[1000px] w-[1000px] rotate-[-20deg] transform bg-gradient-to-r from-indigo-500/20 to-transparent blur-3xl transition-opacity duration-1000 pointer-events-none"
          style={{ opacity }}
        />
        <div
          className="absolute top-0 -right-40 h-[1000px] w-[1000px] rotate-[20deg] transform bg-gradient-to-l from-indigo-500/20 to-transparent blur-3xl transition-opacity duration-1000 pointer-events-none"
          style={{ opacity }}
        />
        <div
          className="absolute bottom-0 left-[calc(50%-500px)] h-[500px] w-[1000px] rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20 blur-3xl transition-opacity duration-1000 pointer-events-none"
          style={{ opacity }}
        />
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-3xl pointer-events-none"
          style={{ opacity: opacity * 0.5 }}
        />
      </div>
    );
  }
); 