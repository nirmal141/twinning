import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import CustomCursor from './CustomCursor';
import AnimatedBackground from './AnimatedBackground';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden font-body">
      <style jsx global>{`
        @font-face {
          font-family: 'CalSans';
          src: url('/fonts/CalSans-SemiBold.woff2') format('woff2');
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

        ::selection {
          background: rgba(79, 70, 229, 0.2);
          color: #1E1B4B;
        }

        .gradient-text {
          background: linear-gradient(to right, #4F46E5, #3B82F6, #DB2777);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(79, 70, 229, 0.1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .text-glow {
          text-shadow: 0 0 20px rgba(79, 70, 229, 0.3);
        }
      `}</style>

      <CustomCursor />
      <AnimatedBackground />
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Animated corner decorations */}
      <div className="fixed top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-purple-500/10 to-transparent transform rotate-45 blur-3xl" />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-500/10 to-transparent transform -rotate-45 blur-3xl" />
    </div>
  );
};

export default Layout; 