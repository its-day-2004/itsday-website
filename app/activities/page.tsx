import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { mainProgram, otherActivities, schoolContents, slumTourProgram, supportPrograms } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "活動内容",
  description: "ITS DAYの主要プログラムである3Days Schoolとスラムツアー、活動前後の取り組み、その他の活動を紹介します。",
  path: "/activities",
  image: "/images/classroom-writing.jpeg"
});

export default function ActivitiesPage() {
  return (
    <>
      <Header />
      <PageFrame>
        <PageHero
          eyebrow="ACTIVITIES"
          title="活動内容"
          image="/images/hero-classroom.jpeg"
          imageAlt="3Days Schoolで子どもと大学生が授業に取り組む様子"
          objectPosition="center 44%"
        />

        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">MAIN PROGRAM</p>
            <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">主要プログラム</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="overflow-hidden rounded-[28px] bg-paper shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={mainProgram.image} alt={mainProgram.title} fill className="object-cover" sizes="(min-width: 768px) 45vw, 100vw" />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="eyebrow">3 DAYS SCHOOL</p>
                  <h3 className="mt-4 text-3xl font-black text-trust-900 sm:text-4xl">{mainProgram.title}</h3>
                  <p className="mt-6 text-base leading-8 text-trust-900/72">{mainProgram.summary}</p>
                  <p className="mt-5 rounded-[18px] bg-white p-5 text-sm font-semibold leading-7 text-trust-900/76">{mainProgram.purpose}</p>
                </div>
              </article>

              <article className="overflow-hidden rounded-[28px] bg-paper shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={slumTourProgram.image} alt={slumTourProgram.title} fill className="object-cover" sizes="(min-width: 768px) 45vw, 100vw" />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="eyebrow">SLUM TOUR</p>
                  <h3 className="mt-4 text-3xl font-black text-trust-900 sm:text-4xl">{slumTourProgram.title}</h3>
                  <p className="mt-6 text-base leading-8 text-trust-900/72">{slumTourProgram.summary}</p>
                  <p className="mt-5 rounded-[18px] bg-white p-5 text-sm font-semibold leading-7 text-trust-900/76">{slumTourProgram.purpose}</p>
                  <p className="mt-4 text-sm leading-7 text-trust-900/64">{slumTourProgram.note}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-paper py-16 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">CONTENTS</p>
            <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">3Days Schoolのコンテンツ</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {schoolContents.map((content) => (
                <article key={content.title} className="overflow-hidden rounded-[24px] bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image src={content.image} alt={content.title} fill className="object-cover" sizes="(min-width: 768px) 42vw, 100vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-trust-900">{content.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-trust-900/72">{content.summary}</p>
                    <p className="mt-4 rounded-[18px] bg-mint-50 p-4 text-sm font-semibold leading-7 text-trust-900/76">{content.purpose}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className="section-shell">
            <p className="eyebrow">BEFORE / AFTER</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {supportPrograms.map((program) => (
                <article key={program.title} className="border-t border-mint-100 pt-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[16px]">
                    <Image src={program.image} alt={program.alt} fill className="object-cover" sizes="(min-width: 768px) 28vw, 100vw" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-black text-trust-900">{program.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-trust-900/72">{program.summary}</p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-trust-900/66">{program.purpose}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className="section-shell">
            <p className="eyebrow">OTHER ACTIVITIES</p>
            <div className="max-w-3xl">
              <h2 className="mt-4 text-2xl font-black text-trust-900 sm:text-4xl">その他の活動</h2>
              <p className="mt-5 text-sm leading-8 text-trust-900/70 sm:text-base">
                主要プログラムとは別に、団体として取り組んできた活動の広がりを紹介します。
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {otherActivities.map((activity) => (
                <article key={activity.title} className="grid gap-5 border-t border-mint-100 pt-6 sm:grid-cols-[180px_1fr]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[16px]">
                    <Image src={activity.image} alt={activity.alt} fill className="object-cover" sizes="(min-width: 768px) 180px, 100vw" />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full bg-mint-50 px-3 py-1 text-xs font-black text-trust-900/66">{activity.badge}</span>
                    <h3 className="mt-3 text-xl font-black text-trust-900">{activity.title}</h3>
                    <div className="mt-3 space-y-3 text-sm leading-7 text-trust-900/72">
                      {activity.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
