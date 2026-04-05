import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export function IntroOverlay() {
  const [stage, setStage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('kenta_intro_seen');
    if (hasSeenIntro) {
      setIsVisible(false);
      return;
    }

    const sequence = [
      { delay: 800, stage: 1 }, // initializing...
      { delay: 2000, stage: 2 }, // loading kenta.exe...
      { delay: 3200, stage: 3 }, // system ready
    ];

    let timeouts: NodeJS.Timeout[] = [];
    sequence.forEach(({ delay, stage }) => {
      const t = setTimeout(() => setStage(stage), delay);
      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    setIsVisible(false);
    sessionStorage.setItem('kenta_intro_seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-color text-text-primary"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--card-bg)_0%,transparent_100%)] opacity-50" />
          
          <div className="relative font-mono text-sm md:text-base tracking-widest flex flex-col items-center space-y-4">
            <div className="h-24 flex flex-col items-center justify-end space-y-2">
              <AnimatePresence mode="wait">
                {stage === 0 && (
                  <motion.span key="0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="animate-pulse">
                    _
                  </motion.span>
                )}
                {stage === 1 && (
                  <motion.span key="1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    [SYS] initializing...
                  </motion.span>
                )}
                {stage === 2 && (
                  <motion.span key="2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    [SYS] loading kenta.exe...
                  </motion.span>
                )}
                {stage === 3 && (
                  <motion.span key="3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-accent-color font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-color animate-pulse" />
                    system ready.
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === 3 ? 1 : 0 }}
              transition={{ delay: 0.5 }}
              onClick={handleEnter}
              disabled={stage !== 3}
              className={cn(
                "mt-8 px-8 py-3 border border-card-border rounded-full",
                "hover:bg-text-primary hover:text-bg-color transition-all duration-500",
                "uppercase tracking-[0.3em] text-xs font-semibold shadow-lg",
                stage !== 3 && "pointer-events-none"
              )}
            >
              Click to Enter
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
