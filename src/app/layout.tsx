import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";

export const metadata = {
  title: "Basic-TODO",
  description: "One for TODO, TODO for all",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 py-10">
            <div className="container">{children}</div>
          </main>
          <footer className="py-6 text-center text-sm text-slate-500">
            Built with Next.js · TypeScript · Tailwind
          </footer>
        </div>
      </body>
    </html>
  );
}