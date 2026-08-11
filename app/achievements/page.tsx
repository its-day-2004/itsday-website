import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "活動実績",
  description: "ITS DAYのこれまでの活動、3Days Schoolの開催実績、靴の収集と寄付の取り組みを紹介します。",
  path: "/achievements",
  image: "/images/hero-achievements.jpg"
});

const stats = [
  ["200名以上", "子ども参加者"],
  ["1,000食以上", "炊き出し"],
  ["200足", "現地へ届けた靴"],
  ["434,000円", "クラウドファンディング達成"]
];

const timeline: { season: string; items: string[] }[] = [
  { season: "2024年 夏", items: ["クラウドファンディングに成功", "子どもたちを対象としたサッカーの試合を開催"] },
  { season: "2025年 冬", items: ["200足の靴を現地の子どもたちへ寄付", "子どもたちが寄付された靴を履いてサッカーを実施"] },
  { season: "2025年 夏", items: ["第1回3Days Schoolを開催"] },
  { season: "2026年 冬", items: ["第2回3Days Schoolを開催"] },
  { season: "2026年 夏", items: ["第3回3Days Schoolを開催", "初めて2週間にわたる活動形式に挑戦"] }
];

const shoeStory = [
  {
    title: "活動の中で見つかった安全面の課題",
    text: "2024年夏のサッカー活動で、裸足で参加する子どもたちが多いことに気づき、安全面の課題が見つかりました。"
  },
  {
    title: "安全面の課題を受けて靴を収集",
    text: "その課題を解決するため、地元の小中学校に依頼し、履かなくなった靴の収集を実施しました。"
  },
  {
    title: "約500足が集まり、そのうち200足を現地へ",
    text: "収集を通じて約500足の靴が集まり、そのうち200足を現地の子どもたちへ届けました。"
  },
  {
    title: "2025年冬、靴を履いてサッカーを実施",
    text: "2025年冬には、子どもたちが寄付された靴を履いてサッカーを行いました。"
  }
];

export default function AchievementsPage() {
  return (
    <>
      <Header />
      <PageFrame>
        <PageHero
          eyebrow="ACHIEVEMENTS"
          title="活動実績"
          image="/images/hero-achievements.jpg"
          imageAlt="ITS DAYの活動実績を伝える活動写真"
          objectPosition="center 48%"
        />
        <section className="bg-trust-900 py-16 text-white sm:py-24">
          <div className="section-shell grid gap-px overflow-hidden rounded-[24px] bg-white/16 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-trust-900 p-6">
                <p className="text-4xl font-black">{value}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/66">{label}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">HISTORY</p>
            <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">これまでの活動</h2>
            <div className="mt-10 grid gap-5">
              {timeline.map((period) => (
                <div key={period.season} className="grid gap-4 border-t border-mint-100 pt-6 md:grid-cols-[160px_1fr]">
                  <p className="text-4xl font-black text-mint-700">{period.season}</p>
                  <ul className="grid gap-2 text-base font-semibold leading-8 text-trust-900/76">
                    {period.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper py-16 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">PAST INITIATIVE</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-trust-900 sm:text-5xl">
              靴の配布は、現地で見つけた課題から生まれた過去の取り組みです。
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-trust-900/72">
              集まった靴は約500足、現地へ届けた靴は200足です。現在も継続して靴を募集・配布している主要活動としてではなく、活動の中で見つけた課題に対して行動した実績として掲載しています。
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {shoeStory.map((item, index) => (
                <section key={item.title} className="rounded-[22px] bg-white p-6 shadow-soft">
                  <p className="text-sm font-black text-mint-700">STEP {index + 1}</p>
                  <h3 className="mt-4 text-xl font-black leading-snug text-trust-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-trust-900/68">{item.text}</p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
