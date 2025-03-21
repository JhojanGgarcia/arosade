"use client";

import React, { useRef, useState } from "react";
import { X, Coffee, Zap, Gift, Info } from "lucide-react";
import useClickOutside from "@/hooks/useClickOutside";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const modalVariants = {
  hidden: {
    y: "100vh",
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function ContributionModal({ onClose, onContribute, itemName, onContinueWithoutPaying }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const ref = useRef(null);

  const contributionOptions = [
    {
      id: "small",
      icon: <Coffee className="h-5 w-5" />,
      name: "Small Coffee",
      amount: "2.99",
      description: "A coffee to keep me awake while developing",
    },
    {
      id: "medium",
      icon: <Zap className="h-5 w-5" />,
      name: "Boost",
      amount: "4.99",
      description: "Help for the development of new features",
      recommended: true,
    },
    {
      id: "large",
      icon: <Gift className="h-5 w-5" />,
      name: "Sponsor",
      amount: "9.99",
      description:
        "Significantly support the project and get early access to new features",
    },
  ];

  const handleContribute = () => {
    if (!selectedOption) return;
  
    const buyMeACoffeeUrl = "https://www.buymeacoffee.com/jhojanggar6";
  
    // Abre en una nueva pestaña
    window.open(buyMeACoffeeUrl, "_blank");
  
    // Si quieres cerrar el modal después
    onClose();
  };
  const handleContinueWithoutPaying = () => {
    if (onContinueWithoutPaying) {
      onContinueWithoutPaying();
    }
    
    onClose();
  };

  useClickOutside(ref, onClose);

  return (
    <AnimatePresence>
      {true && (
        <motion.div
          className="fixed px-1 inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            ref={ref}
            className="relative w-full  max-w-md rounded-xl border border-white/10 bg-[#0A0A0A] p-6 shadow-2xl dark:border-black/10 dark:bg-white"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4  rounded-xl p-1 text-white dark:text-black transition-colors hover:bg-gray-100/10 hover:text-white/70 dark:hover:bg-black/10 dark:hover:text-black/90"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 py-2 md:py-0 text-center">
              <h3 className="text-xl font-semibold">Support Arosade Development</h3>
              <p className="mt-2 text-sm text-white/60 dark:text-black/60">
                Your contribution helps maintain and improve this tool.
                Unlock unlimited downloads of {itemName} with a small contribution.
              </p>
            </div>

            <div className="space-y-3">
              {contributionOptions.map((option) => (
                <div
                  key={option.id}
                  className={`relative outline-none cursor-pointer rounded-2xl border ${
                    selectedOption === option.id
                      ? "border-white/50 dark:border-black"
                      : "border-white/10 dark:border-black/10"
                  } p-4 transition-all  hover:border-white/30 dark:hover:border-black/30`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <div className="flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 dark:bg-black/5">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium hidden md:flex">
                        {option.name}
                        {option.recommended && (
                          <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium dark:bg-black/10">
                            Recommended
                          </span>
                        )}
                      </h4>
                      <p className="text-xs text-white/70 dark:text-black/60">
                        {option.description}
                      </p>
                    </div>
                    <div className="ml-2 text-lg font-bold">${option.amount}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleContribute}
              disabled={!selectedOption || isProcessing}
              className={`mt-6 w-full rounded-lg bg-white py-3 text-center font-medium text-black transition-all ${
                !selectedOption || isProcessing
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-white/90"
              } dark:bg-black dark:text-white dark:hover:bg-black/90`}
            >
              {isProcessing
                ? "Processing..."
                : selectedOption
                  ? `Thank you for trying to help me.`
                  : "Select an option"}
            </button>

            <div className="mt-4">
              <p className="text-center text-xs text-gray-400 dark:text-gray-600">
                You can also{" "}
                <button 
                  onClick={handleContinueWithoutPaying} 
                  className="underline"
                >
                  continue without contributing
                </button>
              </p>
              
              <div className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2 text-xs text-gray-300 dark:border-black/10 dark:bg-black/5 dark:text-gray-600">
                <Info className="h-4 w-4" />
                <span>Contributing will support future development.</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}