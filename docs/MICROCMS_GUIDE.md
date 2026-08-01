# microCMS設定ガイド

## 使用するAPI

- `reports`
- `recruitments`

## 環境変数

```text
MICROCMS_SERVICE_DOMAIN=
MICROCMS_API_KEY=
```

APIキーはサーバー側だけで使用します。`NEXT_PUBLIC_` を付けないでください。

## reportsの想定フィールド

- `id`
- `slug`
- `title`
- `date`
- `category`
- `excerpt`
- `image`
- `body`

## recruitmentsの想定フィールド

- `id`
- `slug`
- `title`
- `status`
- `period`
- `deadline`
- `fee`
- `travelCost`
- `accommodationCost`
- `discount`
- `capacity`
- `formUrl`
- `note`

## 未接続時の挙動

本番では安全な空状態になります。

- 活動レポート: 準備中表示
- 募集情報: 「現在、新しい募集情報を準備しています」

開発環境では確認用モックが表示されます。必要に応じて `SHOW_MOCK_CONTENT=true` を使用できます。

## 公開前確認

- APIキーに必要最小限の権限を設定
- 画像URLが表示できること
- `slug` が重複していないこと
- 公開前の記事や募集が意図せず表示されないこと
