import type { Metadata } from "next";

export const siteConfig = {
  name: "ITS DAY",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsday-website.vercel.app",
  title: "ITS DAY | 新しい体験が、未来の選択肢を広げる。",
  description:
    "ITS DAYは、フィリピン・マニラの子どもたちと大学生が、新しい体験や出会いを通して一歩を踏み出すきっかけをつくる学生団体です。",
  ogImage: "/og-image.jpg",
  instagramUrl: "https://www.instagram.com/its_day_inslum?utm_source=qr",
  contactEmail: "wakana.oka.8@gmail.com"
};

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: path,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name}の活動風景`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
