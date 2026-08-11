import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { getRecruitmentBySlugResult } from "@/lib/microcms";
import { siteConfig } from "@/lib/seo";

const statusLabels = {
  open: "募集中",
  closed: "募集終了"
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const result = await getRecruitmentBySlugResult(slug);

  if (result.status !== "ready") {
    return {
      title: "募集情報"
    };
  }

  const item = result.item;
  const description = item.excerpt || `${item.title}の募集情報です。募集状況や応募リンクを掲載しています。`;

  return {
    title: item.title,
    description,
    alternates: {
      canonical: `/recruitments/${item.slug}`
    },
    openGraph: {
      type: "website",
      url: `/recruitments/${item.slug}`,
      siteName: siteConfig.name,
      title: item.title,
      description,
      images: [
        {
          url: item.image,
          width: 1200,
          height: 630,
          alt: item.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description,
      images: [item.image]
    }
  };
}

export default async function RecruitmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await getRecruitmentBySlugResult(slug);

  if (result.status === "missing") {
    notFound();
  }

  if (result.status === "preparing") {
    return (
      <>
        <Header />
        <PageFrame>
          <PageHero eyebrow="RECRUITMENT" title="募集情報" />
          <section className="bg-white py-16 sm:py-24">
            <div className="section-shell max-w-4xl rounded-[24px] bg-paper p-7">
              <p className="inline-flex rounded-full bg-mint-50 px-3 py-1 text-xs font-black text-mint-700">準備中</p>
              <h2 className="mt-5 text-2xl font-black text-trust-900">現在準備中です</h2>
              <p className="mt-4 text-sm leading-7 text-trust-900/66">
                募集情報の取得準備が整い次第、こちらに掲載します。
              </p>
            </div>
          </section>
        </PageFrame>
        <Footer />
      </>
    );
  }

  const item = result.item;

  const details = [
    ["公開日", item.publishedAt || "未設定"],
    ["募集状況", statusLabels[item.isOpen ? "open" : "closed"]]
  ];

  return (
    <>
      <Header />
      <PageFrame>
        <PageHero eyebrow="RECRUITMENT" title={item.title} text={item.excerpt || "募集情報の詳細を掲載しています。"} image={item.image} />
        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell max-w-4xl">
            <Link href="/recruitments" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-mint-700">
              <ArrowLeft size={16} /> 募集情報一覧へ
            </Link>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] photo-shadow">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" />
            </div>
            <div className="grid gap-px overflow-hidden rounded-[24px] bg-mint-100">
              {details.map(([label, value]) => (
                <div key={label} className="grid gap-2 bg-paper p-5 sm:grid-cols-[180px_1fr]">
                  <p className="text-sm font-black text-mint-700">{label}</p>
                  <p className="font-bold leading-7 text-trust-900">{value}</p>
                </div>
              ))}
            </div>
            <div
              className="mt-10 space-y-6 text-base leading-8 text-trust-900/74 [&_a]:font-bold [&_a]:text-mint-700 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-trust-900 [&_h3]:text-xl [&_h3]:font-black [&_h3]:text-trust-900 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-[20px] [&_li]:ml-5 [&_li]:list-disc"
              dangerouslySetInnerHTML={{ __html: item.contentHtml }}
            />
            {item.applicationUrl ? (
              <Link href={item.applicationUrl} className="mt-8 inline-flex items-center justify-center rounded-full bg-trust-900 px-6 py-3 text-sm font-black text-white">
                応募フォームへ
              </Link>
            ) : (
              <div className="mt-8 rounded-[22px] bg-coral/10 p-5 text-sm font-semibold leading-7 text-trust-900/74">
                応募フォームは現在準備中です。
              </div>
            )}
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
