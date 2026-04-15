import { motion } from 'framer-motion';
import AgeGapSection from './components/AgeGapSection';
import BackgroundEffects from './components/BackgroundEffects';
import ContrastSection from './components/ContrastSection';
import FinalSection from './components/FinalSection';
import GratitudeSection from './components/GratitudeSection';
import HeroSection from './components/HeroSection';
import HerMomentsSection from './components/HerMomentsSection';
import MemoryUnlockSection from './components/MemoryUnlockSection';
import MotherSection from './components/MotherSection';
import MusicToggle from './components/MusicToggle';
import PersonalitySection from './components/PersonalitySection';
import PhotoStorySection from './components/PhotoStorySection';
import RolesSection from './components/RolesSection';
import TimelineSection from './components/TimelineSection';

const sectionFade = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }
};

function App() {
  return (
    <div className="relative min-h-screen bg-base font-body text-white">
      <BackgroundEffects />
      <MusicToggle />

      <main className="relative z-10">
        <HeroSection />

        <motion.div {...sectionFade} transition={{ duration: 0.55 }}>
          <AgeGapSection />
        </motion.div>
        <motion.div {...sectionFade} transition={{ duration: 0.5 }}>
          <ContrastSection />
        </motion.div>
        <motion.div {...sectionFade} transition={{ duration: 0.6 }}>
          <PhotoStorySection />
        </motion.div>
        <motion.div {...sectionFade} transition={{ duration: 0.62 }}>
          <RolesSection />
        </motion.div>
        <motion.div {...sectionFade} transition={{ duration: 0.75 }}>
          <TimelineSection />
        </motion.div>
        <motion.div {...sectionFade} transition={{ duration: 0.78 }}>
          <MemoryUnlockSection />
        </motion.div>
        <motion.div {...sectionFade} transition={{ duration: 0.85 }}>
          <PersonalitySection />
        </motion.div>
        <motion.div {...sectionFade} transition={{ duration: 1 }}>
          <MotherSection />
        </motion.div>
        <motion.div {...sectionFade} transition={{ duration: 1.1 }}>
          <HerMomentsSection />
        </motion.div>
        <motion.div {...sectionFade} transition={{ duration: 1.3 }}>
          <GratitudeSection />
        </motion.div>
        <motion.div {...sectionFade} transition={{ duration: 1.5 }}>
          <FinalSection />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
