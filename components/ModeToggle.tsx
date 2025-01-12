"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-5 w-5 ${isDark ? "text-gray-500" : "text-yellow-400"}`} />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setTheme(isDark ? "light" : "dark")}
          className="sr-only"
        />
        <div className="w-10 h-5 bg-gray-200 rounded-full dark:bg-gray-700 transition-colors">
          <div
            className={`h-4 w-4 bg-white rounded-full shadow transform transition-transform ${
              isDark ? "translate-x-5" : "translate-x-1"
            }`}
          ></div>
        </div>
      </label>
      <Moon className={`h-5 w-5 ${isDark ? "text-blue-400" : "text-gray-500"}`} />
    </div>
  );
}
