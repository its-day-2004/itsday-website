# ITS DAY Official Website

ITS DAY公式WebサイトのNext.jsプロジェクトです。

## 技術構成

- Next.js App Router
- TypeScript
- Tailwind CSS
- microCMS連携準備済み

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

- `NEXT_PUBLIC_SITE_URL`: 公開URL
- `MICROCMS_SERVICE_DOMAIN`: microCMSのサービスドメイン
- `MICROCMS_API_KEY`: microCMSのAPIキー

microCMSの取得に失敗した場合は準備中表示になります。API取得に成功してデータが0件の場合のみ、確認用のモックデータを表示します。

## 公開前の重要確認

- 写真掲載許可
- 活動実績の数字
- プライバシーポリシーの法的確認
- 問い合わせ窓口
- microCMSのAPIスキーマと公開状態
- 独自ドメイン

詳細は `docs/` 配下の各ドキュメントを参照してください。
