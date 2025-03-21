import { useCallback } from "react";

const useDownloadPng = (selectedSvg, options, filename) => {
  return useCallback(() => {
    if (!selectedSvg) return;

    const { SvgString } = selectedSvg;
    const svgString = SvgString(options);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = options.width * 10;
    canvas.height = options.height * 10;

    const img = new Image();
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const svgUrl = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        const pngUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = pngUrl;
        link.download = `${filename || "image"}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(pngUrl);
        URL.revokeObjectURL(svgUrl);
      }, "image/png");
    };

    img.src = svgUrl;
  }, [selectedSvg, options, filename]);
};

export default useDownloadPng;
