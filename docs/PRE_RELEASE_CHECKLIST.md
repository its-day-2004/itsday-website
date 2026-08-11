# 公開前チェックリスト

## 公開可能な内容

- HOME
- ITS DAYについて
- 活動内容
- 活動実績
- 参加を考えている方へ
- 募集情報
- よくある質問
- 活動レポート
- お問い合わせ
- プライバシーポリシー
- 404ページ

## 仮データ

- `lib/site-data.ts` の `activityReports`

活動レポートのみ、microCMSの取得に成功してデータが0件の場合に確認用モックが表示されます。取得エラー時はモックではなく準備中表示になります。

募集情報はmicroCMSに投稿されたものだけを表示します。CMSが0件または取得エラーの場合、モック募集情報は表示しません。

## 未確定情報

- 最新の募集日程、参加費、募集人数
- 募集ごとの応募フォームURL
- 独自ドメイン
- 写真掲載許可
- 活動実績の最終確認値

## リンク

- Instagram: `https://www.instagram.com/its_day_inslum?utm_source=qr`
- 一般問い合わせメール: `wakana.oka.8@gmail.com`
- 募集情報の応募リンクはmicroCMSの `applicationUrl` から表示します。

## 写真掲載確認が必要なもの

`public/images/` 配下の全写真は、公開前に掲載許可を確認してください。

- `hero-classroom.jpeg`
- `classroom-writing.jpeg`
- `sports.jpeg`
- `festival.jpeg`
- `meal.jpeg`
- `slum-tour.jpeg`
- `group-blue.jpeg`
- `pre-meeting.jpeg`
- `safety-briefing.jpeg`
- `reflection.jpeg`
- `student-lecture.jpeg`
- `noto-volunteer.jpeg`
- `hero-contact.jpeg`
- `hero-recruitments.jpeg`
- `hero-join.jpeg`
- `hero-reports.jpeg`
- `hero-achievements.jpg`
- `about-background.jpeg`
- `logo.jpeg`

## 法的確認が必要なもの

- プライバシーポリシー
- 応募フォームで取得する個人情報の取り扱い
- 問い合わせメール運用時の個人情報の取り扱い
- 写真の肖像権、掲載同意

## microCMS接続後に確認するもの

- `reports` 一覧、詳細、thumbnail、gallery、content
- `recruitments` 一覧、詳細、thumbnail、content、applicationUrl、isOpen
- slugで詳細ページが開けること
- CMS取得エラー時にサイト全体が落ちないこと

## SEO / OGP

- title / description / canonical
- OGP / Twitter Card
- favicon / apple touch icon
- manifest
- robots.txt
- sitemap.xml
- JSON-LD Organization
- `NEXT_PUBLIC_SITE_URL` の値

## 表へ出してはいけないもの

- TODO表示
- 仮の応募フォームURL
- 未確認の日程や料金
- 開発者向け注意書き
- 写真掲載許可に関する内部メモ
- microCMSなどの開発用語を一般ページの本文として見せる表現

## 公開直前コマンド

```bash
pnpm lint
pnpm build
```
