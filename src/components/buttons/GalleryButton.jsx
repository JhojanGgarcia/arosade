import { Command, MousePointer2 } from "lucide-react";
import React from "react";

const SvgGalleryButton = ({ onClick }) => {
  return (
    <div className="mt-3 mb-4 px-4">
      <h3 className="mb-2 flex items-center gap-2 text-sm font-light">
        <MousePointer2 className="h-3 w-3" />
        Logos
      </h3>
      <button
        onClick={onClick}
        className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-black/5 px-4 py-2 text-sm font-medium shadow-sm transition-colors outline-none hover:bg-black/10 dark:border-white"
      >
        <span className="text-nowrap">Select a Logo</span>
        <div className="flex items-center gap-1 rounded-lg border border-white/10 p-1 text-xs dark:border-black/10">
          <Command className="h-3 w-3" />
          Espace
        </div>
      </button>
    </div>
  );
};

export default SvgGalleryButton;
