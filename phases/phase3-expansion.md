# Phase 3: Expansion（能力拡張）

## 到達状態

> AI が外部の情報源やツールと接続され、定型的な業務アクションを再現可能な形で自動化できる。
> Skills, MCP, Memory, Hooks を活用して、AI の「できること」が拡張されている。

## Phase 2 との違い

Phase 2 では AI に「何を知っているべきか」を教えた（= 静的な文脈供給）。
Phase 3 では AI に「何ができるべきか」を教え、「何を覚えるべきか」を蓄積する。

```
Phase 2: 知識の供給  → AI が「正しく考える」ための背景情報
Phase 3: 能力の拡張  → AI が「実際に行動する」ための道具と記憶
```

## 3-1. Skills — 再利用可能な業務アクション

### Skills とは

Skills は Claude Code に**繰り返す業務手順をパターンとして教える**仕組み。
一度定義すれば、スラッシュコマンド（`/skill-name`）や自然言語で呼び出せる。

### Skills のディレクトリ構成

```
~/.claude/skills/                 ← グローバル（全プロジェクト共通）
  └── research/SKILL.md
  └── weekly-report/SKILL.md

~/project/.claude/skills/         ← プロジェクト固有
  └── status-update/SKILL.md
```

### SKILL.md の書き方

**例 1: リサーチ Skill**

```markdown
---
name: research
description: 指定されたトピックについて多角的にリサーチし、構造化されたレポートを出力する
user-invocable: true
---

# Research Skill

## 手順
1. トピックを確認する
2. Web 検索で最新情報を 5 件以上収集する
3. 以下の構造でレポートを作成する:
   - 概要（3 行以内）
   - 主要な論点（3-5 項目）
   - 各論点の詳細と根拠
   - 自分のプロジェクトへの示唆
   - 情報源一覧

## 制約
- 情報源は必ず明記する
- 1次情報と2次情報を区別する
- 不確実な情報には「未検証」と注記する
```

**例 2: 週次レポート Skill**

```markdown
---
name: weekly-report
description: 今週の活動と来週の計画を定型フォーマットでまとめる
user-invocable: true
---

# Weekly Report Skill

## 手順
1. 今週の作業ログ・議事録・成果物を確認する
2. 以下のフォーマットでレポートを作成する:
   - 今週の成果（箇条書き 3-5 項目）
   - KPI 進捗（数値 + 前週比）
   - 課題・リスク（影響度順）
   - 来週の計画（優先度順、担当者明記）
3. reports/ ディレクトリに保存する

## 制約
- A4 1 枚に収まる分量
- 数値には必ず前週比を添える
```

### ビジネスマン向けの推奨 Skills

| Skill | 内容 |
|-------|------|
| research | トピックの調査と構造化レポート |
| weekly-report | 週次レポートの自動生成 |
| meeting-prep | 会議資料の事前準備（議題整理、論点抽出） |
| minutes | 議事録の整理とアクションアイテム抽出 |
| comparison | 複数の選択肢を比較表にまとめる |
| proposal | 提案書のドラフト作成 |
| email-draft | 要件を伝えるとビジネスメールのドラフトを作成 |

### user-invocable の使い分け

| 設定 | 呼び出し方 | 用途 |
|------|-----------|------|
| `true` | `/research AI市場動向` で明示的に呼び出し | 意図的に実行したいアクション |
| `false` | AI が文脈から自動判断して使用 | 暗黙的に適用すべきパターン |

## 3-2. MCP — 外部サービスとの接続

### MCP（Model Context Protocol）とは

MCP は AI が**外部のツールやデータソースに直接アクセスする**ための仕組み。
GitHub、Slack、データベース、Web API などと接続できる。

### 設定方法

> **注意**: MCP の設定は JSON（設定ファイルの形式）の編集が必要です。初めての方はエンジニアや技術に詳しい同僚に相談するか、Claude Code に「MCP サーバーを設定して」と依頼すると設定を手伝ってくれます。

設定ファイル（`~/.claude/mcp.json`）に接続先を記述する:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "..."
      }
    }
  }
}
```

### ビジネスマン向けの MCP 活用例

| MCP サーバー | できること | 活用場面 |
|-------------|-----------|---------|
| GitHub | Issue/PR の参照・作成 | 開発チームとの連携 |
| Slack | メッセージの参照・送信 | チームコミュニケーション |
| Fetch | 任意の URL からデータ取得 | Web 上の情報収集 |
| PostgreSQL | DB スキーマ確認・クエリ実行 | データ分析 |
| Google Drive | ドキュメントの参照 | 社内資料の検索 |

### MCP 導入の判断基準

```
AI に「ここを見て」「ここに書いて」と頻繁に指示する外部サービスはあるか？
  → Yes → MCP で接続を自動化する
  → No  → 不要（都度 @web 等で対応）
