# Phase 0: Setup（セットアップ）

## 到達状態

> エディタ（Cursor または Antigravity）と AI アシスタント（Claude Code または Gemini CLI）がインストールされ、AI に指示を出せる最低限の環境が動いている。

## 前提条件

- macOS または Windows のいずれか
- Google アカウント（Antigravity・Gemini CLI 用）または Anthropic アカウント（Claude Code 用）
- プログラミング経験は不要です

---

## 使用するツールの組み合わせ

このガイドでは、以下の 2 種類のツールを 1 つずつ選んでセットアップします。

| 役割 | 選択肢 A | 選択肢 B |
|------|----------|----------|
| **エディタ**（ファイルの管理・閲覧） | **Cursor** | **Antigravity** |
| **AI アシスタント**（指示を出す相手） | **Claude Code** | **Gemini CLI** |

どちらの組み合わせでも構いません。迷う場合は **Cursor + Claude Code** をおすすめします。

---

## Step 1: Node.js のインストール（全員必須）

Claude Code・Gemini CLI のどちらをインストールする場合も、事前に Node.js が必要です。

### macOS の場合

1. ブラウザで [https://nodejs.org/ja](https://nodejs.org/ja) を開きます
2. **「LTS（推奨版）」** と書かれたボタンをクリックしてダウンロードします
3. ダウンロードされた `.pkg` ファイルを開きます
4. 「続ける」→「続ける」→「インストール」と進め、完了まで待ちます

### Windows の場合

1. ブラウザで [https://nodejs.org/ja](https://nodejs.org/ja) を開きます
2. **「LTS（推奨版）」** と書かれたボタンをクリックしてダウンロードします
3. ダウンロードされた `.msi` ファイルを開きます
4. 「Next」を繰り返し押して進め、完了まで待ちます

### 動作確認

インストール完了後、PC を**一度再起動**してください。再起動後、次の Step で開くターミナルで以下を入力します。

```
node --version
```

`v20.x.x` のようなバージョン番号が表示されれば成功です。

---

## Step 2: エディタのインストール

### 選択肢 A: Cursor

#### macOS の場合

1. ブラウザで [https://cursor.com](https://cursor.com) を開きます
2. 「Download」をクリックします
3. ダウンロードされた `.dmg` ファイルを開きます
4. Cursor のアイコンを「Applications」フォルダにドラッグします
5. Launchpad または Applications フォルダから Cursor を起動します

#### Windows の場合

1. ブラウザで [https://cursor.com](https://cursor.com) を開きます
2. 「Download」をクリックします
3. ダウンロードされた `.exe` ファイルを実行します
4. 「Next」を繰り返し押して完了させます
5. インストール後、Cursor を起動します

---

### 選択肢 B: Antigravity

Google が提供する AI エディタです。Google アカウント（Gmail）でサインインして使います。

#### macOS の場合

1. ブラウザで [https://antigravity.google/download](https://antigravity.google/download) を開きます
2. 「macOS」を選択してダウンロードします
3. ダウンロードされたファイルを開き、インストーラーの指示に従って進めます
4. 起動後、「Sign in with Google」から Gmail アカウントでサインインします

#### Windows の場合

1. ブラウザで [https://antigravity.google/download](https://antigravity.google/download) を開きます
2. 「Windows」を選択してダウンロードします
3. ダウンロードされた `.exe` ファイルを実行します
4. 「Next」を繰り返し押して完了させます
5. 起動後、「Sign in with Google」から Gmail アカウントでサインインします

#### 初回セットアップの選択肢

起動後にいくつか設定画面が表示されます。迷った場合は以下を選んでください。

- セットアップフロー: 「新規開始」
- エージェントの使用方法: 「レビュー駆動開発（推奨）」
- Google 認証: Gmail アカウントでサインイン

---

## Step 3: ターミナルを開く

ターミナルとは、文字でコンピュータに命令を送るための画面です。

Step 2 でインストールしたエディタのターミナルを使います。

### Cursor のターミナルを開く

1. Cursor を起動します
2. 上部メニューの「Terminal」→「New Terminal」をクリックします
3. 画面下部にターミナルが表示されます

> ショートカット: `` Ctrl+` ``（macOS・Windows 共通）

### Antigravity のターミナルを開く

1. Antigravity を起動します
2. 上部メニューの「Terminal」→「New Terminal」をクリックします
3. 画面下部にターミナルが表示されます

---

## Step 4: AI アシスタントのインストール

### 選択肢 A: Claude Code

Anthropic（Claude の開発元）が提供する AI アシスタントです。

#### インストール（macOS・Windows 共通）

ターミナルで以下を入力して Enter を押します。

```
npm install -g @anthropic-ai/claude-code
```

文字がたくさん流れたあと、入力できる状態に戻れば完了です。

#### 動作確認

```
claude --version
```

バージョン番号が表示されれば成功です。

#### Anthropic アカウントの作成とログイン

まだアカウントをお持ちでない場合は、ブラウザで [https://console.anthropic.com](https://console.anthropic.com) を開いてアカウントを作成してください。

ターミナルで以下を入力して Enter を押します。

```
claude
```

初回起動時に認証画面が表示されます。画面の指示に従って Anthropic アカウントでログインしてください。

---

### 選択肢 B: Gemini CLI

Google（Gemini の開発元）が提供する AI アシスタントです。Google アカウントで無料利用できます。

#### インストール（macOS・Windows 共通）

ターミナルで以下を入力して Enter を押します。

```
npm install -g @google/gemini-cli
```

文字がたくさん流れたあと、入力できる状態に戻れば完了です。

#### 動作確認とログイン

```
gemini
```

初回起動時にブラウザが開き、Google アカウントのサインイン画面が表示されます。Gmail アカウントでサインインしてください。

サインイン完了後、ターミナルに戻ると AI と会話できる状態になります。

> 無料枠: 1 分あたり 60 リクエスト、1 日あたり 1,000 リクエストまで利用できます。

---

## Step 5: 動作確認

ターミナルで AI アシスタントを起動し、以下のように入力してみてください。

```
このフォルダにあるファイルを一覧してください
```

ファイルの一覧が返ってくれば、セットアップは完了です。

---

## セットアップ完了チェックリスト

- [ ] `node --version` でバージョン番号が表示される
- [ ] エディタ（Cursor または Antigravity）が起動できる
- [ ] エディタのターミナルが開ける
- [ ] AI アシスタントがインストールされている
  - Claude Code: `claude --version` でバージョン番号が表示される
  - Gemini CLI: `gemini` でサインイン済みの状態になっている
- [ ] AI に話しかけて返答が返ってくる

すべてチェックできたら → [Phase 1: Basic I/O](./phase1-basic-io.md) へ

---

## よくあるトラブル

### `node --version` を入力しても「コマンドが見つかりません」と表示される

Node.js インストール後に PC を再起動していない可能性があります。PC を再起動してからターミナルを開き直してください。

### `npm install` でエラーが出る（macOS）

`permission denied` と表示された場合は、先頭に `sudo` を付けて実行してください。

```
sudo npm install -g @anthropic-ai/claude-code
```

または

```
sudo npm install -g @google/gemini-cli
```

パスワード（PC のログインパスワード）を求められます。入力しても画面には表示されませんが、正しく入力されています。Enter を押してください。

### Claude Code の認証でエラーが出る

```
claude auth logout
claude
```

### Gemini CLI でブラウザが開かない

ターミナルに表示された URL をコピーして、ブラウザのアドレスバーに直接貼り付けてください。
