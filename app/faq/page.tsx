import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { faqs, type FaqAnswerPart } from "@/lib/site-data";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "よくある質問",
  description: "ITS DAYへの参加、英語力、安全面、一人参加などについてのよくある質問をまとめています。",
  path: "/faq"
});

function resolveHref(href: string) {
  return href === "instagram" ? siteConfig.instagramUrl : href;
}

function FaqAnswer({ answer, parts }: { answer: string; parts?: FaqAnswerPart[] }) {
  if (!parts) {
    return <p className="mt-4 text-sm leading-7 text-trust-900/68">{answer}</p>;
  }

  return (
    <p className="mt-4 text-sm leading-7 text-trust-900/68">
      {parts.map((part, index) => {
        if (!part.href) {
          return <span key={`${part.text}-${index}`}>{part.text}</span>;
        }

        const href = resolveHref(part.href);

        if (part.external) {
          return (
            <Link
              key={`${part.text}-${index}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-mint-700 underline underline-offset-4"
            >
              {part.text}
            </Link>
          );
        }

        return (
          <Link key={`${part.text}-${index}`} href={href} className="font-bold text-mint-700 underline underline-offset-4">
            {part.text}
          </Link>
        );
      })}
    </p>
  );
}

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
                <FaqAnswer answer={faq.answer} parts={faq.answerParts} />
              </section>
            ))}
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
