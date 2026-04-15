import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const memoryNodes = [
  {
    id: '1',
    label: 'Childhood',
    message: 'You stood between me and every fear I did not know how to name.'
  },
  {
    id: '2',
    label: 'Teen Years',
    message: 'Even when I pushed everyone away, you stayed close.'
  },
  {
    id: '3',
    label: 'Growing Up',
    message: 'You taught me to be responsible without making me feel small.'
  },
  {
    id: '4',
    label: 'Today',
    message: 'Your love still leads me, even when life gets loud.'
  }
];

function MemoryUnlockSection() {
  const [unlocked, setUnlocked] = useState([]);
  const [activeMessage, setActiveMessage] = useState('Tap a memory to unlock a hidden note.');

  const progress = useMemo(() => (unlocked.length / memoryNodes.length) * 100, [unlocked.length]);
  const complete = unlocked.length === memoryNodes.length;

  const unlockMemory = (node) => {
    if (!unlocked.includes(node.id)) {
      setUnlocked((prev) => [...prev, node.id]);
    }
    setActiveMessage(node.message);
  };

  return (
    <section className="section-shell">
      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#0f1727]/80 via-[#10161f]/70 to-[#2b181f]/80 p-7 md:p-12"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(91,152,255,0.2),transparent_45%),radial-gradient(circle_at_82%_78%,rgba(255,139,157,0.18),transparent_40%)]" />
        <div className="relative z-10">
          <h2 className="story-title">Memory Unlock</h2>
          <p className="story-subtitle mt-4">Unlock each chapter to reveal the message waiting at the end.</p>

          <div className="mt-7 h-2 w-full overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#7bb3ff] via-[#f8b3a1] to-[#ff8fba]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {memoryNodes.map((node) => {
              const isOpen = unlocked.includes(node.id);
              return (
                <motion.button
                  key={node.id}
                  type="button"
                  onClick={() => unlockMemory(node)}
                  className={`rounded-2xl border p-5 text-left transition ${
                    isOpen
                      ? 'border-[#ffb5b5]/55 bg-white/15'
                      : 'border-white/20 bg-white/5 hover:border-white/35 hover:bg-white/10'
                  }`}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ y: -4 }}
                >
                  <p className="text-xs tracking-[0.2em] text-slate-200/80">MEMORY {node.id}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{node.label}</p>
                  <p className="mt-3 text-sm text-slate-200/80">{isOpen ? 'Unlocked' : 'Tap to unlock'}</p>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            key={activeMessage}
            className="mt-8 rounded-2xl border border-white/15 bg-black/30 p-6 text-slate-100"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {activeMessage}
          </motion.div>

          {complete ? (
            <motion.div
              className="mt-6 rounded-2xl border border-amber-200/35 bg-amber-200/10 p-6 text-center"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl font-semibold text-amber-50 md:text-2xl">
                You have always been there for me. This is just a small way of saying thank you.
              </p>
            </motion.div>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
}

export default MemoryUnlockSection;
