import Link from "next/link";

const phases6 = [
  { id: "01", label: "与件", sub: "ヒアリング・情報整理", color: "bg-slate-200 text-slate-700" },
  { id: "02", label: "論理構成", sub: "受注を勝ち確にする内容", color: "bg-slate-200 text-slate-700" },
  { id: "03", label: "ページ構成", sub: "何を何ページに配置するか", color: "bg-slate-200 text-slate-700" },
  { id: "04", label: "レイアウト", sub: "論理構造をレイアウトに変換", color: "bg-[#dae1f1] text-[#364070]" },
  { id: "05", label: "DS 構築", sub: "デザインシステム策定", color: "bg-[#dae1f1] text-[#364070]" },
  { id: "06", label: "コーディング", sub: "HTML 自動生成", color: "bg-[#5068a4] text-white" },
];

const infraLayers = [
  {
    id: "3.6",
    label: "Learning Loop",
    desc: "案件完了時に自動振り返り → Global skill を自己最適化",
    icon: "↺",
    color: "border-purple-300 bg-purple-50",
    accent: "text-purple-600",
  },
  {
    id: "3.5",
    label: "RunTrace",
    desc: "全フェーズの実行・レビュー結果を state.yaml に構造化記録",
    icon: "◉",
    color: "border-blue-300 bg-blue-50",
    accent: "text-blue-600",
  },
  {
    id: "3.4",
    label: "Scope Degradation",
    desc: "行き詰まり時に must-have を守りつつ nice-to-have を自動削減",
    icon: "▽",
    color: "border-amber-300 bg-amber-50",
    accent: "text-amber-600",
  },
  {
    id: "3.3",
    label: "Failure Pipeline",
    desc: "Type A–D 分類による自動修復 → 前フェーズ差し戻し → エスカレーション",
    icon: "⟲",
    color: "border-orange-300 bg-orange-50",
    accent: "text-orange-600",
  },
  {
    id: "3.2",
    label: "Cross-Phase Consistency",
    desc: "フェーズ間の整合性を自動検証（前提 → 論理 → 構成 → レイアウト）",
    icon: "⇌",
    color: "border-teal-300 bg-teal-50",
    accent: "text-teal-600",
  },
  {
    id: "3.1",
    label: "Deterministic Evaluator",
    desc: "LLM より前に純粋関数で弾く。空欄・禁止語・スキーマ違反を即座に検出",
    icon: "✓",
    color: "border-slate-300 bg-slate-50",
    accent: "text-slate-600",
  },
];

const impacts = [
  { phase: "Phase 02\n論理構成", before: "6セッション", after: "1コマンド", reduction: "83%", detail: "6検証レンズを並列自動実行" },
  { phase: "Phase 06\nコーディング", before: "20セッション", after: "3セッション", reduction: "85%", detail: "宣言的 YAML → HTML 自動生成" },
  { phase: "全体", before: "34セッション", after: "10セッション", reduction: "70%", detail: "フェーズ自律遷移 + 自動品質ゲート" },
];

