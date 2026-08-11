import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { getAllReports } from "@/lib/microcms";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "活動レポート",
  description: "ITS DAYの活動記録、現地での出会い、子どもたちと大学生の学びを伝える活動レポート一覧です。",
  path: "/reports",
  image: "/images/classroom-writing.jpeg"
});

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ReportsPage() {
  const reports = await getAllReports();

  return (
    <>
      <Header />
      <PageFrame>
        <PageHero
          eyebrow="REPORTS"
          title="活動レポート"
          image="/images/classroom-writing.jpeg"
          imageAlt="3Days Schoolの授業で子どもが紙に書き込む様子"
          objectPosition="center 48%"
        />
        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell">
            {reports.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-3">
                {reports.map((report) => (
                  <Link key={report.id} href={`/reports/${report.slug}`} className="overflow-hidden rounded-[24px] border border-mint-100 bg-paper transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="relative aspect-[4/3]">
                      <Image src={report.image} alt={report.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-black text-mint-700">{report.category} / {report.date}</p>
                      <h2 className="mt-3 text-xl font-black leading-snug text-trust-900">{report.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-trust-900/66">{report.excerpt}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-mint-700">
                        読む <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-[24px] bg-paper p-7">
                <p className="inline-flex rounded-full bg-mint-50 px-3 py-1 text-xs font-black text-mint-700">準備中</p>
                <h2 className="mt-5 text-2xl font-black text-trust-900">活動レポートを準備しています</h2>
                <p className="mt-4 text-sm leading-7 text-trust-900/66">
                  公開できる記事が整い次第、こちらに掲載します。
                </p>
              </div>
            )}
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
