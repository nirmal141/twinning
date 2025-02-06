import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Ethereal particles initial positions
  const particles = Array.from({ length: 20 }).map(() => ({
    x: dimensions.width * Math.random(),
    y: dimensions.height * Math.random(),
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Elegant flowing gradients */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.07) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
          scale: [1, 1.1, 1],
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 100,
          mass: 1,
        }}
      />

      {/* Subtle accent elements */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, ${
              i === 0 ? 'rgba(139, 92, 246, 0.05)' :
              i === 1 ? 'rgba(59, 130, 246, 0.05)' :
              'rgba(236, 72, 153, 0.05)'
            } 0%, rgba(0,0,0,0) 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            x: [
              mousePosition.x - 200 + (i * 100),
              mousePosition.x - 200 + (i * -100),
              mousePosition.x - 200 + (i * 100),
            ],
            y: [
              mousePosition.y - 200 + (i * 100),
              mousePosition.y - 200 + (i * -100),
              mousePosition.y - 200 + (i * 100),
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}

      {/* Ethereal particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-[2px] h-[2px] rounded-full bg-white/20"
          style={{
            filter: 'blur(1px)',
          }}
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}

      {/* Subtle line patterns */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-blue-900/10 to-transparent" />
    </div>
  );
}