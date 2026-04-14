import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function MusicToggle() {
  const [on, setOn] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    const track = new Audio('/audio/a-thousand-years-piano.mp3');
    track.loop = true;
    track.volume = 0.42;
    track.preload = 'auto';

    const handleCanPlay = () => {
      setReady(true);
      setError('');
    };
    const handleError = () => {
      setReady(false);
      setError('Track missing');
    };

    track.addEventListener('canplaythrough', handleCanPlay);
    track.addEventListener('error', handleError);
    audioRef.current = track;

    return () => {
      track.pause();
      track.removeEventListener('canplaythrough', handleCanPlay);
      track.removeEventListener('error', handleError);
      audioRef.current = null;
    };
  }, []);

  const startTrack = async () => {
    if (!audioRef.current || !ready) {
      return;
    }
    try {
      await audioRef.current.play();
      setOn(true);
    } catch (_e) {
      setError('Tap again to allow audio');
    }
  };

  const stopTrack = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setOn(false);
  };

  return (
    <motion.button
      type="button"
      className="glass fixed right-5 top-5 z-40 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.15em] text-slate-100 md:right-8 md:top-8"
      whileHover={{ scale: 1.04, rotate: -1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (!on) {
          void startTrack();
          return;
        }
        stopTrack();
      }}
    >
      {error ? error : on ? 'MUSIC ON' : ready ? 'MUSIC OFF' : 'LOADING MUSIC'}
    </motion.button>
  );
}

export default MusicToggle;
