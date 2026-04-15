import { motion } from 'framer-motion';
import { storyPhotos } from '../data/photos';

function PhotoStorySection() {
  return (
    <section className="section-shell">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-black/25 p-6 backdrop-blur-2xl md:p-10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,170,130,0.2),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(120,180,255,0.18),transparent_40%)]" />

        <motion.h2
          className="relative z-10 story-title max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65 }}
        >
          A presence in every chapter.
        </motion.h2>

        <motion.p
          className="relative z-10 mt-5 max-w-2xl text-base text-slate-200/85 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          Every season carried your fingerprint. Some memories are loud, some quiet, but all of them feel like home.
        </motion.p>

        <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2">
          {storyPhotos.map((photo, index) => (
            <motion.figure
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 26, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover md:h-80"
                whileInView={{ scale: [1.04, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.15, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 z-10 !text-white">
                <span className="inline-block rounded-md bg-black/25 px-2 py-1 text-sm font-semibold !text-white backdrop-blur-sm drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:text-base">
                  {photo.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoStorySection;
