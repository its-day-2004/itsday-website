import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "お問い合わせ",
  description: "ITS DAYへの参加相談、保護者の方からのご相談、取材や連携に関するお問い合わせページです。",
  path: "/contact",
  image: "/images/group-blue.jpeg"
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageFrame>
        <PageHero
          eyebrow="CONTACT"
          title="お問い合わせ"
          text="活動への参加、保護者の方からのご相談、取材・連携のご相談はこちらから受け付けます。"
          image="/images/group-blue.jpeg"
        />
        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell max-w-3xl rounded-[24px] border border-mint-100 bg-paper p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mint-50 text-mint-700">
              <Mail size={22} />
            </div>
            <h2 className="mt-6 text-2xl font-black text-trust-900">お問い合わせ窓口を準備しています</h2>
            <p className="mt-4 text-sm leading-7 text-trust-900/68">
              お問い合わせフォームは現在準備中です。受付方法が整い次第、このページでご案内します。
            </p>
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
