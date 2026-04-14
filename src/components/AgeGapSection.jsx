import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import CinematicText from './CinematicText';

function AgeGapSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const width = useTransform(scrollYProgress, [0, 1], ['5%', '100%']);

  return (
    <section ref={sectionRef} className="section-shell">
      <div className="glass rounded-3xl p-8 md:p-12">
        <motion.p
          className="text-sm tracking-[0.22em] text-glowBlue"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          11 YEARS APART
        </motion.p>

        <CinematicText
          text="Yet somehow... never distant."
          className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-5xl"
          baseDuration={0.38}
        />

        <div className="mt-10 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-glowPurple via-glowBlue to-glowRose shadow-glow" style={{ width }} />
        </div>
      </div>
    </section>
  );
}

export default AgeGapSection;
