# Phase 0: Setup（セットアップ）

## 到達状態

> Cursor と Claude Code がインストールされ、両ツールで AI に指示を出せる最低限の環境が動いている。

## 前提条件

- macOS / Windows / Linux のいずれか
- Anthropic アカウント（Claude Code 用）
- プログラミング経験は不要

## 0-1. Cursor のインストール

### インストール手順

1. [cursor.com](https://cursor.com) にアクセス
2. OS に合わせたインストーラをダウンロード
3. インストール後、起動

### 初期設定

1. **AI モデルの選択**: Settings > Models から使用するモデルを確認
2. **Privacy Mode**: Settings > Privacy で共有設定を確認

### 動作確認

1. 任意のテキストファイルを開く
2. `Cmd+L`（Chat）を開き、「こんにちは」と入力
3. AI が返答すれば成功

## 0-2. Claude Code のインストール

### インストール手順

```bash
# npm でインストール
npm install -g @anthropic-ai/claude-code

# インストール確認
claude --version
```

### 認証

```bash
# 初回起動時に認証フローが開始される
claude
# Anthropic アカウントでログイン
```

### 動作確認

```bash
# 任意のディレクトリで起動
cd ~/Documents
claude
# 「このディレクトリにあるファイルを一覧して」と入力
# ファイルリストが返れば成功
```

## 0-3. 2 つのツールの役割を理解する

### Cursor = 画面の中で AI と一緒に作業する

エディタ（テキスト編集ソフト）の中に AI が統合されている。ファイルを見ながら、その場で AI に質問・編集・生成を依頼できる。

**得意なこと:**
- 目の前のファイルについて質問する
- テキストの一部を選んで「これを直して」と頼む
- リアルタイムで補完・提案を受ける

### Claude Code = テキスト指示で AI に作業を丸投げする

ターミナル（黒い画面にテキストで指示を打ち込むアプリ。Mac では「ターミナル.app」、Windows では「PowerShell」）で動く AI アシスタント。ファイルの読み書き、情報の整理、コマンド実行を自律的に行える。

**得意なこと:**
- 複数のファイルをまたいだ作業
- 「調べて→まとめて→書いて」の一連の流れ
- 人間が離席中でも作業を継続する

### いつどちらを使うか（初期の目安）

| 場面 | 使うツール |
|------|-----------|
| 目の前のファイルを修正したい | Cursor |
| ファイルの内容について質問したい | Cursor |
| 複数ファイルをまたぐ作業 | Claude Code |
| 調査→整理→文書作成の一連作業 | Claude Code |
| まだよくわからない | どちらでも OK。慣れたら使い分ける |

## 0-4. セットアップの確認チェックリスト

- [ ] Cursor が起動し、ファイルを開ける
- [ ] Cursor のチャット（Cmd+L）で AI が返答する
- [ ] Claude Code が `claude --version` で応答する
- [ ] Claude Code で認証が完了している
- [ ] Claude Code でファイル一覧やファイルの中身を読み取れる

すべてチェックできたら → [Phase 1: Basic I/O](./phase1-basic-io.md) へ

## よくあるトラブル

### Cursor が AI 応答を返さない

- ネットワーク接続を確認
- Settings > Models でモデルが有効になっているか確認
- Cursor のバージョンが最新か確認

### Claude Code のインストールに失敗する

```bash
# Node.js のバージョンを確認（18 以上が必要）
node --version

# npm のキャッシュをクリアして再インストール
npm cache clean --force
npm install -g @anthropic-ai/claude-code
```

### Claude Code の認証でエラーが出る

```bash
# 認証情報をリセット
claude auth logout
claude auth login
```
