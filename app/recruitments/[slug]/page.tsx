import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { getAllRecruitments, getRecruitmentBySlug } from "@/lib/microcms";

export async function generateStaticParams() {
  const recruitments = await getAllRecruitments();
  return recruitments.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getRecruitmentBySlug(slug);

  if (!item) {
    return {
      title: "募集情報"
    };
  }

  return {
    title: item.title,
    description: `${item.title}の募集情報です。募集状況や応募期限は必ず最新情報を確認してください。`,
    alternates: {
      canonical: `/recruitments/${item.slug}`
    }
  };
}

export default async function RecruitmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getRecruitmentBySlug(slug);

  if (!item) {
    notFound();
  }

  const details = [
    ["活動期間", item.period],
    ["応募締切", item.deadline],
    ["参加費", item.fee],
    ["紹介割引", item.discount],
    ["航空券代", item.travelCost],
    ["宿泊費", item.accommodationCost],
    ["募集人数", item.capacity],
    ["募集状況", "過去の募集例"]
  ];

  return (
    <>
      <Header />
      <PageFrame>
        <PageHero eyebrow="PAST RECRUITMENT EXAMPLE" title={item.title} text="このページは過去の募集例です。現在公開中の募集情報ではありません。" />
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
            <div className="mt-8 rounded-[22px] bg-coral/10 p-5 text-sm font-semibold leading-7 text-trust-900/74">
              このページの情報は過去の募集例です。最新の募集情報としては使用しないでください。
            </div>
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
