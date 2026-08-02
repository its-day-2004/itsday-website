import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { faqs, mainProgram, schoolContents, slumTourProgram } from "@/lib/site-data";
import { getLatestReports } from "@/lib/microcms";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  }
};

const stats = [
  { value: "200+", label: "子ども参加者" },
  { value: "1,000+", label: "炊き出し" },
  { value: "200足", label: "現地へ届けた靴" },
  { value: "434,000円", label: "クラウドファンディング達成" }
];

const gallery = [
  { src: "/images/hero-classroom.jpeg", alt: "授業で子どもと大学生が向き合う様子" },
  { src: "/images/group-blue.jpeg", alt: "子どもたちと学生の集合写真" },
  { src: "/images/slum-tour.jpeg", alt: "現地を訪問する学生たち" },
  { src: "/images/meal.jpeg", alt: "炊き出しで子どもたちと交流する様子" }
];

const changeItems = [
  {
    icon: Sparkles,
    title: "子どもたちに生まれる変化",
    points: ["知らなかった世界に触れる", "できたという成功体験を得る", "自分の好きなことや得意なことを見つける"]
  },
  {
    icon: UsersRound,
    title: "大学生に生まれる変化",
    points: ["価値観を見つめ直す", "現地の人と協力して企画を形にする", "挑戦を通して自分の一歩を踏み出す"]
  }
];

