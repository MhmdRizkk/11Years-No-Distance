import { motion } from 'framer-motion';
import { photos } from '../data/photos';

function ContrastSection() {
  return (
    <section className="section-shell">
      <motion.h2
        className="story-title text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.6 }}
      >
        I was chaos. You were structure.
      </motion.h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <motion.div
          className="glass relative overflow-hidden rounded-3xl border-glowRose/30 p-8"
          initial={{ opacity: 0, x: -32, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          whileHover={{ rotate: -1.5, scale: 1.015 }}
          animate={{ y: [0, -4, 0, 3, 0] }}
        >
          <img src={photos[7].src} alt={photos[7].alt} className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10">
          <p className="text-sm tracking-[0.2em] text-glowRose">ME</p>
          <p className="mt-4 text-2xl font-semibold text-white md:text-3xl">Unfiltered. Impulsive. Loud.</p>
          <p className="mt-5 text-slate-200/85">
            I tested every limit, broke every plan, and turned calm days into storms.
          </p>
          </div>
        </motion.div>

        <motion.div
          className="glass relative overflow-hidden rounded-3xl border-glowBlue/30 p-8"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.015 }}
        >
          <img src={photos[1].src} alt={photos[1].alt} className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10">
          <p className="text-sm tracking-[0.2em] text-glowBlue">YOU</p>
          <p className="mt-4 text-2xl font-semibold text-white md:text-3xl">Steady. Fierce. Present.</p>
          <p className="mt-5 text-slate-200/85">
            You held the line with love, and somehow turned all that chaos into direction.
          </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContrastSection;
