# Vercel公開手順

## 1. GitHubへ保存

1. GitHubでリポジトリを作成
2. このプロジェクトをpush
3. `.env` やAPIキーが含まれていないことを確認

## 2. Vercelでプロジェクト作成

1. Vercelで `Add New Project`
2. GitHubリポジトリを選択
3. Framework Presetは `Next.js`
4. Install Commandは `pnpm install`
5. Build Commandは `pnpm build`
6. Output Directoryは未設定

## 3. Vercel環境変数

Production環境に設定します。

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.example
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

## 4. デプロイ後確認

- `/`
- `/about`
- `/activities`
- `/achievements`
- `/join`
- `/recruitments`
- `/faq`
- `/reports`
- `/contact`
- `/privacy`
- `/sitemap.xml`
- `/robots.txt`

## 5. 注意

microCMSの取得に失敗した場合、活動レポートと募集情報は準備中表示になります。API取得に成功してデータが0件の場合のみ、確認用モックデータが表示されます。
