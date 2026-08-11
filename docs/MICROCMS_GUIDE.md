# microCMS設定ガイド

## 環境変数

```bash
MICROCMS_SERVICE_DOMAIN=
MICROCMS_API_KEY=
```

`MICROCMS_API_KEY` はサーバー側でのみ使用します。`NEXT_PUBLIC_` を付けないでください。

## reports

活動レポートで使用します。

| フィールド | 用途 |
| --- | --- |
| `title` | タイトル |
| `slug` | URL |
| `category` | カテゴリ |
| `thumbnail` | 一覧・詳細のアイキャッチ |
| `excerpt` | 一覧の概要 |
| `content` | 詳細本文 |
| `gallery` | 詳細ギャラリー |
| `publishedAt` | 公開日 |

詳細ページは `id` ではなく `slug` で取得します。

## recruitments

募集情報で使用します。

| フィールド | 用途 |
| --- | --- |
| `title` | タイトル |
| `slug` | URL |
| `thumbnail` | アイキャッチ |
| `excerpt` | 概要 |
| `content` | 詳細本文 |
| `applicationUrl` | 応募リンク |
| `isOpen` | 募集状態 |
| `publishedAt` | 公開日 |

## 表示ルール

- CMS取得成功かつ1件以上: CMSデータのみ表示します。
- CMS取得成功かつ0件: 確認用モックデータを表示します。
- CMS取得エラー: モックを出さず、準備中表示にします。
- thumbnailが未設定の場合だけ、共通プレースホルダー画像を表示します。
- CMS本文はHTMLとして表示しますが、危険なタグや属性はサーバー側で除去します。

## 公開後の確認

- `/reports`
- `/reports/{slug}`
- `/recruitments`
- `/recruitments/{slug}`
- sitemap.xmlに公開記事が含まれること
- OGP画像がthumbnailまたは共通OG画像になること
