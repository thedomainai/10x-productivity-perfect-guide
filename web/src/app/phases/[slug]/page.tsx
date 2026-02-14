import { notFound } from "next/navigation";
import Link from "next/link";
import { phases } from "@/lib/phases";
import { getPhaseContent } from "@/lib/content";
import MarkdownContent from "@/components/MarkdownContent";

export function generateStaticParams() {
  return phases.map((phase) => ({ slug: phase.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const phase = phases.find((p) => p.slug === slug);
  if (!phase) return {};
  return {
    title: `${phase.phase}: ${phase.title} — 10x Your Productivity`,
    description: phase.description,
  };
}

export default async function PhasePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const phase = phases.find((p) => p.slug === slug);
  if (!phase) notFound();

  const content = getPhaseContent(slug);
  const currentIndex = phases.findIndex((p) => p.slug === slug);
  const prevPhase = currentIndex > 0 ? phases[currentIndex - 1] : null;
  const nextPhase =
    currentIndex < phases.length - 1 ? phases[currentIndex + 1] : null;

  const mainPhases = phases.filter((p) => p.phase !== "Appendix");

  return (
    <div className="py-8 lg:py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Progress Steps */}
        <div className="flex items-center gap-1 mb-10 overflow-x-auto pb-2">
          {mainPhases.map((p, idx) => (
            <div key={p.slug} className="flex items-center gap-1 shrink-0">
              <Link
                href={`/phases/${p.slug}`}
                title={`${p.phase}: ${p.title}`}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-150
                  ${
                    p.slug === slug
                      ? "bg-[#5068a4] text-white ring-2 ring-[#dae1f1] ring-offset-2 ring-offset-white"
                      : idx <= currentIndex
                      ? "bg-[#eef1f8] text-[#5068a4] hover:bg-[#dae1f1]"
                      : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                  }`}
              >
                {idx}
              </Link>
              {idx < mainPhases.length - 1 && (
                <div
                  className={`w-6 lg:w-10 h-px ${
                    idx < currentIndex ? "bg-[#8fa5d4]" : "bg-slate-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <MarkdownContent content={content} />

        {/* Prev / Next Navigation */}
        <nav className="mt-16 pt-8 border-t border-slate-200 flex justify-between gap-4">
          <div className="min-w-0">
            {prevPhase ? (
              <Link
                href={`/phases/${prevPhase.slug}`}
                className="group inline-flex flex-col items-start"
              >
                <span className="text-sm text-slate-400 mb-1 flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </span>
                <span className="font-medium text-[#5068a4] group-hover:text-[#363f60] transition-colors truncate">
                  {prevPhase.phase}: {prevPhase.title}
                </span>
              </Link>
            ) : (
              <Link
                href="/"
                className="group inline-flex flex-col items-start"
              >
                <span className="text-sm text-slate-400 mb-1 flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </span>
                <span className="font-medium text-[#5068a4] group-hover:text-[#363f60] transition-colors">
                  Overview
                </span>
              </Link>
            )}
          </div>
          <div className="min-w-0 text-right">
            {nextPhase ? (
              <Link
                href={`/phases/${nextPhase.slug}`}
                className="group inline-flex flex-col items-end"
              >
                <span className="text-sm text-slate-400 mb-1 flex items-center gap-1">
                  Next
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="font-medium text-[#5068a4] group-hover:text-[#363f60] transition-colors truncate">
                  {nextPhase.phase}: {nextPhase.title}
                </span>
              </Link>
            ) : (
              <Link
                href="/"
                className="group inline-flex flex-col items-end"
              >
                <span className="text-sm text-slate-400 mb-1 flex items-center gap-1">
                  Back
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="font-medium text-[#5068a4] group-hover:text-[#363f60] transition-colors">
                  Overview
                </span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
