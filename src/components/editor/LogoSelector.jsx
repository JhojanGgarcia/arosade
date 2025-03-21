import { useState, useCallback } from "react";
import { Frame, Trash } from "lucide-react";
import Image from "next/image";

function LogoUploader({ onLogoUploaded, onError, onWarning }) {
  const [isDragging, setIsDragging] = useState(false);
  const [logo, setLogo] = useState(null);
  const [fileName, setFileName] = useState("");

  const processFile = useCallback(
    (file) => {
      if (onError) onError(null);
      if (onWarning) onWarning(null);

      if (!file) return;

      if (!file.type.match(".svg")) {
        if (onError) {
          onError({
            label: "Format not allowed",
            description: "Please upload only SVG files.",
          });
        }
        return;
      }

      if (file.type !== "image/svg+xml") {
        if (onWarning) {
          onWarning({
            label: "Recommended format: SVG",
            description:
              "For best results, we recommend using SVG vector images.",
          });
        }
      }

      if (file.size > 2 * 1024 * 1024) {
        if (onError) {
          onError({
            label: "File too large",
            description:
              "The file exceeds the 2MB limit. Please optimize your image.",
          });
        }
        return;
      }

      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
        if (onLogoUploaded) {
          onLogoUploaded(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    },
    [onLogoUploaded, onError, onWarning],
  );

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isDragging) {
        setIsDragging(true);
      }
    },
    [isDragging],
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      processFile(file);
    },
    [processFile],
  );

  const handleFileChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      processFile(file);
    },
    [processFile],
  );

  const removeLogo = useCallback(() => {
    setLogo(null);
    setFileName("");
    if (onError) onError(null);
    if (onWarning) onWarning(null);
    if (onLogoUploaded) {
      onLogoUploaded(null);
    }
  }, [onLogoUploaded, onError, onWarning]);

  return (
    <div className="mt-2 border-t border-b border-white/10 px-4 py-2 dark:border-black/10">
      <div className="mb-4 flex items-center gap-1 text-xs font-light text-nowrap">
        <Frame className="h-3 w-3" />
        Custom logo
      </div>

      {logo ? (
        <div className="flex items-center rounded-lg border border-white/10 bg-[#0A0A0A] px-3 py-2 dark:border-black/10 dark:bg-white/50">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black/20 p-1 dark:bg-white/20">
            <Image
              priority
              width={28}
              height={28}
              src={logo}
              alt="user-logo"
              className="object-contain"
            />
          </div>

          <div className="ml-3 flex flex-1 items-center justify-between">
            <span
              className="max-w-[180px] truncate text-xs text-white/70 dark:text-black/70"
              title={fileName}
            >
              {fileName}
            </span>

            <button
              onClick={removeLogo}
              className="flex cursor-pointer items-center gap-1 rounded-md border border-white/20 bg-black/30 p-1 text-xs transition-colors hover:bg-red-900/20 dark:border-black/10 dark:bg-white/20 dark:hover:bg-red-100/30"
              title="Remove logo"
            >
              <Trash className="h-3 w-3" />
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`flex h-18 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors ${
            isDragging
              ? "bg-white/10 dark:bg-black/10"
              : "border-white/20 hover:border-white/30 dark:border-black/20 dark:hover:border-gray-600"
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center">
            <div className="text-center text-xs dark:text-black">
              Drag and drop your logo here or
              <label className="ml-1 cursor-pointer text-white/50 hover:text-white/80 hover:underline dark:text-black/50 hover:dark:text-black/70">
                select a file
                <input
                  type="file"
                  className="hidden"
                  accept=".svg"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <p className="mt-1 text-center text-[10px] text-white/80 dark:text-black/30">
              Format: SVG. Maximum 2MB.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogoUploader;
