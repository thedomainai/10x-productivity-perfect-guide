# Phase 0: Setup（セットアップ）

## 到達状態

> Cursor（エディタ）と Claude Code（AI アシスタント）がインストールされ、Claude Code に指示を出せる最低限の環境が動いている。

## 前提条件

- macOS / Windows / Linux のいずれか
- Anthropic アカウント（Claude Code 用）
- プログラミング経験は不要

## 0-1. Cursor のインストール

### インストール手順

1. [cursor.com](https://cursor.com) にアクセス
2. OS に合わせたインストーラをダウンロード
3. インストール後、起動

### 動作確認

1. 任意のフォルダを開ける
2. ファイルの作成・編集ができる
3. ターミナル（`Ctrl+`` ）が開ける

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

### Cursor = ファイルを見る・編集するためのエディタ

Cursor はエディタ（テキスト編集ソフト）として使用する。ファイルの閲覧・編集・プロジェクト管理の UI として機能する。

**このガイドでの使い方:**
- ファイルの閲覧・手動編集
- プロジェクトのフォルダ構造の確認
- ターミナルから Claude Code を起動する

### Claude Code = テキスト指示で AI に作業を丸投げする

Cursor のターミナル（`Ctrl+`` で開く）で動く AI アシスタント。ファイルの読み書き、情報の整理、コマンド実行を自律的に行える。

**得意なこと:**
- 複数のファイルをまたいだ作業
- 「調べて→まとめて→書いて」の一連の流れ
- 人間が離席中でも作業を継続する

### 使い方のイメージ

```
Cursor（エディタ画面）  → ファイルの閲覧・確認・手動修正
Cursor（ターミナル）    → Claude Code を起動して AI に指示
```

すべての AI 操作は Cursor のターミナルから Claude Code を通じて行う。

## 0-4. セットアップの確認チェックリスト

- [ ] Cursor が起動し、ファイルを開ける
- [ ] Cursor のターミナル（`Ctrl+`` ）が開ける
- [ ] Claude Code が `claude --version` で応答する
- [ ] Claude Code で認証が完了している
- [ ] Claude Code でファイル一覧やファイルの中身を読み取れる

すべてチェックできたら → [Phase 1: Basic I/O](./phase1-basic-io.md) へ

## よくあるトラブル

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
