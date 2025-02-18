import React, { useEffect, useRef } from 'react';

const MouseTracker = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let ringX = 0;
    let ringY = 0;

    const animate = () => {
      if (cursorRef.current && cursorDotRef.current && cursorRingRef.current) {
        // Smooth follow effect for the outer circle
        const deltaX = mouseX - currentX;
        const deltaY = mouseY - currentY;
        
        currentX += deltaX * 0.1;
        currentY += deltaY * 0.1;

        // Even smoother follow for the outer ring
        const ringDeltaX = mouseX - ringX;
        const ringDeltaY = mouseY - ringY;
        
        ringX += ringDeltaX * 0.05;
        ringY += ringDeltaY * 0.05;

        cursorRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
        cursorRingRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
        // Immediate movement for the inner dot
        cursorDotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - 25; // Offset by half the width
      mouseY = e.clientY - 25; // Offset by half the height
    };

    const handleMouseEnter = () => {
      if (cursorRef.current && cursorDotRef.current && cursorRingRef.current) {
        cursorRef.current.classList.add('scale-150');
        cursorDotRef.current.classList.add('scale-150');
        cursorRingRef.current.classList.add('scale-150');
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current && cursorDotRef.current && cursorRingRef.current) {
        cursorRef.current.classList.remove('scale-150');
        cursorDotRef.current.classList.remove('scale-150');
        cursorRingRef.current.classList.remove('scale-150');
      }
    };

    animate();
    window.addEventListener('mousemove', handleMouseMove);

    // Add hover effect to all links and buttons
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRingRef}
        className="fixed pointer-events-none z-50 w-16 h-16 border-2 border-transparent rounded-full
                   transition-all duration-300 ease-out"
        style={{
          background: 'linear-gradient(45deg, rgba(255,51,102,0.2), rgba(126,127,213,0.2))',
          backdropFilter: 'blur(4px)',
        }}
      />
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-12 h-12 rounded-full transition-all duration-150 ease-out"
        style={{
          background: 'linear-gradient(45deg, rgba(255,51,102,0.3), rgba(126,127,213,0.3))',
          backdropFilter: 'blur(2px)',
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-50 w-3 h-3 rounded-full transition-all duration-150 ease-out"
        style={{
          background: 'linear-gradient(45deg, #FF3366, #7E7FD5)',
          boxShadow: '0 0 10px rgba(255, 51, 102, 0.5)',
        }}
      />
    </>
  );
};

export default MouseTracker;