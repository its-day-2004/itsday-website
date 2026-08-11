# ITS DAY Official Website

ITS DAY公式WebサイトのNext.jsプロジェクトです。

## 技術構成

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion
- microCMS
- Vercel

## 開発

```bash
pnpm install
pnpm dev
```

## 確認

```bash
pnpm lint
pnpm build
pnpm start
```

## 環境変数

`.env.example` を参考に、ローカルまたはVercelで設定します。

- `NEXT_PUBLIC_SITE_URL`: 公開URL。未設定時は `https://itsday-website.vercel.app` を使用します。
- `MICROCMS_SERVICE_DOMAIN`: microCMSのサービスドメイン
- `MICROCMS_API_KEY`: microCMSのAPIキー

活動レポートは、microCMSの取得に成功してデータが1件以上ある場合はCMSデータのみを表示します。取得成功かつ0件の場合のみ確認用モックデータを表示し、取得エラー時は準備中表示にします。

募集情報は、microCMSに投稿されたものだけを表示します。CMSが0件または取得エラーの場合は、モック募集情報を出さず準備中表示にします。

## 公開前の重要確認

- 写真掲載許可、肖像権
- 活動実績の数字
- プライバシーポリシーの法的確認
- Instagramと問い合わせメールの運用体制
- microCMSのAPIスキーマと公開状態
- 独自ドメイン設定

詳細は `docs/` 配下の各ドキュメントを参照してください。
