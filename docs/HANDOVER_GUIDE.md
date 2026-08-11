# 引き継ぎガイド

## プロジェクト概要

ITS DAY公式Webサイトです。固定ページはコードで管理し、活動レポートと募集情報はmicroCMSで更新します。

## 主なファイル

- `app/`: 各ページ
- `components/`: Header、Footer、PageHeroなどの共通部品
- `lib/site-data.ts`: FAQ、活動内容、活動実績の共通データ
- `lib/microcms.ts`: microCMS取得処理
- `lib/seo.ts`: サイトURL、OGP、metadata共通設定
- `public/images/`: サイトで使用する写真
- `docs/`: 運用ドキュメント

## 更新の切り分け

- 活動レポートや募集情報を増やす: microCMS
- FAQ、活動実績、固定ページ文章を直す: コード修正
- デザインやページ構成を変える: コンポーネントまたはページ修正

## 公開前に必ず確認すること

- `pnpm lint`
- `pnpm build`
- 写真掲載許可
- プライバシーポリシー
- microCMSの公開状態
- Instagramと問い合わせメールの運用
- `NEXT_PUBLIC_SITE_URL`

## 現在の公開導線

- 学生向け問い合わせ: Instagram DM
- 一般問い合わせ: `wakana.oka.8@gmail.com`
- 募集応募リンク: microCMS `recruitments.applicationUrl`

## 注意

- microCMS APIキーをコードやGitHubへ入れないでください。
- 古い募集情報を現在の募集として見せないでください。
- 写真掲載許可が未確認のものは、人間が公開前に確認してください。
