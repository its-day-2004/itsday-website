# デプロイガイド

## 事前確認

```bash
pnpm lint
pnpm build
```

秘密情報が含まれていないか確認します。

```bash
git status --short
git grep -n "MICROCMS_API_KEY\\|SECRET\\|TOKEN\\|PASSWORD" -- ':!docs/*'
```

## Vercel設定

- Framework: Next.js
- Install Command: `pnpm install --frozen-lockfile`
- Build Command: `pnpm build`
- Output Directory: Next.js既定
- Node.js: VercelのLTS設定で問題ありません。

## Environment Variables

VercelのProduction / Previewに以下を設定します。

```bash
NEXT_PUBLIC_SITE_URL=https://itsday-website.vercel.app
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

独自ドメイン取得後は `NEXT_PUBLIC_SITE_URL` を新しいURLへ変更し、再デプロイします。

## GitHub連携

`main` ブランチへpushするとProduction Deploymentが走る構成です。

```bash
git add .
git commit -m "Prepare final release candidate"
git push origin main
```

push後、GitHubのcommit statusまたはVercel DashboardでProduction Deploymentの成功を確認します。

## microCMS未接続・エラー時

- CMS取得成功かつデータあり: CMSデータのみ表示
- CMS取得成功かつ0件: 確認用モックを表示
- CMS取得エラー: 準備中表示

APIキーはサーバー側だけで使用します。`NEXT_PUBLIC_` を付けて公開しないでください。
