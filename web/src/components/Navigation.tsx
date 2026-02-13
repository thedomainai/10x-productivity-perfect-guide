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
            ? "bg-[#141418] text-[#e8e8ec] font-medium"
            : "text-[#7e7e8c] hover:bg-[#141418] hover:text-[#e8e8ec]"
        }`}
      >
        Overview
      </Link>

      <div className="pt-5 pb-2">
        <p className="px-3 text-[13px] font-semibold text-[#5a5a68] uppercase tracking-[2px]">
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
              ? "bg-[#141418] text-[#e8e8ec] font-medium"
              : "text-[#7e7e8c] hover:bg-[#141418] hover:text-[#e8e8ec]"
          }`}
        >
          <span className="text-xs font-mono text-[#5a5a68] mr-2">
            {phase.phase}
          </span>
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
      {/* Desktop Sidebar — glass-frosted */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 glass-frosted overflow-y-auto z-30">
        <div className="p-6 border-b border-[rgba(255,255,255,0.06)]">
          <Link href="/">
            <h1 className="text-lg font-medium text-white leading-tight tracking-tight">
              10x Your
              <br />
              Productivity
            </h1>
            <p className="text-xs text-[#5a5a68] mt-1.5 font-mono">
              Cursor × Claude Code
            </p>
          </Link>
        </div>
        <div className="p-4 flex-1">
          <NavLinks />
        </div>
      </aside>

      {/* Mobile Header — glass-frosted */}
      <header className="lg:hidden sticky top-0 z-50 glass-frosted border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="font-medium text-[#e8e8ec] text-sm">
            10x Productivity
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-[#7e7e8c] hover:text-[#e8e8ec] transition-colors duration-150"
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
            className="lg:hidden fixed inset-0 top-14 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="lg:hidden fixed left-0 right-0 top-14 z-50 glass-frosted border-b border-[rgba(255,255,255,0.06)] max-h-[70vh] overflow-y-auto">
            <div className="p-4">
              <NavLinks onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
