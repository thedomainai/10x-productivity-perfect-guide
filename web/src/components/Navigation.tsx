"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { phases } from "@/lib/phases";

function NavLinks({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-0.5">
      <Link
        href="/"
        onClick={onClick}
        className={`block px-3 py-2 rounded-md text-sm transition-all duration-150 ${
          pathname === "/"
            ? "bg-blue-50 text-blue-700 font-medium"
            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
        }`}
      >
        Overview
      </Link>

      <div className="pt-5 pb-2">
        <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-[2px]">
          Phases
        </p>
      </div>

      {phases.map((phase) => (
        <Link
          key={phase.slug}
          href={`/phases/${phase.slug}`}
          onClick={onClick}
          className={`block px-3 py-2 rounded-md text-sm transition-all duration-150 ${
            pathname === `/phases/${phase.slug}`
              ? "bg-blue-50 text-blue-700 font-medium"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <span className="text-xs text-slate-400 mr-2">{phase.phase}</span>
          {phase.title}
        </Link>
      ))}
    </nav>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-slate-200 overflow-y-auto z-30">
        <div className="p-6 border-b border-slate-200">
          <Link href="/">
            <h1 className="text-lg font-serif font-semibold text-slate-900 leading-tight">
              10x Your
              <br />
              Productivity
            </h1>
            <p className="text-xs text-slate-400 mt-1.5 tracking-wide">
              Cursor × Claude Code
            </p>
          </Link>
        </div>
        <div className="p-4 flex-1">
          <NavLinks />
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="font-serif font-semibold text-slate-900 text-sm">
            10x Productivity
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-slate-500 hover:text-slate-900 transition-colors duration-150"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-14 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="lg:hidden fixed left-0 right-0 top-14 z-50 bg-white border-b border-slate-200 max-h-[70vh] overflow-y-auto shadow-lg">
            <div className="p-4">
              <NavLinks onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
