# 更新マニュアル

## microCMSだけで更新できる内容

microCMS接続後は、以下を管理画面から更新できます。

- 活動レポート
- 募集情報
- 募集状況
- 応募期限
- 応募フォーム
- 記事画像

更新後は、数分以内にサイトへ反映されます。

## `site-data.ts` を修正する内容

以下は [lib/site-data.ts](/Users/koutatomoi/Documents/Codex/2026-07-31/new-chat/lib/site-data.ts) を編集します。

- 活動実績
- FAQ
- 団体概要
- 年表
- 活動内容の文章
- 問い合わせ先
- SNSリンク

編集後は以下を実行します。

```bash
pnpm lint
pnpm build
```

## コード修正が必要な内容

以下はページやコンポーネントの修正が必要です。

- ページ構成
- レイアウト
- デザイン
- アニメーション
- 新しい機能
- 新しいページ

## 初心者向けの考え方

- 記事や募集を増やす: microCMS
- 文章やFAQを少し変える: `lib/site-data.ts`
- 見た目やページ数を変える: コード修正

迷った場合は、まず `docs/HANDOVER_GUIDE.md` の「更新時の判断」を確認してください。
