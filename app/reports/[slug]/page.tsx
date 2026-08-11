import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { getReportBySlugResult } from "@/lib/microcms";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const result = await getReportBySlugResult(slug);

  if (result.status !== "ready") {
    return {
      title: "活動レポート"
    };
  }

  const report = result.item;

  return {
    title: report.title,
    description: report.excerpt,
    alternates: {
      canonical: `/reports/${report.slug}`
    },
    openGraph: {
      type: "article",
      url: `/reports/${report.slug}`,
      title: report.title,
      description: report.excerpt,
      images: [
        {
          url: report.image,
          width: 1200,
          height: 630,
          alt: report.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: report.title,
      description: report.excerpt,
      images: [report.image]
    }
  };
}

export default async function ReportDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await getReportBySlugResult(slug);

  if (result.status === "missing") {
    notFound();
  }

  if (result.status === "preparing") {
    return (
      <>
        <Header />
        <PageFrame>
          <PageHero eyebrow="REPORTS" title="活動レポート" />
          <section className="bg-white py-16 sm:py-24">
            <div className="section-shell max-w-4xl rounded-[24px] bg-paper p-7">
              <p className="inline-flex rounded-full bg-mint-50 px-3 py-1 text-xs font-black text-mint-700">準備中</p>
              <h2 className="mt-5 text-2xl font-black text-trust-900">現在準備中です</h2>
              <p className="mt-4 text-sm leading-7 text-trust-900/66">
                活動レポートの取得準備が整い次第、こちらに掲載します。
              </p>
            </div>
          </section>
        </PageFrame>
        <Footer />
      </>
    );
  }

  const report = result.item;

  return (
    <>
      <Header />
      <PageFrame>
        <PageHero eyebrow={report.category} title={report.title} text={`${report.date} / ${report.excerpt}`} />
        <article className="bg-white py-16 sm:py-24">
          <div className="section-shell max-w-4xl">
            <Link href="/reports" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-mint-700">
              <ArrowLeft size={16} /> 活動レポート一覧へ
            </Link>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] photo-shadow">
              <Image src={report.image} alt={report.title} fill className="object-cover" sizes="100vw" />
            </div>
            <div
              className="mt-10 space-y-6 text-base leading-8 text-trust-900/74 [&_a]:font-bold [&_a]:text-mint-700 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-trust-900 [&_h3]:text-xl [&_h3]:font-black [&_h3]:text-trust-900 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-[20px] [&_li]:ml-5 [&_li]:list-disc"
              dangerouslySetInnerHTML={{ __html: report.contentHtml }}
            />
            {report.gallery.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-black text-trust-900">ギャラリー</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {report.gallery.map((image) => (
                    <div key={image.url} className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-paper">
                      <Image
                        src={image.url}
                        alt={`${report.title}の活動写真`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 42vw, 100vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            </div>
        </article>
      </PageFrame>
      <Footer />
    </>
  );
}
