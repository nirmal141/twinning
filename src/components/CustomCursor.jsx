import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const springConfig = { damping: 10, stiffness: 500, mass: 0.2 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Hide the system cursor
    document.body.style.cursor = 'none';

    return () => {
      // Restore the system cursor when component unmounts
      document.body.style.cursor = 'auto';
    };
  }, []);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const { clientX, clientY } = e;
      x.set(clientX - 12);
      y.set(clientY - 12);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [x, y]);

  return (
    <>
      {/* Gradient glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-[150px] h-[150px] pointer-events-none z-[9998]"
        style={{ 
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 60%)',
        }}
      />
      
      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x, y }}
      >
        <div className="w-full h-full rounded-full bg-white/50 backdrop-blur-sm" />
      </motion.div>
    </>
  );
} 