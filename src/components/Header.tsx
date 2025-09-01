"use client";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-700">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
            ✓
          </div>
          <div>
            <h1 className="text-lg font-semibold">Basic Todo</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">TypeScript · Next.js · Tailwind</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden sm:block">
            <a className="text-sm px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
              About
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}