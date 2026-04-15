import { motion } from 'framer-motion';
import CinematicText from './CinematicText';

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.11),transparent_58%)]" />
      <motion.div
        className="pointer-events-none absolute left-[28%] top-[42%] h-[42vh] w-[42vh] rounded-full bg-[rgba(255,188,150,0.18)] blur-[110px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 0.72, 0.55], x: [0, 16, -8, 0], y: [0, -12, 6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute right-[20%] top-[34%] h-[46vh] w-[46vh] rounded-full bg-[rgba(112,165,255,0.2)] blur-[120px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.45, 0.7, 0.5], x: [0, -18, 8, 0], y: [0, 10, -6, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl py-12 text-center md:py-16"
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <CinematicText
          text="To the one who was never just my sister"
          className="font-display text-4xl font-bold leading-tight text-white md:text-7xl"
        />
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-200/90 md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25 }}
        >
          You were everything.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.22em] text-slate-300/80"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        SCROLL
      </motion.div>
    </section>
  );
}

export default HeroSection;
