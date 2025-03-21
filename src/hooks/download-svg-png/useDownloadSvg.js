import { useCallback } from "react";

const useDownloadSvg = (selectedSvg, options) => {
  return useCallback(() => {
    if (!selectedSvg) return;

    const { name, SvgString } = selectedSvg;
    const svgString = SvgString(options);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const svgUrl = URL.createObjectURL(svgBlob);

    const link = document.createElement("a");
    link.href = svgUrl;
    link.download = `${name}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(svgUrl);
  }, [selectedSvg, options]);
};

export default useDownloadSvg;
