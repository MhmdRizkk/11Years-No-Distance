import { motion } from 'framer-motion';

function PersonalitySection() {
  return (
    <section className="section-shell">
      <motion.div
        className="glass rounded-3xl p-8 text-center md:p-14"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65 }}
      >
        <motion.h2 className="story-title text-3xl md:text-5xl" whileHover={{ x: [0, -2, 2, -1, 0] }} transition={{ duration: 0.35 }}>
          You were mean sometimes... (okay, a lot).
        </motion.h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200/85">
          But every strict word had love behind it. You corrected me because you believed I could be better.
        </p>
      </motion.div>
    </section>
  );
}

export default PersonalitySection;
