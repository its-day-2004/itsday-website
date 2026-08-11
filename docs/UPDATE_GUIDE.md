# 更新ガイド

公開後の更新は、内容によって作業場所が変わります。

## microCMSだけで更新できる内容

管理画面で入力・公開すればサイトへ反映されます。

- 活動レポート
- 募集情報
- 募集状況
- 応募フォームURL
- 記事本文
- 記事画像、アイキャッチ画像

活動レポートは `reports`、募集情報は `recruitments` を使います。

## Codex / コード修正が必要な内容

固定ページや共通データの更新です。

- ITS DAYについての文章
- 活動内容の文章
- 活動実績
- FAQ
- 団体概要
- 年表
- お問い合わせ先
- SNSリンク
- 固定ページで使う写真

主な編集先は `lib/site-data.ts` と各 `app/*/page.tsx` です。

## ページやコンポーネントの修正が必要な内容

見た目や仕組みを変える場合です。

- ページ構成
- レイアウト
- デザイン
- アニメーション
- 新しい機能
- 新しいページ
- フォーム送信機能

## 募集情報を更新する流れ

1. microCMSの `recruitments` に記事を作ります。
2. `title`、`slug`、`thumbnail`、`excerpt`、`content`、`applicationUrl`、`isOpen` を入力します。
3. 公開します。
4. `/recruitments` と `/recruitments/{slug}` を確認します。

募集がない時期は、公開中の募集記事を0件にするか、`isOpen` をfalseにして誤認を避けます。

## 活動レポートを更新する流れ

1. microCMSの `reports` に記事を作ります。
2. `title`、`slug`、`category`、`thumbnail`、`excerpt`、`content`、必要に応じて `gallery` を入力します。
3. 公開します。
4. `/reports` と `/reports/{slug}` を確認します。

## 注意

- 古い募集日程や費用を現在の募集に見せないでください。
- 写真は掲載許可を確認してから使ってください。
- microCMS APIキーはコードに書かず、Vercelの環境変数で管理してください。
