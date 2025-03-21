"use client";

import React, { useState, useRef } from "react";
import {
  ArrowDownToLine,
  Star,
  ChevronDown,
  MoveUpRight,
  Layout,
  Settings,
} from "lucide-react";

import Button from "@/components/buttons/Button";
import Switch from "@/components/form/Switch";
import LoginButton from "@/components/auth/components/AuthButton";

import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";

export default function Header({
  handleDownloadSvg,
  handleDownloadPng,
  onLoginClick,
  children,
  downloadAllMockups,
  toggleSidebar,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setShowDropdown(false));

  return (
    <header className="relative top-0 z-50 flex w-full flex-col border-b border-dashed border-white/5 backdrop-blur-xs md:flex-row dark:border-black/10">
      <nav className="flex gap-1 h-[80px] w-full items-center justify-center px-4 md:justify-start">
        <Image
          priority
          quality={100}
          src="/favicon.svg"
          alt="logo"
          width={40}
          height={40}
        />
        <h1 className="flex items-center  justify-center text-lg font-medium">
          Arosade
          <div className="mb-2 ml-1 inline-flex items-center justify-center rounded-full border border-white/10 px-2 py-1 text-xs font-medium text-neutral-400 transition-colors dark:border-black/10">
            v1.0
            <MoveUpRight className="h-3 w-3" />
          </div>
        </h1>
      </nav>

      <div className="flex w-full flex-wrap items-center justify-center gap-2 border-t border-dashed border-white/5 px-4 py-3 md:relative md:w-auto md:flex-nowrap md:justify-end md:border-t-0 md:py-0 dark:border-black/10">
        <Switch />
        <Button
          type="button"
          className="gap-2"
          icon={
            <Star className="h-4 w-4 transition-all group-hover:animate-spin" />
          }
          label="Stars on Github"
          src="https://github.com/JhojanGgarcia/arosade"
        />

        <Button
          label="Settings"
          onClick={toggleSidebar}
          icon={<Settings className="h-4 w-4" />}
          className="gap-2 p-3 md:hidden"
        />

        <div className="relative" ref={dropdownRef}>
          <Button
            className="gap-2"
            icon={<ArrowDownToLine className="h-4 w-4" />}
            label="Download"
            onClick={() => setShowDropdown(!showDropdown)}
            iconAfter={<ChevronDown className="h-4 w-4" />}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 rounded-xl border border-white/10 bg-black/20 shadow-lg backdrop-blur-md dark:border-black/10 dark:bg-white">
              <div className="py-1">
                <button
                  onClick={() => {
                    handleDownloadSvg();
                    setShowDropdown(false);
                  }}
                  className="group flex w-full cursor-pointer items-start gap-1 border-b border-dashed border-white/10 px-4 py-2 text-left text-sm dark:border-black/10"
                >
                  Download SVG
                  <MoveUpRight className="h-3 w-3 transition duration-200 group-hover:scale-125" />
                </button>
                <button
                  onClick={() => {
                    handleDownloadPng();
                    setShowDropdown(false);
                  }}
                  className="group flex w-full cursor-pointer items-start gap-1 border-b border-dashed border-white/10 px-4 py-2 text-left text-sm dark:border-black/10"
                >
                  Download PNG
                  <MoveUpRight className="h-3 w-3 transition duration-200 group-hover:scale-125" />
                </button>
                <button
                  onClick={() => {
                    downloadAllMockups();
                    setShowDropdown(false);
                  }}
                  className="group flex w-full cursor-pointer items-start gap-1 px-4 py-2 text-left text-sm text-nowrap text-ellipsis"
                >
                  Mockups
                  <Layout className="h-3 w-3 transition duration-200 group-hover:scale-125" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Botón de Login (comentado) */}
        {/* <LoginButton onClick={onLoginClick} /> */}
      </div>
    </header>
  );
}
