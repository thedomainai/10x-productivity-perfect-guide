export interface PhaseInfo {
  slug: string;
  href?: string;
  title: string;
  subtitle: string;
  phase: string;
  description: string;
}

export const phases: PhaseInfo[] = [
  {
    slug: "phase0-setup",
    title: "Setup",
    subtitle: "セットアップ",
    phase: "Phase 0",
    description: "道具を揃える",
  },
  {
    slug: "phase1-basic-io",
    title: "Basic I/O",
    subtitle: "基本操作",
    phase: "Phase 1",
    description: "AI に調べさせる・書かせる・整理させる",
  },
  {
    slug: "phase2-context-supply",
    title: "Context Supply",
    subtitle: "文脈供給",
    phase: "Phase 2",
    description: "自分の「頭の中」を AI に渡す",
  },
  {
    slug: "phase3-expansion",
    title: "Expansion",
    subtitle: "能力拡張",
    phase: "Phase 3",
    description: "AI の知覚範囲を広げる",
  },
  {
    slug: "phase4-workflow-design",
    title: "Workflow Design",
    subtitle: "ワークフロー設計",
    phase: "Phase 4",
    description: "業務に組み込む",
  },
  {
    slug: "phase5-autonomous",
    title: "Autonomous",
    subtitle: "自律駆動",
    phase: "Phase 5",
    description: "AI が先回りして動く",
  },
  {
    slug: "appendix-advanced-environment",
    title: "Advanced Environment",
    subtitle: "上級者環境の実例",
    phase: "Appendix",
    description: "Second Brain を極限まで構築した環境",
  },
  {
    slug: "appendix-proposal-autopilot",
    href: "/appendix-autopilot",
    title: "Proposal Autopilot",
    subtitle: "自律提案書生成システム",
    phase: "Appendix",
    description: "BtoB 提案書を 70% 削減する自律駆動システムの設計",
  },
];
