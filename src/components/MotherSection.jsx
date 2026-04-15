import { motion } from 'framer-motion';
import CinematicText from './CinematicText';
import { photos } from '../data/photos';

function MotherSection() {
  return (
    <section className="section-shell">
      <motion.div
        className="relative min-h-[500px] overflow-hidden rounded-3xl border border-rose-200/20 bg-gradient-to-br from-rose-300/10 via-orange-100/5 to-amber-200/10 px-8 py-12 shadow-rose md:min-h-[600px] md:px-14 md:py-16"
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.1 }}
      >
        <div className="absolute -right-14 -top-10 h-48 w-48 rounded-full bg-glowRose/30 blur-[90px]" />
        <p className="text-sm tracking-[0.2em] text-rose-200/90">THEA</p>
        <CinematicText
          text="And now... you are giving that same love to someone else."
          className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-5xl"
          baseDuration={0.52}
        />
        <p className="mt-7 max-w-3xl text-lg text-rose-50/90">
          Watching you become a mother made everything clearer. The love that raised me is now shaping her world.
        </p>
        <motion.figure
          className="mt-10 overflow-hidden rounded-2xl border border-white/20"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <div className="min-h-[320px] md:min-h-[420px]">
            <img src={photos[11].src} alt={photos[11].alt} className="h-full w-full object-cover object-center" loading="lazy" decoding="async" />
          </div>
          <figcaption className="bg-black/40 px-4 py-3 text-sm text-rose-50/90">{photos[11].caption}</figcaption>
        </motion.figure>
      </motion.div>
    </section>
  );
}

export default MotherSection;
