import React, { useState, useRef, useEffect } from "react";
import { LogIn, UserPlus, X } from "lucide-react";
import useClickOutside from "@/hooks/useClickOutside";

export default function LoginModal({ show, onClose }) {
  const [activeTab, setActiveTab] = useState("login");
  const [modalHeight, setModalHeight] = useState("auto");
  const modalRef = useRef(null);
  const loginFormRef = useRef(null);
  const signupFormRef = useRef(null);

  useClickOutside(modalRef, onClose);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const activeForm =
          activeTab === "login" ? loginFormRef.current : signupFormRef.current;
        if (activeForm) {
          setModalHeight(`${activeForm.clientHeight + 170}px`);
        }
      }, 10);
    }
  }, [activeTab, show]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
    onClose();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de registro aquí
    console.log("Signup submitted");
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="w-full max-w-md rounded-xl border border-white/10 bg-black/5 p-6 shadow-lg dark:border-white/10 dark:bg-white"
        style={{
          height: modalHeight,
          transition: "height 0.3s ease-in-out",
          overflow: "hidden",
        }}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            {activeTab === "login" ? "Log In" : "Sign Up"}
          </h2>
          <button
            onClick={onClose}
            className="dark:hover:white/10 cursor-pointer rounded-full p-1 transition duration-400 hover:scale-110"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex border-b border-dashed border-white/10 dark:border-black/10">
          <button
            className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
              activeTab === "login"
                ? "border-b-2 border-white text-white dark:border-black dark:text-black"
                : "text-white/10 dark:text-black/10"
            }`}
            onClick={() => handleTabChange("login")}
          >
            <LogIn className="h-4 w-4" />
            Login
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
              activeTab === "signup"
                ? "border-b-2 border-white text-white dark:border-black dark:text-black"
                : "text-white/10 dark:text-black/10"
            }`}
            onClick={() => handleTabChange("signup")}
          >
            <UserPlus className="h-4 w-4" />
            Signup
          </button>
        </div>

        <div className="relative">
          {/* Contenido del formulario de Login */}
          <div
            ref={loginFormRef}
            className={`transition-opacity duration-300 ${
              activeTab === "login"
                ? "opacity-100"
                : "pointer-events-none absolute inset-0 opacity-0"
            }`}
          >
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/10 px-3 py-2 outline-none dark:border-gray-300 dark:bg-white"
                  placeholder="@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-white/10 px-3 py-2 dark:border-black/10 dark:bg-white"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="mb-4 flex justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Recordarme</span>
                </label>
                <a href="#" className="text-sm text-white hover:underline">
                  ¿Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-white/5 px-4 py-2 text-white transition duration-200 hover:bg-white/10 dark:bg-black/30 dark:text-white dark:hover:bg-black/50"
              >
                Log In
              </button>
            </form>
          </div>

          <div
            ref={signupFormRef}
            className={`transition-opacity duration-300 ${
              activeTab === "signup"
                ? "opacity-100"
                : "pointer-events-none absolute inset-0 opacity-0"
            }`}
          >
            <form onSubmit={handleSignupSubmit}>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">
                  Nickname
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/10 px-3 py-2 dark:border-black/10 dark:bg-white"
                  placeholder="dev_"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/10 px-3 py-2 dark:border-black/10 dark:bg-white"
                  placeholder="@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-white/10 px-3 py-2 dark:border-black/10 dark:bg-white"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">
                  Confirm password
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-white/10 px-3 py-2 dark:border-black/10 dark:bg-white"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" required />
                  <span className="text-sm">
                    I accept the terms and conditions
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-white/5 px-4 py-2 text-white transition duration-200 hover:bg-white/10 dark:bg-black/30 dark:text-white dark:hover:bg-black/50"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="mt-2 text-center text-sm font-light text-white/50 dark:text-black/50">
          {activeTab === "login" ? (
            <p>
              ¿You already have an account?{" "}
              <button
                onClick={() => handleTabChange("signup")}
                className="text-white hover:underline dark:text-black"
              >
                Register here
              </button>
            </p>
          ) : (
            <p>
              ¿You already have an account?{" "}
              <button
                onClick={() => handleTabChange("login")}
                className="text-white hover:underline dark:text-black"
              >
                Log In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
