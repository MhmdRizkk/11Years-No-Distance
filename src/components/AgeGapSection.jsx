import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import CinematicText from './CinematicText';
import { photos } from '../data/photos';

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
        <div className="grid gap-6 md:grid-cols-[1.15fr,0.85fr] md:items-end">
          <div>
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
          <motion.figure
            className="relative overflow-hidden rounded-2xl border border-white/15"
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <img src={photos[2].src} alt={photos[2].alt} className="h-52 w-full object-cover md:h-64" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <figcaption className="absolute bottom-0 p-3 text-xs text-slate-100/90 md:text-sm">{photos[2].caption}</figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}

export default AgeGapSection;
