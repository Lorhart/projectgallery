import React from 'react';

export default function Watermark() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Multiple watermarks for better coverage */}
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="absolute text-white text-opacity-40 text-5xl font-light tracking-[0.2em] rotate-[-45deg]"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              transform: `rotate(-45deg) translateY(${index * 150}px)`,
            }}
          >
            lorhart
          </span>
        ))}
      </div>
    </div>
  );
}