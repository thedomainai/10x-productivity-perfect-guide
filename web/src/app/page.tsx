import Link from "next/link";
import { phases } from "@/lib/phases";
import { getReadmeContent } from "@/lib/content";
import MarkdownContent from "@/components/MarkdownContent";

export default function Home() {
  const readmeContent = getReadmeContent();
  const contentWithoutTitle = readmeContent.replace(/^#[^\n]*\n+/, "");

  return (
    <div>
      {/* Hero */}
      <header className="border-b border-black">
        <div className="max-w-4xl mx-auto px-6 md:px-16 py-16 lg:py-24">
          <div className="flex justify-between items-baseline mb-6">
            <span className="text-sm font-bold tracking-widest uppercase text-slate-500">
              Second Brain // Guide
            </span>
            <span className="text-sm text-slate-400">February 2026</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-light text-slate-900 mb-4">
            10x Your <span className="italic">Productivity</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mb-10">
            Cursor × Claude Code で AI を Second Brain として使いこなす完全ガイド。
            <br />
            Phase 0-5 を順に進め、AI が自律的に動く仕組みを構築する。
          </p>

          {/* Core Principle Card */}
          <div className="card p-6 lg:p-8 max-w-xl mb-10">
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-3 font-semibold">
              Core Principle
            </p>
            <p className="text-xl lg:text-2xl font-serif text-slate-800 leading-relaxed">
              AI Output ={" "}
              <span className="text-[#5068a4]">Quantity</span> ×{" "}
              <span className="text-purple-600">Precision</span>
            </p>
            <div className="mt-5 grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-[#5068a4] font-semibold mb-1">
                  Quantity（量）
                </p>
                <p className="text-slate-500 leading-relaxed">
                  速度 × 持続時間 × 並列度
                </p>
              </div>
              <div>
                <p className="text-purple-600 font-semibold mb-1">
                  Precision（精度）
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Preset + Prompt
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/phases/phase0-setup"
            className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-white font-semibold text-[15px] transition-all duration-700"
          >
            Start Learning
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </header>

      {/* Gradient Separator */}
      <div className="line-gradient" />

      {/* Phase Cards */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-3">
              Learning Path
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-[15px]">
              Phase 0-1 で基礎を築き、Phase 2-3 で精度の基盤を確立。Phase 4-5
              で量を最大化する。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phases.map((phase) => (
              <Link
                key={phase.slug}
                href={`/phases/${phase.slug}`}
                className="group card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="inline-block text-xs font-medium px-2.5 py-1 rounded bg-slate-50 text-slate-500 border border-slate-200 mb-3 group-hover:border-[#8fa5d4] group-hover:text-[#5068a4] group-hover:bg-blue-50 transition-all duration-200">
                  {phase.phase}
                </span>
                <h3 className="font-serif font-semibold text-slate-900 text-lg mb-1">
                  {phase.title}
                </h3>
                <p className="text-sm text-slate-500 mb-1">{phase.subtitle}</p>
                <p className="text-sm text-slate-400">{phase.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Separator */}
      <div className="line-gradient" />

      {/* README Content */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <MarkdownContent content={contentWithoutTitle} />
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 md:px-16 py-8 border-t border-slate-200 text-xs text-slate-400 flex justify-between">
        <p>Cursor × Claude Code Guide</p>
        <p>Second Brain // Complete Guide</p>
      </footer>
    </div>
  );
}
