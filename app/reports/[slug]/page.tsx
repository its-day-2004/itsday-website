import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { getAllReports, getReportBySlug } from "@/lib/microcms";

export async function generateStaticParams() {
  const reports = await getAllReports();
  return reports.map((report) => ({ slug: report.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const report = await getReportBySlug(slug);

  if (!report) {
    return {
      title: "活動レポート"
    };
  }

  return {
    title: report.title,
    description: report.excerpt,
    alternates: {
      canonical: `/reports/${report.slug}`
    },
    openGraph: {
      title: report.title,
      description: report.excerpt,
      images: [report.image]
    }
  };
}

export default async function ReportDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = await getReportBySlug(slug);

  if (!report) {
    notFound();
  }

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
            <div className="mt-10 space-y-6 text-base leading-8 text-trust-900/74">
              {report.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </PageFrame>
      <Footer />
    </>
  );
}
