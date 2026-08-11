import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageFrame, PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "ITS DAYについて",
  description: "ITS DAYの活動方針、目指す社会、子どもたちと大学生がともに一歩を踏み出す場づくりについて紹介します。",
  path: "/about",
  image: "/images/group-blue.jpeg"
});

const values = [
  "新しい体験を届けること",
  "成功体験を一緒につくること",
  "子どもたちと大学生が互いに学び合うこと",
  "生まれ育った環境だけで未来の選択肢が狭まらない社会を目指すこと"
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageFrame>
        <PageHero
          eyebrow="ABOUT"
          title="ITS DAYについて"
          image="/images/group-blue.jpeg"
          imageAlt="ITS DAYの活動に参加した子どもたちと学生たち"
          objectPosition="center 42%"
        />

        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell grid gap-10 md:grid-cols-[0.75fr_0.85fr_0.75fr] md:items-center">
            <div>
              <p className="eyebrow">WHY WE STARTED</p>
              <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">設立の背景</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-trust-900/74">
              <p>
                フィリピンのスラム地域で活動する中で、多くの子どもたちが地域の外を知る機会や、多様な大人と出会う機会に限りがある現状を目の当たりにしました。
              </p>
              <p>
                だからこそITS DAYでは、学校教育だけでは得られない新しい体験を届けることを大切にしています。
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] photo-shadow">
              <Image
                src="/images/about-background.jpeg"
                alt="ITS DAYの設立の背景に関わる活動の様子"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 28vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-paper py-16 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">WHAT WE VALUE</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-trust-900 sm:text-5xl">
              一方的な支援ではなく、ともに成長する関係へ。
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-[22px] border border-mint-100 bg-white p-6 text-lg font-black text-trust-900">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] photo-shadow">
              <Image src="/images/slum-tour.jpeg" alt="現地を訪問するITS DAYメンバー" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div>
              <p className="eyebrow">NAME</p>
              <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">団体名に込めた意味</h2>
              <p className="mt-6 text-base leading-8 text-trust-900/74">
                説明資料では、ITS DAYの言葉として “Every dog has its day” が掲げられています。一人ひとりに、自分らしく一歩を踏み出せる日がある。そのきっかけをつくる団体として表現します。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-trust-900 py-16 text-white sm:py-24">
          <div className="section-shell grid gap-6 md:grid-cols-4">
            {[
              ["団体名", "ITS DAY"],
              ["設立", "2024年"],
              ["活動地域", "フィリピン・マニラ 主にトンド地区"],
              ["対象", "スラム地域で暮らす子どもたち / 日本人大学生"]
            ].map(([label, value]) => (
              <div key={label} className="border-t border-white/20 pt-5">
                <p className="text-sm font-bold text-mint-100">{label}</p>
                <p className="mt-3 text-xl font-black leading-8">{value}</p>
              </div>
            ))}
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
