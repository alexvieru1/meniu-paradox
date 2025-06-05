'use client';

import { motion } from 'framer-motion';

/**
 * Three bouncing “meatballs” — friendly, lightweight, and loops forever.
 * Size and colours can be tweaked with Tailwind classes.
 */
export default function FoodLoader() {
  const meatballs = [0, 1, 2];

  return (
    <div
      className="flex items-center justify-center gap-2 py-4"
      role="status"
      aria-label="Loading"
    >
      {meatballs.map((i) => (
        <motion.div
          /* Each ball */
          key={i}
          className="size-4 rounded-full bg-green-600 shadow-md dark:bg-green-400"
          initial={{ y: 0 }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'loop',
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
