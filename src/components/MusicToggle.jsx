import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const TARGET_VOLUME = 0.4;

function MusicToggle() {
  const [on, setOn] = useState(false);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState('loading');
  const audioRef = useRef(null);
  const fadeRef = useRef(null);
  const statusRef = useRef('loading');
  const onRef = useRef(false);

  const clearFade = () => {
    if (fadeRef.current) {
      cancelAnimationFrame(fadeRef.current);
      fadeRef.current = null;
    }
  };

  const fadeVolume = (from, to, duration, done) => {
    if (!audioRef.current) return;
    clearFade();
    const track = audioRef.current;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      track.volume = from + (to - from) * progress;
      if (progress < 1) {
        fadeRef.current = requestAnimationFrame(step);
        return;
      }
      fadeRef.current = null;
      if (done) done();
    };

    fadeRef.current = requestAnimationFrame(step);
  };

  const startTrack = async (intent = 'manual') => {
    if (!audioRef.current || !ready) return;

    try {
      const track = audioRef.current;
      track.volume = 0;
      await track.play();
      fadeVolume(0, TARGET_VOLUME, 1500);
      setOn(true);
      onRef.current = true;
      setStatus('playing');
      statusRef.current = 'playing';
    } catch (_error) {
      if (intent === 'auto') {
        setStatus('blocked');
        statusRef.current = 'blocked';
      }
    }
  };

  const stopTrack = () => {
    if (!audioRef.current) return;
    const track = audioRef.current;
    fadeVolume(track.volume, 0, 500, () => {
      track.pause();
      setOn(false);
      onRef.current = false;
      setStatus('paused');
      statusRef.current = 'paused';
    });
  };

  useEffect(() => {
    const track = new Audio('/audio/a-thousand-years-piano.mp3');
    track.loop = true;
    track.preload = 'auto';

    const handleCanPlay = () => {
      setReady(true);
      setStatus('paused');
      statusRef.current = 'paused';
      void startTrack('auto');
    };

    const handleError = () => {
      setStatus('error');
      statusRef.current = 'error';
      setReady(false);
    };

    track.addEventListener('canplaythrough', handleCanPlay);
    track.addEventListener('error', handleError);
    audioRef.current = track;

    const firstInteractionPlay = () => {
      if (statusRef.current === 'blocked' && !onRef.current) {
        void startTrack('manual');
      }
    };

    window.addEventListener('pointerdown', firstInteractionPlay, { passive: true });
    window.addEventListener('keydown', firstInteractionPlay);

    return () => {
      clearFade();
      track.pause();
      track.removeEventListener('canplaythrough', handleCanPlay);
      track.removeEventListener('error', handleError);
      window.removeEventListener('pointerdown', firstInteractionPlay);
      window.removeEventListener('keydown', firstInteractionPlay);
      audioRef.current = null;
    };
  }, []);

  const buttonLabel = {
    loading: 'LOADING MUSIC',
    playing: 'PAUSE MUSIC',
    paused: 'PLAY MUSIC',
    blocked: 'TAP TO PLAY',
    error: 'TRACK MISSING'
  }[status];

  return (
    <motion.button
      type="button"
      className="glass fixed right-5 top-5 z-40 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.15em] text-slate-100 md:right-8 md:top-8"
      whileHover={{ scale: 1.04, rotate: -1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (on) {
          stopTrack();
          return;
        }
        void startTrack('manual');
      }}
      aria-label="Toggle music"
    >
      {buttonLabel}
    </motion.button>
  );
}

export default MusicToggle;
