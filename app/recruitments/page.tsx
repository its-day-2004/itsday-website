import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { getAllRecruitments } from "@/lib/microcms";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "募集情報",
  description: "ITS DAYの最新募集情報、募集状況、応募期限、応募フォームを掲載するページです。",
  path: "/recruitments",
  image: "/images/hero-recruitments.jpeg"
});

const statusLabels = {
  open: "募集中",
  closed: "募集終了"
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RecruitmentsPage() {
  const recruitments = await getAllRecruitments();

  return (
    <>
      <Header />
      <PageFrame>
        <PageHero
          eyebrow="RECRUITMENT"
          title="募集情報"
          image="/images/hero-recruitments.jpeg"
          imageAlt="ITS DAYの募集情報を伝える見出し写真"
          objectPosition="center 44%"
        />
        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell">
            {recruitments.length > 0 ? (
              <div>
                <p className="eyebrow">RECRUITMENTS</p>
                <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">募集情報一覧</h2>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {recruitments.map((item) => (
                    <Link key={item.id} href={`/recruitments/${item.slug}`} className="overflow-hidden rounded-[24px] border border-mint-100 bg-paper transition hover:-translate-y-1 hover:shadow-soft">
                      <div className="relative aspect-[4/3]">
                        <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 768px) 42vw, 100vw" />
                      </div>
                      <div className="p-6">
                        <p className="inline-flex rounded-full bg-coral/12 px-3 py-1 text-xs font-black text-coral">
                          {statusLabels[item.isOpen ? "open" : "closed"]}
                        </p>
                        <h3 className="mt-5 text-2xl font-black text-trust-900">{item.title}</h3>
                        <p className="mt-5 text-sm leading-7 text-trust-900/62">{item.excerpt}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-mint-700">
                          詳細を見る <ArrowRight size={16} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-[24px] bg-mint-50 p-7">
                <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-black text-mint-700">準備中</p>
                <h2 className="mt-5 text-2xl font-black text-trust-900">現在、新しい募集情報を準備しています</h2>
                <p className="mt-4 text-sm leading-7 text-trust-900/68">
                  公開できる募集情報が整い次第、こちらに掲載します。
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
