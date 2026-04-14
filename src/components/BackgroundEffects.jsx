import { motion, useScroll } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

function BackgroundEffects() {
  const { scrollYProgress } = useScroll();
  const far = useParallax(scrollYProgress, 140);
  const near = useParallax(scrollYProgress, 260);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-glowPurple/30 blur-[110px]"
        style={{ y: far }}
        animate={{ x: [0, 40, -10, 0], scale: [1, 1.05, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-60px] top-[22%] h-80 w-80 rounded-full bg-glowBlue/30 blur-[120px]"
        style={{ y: near }}
        animate={{ x: [0, -35, 5, 0], y: [0, -12, 8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-60px] left-[20%] h-64 w-64 rounded-full bg-glowRose/25 blur-[100px]"
        style={{ y: far }}
        animate={{ scale: [0.9, 1.04, 0.95, 0.9] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),transparent_45%)]" />
    </div>
  );
}

export default BackgroundEffects;
