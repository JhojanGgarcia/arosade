import { Command, GalleryVerticalEnd, X } from "lucide-react";
import Link from "next/link";

const SvgGalleryModal = ({
  show,
  onClose,
  svgList,
  onSelect,
  selectedSvg,
  colorSelection = "#787878",
}) => {
  if (!show) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm dark:bg-white/50"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 z-50 max-h-[80vh] w-11/12 max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md dark:border-black/10">
        <div className="flex items-center justify-between border-b border-dashed border-white/10 p-4 dark:border-black/10">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <GalleryVerticalEnd className="h-5 w-5" />
            Gallery.
          </h2>

          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 rounded-lg border border-white/10 px-2 py-1 text-xs font-light active:bg-white/10 dark:border-black/10"
            onClick={onClose}
          >
            <div className="flex cursor-pointer items-center rounded-sm border border-white/10 px-2 py-1 text-[10px] font-light dark:border-black/10">
              <Command className="h-3 w-3" />
              Esc
            </div>
            <X className="h-4 w-4" />
            Close
          </button>
        </div>
        <p className="mx-5 my-2 text-xs dark:text-black">
          All rights of the icons for{" "}
          <Link
            href="https://www.figma.com/@nathancovert"
            className="cursor-pointer hover:underline"
          >
            @NathanCovert
          </Link>
        </p>
        <div
          className="overflow-y-auto p-4"
          style={{ maxHeight: "calc(80vh - 130px)" }}
        >
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {svgList.map((svg, index) => (
              <div
                key={index}
                onClick={() => onSelect(svg)}
                className={`relative flex aspect-square cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/5 p-2 transition-all duration-300 hover:scale-105 dark:border-white ${
                  selectedSvg.name === svg.name
                    ? "bg-white/5 dark:bg-black/5"
                    : "border-white/10 bg-white/5 hover:border-white/30 dark:hover:border-black/30"
                }`}
              >
                <div className="relative flex h-full w-full items-center justify-center">
                  {svg.Svg && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg.Svg
                        color={colorSelection || "#787878"}
                        rotation={0}
                        thickness={0}
                        width={30}
                        height={30}
                      />
                    </div>
                  )}
                </div>
                <span className="absolute top-1 left-2 text-[10px] opacity-70">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SvgGalleryModal;
