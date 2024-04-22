"use client";

import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed top-4 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-[2001]"
      onClick={toggleTheme}
    >
      {theme === "light" ? <LightMode /> : <DarkMode />}
    </button>
  );
}
