import React, { useEffect, useRef } from 'react';

const MouseLight = () => {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (lightRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        lightRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={lightRef}
      className="mouse-light fixed w-[300px] h-[300px] z-[1]"
      style={{ top: '-150px', left: '-150px' }}
    />
  );
};

export default MouseLight;