export default async function Home() {
  const reports = await getLatestReports();

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[92svh] overflow-hidden bg-trust-900 pt-16 text-white">
          <Image
            src="/images/hero-classroom.jpeg"
            alt="ITS DAYの授業で子どもと大学生が交流する様子"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-trust-900/72 via-trust-900/40 to-trust-900/80" />
          <div className="section-shell relative flex min-h-[calc(92svh-4rem)] flex-col justify-end pb-10 sm:pb-14">
            <p className="mb-5 inline-flex w-fit rounded-full bg-white/14 px-4 py-2 text-xs font-bold backdrop-blur">
              Manila, Philippines / Student-led project
            </p>
            <h1 className="max-w-6xl text-[clamp(2.35rem,7.2vw,5.2rem)] font-black leading-[1.04] [word-break:keep-all]">
              <span className="block">新しい体験が、</span>
              <span className="block">未来の選択肢を</span>
              <span className="block">広げる。</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/88 sm:text-xl">
              フィリピン・マニラの子どもたちに、学び・遊び・出会いのきっかけを届ける学生団体。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-trust-900"
              >
                参加を考えている方へ <ArrowRight size={17} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/42 px-6 py-3 text-sm font-black text-white backdrop-blur"
              >
                ITS DAYについて
              </Link>
            </div>
          </div>
        </section>

        <AnimatedSection className="bg-paper py-16 sm:py-24">
          <div className="section-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="eyebrow">ABOUT ITS DAY</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-trust-900 sm:text-5xl">
                支援ではなく、
                <br />
                ともに一歩を踏み出す場。
              </h2>
            </div>
            <p className="text-base leading-8 text-trust-900/76 sm:text-lg">
              ITS DAYは、フィリピン・マニラのスラム地域で暮らす子どもたちに、新しい体験や学びの機会を届ける学生団体です。子どもたちと大学生が出会い、互いの価値観を広げながら、自分らしい未来を考えるきっかけをつくります。
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-white py-16 sm:py-24">
          <div className="section-shell grid gap-9 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] photo-shadow">
              <Image src="/images/group-blue.jpeg" alt="ITS DAYの活動に参加した子どもたちと学生たち" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div>
              <p className="eyebrow">VISION</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-trust-900 sm:text-5xl">
                誰もが夢や目標に向かって一歩を踏み出せる社会へ。
              </h2>
              <p className="mt-6 text-base leading-8 text-trust-900/72">
                生まれ育った環境によって将来の可能性が決まるのではなく、一人ひとりが好きなことや得意なことを見つけ、自分らしい未来を描ける社会を目指しています。
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-paper py-16 sm:py-24">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">ACTIVITIES</p>
              <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">主な活動</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-[28px] bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={mainProgram.image} alt={mainProgram.title} fill className="object-cover" sizes="(min-width: 768px) 45vw, 100vw" />
                </div>
                <div className="p-7">
                  <p className="eyebrow">MAIN PROGRAM</p>
                  <h3 className="mt-4 text-3xl font-black text-trust-900">{mainProgram.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-trust-900/72">{mainProgram.summary}</p>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {schoolContents.map((content) => (
                      <div key={content.title} className="rounded-[16px] bg-mint-50 p-3">
                        <h4 className="text-sm font-black text-trust-900">{content.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article className="overflow-hidden rounded-[28px] bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={slumTourProgram.image} alt={slumTourProgram.title} fill className="object-cover" sizes="(min-width: 768px) 45vw, 100vw" />
                </div>
                <div className="p-7">
                  <p className="eyebrow">MAIN PROGRAM</p>
                  <h3 className="mt-4 text-3xl font-black text-trust-900">{slumTourProgram.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-trust-900/72">
                    現地の暮らしを深く知り、子どもたちとどのような姿勢で向き合うべきかを考えるためのプログラムです。
                  </p>
                  <p className="mt-4 rounded-[16px] bg-mint-50 p-4 text-sm font-semibold leading-7 text-trust-900/70">
                    表面的な見学では分からない生活の実態に、現地団体の協力のもと安全に配慮しながら触れます。
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-8">
              <Link href="/activities" className="inline-flex items-center gap-2 text-sm font-black text-mint-700">
                活動内容を詳しく見る <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-white py-16 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">CHANGE</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-trust-900 sm:text-5xl">
              体験は、子どもたちにも大学生にも残っていく。
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {changeItems.map((item) => {
                const Icon = item.icon;
                return (
                  <section key={item.title} className="rounded-[24px] border border-mint-100 bg-mint-50 p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-mint-700">
                      <Icon size={23} />
                    </div>
                    <h3 className="mt-5 text-2xl font-black text-trust-900">{item.title}</h3>
                    <ul className="mt-5 grid gap-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm font-semibold leading-6 text-trust-900/76">
                          <CheckCircle2 className="mt-0.5 shrink-0 text-mint-700" size={18} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-trust-900 py-16 text-white sm:py-24">
          <div className="section-shell">
            <p className="text-sm font-extrabold text-mint-100">IMPACT</p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">数字で見るITS DAY</h2>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[24px] bg-white/16 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-trust-900 p-5 sm:p-7">
                  <p className="text-3xl font-black text-white sm:text-4xl">{stat.value}</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/64">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-paper py-16 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">PHOTOS</p>
            <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">活動写真</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {gallery.map((photo, index) => (
                <div
                  key={photo.src}
                  className={`relative overflow-hidden rounded-[24px] photo-shadow ${index === 0 ? "aspect-[4/3] md:col-span-2 md:row-span-2" : "aspect-[4/3]"}`}
                >
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 768px) 25vw, 100vw" />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-white py-16 sm:py-24">
          <div className="section-shell">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">REPORTS</p>
                <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">最新の活動レポート</h2>
              </div>
              <Link href="/reports" className="inline-flex items-center gap-2 text-sm font-black text-mint-700">
                一覧を見る <ArrowRight size={16} />
              </Link>
            </div>
            {reports.length > 0 ? (
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {reports.map((report) => (
                  <article key={report.id} className="overflow-hidden rounded-[24px] border border-mint-100 bg-paper">
                    <div className="relative aspect-[4/3]">
                      <Image src={report.image} alt={report.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-black text-mint-700">{report.category} / {report.date}</p>
                      <h3 className="mt-3 text-lg font-black leading-snug text-trust-900">{report.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-trust-900/68">{report.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-[24px] bg-paper p-7">
                <p className="inline-flex rounded-full bg-mint-50 px-3 py-1 text-xs font-black text-mint-700">準備中</p>
                <h3 className="mt-5 text-2xl font-black text-trust-900">活動レポートを準備しています</h3>
                <p className="mt-4 text-sm leading-7 text-trust-900/66">
                  活動の記録は、公開準備が整い次第こちらに掲載します。
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-paper py-16 sm:py-24">
          <div className="section-shell">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">RECRUITMENT</p>
                <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">募集情報</h2>
              </div>
              <Link href="/recruitments" className="inline-flex items-center gap-2 text-sm font-black text-mint-700">
                募集情報へ <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-10 rounded-[24px] bg-white p-7 shadow-soft">
              <p className="inline-flex rounded-full bg-mint-50 px-3 py-1 text-xs font-black text-mint-700">準備中</p>
              <h3 className="mt-5 text-2xl font-black text-trust-900">現在、新しい募集情報を準備しています</h3>
              <p className="mt-4 text-sm leading-7 text-trust-900/66">
                最新の活動日程、参加費、応募フォームなどは、確定後に募集情報ページで公開します。
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-white py-16 sm:py-24">
          <div className="section-shell grid gap-9 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">よくある質問</h2>
            </div>
            <div className="grid gap-4">
              {faqs.map((faq) => (
                <section key={faq.question} className="rounded-[20px] border border-mint-100 p-5">
                  <h3 className="font-black text-trust-900">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-trust-900/68">{faq.answer}</p>
                </section>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <section className="bg-mint-50 py-16 sm:py-24">
          <div className="section-shell grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <p className="eyebrow">NEXT STEP</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-trust-900 sm:text-5xl">
                参加も、問い合わせも、
                <br />
                まずはここから。
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-trust-900/72">
                最新の募集状況は募集情報ページで確認できます。保護者の方や活動内容を詳しく知りたい方は、お問い合わせからご連絡ください。
              </p>
            </div>
            <div className="grid gap-3">
              <Link href="/recruitments" className="inline-flex items-center justify-center gap-2 rounded-full bg-trust-900 px-6 py-4 text-sm font-black text-white">
                募集情報を見る <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-trust-900">
                お問い合わせ <ShieldCheck size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
