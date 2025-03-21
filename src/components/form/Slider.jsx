"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function Slider({
  defaultValue = 0,
  minValue = 0,
  maxValue = 2,
  step = 0.01,
  damping = 20,
  stiffness = 300,
  onChange,
}) {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const range = maxValue - minValue;

  const x = useMotionValue(((defaultValue - minValue) / range) * 100);
  const xSpring = useSpring(x, { damping, stiffness });
  const width = useTransform(xSpring, [0, 100], ["0%", "100%"]);

  const handleChange = useCallback(
    (e) => {
      const newValue = parseFloat(e.target.value);
      x.set(((newValue - minValue) / range) * 100);
    },
    [x, minValue, range],
  );

  useEffect(() => {
    const updateValue = () => {
      const latest = x.get();
      let newValue = (latest / 100) * range + minValue;

      newValue = Math.round(newValue * (1 / step)) / (1 / step);
      newValue = Math.max(minValue, Math.min(newValue, maxValue));

      if (newValue !== currentValue) {
        setCurrentValue(newValue);
        if (onChange) {
          onChange(newValue);
        }
      }
    };

    const unsubscribe = xSpring.on("change", updateValue);
    return () => unsubscribe();
  }, [xSpring, range, minValue, maxValue, currentValue, step, onChange, x]);

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="relative flex h-12 items-center gap-3 rounded-full border border-dashed border-white/10 bg-black/5 pr-6 pl-4 dark:border-black/20">
        <div className="relative flex h-6 w-12 items-center justify-center text-xs font-semibold whitespace-nowrap text-white dark:text-black">
          {currentValue}/{maxValue}
        </div>
        <div className="relative h-1/3 w-full">
          <div className="absolute inset-0 rounded-full bg-neutral-800 dark:bg-neutral-300"></div>
          <motion.div
            className="absolute inset-y-0 left-0 z-10 rounded-l-full bg-white/50 dark:bg-black"
            style={{ width }}
          >
            <motion.div className="absolute top-1/2 right-0 h-5 w-5 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neutral-800 bg-white shadow-md dark:border-neutral-300 dark:bg-black" />
          </motion.div>
          <input
            type="range"
            min={minValue}
            max={maxValue}
            step={step}
            value={currentValue}
            onChange={handleChange}
            className="absolute -inset-x-3 inset-y-0 z-20 w-[calc(100%+1.5rem)] cursor-pointer opacity-0"
          />
        </div>
      </div>
    </div>
  );
}
