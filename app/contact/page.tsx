import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ExternalLink, GraduationCap, Instagram, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageFrame, PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "お問い合わせ",
  description: "ITS DAYへの参加相談、保護者の方からのご相談、取材や連携に関するお問い合わせページです。",
  path: "/contact",
  image: "/images/hero-contact.jpeg"
});

const instagramUrl = "https://www.instagram.com/its_day_inslum?utm_source=qr";
const contactEmail = "wakana.oka.8@gmail.com";
const mailHref =
  "mailto:wakana.oka.8@gmail.com?subject=ITS%20DAY%E3%81%B8%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B";

const contactTypes = [
  "講演のご依頼",
  "学校・教育機関からのお問い合わせ",
  "企業・団体からのお問い合わせ",
  "フィリピン・現地活動への連携相談",
  "取材",
  "その他ITS DAYへのお問い合わせ"
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageFrame>
        <PageHero
          eyebrow="CONTACT"
          title="お問い合わせ"
          image="/images/hero-contact.jpeg"
          imageAlt="ITS DAYへのお問い合わせページの見出し写真"
          objectPosition="center 44%"
        />
        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell grid gap-6 md:grid-cols-2">
            <section className="rounded-[24px] border border-mint-100 bg-paper p-7 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mint-50 text-mint-700">
                <GraduationCap size={23} />
              </div>
              <p className="eyebrow mt-7">FOR STUDENTS</p>
              <h2 className="mt-4 text-2xl font-black leading-tight text-trust-900 sm:text-3xl">
                活動への参加を考えている学生の方へ
              </h2>
              <p className="mt-5 text-sm leading-7 text-trust-900/70">
                ITS DAYへの参加を検討している方、活動について質問したい方は、InstagramのDMからお気軽にご連絡ください。
              </p>
              <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-trust-900 px-6 py-3 text-sm font-black text-white"
              >
                <Instagram size={18} />
                Instagramで問い合わせる
                <ExternalLink size={15} />
              </Link>
            </section>

            <section className="rounded-[24px] border border-mint-100 bg-white p-7 shadow-soft sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral/12 text-coral">
                <Building2 size={23} />
              </div>
              <p className="eyebrow mt-7">GENERAL CONTACT</p>
              <h2 className="mt-4 text-2xl font-black leading-tight text-trust-900 sm:text-3xl">
                講演依頼・企業・教育機関・その他
              </h2>
              <ul className="mt-5 grid gap-2 text-sm font-semibold leading-7 text-trust-900/70">
                {contactTypes.map((type) => (
                  <li key={type}>{type}</li>
                ))}
              </ul>
              <div className="mt-7 rounded-[18px] bg-paper p-5">
                <p className="text-xs font-black text-mint-700">MAIL</p>
                <p className="mt-2 break-all text-sm font-bold text-trust-900">{contactEmail}</p>
              </div>
              <Link
                href={mailHref}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-mint-700 px-6 py-3 text-sm font-black text-white"
              >
                <Mail size={18} />
                メールで問い合わせる
              </Link>
            </section>
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
