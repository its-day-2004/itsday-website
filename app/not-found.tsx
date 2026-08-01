import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-paper pt-16">
        <section className="section-shell flex min-h-[70vh] flex-col justify-center py-20">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-4xl font-black text-trust-900 sm:text-6xl">ページが見つかりません</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-trust-900/70">
            お探しのページは移動したか、現在公開されていない可能性があります。
          </p>
          <Link href="/" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-trust-900 px-6 py-3 text-sm font-black text-white">
            <ArrowLeft size={16} /> HOMEへ戻る
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
