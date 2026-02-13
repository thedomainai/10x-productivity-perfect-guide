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
      <section className="relative overflow-hidden">
        {/* Hero + Mesh Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 0%, rgba(80, 104, 164, 0.2) 0%, transparent 70%),
              radial-gradient(at 20% 30%, rgba(80, 104, 164, 0.12) 0%, transparent 50%),
              radial-gradient(at 80% 70%, rgba(142, 124, 180, 0.1) 0%, transparent 50%)
            `,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 py-24 lg:py-32">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-light tracking-[-1.5px] leading-[1.1] text-white mb-4">
            10x Your Productivity
          </h1>
          <p className="text-lg lg:text-xl text-[#7e7e8c] mb-12 max-w-2xl">
            Perfect Guide of Cursor × Claude Code
          </p>

          {/* Liquid Glass Formula Card */}
          <div className="liquid-glass rounded-2xl p-6 lg:p-8 mb-12 max-w-xl">
            <p className="text-[13px] text-[#5a5a68] mb-4 font-semibold uppercase tracking-[2px]">
              Core Principle
            </p>
            <p className="text-xl lg:text-2xl font-mono font-medium text-[#e8e8ec] leading-relaxed">
              AI Output ={" "}
              <span className="text-[#6b84c0]">Quantity</span> ×{" "}
              <span className="text-[#ad9cce]">Precision</span>
            </p>
            <div className="mt-5 grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-[#6b84c0] font-semibold mb-1.5">
                  Quantity（量）
                </p>
                <p className="text-[#7e7e8c] leading-relaxed">
                  速度 × 持続時間 × 並列度
                </p>
              </div>
              <div>
                <p className="text-[#ad9cce] font-semibold mb-1.5">
                  Precision（精度）
                </p>
                <p className="text-[#7e7e8c] leading-relaxed">
                  Preset + Prompt
                </p>
              </div>
            </div>
          </div>

          {/* CTA — Gradient Shift Button */}
          <Link
            href="/phases/phase0-setup"
            className="btn-gradient inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-white font-semibold text-[15px]"
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
      </section>

      {/* Gradient Separator */}
      <div className="line-gradient" />

      {/* Phase Cards */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[28px] font-medium text-white mb-3 tracking-[-0.3px]">
              Learning Path
            </h2>
            <p className="text-[#7e7e8c] max-w-xl mx-auto text-[15px]">
              Phase 0-1 で基礎を築き、Phase 2-3 で精度の基盤を確立。Phase 4-5
              で量を最大化する。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phases.map((phase) => (
              <Link
                key={phase.slug}
                href={`/phases/${phase.slug}`}
                className="group block glass rounded-xl p-6 transition-all duration-300 hover:border-[rgba(107,132,192,0.3)] hover:shadow-[0_0_20px_rgba(80,104,164,0.15)] hover:-translate-y-0.5"
              >
                <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#141418] text-[#7e7e8c] border border-[#1e1e24] mb-3 group-hover:border-[rgba(107,132,192,0.3)] group-hover:text-[#6b84c0] transition-all duration-300">
                  {phase.phase}
                </span>
                <h3 className="font-medium text-white text-lg mb-1 tracking-[-0.2px]">
                  {phase.title}
                </h3>
                <p className="text-sm text-[#7e7e8c] mb-1">{phase.subtitle}</p>
                <p className="text-sm text-[#5a5a68]">{phase.description}</p>
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
    </div>
  );
}