```

## 3-3. Memory — 過去の学習と判断の蓄積

### Memory とは

Memory は**セッションを超えて AI の学習を蓄積する**仕組み。
過去のセッションで得た知見、プロジェクトの経緯、意思決定の履歴を保存する。

### CLAUDE.md との違い

| | CLAUDE.md | Memory |
|---|-----------|--------|
| 更新頻度 | 月単位で安定 | 日〜週単位で更新 |
| 内容 | 構造化された基本情報 | 作業中に発見した知見 |
| 例 | 役割、KPI、用語集 | デバッグ知見、判断履歴、パターン |

### Memory のディレクトリ構成

```
~/.claude/projects/{project-path}/memory/
├── MEMORY.md              ← 自動読み込み（200行まで。要点のみ）
├── decisions.md           ← 意思決定の記録
├── lessons-learned.md     ← 学んだこと
└── contacts.md            ← 関係者の情報
```

### MEMORY.md の例

```markdown
# Memory

## プロジェクト固有の注意点
- 田中 PO は結論ファーストのレポートを好む。背景説明は最小限に
- 経営会議資料は必ず「売上インパクト」の数値を含める
- FP（フルフィルメントパートナー）の契約更新は毎年3月

## 過去の判断とその理由
- 2026/01: 価格体系を従量課金に変更 → 理由: パイロット顧客の意見で固定費がハードルと判明
- 2026/01: React → Next.js に移行 → 理由: SSR によるSEO改善と開発効率向上

## 詳細ファイル
- 意思決定の記録: → [decisions.md](./decisions.md)
- 学んだこと: → [lessons-learned.md](./lessons-learned.md)
```

### Memory の育て方

Memory は最初から完璧に書く必要はない。以下のタイミングで更新する:

1. **意思決定をしたとき**: 「何を選び」「なぜその判断にしたか」を記録
2. **問題を解決したとき**: 「何が原因で」「どう解決したか」を記録
3. **人から学んだとき**: 「誰がどんな好みを持っているか」を記録
4. **セッション終了時**: そのセッションの学びを蒸留して記録

## 3-4. Hooks — イベント駆動の自動処理

### Hooks とは

Hooks は Claude Code の**特定のタイミングで自動実行される処理**。

### ビジネスマン向けの Hooks 活用

| イベント | 用途例 |
|---------|--------|
| `PostToolUse` (Write/Edit) | ファイル保存後に自動フォーマット |
| `Notification` | タスク完了時にデスクトップ通知 |
| `Stop` | セッション終了時に作業ログを自動記録 |

```json
// ~/.claude/settings.json
{
  "hooks": {
    "Notification": [
      {
        "command": "terminal-notifier -message '$CLAUDE_NOTIFICATION' -title 'Claude Code'"
      }
    ]
  }
}
```

Hooks は Phase 5（自律駆動）でより本格的に活用する。この段階では「こういう仕組みがある」と理解しておけば十分。

## 3-5. 実践: 能力拡張の設定

### 演習 1: 業務 Skill を 1 つ作成する

1. 自分が週に 1 回以上行う定型業務を 1 つ選ぶ
2. その手順を SKILL.md として記述する
3. Claude Code で `/skill-name` として呼び出し、動作を確認する

### 演習 2: Memory を育て始める

1. `MEMORY.md` を作成する
2. 今の業務で「AI が知っていたら助かる」情報を 3 つ以上書く
3. 次のセッションで Memory の情報が活用されることを確認する

### 演習 3: MCP で外部サービスを接続する（任意）

1. 最もよく使う外部サービスの MCP サーバーを設定する
2. Claude Code からそのサービスの情報にアクセスできることを確認する

## Phase 3 の完了チェックリスト

- [ ] 少なくとも 1 つの業務 Skill を作成し、動作を確認した
- [ ] Memory に業務知見を 3 つ以上記録した
- [ ] Skills / MCP / Memory / Hooks それぞれの用途の違いを説明できる
- [ ] 「定型的な業務手順を Skill にする」という発想が身についた

すべてチェックできたら → [Phase 4: Workflow Design](./phase4-workflow-design.md) へ
