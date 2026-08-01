# 公開前チェックリスト

## 公開可能な内容

- HOME
- ITS DAYについて
- 活動内容
- 活動実績
- 参加を考えている方へ
- よくある質問
- お問い合わせの準備中表示
- プライバシーポリシーの基本文面

## 仮データ

- `lib/site-data.ts` の `activityReports`
- `lib/site-data.ts` の `recruitments`

本番ではmicroCMS未接続時に表示されません。開発環境または `SHOW_MOCK_CONTENT=true` の場合のみ確認用に表示されます。

## 未確定情報

- 最新の募集情報
- 応募フォームURL
- 問い合わせ窓口
- 活動実績の最終確認値
- 独自ドメイン

## リンク未設定

- 問い合わせフォームは現在「準備中」表示です。
- SNSリンクは未設定のためフッターから削除済みです。

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
- `logo.jpeg`

## 法的確認が必要なもの

- プライバシーポリシー
- 問い合わせフォームで取得する個人情報の取り扱い
- 応募フォームで取得する個人情報の取り扱い
- 写真の肖像権、掲載同意

## microCMS接続後に確認するもの

- 活動レポート一覧
- 活動レポート詳細
- 募集情報一覧
- 募集情報詳細
- 記事画像
- 募集状況
- 応募期限
- 応募フォームURL

## 公開直前コマンド

```bash
pnpm lint
pnpm build
```

## 公開前に表へ出してはいけないもの

- TODO表示
- 仮の応募フォームURL
- 仮の問い合わせ先
- 未確認の日程や料金
- 開発者向け注意書き
- 写真掲載許可に関する内部メモ
