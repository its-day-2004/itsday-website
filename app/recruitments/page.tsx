import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { getAllRecruitments } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "募集情報",
  description: "ITS DAYの最新募集情報、募集状況、応募期限、応募フォームを掲載するページです。"
};

export default async function RecruitmentsPage() {
  const recruitments = await getAllRecruitments();

  return (
    <>
      <Header />
      <PageFrame>
        <PageHero
          eyebrow="RECRUITMENT"
          title="募集情報"
          text="最新の募集情報は、確定後にこのページで公開します。"
          image="/images/group-blue.jpeg"
        />
        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell">
            <div className="rounded-[24px] bg-mint-50 p-7">
              <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-black text-mint-700">準備中</p>
              <h2 className="mt-5 text-2xl font-black text-trust-900">現在、新しい募集情報を準備しています</h2>
              <p className="mt-4 text-sm leading-7 text-trust-900/68">
                公開中の募集として誤認されないよう、確定していない日程や料金は最新募集として表示していません。
              </p>
            </div>

            {recruitments.length > 0 && (
              <div className="mt-12">
                <p className="eyebrow">PAST EXAMPLES</p>
                <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">過去の募集例</h2>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {recruitments.map((item) => (
                    <Link key={item.id} href={`/recruitments/${item.slug}`} className="rounded-[24px] border border-mint-100 bg-paper p-6 transition hover:-translate-y-1 hover:shadow-soft">
                      <p className="inline-flex rounded-full bg-coral/12 px-3 py-1 text-xs font-black text-coral">過去の募集例</p>
                      <h3 className="mt-5 text-2xl font-black text-trust-900">{item.title}</h3>
                      <p className="mt-5 text-sm leading-7 text-trust-900/62">{item.note}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-mint-700">
                        例を見る <ArrowRight size={16} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
