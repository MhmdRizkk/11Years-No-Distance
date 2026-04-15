import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { slideshowPhotos } from '../data/photos';

const AUTO_DELAY = 6200;

function HerMomentsSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const current = useMemo(() => slideshowPhotos[index], [index]);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % slideshowPhotos.length);
    }, AUTO_DELAY);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = (nextIndex) => {
    const safeIndex = (nextIndex + slideshowPhotos.length) % slideshowPhotos.length;
    setDirection(safeIndex > index ? 1 : -1);
    setIndex(safeIndex);
  };

  return (
    <section className="section-shell">
      <motion.div
        className="relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/[0.04] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,191,148,0.22),transparent_45%),radial-gradient(circle_at_90%_80%,rgba(97,148,255,0.22),transparent_45%)]" />
        <div className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="story-title">Her Moments</h2>
            <p className="story-subtitle mt-4">Moments that shaped everything.</p>
          </div>

          <div
            className="relative mx-auto mt-8 w-full max-w-4xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-white/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/20 bg-black/45">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.figure
                  key={current.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 35 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 35 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {current.fit === 'contain' ? (
                    <img
                      src={current.src}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl brightness-50"
                    />
                  ) : null}
                  <img
                    src={current.src}
                    alt={current.alt}
                    className={`w-full ${
                      current.fit === 'contain'
                        ? 'h-[80vw] max-h-[900px] min-h-[430px] bg-black/30 object-contain px-3 pt-3 md:min-h-[560px] md:px-4 md:pt-4'
                        : 'h-[60vw] max-h-[620px] min-h-[280px] object-cover'
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={`absolute inset-0 ${current.fit === 'contain' ? 'bg-gradient-to-t from-black/35 via-transparent to-transparent' : 'bg-gradient-to-t from-black/70 via-black/10 to-transparent'}`} />
                  <figcaption
                    className={`left-0 right-0 text-center text-sm text-slate-100/95 md:text-lg ${
                      current.fit === 'contain'
                        ? 'relative border-t border-white/10 bg-black/60 p-4 md:p-6'
                        : 'absolute bottom-0 p-5 md:p-8'
                    }`}
                  >
                    {current.caption}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/35 bg-black/50 px-3 py-2 text-white transition hover:bg-black/70"
              onClick={() => goTo(index - 1)}
              aria-label="Previous photo"
            >
              {'<'}
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/35 bg-black/50 px-3 py-2 text-white transition hover:bg-black/70"
              onClick={() => goTo(index + 1)}
              aria-label="Next photo"
            >
              {'>'}
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {slideshowPhotos.map((photo, dotIndex) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => goTo(dotIndex)}
                className={`h-2.5 rounded-full transition-all ${dotIndex === index ? 'w-8 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/70'}`}
                aria-label={`Show slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HerMomentsSection;
