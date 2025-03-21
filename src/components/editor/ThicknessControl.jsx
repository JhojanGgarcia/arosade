import { Sparkles } from "lucide-react";
import Slider from "@/components/form/Slider";

export default function ThicknessControl({
  inputValue,
  handleThicknessChange,
}) {
  return (
    <div className="flex flex-col border-t border-white/5 p-4 dark:border-black/10">
      <span className="mb-2 flex items-center gap-2 text-sm font-light">
        {" "}
        <Sparkles className="h-3 w-3" />
        Thickness
      </span>
      <Slider
        maxValue={2}
        minValue={0}
        step={0.01}
        defaultValue={inputValue}
        onChange={handleThicknessChange}
      />
    </div>
  );
}
