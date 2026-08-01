# 引き継ぎガイド

## プロジェクト概要

ITS DAY公式Webサイトです。主要プログラムは `3Days School` と `スラムツアー` です。

## 主なファイル

- `app/`: ページ
- `components/`: 共通部品
- `lib/site-data.ts`: 固定データ
- `lib/microcms.ts`: microCMS接続
- `public/images/`: 画像
- `docs/`: 運用ドキュメント

## 更新時の判断

- 活動レポートや募集情報を更新したい: microCMS
- FAQや活動実績の文章を変えたい: `lib/site-data.ts`
- ページの見た目や構成を変えたい: `app/` または `components/`

## 公開前の人間確認

- 写真掲載許可
- 法務確認
- 問い合わせ窓口
- 応募フォームURL
- 募集情報の日程、料金、締切
- 活動実績の数字

## 開発時の確認コマンド

```bash
pnpm lint
pnpm build
```

## 本番で避けること

- `.env` をGitに入れる
- APIキーを `NEXT_PUBLIC_` 付きで公開する
- 未確認の日程や料金を公開中の募集として出す
- 写真掲載許可未確認の内部メモを画面に出す
