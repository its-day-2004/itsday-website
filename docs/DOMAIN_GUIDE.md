# 独自ドメイン設定ガイド

## 1. ドメインを決める

例:

```text
https://itsday.example
```

## 2. 環境変数を更新

VercelのProduction環境で設定します。

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

この値はcanonical URL、OG URL、sitemap、robotsで使われます。

## 3. Vercelでドメイン追加

1. VercelのProject Settingsを開く
2. Domainsへ移動
3. 独自ドメインを追加
4. 表示されたDNS設定をドメイン管理サービスに登録

## 4. 反映後に確認

- `https://your-domain.example`
- `https://your-domain.example/sitemap.xml`
- `https://your-domain.example/robots.txt`
- SNS共有時のタイトル、説明、画像

## 5. 注意

ドメイン確定前に公開する場合は、Vercelの初期URLを `NEXT_PUBLIC_SITE_URL` に設定してください。
