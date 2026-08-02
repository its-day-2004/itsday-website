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

## 取得時の挙動

APIキー未設定や通信エラーなど、取得に失敗した場合は安全な空状態になります。

- 活動レポート: 準備中表示
- 募集情報: 「現在、新しい募集情報を準備しています」

API取得に成功してデータが0件の場合のみ、現在の確認用モックデータを表示します。

## 公開前確認

- APIキーに必要最小限の権限を設定
- 画像URLが表示できること
- `slug` が重複していないこと
- 公開前の記事や募集が意図せず表示されないこと
