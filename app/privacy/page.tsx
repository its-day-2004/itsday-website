import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "プライバシーポリシー",
  description: "ITS DAY公式サイトにおける個人情報の取得、利用目的、管理、第三者提供について掲載しています。",
  path: "/privacy"
});

const sections = [
  ["個人情報の取得", "お問い合わせや応募フォームを通じて取得する情報は、必要な範囲で利用します。"],
  ["利用目的", "お問い合わせへの回答、募集活動に関する連絡、活動運営に必要な確認のために利用します。"],
  ["第三者提供", "法令に基づく場合を除き、本人の同意なく第三者へ提供しません。"],
  ["管理", "取得した情報は、漏えい、紛失、改ざん等が起きないよう適切に管理します。"],
  ["問い合わせ先", "個人情報の取り扱いに関するお問い合わせは、wakana.oka.8@gmail.com までご連絡ください。"]
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <PageFrame>
        <PageHero
          eyebrow="PRIVACY"
          title="プライバシーポリシー"
        />
        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell max-w-4xl space-y-6">
            {sections.map(([title, text]) => (
              <section key={title} className="border-t border-mint-100 pt-6">
                <h2 className="text-xl font-black text-trust-900">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-trust-900/68">{text}</p>
              </section>
            ))}
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
