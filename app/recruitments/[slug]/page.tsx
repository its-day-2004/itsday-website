import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { getAllRecruitments, getRecruitmentBySlugResult } from "@/lib/microcms";
import { siteConfig } from "@/lib/seo";

const statusLabels = {
  open: "募集中",
  scheduled: "募集予定",
  closed: "募集終了",
  draft: "過去の募集例"
};

export async function generateStaticParams() {
  const recruitments = await getAllRecruitments();
  return recruitments.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const result = await getRecruitmentBySlugResult(slug);

  if (result.status !== "ready") {
    return {
      title: "募集情報"
    };
  }

  const item = result.item;

  return {
    title: item.title,
    description: `${item.title}の募集情報です。募集状況や応募期限は必ず最新情報を確認してください。`,
    alternates: {
      canonical: `/recruitments/${item.slug}`
    },
    openGraph: {
      type: "website",
      url: `/recruitments/${item.slug}`,
      siteName: siteConfig.name,
      title: item.title,
      description: `${item.title}の募集情報です。募集状況や応募期限は必ず最新情報を確認してください。`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "ITS DAYの募集情報"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: `${item.title}の募集情報です。募集状況や応募期限は必ず最新情報を確認してください。`,
      images: [siteConfig.ogImage]
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
          <PageHero eyebrow="RECRUITMENT" title="募集情報" text="現在準備中です。" />
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
    ["活動期間", item.period],
    ["応募締切", item.deadline],
    ["参加費", item.fee],
    ["紹介割引", item.discount],
    ["航空券代", item.travelCost],
    ["宿泊費", item.accommodationCost],
    ["募集人数", item.capacity],
    ["募集状況", statusLabels[item.status]]
  ];

  return (
    <>
      <Header />
      <PageFrame>
        <PageHero eyebrow="RECRUITMENT" title={item.title} text={item.note || "募集情報の詳細を掲載しています。"} />
        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell max-w-4xl">
            <Link href="/recruitments" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-mint-700">
              <ArrowLeft size={16} /> 募集情報一覧へ
            </Link>
            <div className="grid gap-px overflow-hidden rounded-[24px] bg-mint-100">
              {details.map(([label, value]) => (
                <div key={label} className="grid gap-2 bg-paper p-5 sm:grid-cols-[180px_1fr]">
                  <p className="text-sm font-black text-mint-700">{label}</p>
                  <p className="font-bold leading-7 text-trust-900">{value}</p>
                </div>
              ))}
            </div>
            {item.formUrl ? (
              <Link href={item.formUrl} className="mt-8 inline-flex items-center justify-center rounded-full bg-trust-900 px-6 py-3 text-sm font-black text-white">
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
