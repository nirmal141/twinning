import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function FadeInWhenVisible({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.17, 0.55, 0.55, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function SlideInFromRight({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.17, 0.55, 0.55, 1],
      }}
    >
      {children}
    </motion.div>
  );
} 