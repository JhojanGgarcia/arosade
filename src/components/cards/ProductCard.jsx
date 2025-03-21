"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import JSZip from "jszip";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import { Download, AlertCircle } from "lucide-react";
import "@/styles/mask.css";
import ContributionModal from "@/components/modals/ContributionModal";
import Image from "next/image";

export default function MockupsCard({
  colorSelection,
  rotationSelection,
  thicknessSelection,
  name,
  selectedSvg,
  userLogo,
}) {
  const cardRefs = useRef([]);
  const [showContributionModal, setShowContributionModal] = useState(false);
  const [pendingDownloadIndex, setPendingDownloadIndex] = useState(null);
  const [pendingAction, setPendingAction] = useState(null);
  const [hasContributed, setHasContributed] = useState(false);
  const [remainingDownloads, setRemainingDownloads] = useState(2);
  const [showLimitToast, setShowLimitToast] = useState(false);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, 6);

    const userContributed = localStorage.getItem("arosContributed");
    if (userContributed === "true") {
      setHasContributed(true);
    }
    const downloads = localStorage.getItem("arosRemainingDownloads");
    if (downloads !== null) {
      setRemainingDownloads(parseInt(downloads));
    } else {
      localStorage.setItem("arosRemainingDownloads", "2");
    }
  }, []);

  const selectedSvgVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const gradientStyle = {
    backgroundImage: `radial-gradient(circle at bottom, ${colorSelection} -1000%, transparent 90%)`,
  };

  const doubleGradientStyle = {
    backgroundImage: `radial-gradient(circle at bottom right, ${colorSelection} -1000%, transparent 50%), 
                      radial-gradient(circle at top left, ${colorSelection} -1000%, transparent 60%)`,
  };

  const updateRemainingDownloads = () => {
    const newCount = remainingDownloads - 1;
    localStorage.setItem("arosRemainingDownloads", newCount.toString());
    setRemainingDownloads(newCount);
  };

  const handleContributionSuccess = () => {
    setHasContributed(true);
    localStorage.setItem("arosContributed", "true");
    setShowContributionModal(false);

    if (pendingAction === "downloadCard" && pendingDownloadIndex !== null) {
      executeDownloadCard(pendingDownloadIndex);
    } else if (pendingAction === "downloadAllCards") {
      executeDownloadAllCards();
    }

    setPendingAction(null);
    setPendingDownloadIndex(null);
  };

  const handleContinueWithoutPaying = () => {
    if (pendingAction === "downloadCard" && pendingDownloadIndex !== null) {
      executeDownloadCard(pendingDownloadIndex);
      updateRemainingDownloads();
    } else if (pendingAction === "downloadAllCards") {
      executeDownloadAllCards();
      updateRemainingDownloads();
    }

    // Clear pending state
    setPendingAction(null);
    setPendingDownloadIndex(null);
  };

  const executeDownloadCard = async (index) => {
    try {
      const element = cardRefs.current[index];
      if (!element) {
        console.error("Element not found");
        return;
      }

      const dataUrl = await toPng(element, {
        cacheBust: true,
        quality: 0.95,
        pixelRatio: 2,
        skipAutoScale: true,
        style: {
          borderRadius: "0.75rem",
        },
      });

      const link = document.createElement("a");
      link.download = `${name || "card"}-${index + 1}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error downloading image:", error);
      alert("Could not download image. Error: " + error.message);
    }
  };

  const downloadCardAsImage = (index) => {
    if (hasContributed) {
      executeDownloadCard(index);
    } else if (remainingDownloads > 0) {
      setPendingDownloadIndex(index);
      setPendingAction("downloadCard");
      setShowContributionModal(true);
    } else {
      setPendingDownloadIndex(index);
      setPendingAction("downloadCard");
      setShowContributionModal(true);

      // Show toast notification
      setShowLimitToast(true);
      setTimeout(() => setShowLimitToast(false), 5000);
    }
  };

  const executeDownloadAllCards = useCallback(async () => {
    try {
      const zip = new JSZip();
      const folder = zip.folder(`${name || "mockups"}-cards`);
      const promises = cardRefs.current.map(async (element, index) => {
        if (!element) return null;

        const dataUrl = await toPng(element, {
          cacheBust: true,
          quality: 0.95,
          pixelRatio: 2,
          skipAutoScale: true,
          style: {
            borderRadius: "0.75rem",
          },
        });

        const response = await fetch(dataUrl);
        const blob = await response.blob();

        folder.file(`${name || "card"}-${index + 1}.png`, blob);
        return true;
      });

      await Promise.all(promises);

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, `${name || "mockups"}-cards.zip`);
    } catch (error) {
      console.error("Error creating ZIP file:", error);
      alert("Unable to download images. Error: " + error.message);
    }
  }, [name]);

  useEffect(() => {
    window.downloadAllMockups = () => {
      if (hasContributed) {
        executeDownloadAllCards();
      } else if (remainingDownloads > 0) {
        setPendingAction("downloadAllCards");
        setShowContributionModal(true);
      } else {
        setPendingAction("downloadAllCards");
        setShowContributionModal(true);

        // Show toast notification
        setShowLimitToast(true);
        setTimeout(() => setShowLimitToast(false), 5000);
      }
    };
  }, [name, hasContributed, remainingDownloads, executeDownloadAllCards]);

  const renderSvgOrLogo = (width, height) => {
    if (userLogo) {
      return (
        <Image
          src={userLogo}
          width={width}
          height={height}
          alt="Custom logo"
          style={{
            objectFit: "contain",
            transform: `rotate(${rotationSelection}deg)`,
          }}
        />
      );
    } else if (selectedSvg && selectedSvg.Svg) {
      return (
        <selectedSvg.Svg
          color={colorSelection}
          rotation={rotationSelection}
          thickness={thicknessSelection}
          width={width}
          height={height}
        />
      );
    }
    return null;
  };

  return (
    <>
      <div className="relative m-auto grid w-full max-w-5xl min-w-full grid-cols-1 gap-4 py-6 lg:min-w-[900px] lg:grid-cols-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="group relative">
            <div
              ref={(el) => (cardRefs.current[i] = el)}
              className={`relative flex min-h-[250px] min-w-[250px] flex-col items-center justify-center overflow-hidden rounded-xl border border-white/5 dark:border-black/10 ${
                i === 0
                  ? "col-span-1"
                  : "" || i === 1
                    ? "col-span-1"
                    : "" || i === 1
                      ? "row-span-2"
                      : "" || i === 3
                        ? ""
                        : ""
              }`}
            >
              {i === 0 && (
                <div className="absolute flex h-full w-full items-center justify-center bg-[#0A0A0A] dark:bg-white">
                  <svg
                    className="absolute -top-1 -left-32 opacity-30 blur-3xl"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <linearGradient
                        id={`sw-gradient-${i}`}
                        x1="0"
                        x2="1"
                        y1="1"
                        y2="0"
                      >
                        <stop
                          id="stop1"
                          stopColor={colorSelection}
                          offset="0%"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill={`url(#sw-gradient-${i})`}
                      d="M1.1,-6.3C1.7,-1.7,2.5,-1.8,2.7,-1.5C3,-1.3,2.7,-0.6,5.9,1.9C9.2,4.4,16,8.8,16.3,10C16.7,11.3,10.5,9.5,6.7,14.9C2.9,20.4,1.5,33.1,0.2,32.7C-1,32.3,-2,18.8,-6.9,13.9C-11.8,9.1,-20.7,13.1,-24.5,12.2C-28.3,11.4,-27,5.7,-22.4,2.7C-17.7,-0.3,-9.6,-0.6,-5.7,-1.2C-1.7,-1.8,-1.9,-2.7,-1.7,-7.5C-1.4,-12.3,-0.7,-20.9,-0.2,-20.5C0.3,-20.2,0.6,-10.9,1.1,-6.3Z"
                      width="100%"
                      height="100%"
                      transform="translate(50 50)"
                      strokeWidth="0"
                      stroke={`url(#sw-gradient-${i})`}
                    ></path>
                  </svg>
                  <motion.div
                    variants={selectedSvgVariants}
                    initial="hidden"
                    animate="visible"
                    className="mask mt-2 flex h-14 w-14 items-center justify-center"
                  >
                    {renderSvgOrLogo(40, 40)}
                  </motion.div>
                  <span className="pl-2 text-5xl font-bold tracking-tighter"></span>
                </div>
              )}

              {/* Rest of the card layouts remain the same */}
              {i === 1 && (
                <div
                  style={doubleGradientStyle}
                  className="absolute flex min-h-full w-full items-center justify-center bg-[#0A0A0A] dark:bg-white"
                >
                  <motion.div
                    variants={selectedSvgVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-2 flex h-14 w-14 items-center justify-center"
                  >
                    {renderSvgOrLogo(40, 40)}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.4,
                    }}
                    className="text-2xl font-bold"
                  >
                    {name.split("").map((letter, index) => (
                      <motion.span
                        className="text-white dark:text-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={index}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.p>

                  <span className="pl-2 text-5xl font-bold tracking-tighter"></span>
                </div>
              )}

              {i === 2 && (
                <div className="absolute flex h-full w-full items-center justify-center rounded-xl bg-[#0A0A0A] select-none dark:bg-white">
                  <div className="absolute h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-5 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#000_1px,transparent_3px)]"></div>
                  <div className="mt-2 flex h-30 w-30 items-center justify-center">
                    {renderSvgOrLogo(150, 150)}
                  </div>
                </div>
              )}

              {i === 3 && (
                <div className="absolute flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#0A0A0A] dark:bg-white">
                  <div
                    className="absolute inset-0 h-full w-full"
                    style={{
                      background: `radial-gradient(125% 125% at 50% 20%, #0A0A0A 40%, ${colorSelection} 200%)`,
                      zIndex: 1,
                    }}
                  ></div>

                  <div
                    className="absolute inset-0 hidden h-full w-full dark:block"
                    style={{
                      background: `radial-gradient(125% 125% at 50% 20%, #ffffff 40%, ${colorSelection} 200%)`,
                      zIndex: 1,
                    }}
                  ></div>

                  <div className="relative z-10 flex items-center justify-center">
                    {renderSvgOrLogo(70, 70)}
                    <span
                      className="pointer-events-none z-10 bg-gradient-to-b bg-clip-text px-2 text-center text-5xl leading-none font-bold tracking-tighter whitespace-pre-wrap text-transparent md:text-7xl"
                      style={{
                        backgroundImage: `linear-gradient(to bottom, #fff, ${colorSelection})`,
                      }}
                    >
                      {name}
                    </span>
                  </div>
                </div>
              )}

              {i === 4 && (
                <div className="absolute flex h-full w-full items-center justify-center rounded-b bg-[#0A0A0A] dark:bg-white">
                  <div className="relative mt-2 flex h-14 w-14 items-center justify-center">
                    {renderSvgOrLogo(40, 40)}
                  </div>
                  <span className="pl-2 text-5xl font-bold tracking-tighter"></span>
                </div>
              )}

              {i === 5 && (
                <div
                  style={gradientStyle}
                  className="absolute flex h-full w-full flex-col items-center justify-center bg-[#0A0A0A] dark:bg-white"
                >
                  <div className="mt-2 flex items-center justify-center gap-8">
                    {renderSvgOrLogo(30, 30)}
                    {renderSvgOrLogo(40, 40)}
                    {renderSvgOrLogo(50, 50)}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => downloadCardAsImage(i)}
              className="absolute right-2 bottom-2 z-10 flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-black/5 p-2 text-xs text-white shadow-lg transition-opacity duration-200 dark:border-black/10 dark:text-black"
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Contribution modal */}
      {showContributionModal && (
        <ContributionModal
          onClose={() => setShowContributionModal(false)}
          onContribute={handleContributionSuccess}
          onContinueWithoutPaying={handleContinueWithoutPaying}
          itemName={
            pendingAction === "downloadCard" ? "mockup" : "todos los mockups"
          }
        />
      )}
    </>
  );
}
