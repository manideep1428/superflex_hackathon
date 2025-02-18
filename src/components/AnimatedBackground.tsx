import React, { useEffect, useRef } from 'react';

interface Shape {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  rotation: number;
  type: 'circle' | 'square' | 'triangle' | 'hexagon';
  direction: { x: number; y: number };
}

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapeTypes: Shape['type'][] = ['circle', 'square', 'triangle', 'hexagon'];
    const shapes: Shape[] = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 106 + 30,
      speed: Math.random() * 1.5 + 0.5,
      color: `hsla(${Math.random() * 360}, 70%, 70%, 0.2)`,
      rotation: Math.random() * 360,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      direction: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
      }
    }));

    const createShapeElements = () => {
      container.innerHTML = '';
      shapes.forEach((shape) => {
        const element = document.createElement('div');
        element.className = `shape ${shape.type === 'circle' ? 'rounded-full' : `shape-${shape.type}`}`;
        element.style.width = `${shape.size}px`;
        element.style.height = `${shape.size}px`;
        element.style.left = `${shape.x}%`;
        element.style.top = `${shape.y}%`;
        element.style.backgroundColor = shape.color;
        element.style.transform = `rotate(${shape.rotation}deg)`;
        container.appendChild(element);
      });
    };

    createShapeElements();

    const updatePositions = () => {
      shapes.forEach((shape, index) => {
        // Update position based on direction and speed
        shape.x += shape.direction.x * shape.speed * 0.1;
        shape.y += shape.direction.y * shape.speed * 0.1;
        shape.rotation += shape.speed;

        // Bounce off edges
        if (shape.x <= 0 || shape.x >= 100) shape.direction.x *= -1;
        if (shape.y <= 0 || shape.y >= 100) shape.direction.y *= -1;

        // Update DOM element
        const element = container.children[index] as HTMLElement;
        if (element) {
          element.style.left = `${shape.x}%`;
          element.style.top = `${shape.y}%`;
          element.style.transform = `rotate(${shape.rotation}deg)`;
        }
      });
      animationRef.current = requestAnimationFrame(updatePositions);
    };

    animationRef.current = requestAnimationFrame(updatePositions);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none" />;
};

export default AnimatedBackground;