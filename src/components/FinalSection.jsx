import { motion } from 'framer-motion';
import CinematicText from './CinematicText';

function FinalSection() {
  return (
    <section className="section-shell pb-32 md:pb-40">
      <motion.div
        className="glass relative overflow-hidden rounded-3xl p-8 text-center md:p-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 animate-glowPulse bg-[radial-gradient(circle_at_center,rgba(154,108,255,0.22),transparent_60%)]" />
        <motion.div className="relative z-10 mx-auto max-w-4xl" animate={{ scale: [1, 1.012, 1] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
          <CinematicText
            text="I might always be the troublemaker... but I will always be your biggest fan."
            className="font-display text-3xl font-bold leading-tight text-white md:text-6xl"
            baseDuration={0.72}
          />
          <p className="mt-10 animate-heartbeat text-lg tracking-[0.18em] text-glowBlue md:text-2xl">HAPPY 32ND BIRTHDAY</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FinalSection;
