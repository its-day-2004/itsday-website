import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const siteName = "ITS DAY";
const description =
  "ITS DAYは、フィリピン・マニラの子どもたちと大学生が、新しい体験や出会いを通して一歩を踏み出すきっかけをつくる学生団体です。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ITS DAY | 新しい体験が、未来の選択肢を広げる。",
    template: `%s | ${siteName}`
  },
  description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName,
    title: "ITS DAY | 新しい体験が、未来の選択肢を広げる。",
    description,
    images: [
      {
        url: "/images/group-blue.jpeg",
        width: 1200,
        height: 630,
        alt: "ITS DAYの活動に参加した子どもたちと学生たち"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ITS DAY | 新しい体験が、未来の選択肢を広げる。",
    description,
    images: ["/images/group-blue.jpeg"]
  },
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
