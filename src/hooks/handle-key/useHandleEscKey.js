"use client";

import { useEffect } from "react";

export default function useHandleEscKey(isOpen, onClose) {
  useEffect(() => {
    function handleEscKey(event) {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);
}
