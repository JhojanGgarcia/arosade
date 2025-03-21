import { MoveUpRight } from "lucide-react";
import { useState, useEffect } from "react";

import ColorsControl from "@/components/editor/ColorPicker";
import InputControl from "@/components/form/ControlInput";
import RotationControl from "@/components/editor/RotationControl";
import ThicknessControl from "@/components/editor/ThicknessControl";
import LogoUploader from "@/components/editor/LogoSelector";
import Image from "next/image";

function Sidebar({
  name,
  handleNameChange,
  rotation,
  handleRotationChange,
  thickness,
  handleThicknessChange,
  color,
  handleColorChange,
  onLogoChange,
  children,
  onLogoError,
  onLogoWarning,
}) {
  const [userLogo, setUserLogo] = useState(null);

  const handleLogoUploaded = (logoDataUrl) => {
    setUserLogo(logoDataUrl);
    if (onLogoChange) {
      onLogoChange(logoDataUrl);
    }
  };

  useEffect(() => {
    if (onLogoChange) {
      onLogoChange(userLogo);
    }
  }, [userLogo, onLogoChange]);

  return (
    <aside className="relative flex h-screen w-full flex-col md:max-w-2xs md:min-w-[200px]">
      <div className="absolute top-0 bottom-0 left-0 hidden h-screen w-4 border-x border-x-white bg-[image:repeating-linear-gradient(315deg,_white_0,_white_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed opacity-5 md:block dark:border-black dark:bg-[image:repeating-linear-gradient(315deg,_black_0,_black_1px,_transparent_0,_transparent_50%)]" />

      <div className="absolute right-0 hidden h-screen w-4 border-x border-x-white bg-[image:repeating-linear-gradient(315deg,_white_0,_white_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed opacity-5 md:block dark:border-black dark:bg-[image:repeating-linear-gradient(315deg,_black_0,_black_1px,_transparent_0,_transparent_50%)]" />

      <div className="relative flex flex-1 flex-col overflow-y-auto">
        <div className="flex flex-1 flex-col px-0 pb-6 md:px-4">
          {children}

          <LogoUploader
            onLogoUploaded={handleLogoUploaded}
            onError={onLogoError}
            onWarning={onLogoWarning}
          />

          <InputControl name={name} handleNameChange={handleNameChange} />
          <ColorsControl color={color} handleColorChange={handleColorChange} />
          <RotationControl
            inputValue={rotation}
            handleRotationChange={handleRotationChange}
          />
          <ThicknessControl
            inputValue={thickness}
            handleThicknessChange={handleThicknessChange}
          />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
