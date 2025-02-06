import { motion } from 'framer-motion';

export default function AnimatedCard({ children, variants }) {
  return (
    <motion.div
      className="relative group"
      variants={variants}
    >
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="relative bg-[rgba(255,255,255,0.03)] backdrop-blur-xl rounded-xl p-1 ring-1 ring-gray-900/5 shadow-xl"
        whileHover={{ 
          scale: 1.02,
          transition: { 
            type: 'spring',
            stiffness: 300,
            damping: 20 
          }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
