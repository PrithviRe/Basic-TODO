import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";

export const metadata = {
  title: "Basic-TODO",
  description: "One for TODO, TODO for all",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var saved = localStorage.getItem('todo-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (_) {}
})();
          `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 py-10">
            <div className="container">{children}</div>
          </main>
          <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Built with Next.js · TypeScript · Tailwind
          </footer>
        </div>
      </body>
    </html>
  );
}
