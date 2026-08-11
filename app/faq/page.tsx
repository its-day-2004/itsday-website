import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "よくある質問",
  description: "ITS DAYへの参加、英語力、安全面、一人参加などについてのよくある質問をまとめています。",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <>
      <Header />
      <PageFrame>
        <PageHero
          eyebrow="FAQ"
          title="よくある質問"
        />
        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell max-w-4xl space-y-4">
            {faqs.map((faq) => (
              <section key={faq.question} className="rounded-[22px] border border-mint-100 p-6">
                <h2 className="text-xl font-black text-trust-900">{faq.question}</h2>
                <p className="mt-4 text-sm leading-7 text-trust-900/68">{faq.answer}</p>
              </section>
            ))}
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
