import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "参加を考えている方へ",
  description: "ITS DAYの活動に参加する意味、参加までの流れ、現地活動前後の準備、よくある不安について紹介します。",
  path: "/join",
  image: "/images/slum-tour.jpeg"
});

const stableItems = [
  ["参加する意味", "子どもたちに新しい体験を届けるだけでなく、自分の価値観や当たり前を見つめ直す機会になります。"],
  ["参加してほしい学生", "国際協力に関心がある人、子どもと関わりたい人、新しい環境で挑戦したい人を想定しています。"],
  ["基本的な流れ", "応募、顔合わせ、授業計画、安全講習・渡航説明会、現地活動、振り返りという流れを基本にします。"],
  ["事前ミーティング", "渡航者顔合わせ、オンライン授業計画、安全講習・渡航説明会、現地での振り返りを行います。"],
  ["英語力について", "英語力だけで参加可否を決める活動ではありません。必要な準備やサポートは募集ごとに案内します。"],
  ["一人参加について", "一人でも参加しやすいよう、事前に顔合わせやチームでの企画準備を行います。"],
  ["安全面への考え方", "現地理解、安全講習、海外旅行保険、緊急時対応の確認を前提に活動します。"],
  ["費用の基本説明", "参加費に含まれるもの、航空券・宿泊・保険など自己負担になるものは募集情報で確認できるようにします。"]
];

export default function JoinPage() {
  return (
    <>
      <Header />
      <PageFrame>
        <PageHero
          eyebrow="JOIN"
          title="参加を考えている方へ"
          image="/images/slum-tour.jpeg"
          imageAlt="現地の暮らしを知るために地域を訪問する参加学生"
          objectPosition="center 42%"
        />
        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell grid gap-5 md:grid-cols-2">
            {stableItems.map(([title, text]) => (
              <section key={title} className="rounded-[22px] border border-mint-100 p-6">
                <h2 className="text-xl font-black text-trust-900">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-trust-900/70">{text}</p>
              </section>
            ))}
          </div>
        </section>
        <section className="bg-paper py-16 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">LATEST RECRUITMENT</p>
            <h2 className="mt-4 text-3xl font-black text-trust-900 sm:text-5xl">募集情報</h2>
            <div className="mt-8 rounded-[24px] bg-white p-7 shadow-soft">
              <p className="inline-flex rounded-full bg-mint-50 px-3 py-1 text-xs font-black text-mint-700">準備中</p>
              <h3 className="mt-5 text-2xl font-black text-trust-900">現在、新しい募集情報を準備しています</h3>
              <p className="mt-4 text-sm leading-7 text-trust-900/68">
                最新の日程、費用、募集人数、応募フォームは、確定後に募集情報ページで公開します。
              </p>
              <Link href="/recruitments" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-mint-700">
                募集情報ページへ <ArrowRight size={16} />
              </Link>
            </div>
            <p className="mt-8 flex gap-3 rounded-[20px] bg-mint-50 p-5 text-sm font-semibold leading-7 text-trust-900/74">
              <ShieldCheck className="mt-0.5 shrink-0 text-mint-700" size={19} />
              日程、応募締切、費用、募集人数、応募フォーム、募集状況は固定ページへ直接書かず、募集情報データから表示しています。
            </p>
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
