import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stages = [
  {
    label: 'School',
    text: 'You were already working hard while still making sure I had what I needed.'
  },
  {
    label: 'University',
    text: 'You kept pushing me forward, even when I resisted every piece of advice.'
  },
  {
    label: 'First Job',
    text: 'You taught me responsibility, not by words alone, but by example.'
  }
];

function TimelineSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 40%']
  });
  const barHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="section-shell">
      <motion.h2
        className="story-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.8 }}
      >
        The years changed. You never did.
      </motion.h2>

      <div className="relative mt-12 pl-10">
        <div className="absolute left-2 top-0 h-full w-[3px] rounded-full bg-white/15" />
        <motion.div className="absolute left-2 top-0 w-[3px] rounded-full bg-gradient-to-b from-glowPurple via-glowBlue to-glowRose shadow-glow" style={{ height: barHeight }} />

        <div className="space-y-12">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.label}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.72, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm tracking-[0.2em] text-glowBlue">{stage.label.toUpperCase()}</p>
              <p className="mt-3 text-lg text-slate-100">{stage.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
