import { useEffect } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';

export default function BlinkingLight() {
  const [isVisible, cycleIsVisible] = useCycle(true, false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      cycleIsVisible();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [cycleIsVisible]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.5 }}
        transition={{ duration: 1 }}
        style={{
          width: '13px',
          height: '13px',
          borderRadius: '50%',
          backgroundColor: 'red',
        }}
      />
    </AnimatePresence>
  );
}