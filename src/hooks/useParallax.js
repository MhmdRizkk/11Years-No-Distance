import { useTransform } from 'framer-motion';

export function useParallax(progress, distance = 120) {
  return useTransform(progress, [0, 1], [-distance, distance]);
}
