import { XCircle } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ALERT_TYPES = {
  ERROR: "error",
  WARNING: "warning",
  SUCCESS: "success",
  INFO: "info",
};

const POSITIONS = {
  TOP: "top-0 left-0 right-0",
  BOTTOM: "bottom-0 left-0 right-0",
  TOP_LEFT: "top-0 left-0",
  TOP_RIGHT: "top-0 right-0",
  BOTTOM_LEFT: "bottom-0 left-0",
  BOTTOM_RIGHT: "bottom-0 right-0",
  CENTER: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
};

const Alert = ({
  type = ALERT_TYPES.INFO,
  label,
  description,
  position,
  icon,
  className = "",
  onClose,
  autoClose = 0,
  visible = true,
}) => {
  const [isVisible, setIsVisible] = React.useState(visible);
  const positionClass = POSITIONS[position] || POSITIONS.TOP;

  React.useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  React.useEffect(() => {
    let timer;
    if (autoClose > 0 && isVisible) {
      timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, autoClose);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [autoClose, isVisible, onClose]);

  const variants = {
    initial: {
      opacity: 0,
      y: -50,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      scale: 0.8,
      transition: {
        type: "tween",
        duration: 3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed z-50 m-4 ${positionClass} ${className}`}
          role="alert"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="flex items-center rounded-xl border border-white/10 p-3 shadow-md backdrop-blur-2xl dark:border-black/10">
            <div className="relative mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-1 dark:border-black/10">
              {icon}
            </div>
            <div className="relative flex-1">
              {label && <h3 className={`text-sm font-medium`}>{label}</h3>}

              {description && (
                <p className={`mt-1 text-xs opacity-80`}>{description}</p>
              )}
            </div>
            {onClose && (
              <button
                type="button"
                className={`-mx-2 -my-1.5 ml-2 rounded-lg p-1.5 hover:bg-white/10 dark:hover:bg-black/10`}
                onClick={() => {
                  setIsVisible(false);
                  onClose();
                }}
              >
                <XCircle className="h-4 w-4" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Alert, ALERT_TYPES, POSITIONS };
export default Alert;
