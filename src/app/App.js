"use client";

import { useEffect, useRef, useCallback } from "react";
import "@/styles/inputColors.css";
import "@/styles/mask.css";

import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import MockupsCard from "@/components/cards/ProductCard";
import SvgGalleryModal from "@/components/modals/GalleryModal";
import SvgGalleryButton from "@/components/buttons/GalleryButton";
import LoginModal from "@/components/auth/components/AuthModal";
import Alert from "../components/alerts/Alert";

import useClickOutside from "@/hooks/useClickOutside";
import useHandleEscKey from "@/hooks/handle-key/useHandleEscKey";
import useDownloadSvg from "@/hooks/download-svg-png/useDownloadSvg";
import useDownloadPng from "@/hooks/download-svg-png/useDownloadPng";
import { AppProvider, useAppContext } from "@/context/AppContext";

import { SvgList } from "@/utils/SvgList";
import { CircleAlert, FileWarning } from "lucide-react";

// Componente principal que usa el contexto
function AppContent() {
  const {
    state,
    dispatch,
    toggleSidebar,
    toggleSvgGallery,
    toggleLoginModal,
    handleNameChange,
    handleColorChange,
    handleThicknessChange,
    handleRotationChange,
    handleSvgSelect,
    handleLogoChange,
    handleLogoError,
    handleLogoWarning,
  } = useAppContext();

  const {
    name,
    color,
    thickness,
    rotation,
    selectedSvg,
    userLogo,
    showSidebar,
    showSvgGallery,
    showLoginModal,
    logoError,
    logoWarning,
  } = state;

  const sidebarRef = useRef(null);

  const svgOptions = useRef({
    color,
    rotation,
    thickness,
    width: 30,
    height: 30,
  });

  useEffect(() => {
    svgOptions.current = {
      color,
      rotation,
      thickness,
      width: 30,
      height: 30,
    };
  }, [color, rotation, thickness]);

  const downloadSvg = useDownloadSvg(selectedSvg, svgOptions.current);
  const downloadPng = useDownloadPng(selectedSvg, svgOptions.current, name);

  const downloadAllMockups = useCallback(() => {
    if (
      window.downloadAllMockups &&
      typeof window.downloadAllMockups === "function"
    ) {
      window.downloadAllMockups();
    } else {
      console.error("The downloadAllMockups function is not available.");
    }
  }, []);

  useClickOutside(sidebarRef, () => {
    if (showSidebar) toggleSidebar();
  });

  useHandleEscKey(showSvgGallery, toggleSvgGallery);
  useHandleEscKey(showLoginModal, toggleLoginModal);

  return (
    <div className="flex h-screen flex-col">
      <div className="relative">
        <Header
          handleDownloadSvg={downloadSvg}
          handleDownloadPng={downloadPng}
          downloadAllMockups={downloadAllMockups}
          onLoginClick={toggleLoginModal}
          toggleSidebar={toggleSidebar}
        />
      </div>

      <div className="relative flex h-full">
        {showSidebar && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={toggleSidebar}
          />
        )}

        <aside
          ref={sidebarRef}
          className={`absolute top-1/3 left-1/2 z-50 h-full w-5/5 max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-black/5 backdrop-blur-md transition-opacity duration-300 ease-in-out dark:bg-white ${
            showSidebar ? "opacity-100" : "pointer-events-none opacity-0"
          } md:hidden`}
          style={{ maxHeight: "calc(100vh - 120px)" }}
        >
          <div className="flex h-full max-h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <h2 className="text-xl font-bold">Settings</h2>
              <button
                onClick={toggleSidebar}
                className="rounded-full p-2 hover:bg-gray-200/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pb-6">
              <Sidebar
                name={name}
                handleNameChange={handleNameChange}
                rotation={rotation}
                handleRotationChange={handleRotationChange}
                thickness={thickness}
                handleThicknessChange={handleThicknessChange}
                color={color}
                handleColorChange={handleColorChange}
                onLogoChange={handleLogoChange}
                onLogoError={handleLogoError}
                onLogoWarning={handleLogoWarning}
              >
                <SvgGalleryButton onClick={toggleSvgGallery} />
              </Sidebar>
            </div>
          </div>
        </aside>

        {logoError && (
          <div className="fixed top-4 right-4 z-50">
            <Alert
              label="Logo Error"
              description="Only svg format files"
              position="BOTTOM_RIGHT"
              icon={<CircleAlert className="h-4 w-4" />}
              autoClose={5000}
              onClose={() => dispatch({ type: "CLEAR_LOGO_ERROR" })}
              className="w-fit"
            />
          </div>
        )}

        {logoWarning && !logoError && (
          <div className="fixed top-4 right-4 z-50">
            <Alert
              label="Logo Warning"
              description="We recommend using SVG vector images."
              position="TOP"
              icon={<FileWarning className="h-4 w-4" />}
              autoClose={8000}
              onClose={() => dispatch({ type: "CLEAR_LOGO_WARNING" })}
            />
          </div>
        )}

        <aside className="relative hidden w-64 flex-shrink-0 md:block">
          <Sidebar
            name={name}
            handleNameChange={handleNameChange}
            rotation={rotation}
            handleRotationChange={handleRotationChange}
            thickness={thickness}
            handleThicknessChange={handleThicknessChange}
            color={color}
            handleColorChange={handleColorChange}
            onLogoChange={handleLogoChange}
            onLogoError={handleLogoError}
            onLogoWarning={handleLogoWarning}
          >
            <SvgGalleryButton onClick={toggleSvgGallery} />
          </Sidebar>
        </aside>

        <div className="flex w-full flex-col overflow-y-auto border-white/10 px-2 pb-3 md:pb-20 dark:border-black/10">
          <MockupsCard
            name={name}
            colorSelection={color}
            rotationSelection={rotation}
            thicknessSelection={thickness}
            selectedSvg={selectedSvg}
            userLogo={userLogo}
          />

          <div className="mb-24 flex justify-center py-8 md:hidden"></div>
        </div>

        <SvgGalleryModal
          show={showSvgGallery}
          onClose={toggleSvgGallery}
          svgList={SvgList}
          onSelect={handleSvgSelect}
          selectedSvg={selectedSvg}
        />

        <LoginModal show={showLoginModal} onClose={toggleLoginModal} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider initialSvg={SvgList[11]}>
      <AppContent />
    </AppProvider>
  );
}
