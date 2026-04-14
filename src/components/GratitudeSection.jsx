import { motion } from 'framer-motion';
import CinematicText from './CinematicText';
import { useReveal } from '../hooks/useReveal';

function GratitudeSection() {
  const { ref, inView } = useReveal({ amount: 0.45, once: true });

  return (
    <section ref={ref} className="section-shell">
      <motion.div
        className="mx-auto max-w-4xl py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.6 }}
      >
        <CinematicText
          text="Thank you for raising me, guiding me, and never giving up on me."
          className="font-display text-3xl font-semibold leading-tight text-white md:text-6xl"
          wordClassName="text-white drop-shadow-[0_0_15px_rgba(180,142,255,0.6)]"
          baseDuration={0.66}
        />
      </motion.div>
    </section>
  );
}

export default GratitudeSection;
