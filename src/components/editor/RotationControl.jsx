import { useState } from "react";
import { RotateCw } from "lucide-react";
import Slider from "@/components/form/Slider";

export default function RotationControl({ inputValue, handleRotationChange }) {
  const [rotation, setRotation] = useState(inputValue || 0);

  const handleSliderChange = (newValue) => {
    setRotation(newValue); // Actualiza el estado localmente
    handleRotationChange(newValue); // Llama al callback pasado desde el padre
  };

  return (
    <div className="flex flex-col border-t border-white/5 p-4 dark:border-black/10">
      <span className="mb-2 flex items-center gap-2 text-sm font-light">
        <RotateCw className="h-3 w-3" />
        Rotation
      </span>
      <Slider
        defaultValue={rotation}
        maxValue={360}
        minValue={0}
        step={1}
        onChange={handleSliderChange}
      />
    </div>
  );
}
