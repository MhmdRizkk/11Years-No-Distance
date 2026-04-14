import { motion } from 'framer-motion';
import CinematicText from './CinematicText';

function MotherSection() {
  return (
    <section className="section-shell">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-rose-200/20 bg-gradient-to-br from-rose-300/10 via-orange-100/5 to-amber-200/10 p-8 shadow-rose md:p-14"
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
      </motion.div>
    </section>
  );
}

export default MotherSection;
