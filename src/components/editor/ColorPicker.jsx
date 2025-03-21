import { motion } from "framer-motion";
import { ColorsBox } from "@/utils/ColorsBox";
import { Paintbrush, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function ColorsControl({ color, handleColorChange }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleColorOptionClick = (color) => {
    handleColorChange({ target: { value: color } });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="colors-control flex flex-col gap-5 border-t border-white/5 p-4 dark:border-black/10">
      <p className="flex items-center gap-2 text-sm font-light">
        <Paintbrush className="h-3 w-3" />
        Choose a Color
      </p>
      <label className="switch-color flex cursor-pointer items-center justify-center gap-6 rounded-xl border border-white/5 bg-[radial-gradient(circle_at_top,rgba(250,250,250,0.05)_0%,transparent_60%)] p-1 dark:border-black/10">
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          style={{ background: color }}
          className="color-picker"
        />
        <motion.span
          key={color}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {color}
        </motion.span>
      </label>

      <button
        onClick={toggleExpand}
        className="flex items-center justify-between rounded-md px-2 py-1 text-sm transition-colors hover:bg-white/5 dark:hover:bg-black/5"
      >
        <span className="flex items-center gap-2 text-xs">Solid Colors</span>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          marginTop: isExpanded ? "0.5rem" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="color-palette flex flex-wrap items-center justify-center gap-2">
          {ColorsBox.map((colorOption, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: isExpanded ? index * 0.01 : 0,
                ease: "easeOut",
              }}
              className="color-option h-5 w-5 cursor-pointer rounded-full"
              style={{ backgroundColor: colorOption }}
              onClick={() => handleColorOptionClick(colorOption)}
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
