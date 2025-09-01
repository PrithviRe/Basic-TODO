"use client";

import { useEffect, useState } from "react";

const THEME_KEY = "todo-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
      if (saved) {
        setTheme(saved);
        document.documentElement.classList.toggle("dark", saved === "dark");
        return;
      }
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    } catch (e) {
        console.log(e)
      setTheme("light");
    }
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-md card"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      <span className="sr-only">Toggle color theme</span>
    </button>
  );
}