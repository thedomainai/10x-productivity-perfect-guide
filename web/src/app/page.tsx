import Link from "next/link";
import { phases } from "@/lib/phases";

export default function Home() {
  return (
    <div className="text-slate-900">

      {/* ── 1. Hero ───────────────────────────────────────────── */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-16 py-16 lg:py-24">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
            Second Brain // Guide
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl font-serif font-light text-slate-900 leading-tight">
            Cursor × Claude Code<br /><span className="text-3xl md:text-4xl text-slate-500 font-sans font-normal">Second Brain 構築ガイド</span>
          </h1>
          <p className="mt-6 text-lg text-slate-500 max-w-xl">
            PC 上に AI エージェントを常駐させるインフラを構築する。Phase 0–5 を順に進め、AI が自律的に動く環境を作る。
          </p>
        </div>
      </header>

      {/* ── 2. 問題定義 ───────────────────────────────────────── */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">Background</p>
          <p className="text-xl text-slate-700 max-w-2xl leading-relaxed">
            Gemini や NotebookLM はチャット欄に貼り付けたテキストしか読めない。
            回答をコピーして自分で貼り付け、ブラウザを閉じると文脈がリセットされる。
          </p>
          <p className="mt-4 text-xl text-slate-700 max-w-2xl leading-relaxed">
            Cursor × Claude Code は PC のファイルに直接アクセスし、ファイル編集・コマンド実行まで完結させる。
            判断基準と業務知識はローカルに永続保存され、セッションをまたいで引き継がれる。
          </p>
        </div>
      </section>

      {/* ── 3. ツールの本質的差分 ─────────────────────────────── */}
      <section className="bg-white border-b border-slate-200 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-10">The Fundamental Difference</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="border border-slate-200 rounded-xl p-8 bg-slate-50">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Before</p>
              <p className="text-lg font-semibold text-slate-600 mb-6">Gemini / NotebookLM</p>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-400 text-xs">✕</span>
                  <span>貼り付けたテキストしか読めない</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-400 text-xs">✕</span>
                  <span>回答をコピーして自分で貼り付ける</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-400 text-xs">✕</span>
                  <span>ブラウザを閉じると文脈がリセット</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-400 text-xs">✕</span>
                  <span>毎回ゼロから説明し直す</span>
                </li>
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-200">
                <p className="text-xs text-slate-400 font-medium">本質</p>
                <p className="text-sm text-slate-500 mt-1">クラウド上でテキストを処理するツール</p>
              </div>
            </div>

            {/* After */}
            <div className="border border-[#5068a4] rounded-xl p-8 bg-[#f4f6fb]">
              <p className="text-xs font-bold tracking-widest uppercase text-[#5068a4] mb-4">After</p>
              <p className="text-lg font-semibold text-slate-800 mb-6">Cursor × Claude Code</p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#5068a4] flex items-center justify-center shrink-0 text-white text-xs">✓</span>
                  <span>PC 上のファイル・フォルダに直接アクセス</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#5068a4] flex items-center justify-center shrink-0 text-white text-xs">✓</span>
                  <span>ファイル編集・コマンド実行まで AI が完結</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#5068a4] flex items-center justify-center shrink-0 text-white text-xs">✓</span>
                  <span>判断基準・業務知識がローカルに永続保存</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#5068a4] flex items-center justify-center shrink-0 text-white text-xs">✓</span>
                  <span>前回の決定・経緯を引き継いで動く</span>
                </li>
              </ul>
              <div className="mt-6 pt-5 border-t border-[#c4ccdf]">
                <p className="text-xs text-[#5068a4] font-medium">本質</p>
                <p className="text-sm text-slate-700 mt-1 font-medium">PC 上に AI エージェントを常駐させるインフラ</p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-lg text-slate-700 max-w-2xl">
            この差が、アウトプット品質を非連続に拡大する。
          </p>
        </div>
      </section>

      {/* ── 4. コアコンセプト ─────────────────────────────────── */}
      <section className="bg-slate-900 text-white border-b border-slate-700 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-10">Core Concept</p>

          {/* Equation */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-12">
            <span className="text-3xl md:text-5xl font-serif text-white">AI Output</span>
            <span className="text-3xl md:text-5xl text-slate-500">=</span>
            <span className="text-3xl md:text-5xl font-serif text-[#7b93c9]">Quantity</span>
            <span className="text-3xl md:text-5xl text-slate-500">×</span>
            <span className="text-3xl md:text-5xl font-serif text-purple-400">Precision</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-slate-700 rounded-xl p-6">
              <p className="text-[#7b93c9] font-semibold mb-2">Quantity（量）</p>
              <p className="text-xl font-serif text-white mb-5">速度 × 持続時間 × 並列度</p>

              {/* 図解: 並列タイムライン */}
              <div className="mb-4">
                {/* 時間軸ラベル */}
                <div className="flex justify-between text-[10px] text-slate-500 mb-1 px-1">
                  <span>開始</span>
                  <span className="tracking-widest">── 持続時間 ──</span>
                  <span>終了</span>
                </div>

                {/* エージェント行 */}
                <div className="space-y-1.5">
                  {[
                    { label: "Agent 1", width: "100%", delay: "" },
                    { label: "Agent 2", width: "100%", delay: "" },
                    { label: "Agent 3", width: "100%", delay: "" },
                  ].map((agent, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500 w-14 shrink-0">{agent.label}</span>
                      <div className="flex-1 h-5 bg-slate-800 rounded overflow-hidden">
                        <div
                          className="h-full bg-[#5068a4] rounded flex items-center px-2"
                          style={{ width: agent.width }}
                        >
                          <div className="flex gap-0.5 w-full">
                            {Array.from({ length: 12 }).map((_, j) => (
                              <div key={j} className="flex-1 h-2 bg-[#7b93c9] rounded-sm opacity-60" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 並列度ラベル */}
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-3 bg-slate-600" />
                    <div className="w-px h-3 bg-slate-600" />
                    <div className="w-px h-3 bg-slate-600" />
                  </div>
                  <span className="text-[10px] text-slate-500 ml-1">並列度 = 3</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                複数エージェントが同時・継続的に稼働する。並列度と持続時間を上げるほど、処理できる仕事量が増える。
              </p>
            </div>
            <div className="border border-purple-800 rounded-xl p-6">
              <p className="text-purple-400 font-semibold mb-2">Precision（精度）</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-serif text-white">Preset</span>
                <span className="text-slate-500">+</span>
                <span className="text-lg font-serif text-slate-400">Prompt</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Prompt は毎回の指示。Preset は AI に事前に渡す文脈の基盤。<br />
                Preset が薄いと、どれだけ丁寧に Prompt しても汎用的な回答しか返ってこない。
              </p>
            </div>
          </div>

          {/* Preset の重要性 */}
          <div className="border border-slate-600 rounded-xl p-6 mb-6">
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-5">
              Preset が Precision を決める
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-slate-700 rounded-lg p-4 opacity-60">
                <p className="text-xs text-slate-500 mb-3">Preset なし（Gemini / NotebookLM）</p>
                <p className="text-xs text-slate-400 mb-1 font-mono">Prompt: "競合分析をまとめて"</p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">→ 一般的なフレームワークで回答。自社の状況・判断基準・過去の意思決定は反映されない。</p>
              </div>
              <div className="border border-purple-700 rounded-lg p-4">
                <p className="text-xs text-purple-400 mb-3">Preset あり（Cursor × Claude Code）</p>
                <p className="text-xs text-slate-400 mb-1 font-mono">Prompt: "競合分析をまとめて"</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">→ 自社の戦略・過去の判断・業界固有の制約を踏まえた、即使える分析が返ってくる。</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-4">Preset の構成要素</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Data", desc: "プロジェクト資料・仕様書・議事録" },
                { label: "Rules", desc: "判断基準・制約・出力形式" },
                { label: "Skills", desc: "再利用可能なアクション定義" },
                { label: "Memory", desc: "過去の学習・判断の蓄積" },
              ].map((item) => (
                <div key={item.label} className="border border-slate-700 rounded-lg p-3">
                  <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-slate-400 text-xs leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              これらを整備することが、この研修のゴール。Preset が厚くなるほど、Prompt は短くなり、アウトプットは具体的になる。
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. 研修のゴール ───────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-10">Goals of This Training</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-xl p-8">
              <p className="text-4xl font-serif text-[#5068a4] font-light mb-4">01</p>
              <p className="text-xl font-semibold text-slate-800 mb-3">スタートラインに立つ</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Cursor × Claude Code の環境を構築し、AI に実際に仕事を任せられる状態にする。
                環境が整って初めて、すべての活用が始まる。
              </p>
            </div>
            <div className="border border-slate-200 rounded-xl p-8">
              <p className="text-4xl font-serif text-[#5068a4] font-light mb-4">02</p>
              <p className="text-xl font-semibold text-slate-800 mb-3">各領域の活用基盤を作る</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                営業・マーケ・開発・経営企画——どの領域でも応用できる「型」を身につける。
                インフラは一度作れば、全領域に効く。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Learning Path ──────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Learning Path</p>
          <p className="text-2xl font-serif text-slate-800 mb-10">
            Phase 0–1 で基礎を、Phase 2–3 で精度の基盤を、Phase 4–5 で量を最大化する
          </p>

          <div className="flex flex-col gap-3">
            {phases.map((phase) => (
              <Link
                key={phase.slug}
                href={phase.href ?? `/phases/${phase.slug}`}
                className="group bg-white border border-slate-200 rounded-lg px-6 py-4 transition-all duration-200 hover:border-[#5068a4] hover:shadow-sm"
              >
                <p className="text-xs font-medium text-slate-400 mb-1 group-hover:text-[#5068a4] transition-colors duration-200">
                  {phase.phase}
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-slate-900">{phase.title}</span>
                  <span className="text-slate-300 mx-2">—</span>
                  <span className="text-slate-500">{phase.subtitle}</span>
                  <span className="text-slate-300 mx-2">|</span>
                  <span className="text-slate-400">{phase.description}</span>
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/phases/phase0-setup"
              className="btn-primary btn-lg inline-flex items-center gap-2.5 text-white font-semibold"
            >
              Start — Phase 0 へ
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 px-6 text-xs text-slate-400 flex justify-between max-w-4xl mx-auto">
        <p>Cursor × Claude Code Guide</p>
        <p>Second Brain // Complete Guide</p>
      </footer>
    </div>
  );
}
