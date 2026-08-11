# 独自ドメイン設定ガイド

現在の公開URLは `https://itsday-website.vercel.app` です。独自ドメイン名はまだ固定しません。

## 切り替え手順

1. VercelのProject Settingsで独自ドメインを追加します。
2. Vercelに表示されるDNSレコードを、ドメイン管理サービス側へ設定します。
3. Vercelのドメイン画面で検証が完了するまで待ちます。
4. VercelのEnvironment Variablesで `NEXT_PUBLIC_SITE_URL` を新ドメインへ変更します。
5. Productionを再デプロイします。
6. `sitemap.xml`、canonical、OGP、JSON-LDのURLが新ドメインへ切り替わっているか確認します。

## 変更する環境変数

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

末尾の `/` は付けないでください。

## 反映されるもの

- metadataBase
- canonical URL
- OGP URL
- sitemap.xml
- robots.txt内のsitemap URL
- JSON-LD OrganizationのURLとlogo URL

## 確認するURL

- `/`
- `/about`
- `/activities`
- `/recruitments`
- `/reports`
- `/sitemap.xml`
- `/robots.txt`

microCMS記事の詳細ページも、公開済みslugで確認してください。
