import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useReveal(options = { amount: 0.25, once: true }) {
  const ref = useRef(null);
  const inView = useInView(ref, options);

  return { ref, inView };
}
