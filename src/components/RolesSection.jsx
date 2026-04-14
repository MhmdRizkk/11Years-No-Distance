import { motion } from 'framer-motion';

const roles = [
  { title: 'Sister', description: 'The first home I ever had.' },
  { title: 'Mother', description: 'The care I needed before I knew how to ask.' },
  { title: 'Father Figure', description: 'The discipline that protected my future.' },
  { title: 'Best Friend', description: 'The one who still stayed.' }
];

function RolesSection() {
  return (
    <section className="section-shell">
      <motion.h2
        className="story-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        You carried every role life threw at you.
      </motion.h2>

      <motion.div
        className="mt-12 grid gap-5 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.14 } }
        }}
      >
        {roles.map((role) => (
          <motion.div
            key={role.title}
            className="glass rounded-2xl p-7"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
            }}
            whileHover={{ scale: 1.03, rotate: -0.7 }}
          >
            <p className="font-display text-2xl font-semibold text-white">{role.title}</p>
            <p className="mt-3 text-slate-200/85">{role.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default RolesSection;