export default function ProposalAutopilotPage() {
  return (
    <div className="py-8 lg:py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back nav */}
        <div className="mb-10">
          <Link href="/phases/appendix-advanced-environment" className="text-sm text-slate-400 hover:text-[#5068a4] transition-colors">
            ← Appendix 1: Advanced Environment
          </Link>
        </div>

        {/* ── Hero ─────────────────────────────────────────── */}
        <div className="mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-slate-400 border border-slate-200 rounded px-2.5 py-1 mb-4">
            Appendix 2
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-900 mb-4">
            Proposal Autopilot
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            BtoB 提案書を自律生成する Claude Code スキルの設計。<br />
            実案件（29スライド）の制作実績から抽出した、再現可能なシステム。
          </p>
        </div>

        {/* ── Section 1: なぜ必要か ────────────────────────── */}
        <section className="mb-20">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-8">01 — Problem</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { num: "34", unit: "セッション", label: "1件の提案書にかかったセッション数" },
              { num: "83", unit: "エージェント", label: "起動したサブエージェント総数" },
              { num: "99", unit: "MB", label: "蓄積されたセッションデータ" },
              { num: "4", unit: "日間", label: "プロジェクト全体の所要期間" },
            ].map((stat) => (
              <div key={stat.num} className="border border-slate-200 rounded-xl p-5 text-center">
                <p className="text-3xl md:text-4xl font-serif font-light text-slate-800">{stat.num}</p>
                <p className="text-xs font-semibold text-[#5068a4] mb-2">{stat.unit}</p>
                <p className="text-xs text-slate-400 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* 工数分布 棒グラフ */}
          <div className="border border-slate-200 rounded-xl p-6 mb-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-5">Phase別 工数分布</p>
            <div className="space-y-3">
              {[
                { label: "Phase 0-1 与件・インプット", pct: 5, sessions: "1-2" },
                { label: "Phase 2 テキスト構築", pct: 20, sessions: "3-5" },
                { label: "Phase 4 レイアウト設計", pct: 10, sessions: "2-3" },
                { label: "Phase 5 HTML生成・修正", pct: 65, sessions: "20-25", highlight: true },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <div className="w-36 shrink-0 text-xs text-slate-500 text-right leading-tight">{row.label}</div>
                  <div className="flex-1 h-7 bg-slate-100 rounded overflow-hidden">
                    <div
                      className={`h-full rounded flex items-center px-2 text-xs font-semibold transition-all ${
                        row.highlight ? "bg-[#5068a4] text-white" : "bg-slate-300 text-slate-600"
                      }`}
                      style={{ width: `${row.pct}%` }}
                    >
                      {row.pct}%
                    </div>
                  </div>
                  <div className="w-16 shrink-0 text-xs text-slate-400">{row.sessions} sessions</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              <span className="font-semibold text-[#5068a4]">コーディング（Phase 5）が全体の 65%</span> を占める。
              原因はスライドごとの render 関数の手書きと、HTML 微調整の反復ループ。
            </p>
          </div>
        </section>

        {/* ── Section 2: 設計思想 ──────────────────────────── */}
        <section className="mb-20">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-8">02 — Design Principles</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                num: "I",
                title: "判断と作業を分離する",
                desc: "何を伝えるか・どう配置するか = 人間 or AI の意思決定。HTML生成・差分チェック・ファイル管理 = 完全自動化。",
              },
              {
                num: "II",
                title: "宣言的に定義し、命令的に実行する",
                desc: "「このスライドは3カラムカード型」= 宣言（YAML）。「f-stringでHTML組み立て」= 命令（自動生成）。",
              },
              {
                num: "III",
                title: "Global と PJ個別 を区別する",
                desc: "やり方（Global skill）は一度作れば全案件で再利用。成果物（PJ個別 output）は案件ごとに新規作成。",
              },
            ].map((p) => (
              <div key={p.num} className="border border-slate-200 rounded-xl p-6">
                <p className="text-2xl font-serif text-slate-300 mb-3">{p.num}</p>
                <p className="font-semibold text-slate-800 mb-2 text-sm">{p.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Global / PJ個別 分離図 */}
          <div className="border border-slate-200 rounded-xl p-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-5">アーキテクチャ分離</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-bold text-[#5068a4] mb-3 uppercase tracking-wider">Global skill — 全案件共通</p>
                <div className="space-y-2 text-xs text-slate-600">
                  {["G-orch: オーケストレータ (state.yaml 駆動)", "G-01r〜G-06r: 各フェーズのレビュー prompt", "G-02a: 検証レンズ ×6 (サブエージェント)", "G-06a,b,c: パーサー・テンプレートエンジン", "D-XXx: 決定論的チェック群"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#5068a4]">▸</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-slate-400">配置先: ~/.claude/skills/proposal-engine/</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">PJ 個別 output — 案件ごと</p>
                <div className="space-y-2 text-xs text-slate-600">
                  {["state.yaml: 案件の進捗状態", "premises.md / requirement.md: 与件", "proposal-final.md: 提案テキスト (SSoT)", "slide-config.yaml: レイアウト宣言", "final.html: 最終成果物"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-slate-400">▸</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-slate-400">配置先: proposal/ (プロジェクトごと)</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: 6フェーズフロー ───────────────────── */}
        <section className="mb-20">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-8">03 — 6 Phase Flow</p>

          {/* フロー図 */}
          <div className="mb-6">
            {/* 上段: 01→02→03 */}
            <div className="flex items-stretch gap-2 mb-2">
              {phases6.slice(0, 3).map((p, i) => (
                <div key={p.id} className="flex items-center gap-2 flex-1">
                  <div className={`flex-1 rounded-lg p-4 ${p.color}`}>
                    <p className="text-xs font-bold mb-1">{p.id}</p>
                    <p className="font-semibold text-sm">{p.label}</p>
                    <p className="text-xs opacity-70 mt-1">{p.sub}</p>
                  </div>
                  {i < 2 && <span className="text-slate-300 text-lg shrink-0">→</span>}
                </div>
              ))}
            </div>

            {/* 矢印 */}
            <div className="flex justify-end mr-[calc(66%+0.5rem)] mb-2">
              <span className="text-slate-300 text-lg">↓</span>
            </div>

            {/* 下段: 04+05（並行）→ 06 */}
            <div className="flex items-stretch gap-2">
              <div className="flex-[2] flex gap-2">
                {phases6.slice(3, 5).map((p, i) => (
                  <div key={p.id} className="flex-1">
                    <div className={`rounded-lg p-4 h-full ${p.color}`}>
                      <p className="text-xs font-bold mb-1">{p.id}</p>
                      <p className="font-semibold text-sm">{p.label}</p>
                      <p className="text-xs opacity-70 mt-1">{p.sub}</p>
                    </div>
                    {i === 0 && (
                      <p className="text-center text-xs text-slate-400 mt-1">並行実行可</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <span className="text-slate-300 text-lg">→</span>
              </div>
              <div className="flex-1">
                <div className={`rounded-lg p-4 h-full ${phases6[5].color}`}>
                  <p className="text-xs font-bold mb-1 opacity-70">{phases6[5].id}</p>
                  <p className="font-semibold text-sm">{phases6[5].label}</p>
                  <p className="text-xs opacity-70 mt-1">{phases6[5].sub}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 各フェーズの構造 */}
          <div className="border border-slate-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">各フェーズの内部構造（共通）</p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {["作業実行", "→", "D-XXx 決定論的チェック", "→", "G-XXr LLM レビュー", "→", "Pass / Fail 判定", "→", "次フェーズへ"].map((step, i) => (
                step === "→" ? (
                  <span key={i} className="text-slate-300">{step}</span>
                ) : (
                  <span key={i} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded">{step}</span>
                )
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Fail 時は Failure Pipeline が自動分類（Type A–D）し、自動修正 → 差し戻し → エスカレーションを判断する
            </p>
          </div>
        </section>

        {/* ── Section 4: 自律駆動インフラ 6層 ──────────────── */}
        <section className="mb-20">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">04 — Autonomous Infrastructure</p>
          <p className="text-slate-500 text-sm mb-8 max-w-xl">
            フェーズ定義とレビュー prompt だけでは「人間が指示して AI が作業する」構造を超えない。
            以下の 6 層が、フェーズ遷移・失敗回復・品質保証・学習を自律的に実行させる。
          </p>

          {/* スタック図（上が高レイヤー） */}
          <div className="space-y-3">
            {infraLayers.map((layer) => (
              <div key={layer.id} className={`border rounded-xl p-5 ${layer.color}`}>
                <div className="flex items-start gap-4">
                  <span className={`text-2xl font-mono shrink-0 ${layer.accent}`}>{layer.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <p className={`font-semibold text-sm ${layer.accent}`}>{layer.label}</p>
                      <span className="text-xs text-slate-400">{layer.id}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* コマンド設計 */}
          <div className="mt-6 border border-slate-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">コマンドインターフェース</p>
            <div className="space-y-2">
              {[
                { cmd: "/proposal-engine init", desc: "新規案件の初期化（state.yaml 生成）" },
                { cmd: "/proposal-engine run", desc: "Phase 01-06 を自律実行（Failure Pipeline + Scope Degradation 込み）" },
                { cmd: "/proposal-engine validate", desc: "Phase 02 の検証レンズ 6本を並列実行" },
                { cmd: "/proposal-engine review", desc: "現在フェーズの LLM レビューを実行" },
                { cmd: "/proposal-engine status", desc: "RunTrace を含む現在地レポート" },
                { cmd: "/proposal-engine learn", desc: "案件完了後の振り返り → patterns.md 更新" },
              ].map((c) => (
                <div key={c.cmd} className="flex items-start gap-3 text-xs">
                  <code className="bg-slate-900 text-green-400 px-2 py-1 rounded font-mono shrink-0 text-[11px]">{c.cmd}</code>
                  <span className="text-slate-500 pt-1">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: 効果予測 ──────────────────────────── */}
        <section className="mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-8">05 — Impact</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {impacts.map((item) => (
              <div key={item.phase} className="border border-slate-200 rounded-xl p-6">
                <p className="text-xs text-slate-400 mb-3 whitespace-pre-line">{item.phase}</p>
                <div className="flex items-end gap-3 mb-3">
                  <div className="text-center">
                    <p className="text-xs text-slate-400 mb-1">Before</p>
                    <p className="text-xl font-serif text-slate-500 line-through">{item.before}</p>
                  </div>
                  <span className="text-slate-300 mb-1">→</span>
                  <div className="text-center">
                    <p className="text-xs text-slate-400 mb-1">After</p>
                    <p className="text-xl font-serif text-[#5068a4] font-semibold">{item.after}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-serif text-slate-800 font-light">{item.reduction}</span>
                  <span className="text-xs text-slate-400">削減</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* 全体の実装ロードマップ */}
          <div className="border border-slate-200 rounded-xl p-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-5">実装ロードマップ</p>
            <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
              {[
                { id: "Impl-A", label: "基盤構築", sub: "G-orch + 全レビュー prompt" },
                { id: "Impl-B", label: "検証自動化", sub: "6検証レンズ サブエージェント" },
                { id: "Impl-C", label: "生成パイプライン", sub: "パーサー + テンプレートエンジン" },
                { id: "Impl-D", label: "E2E 統合", sub: "自律フェーズ遷移フロー" },
                { id: "Impl-E", label: "自律駆動インフラ", sub: "Failure Pipeline + Learning" },
              ].map((step, i) => (
                <div key={step.id} className="flex items-center gap-2">
                  <div className="border border-slate-200 rounded-lg px-3 py-2 text-center min-w-[90px]">
                    <p className="text-xs font-bold text-[#5068a4]">{step.id}</p>
                    <p className="text-xs font-semibold text-slate-700">{step.label}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{step.sub}</p>
                  </div>
                  {i < 4 && <span className="text-slate-300 shrink-0">→</span>}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">A → B + C（並行）→ D → E の順で実装。B と C は並行着手可。</p>
          </div>
        </section>

        {/* Back / Home nav */}
        <nav className="pt-8 border-t border-slate-200 flex justify-between">
          <Link href="/phases/appendix-advanced-environment" className="group inline-flex flex-col items-start">
            <span className="text-sm text-slate-400 mb-1">← Previous</span>
            <span className="font-medium text-[#5068a4] group-hover:text-[#363f60] transition-colors">
              Appendix: Advanced Environment
            </span>
          </Link>
          <Link href="/" className="group inline-flex flex-col items-end">
            <span className="text-sm text-slate-400 mb-1">Back</span>
            <span className="font-medium text-[#5068a4] group-hover:text-[#363f60] transition-colors">
              Overview
            </span>
          </Link>
        </nav>

      </div>
    </div>
  );
}
