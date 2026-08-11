import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { navItems } from "@/lib/site-data";

const instagramUrl = "https://www.instagram.com/its_day_inslum?utm_source=qr";
const mailHref =
  "mailto:wakana.oka.8@gmail.com?subject=ITS%20DAY%E3%81%B8%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B";

export function Footer() {
  return (
    <footer className="bg-trust-900 py-12 text-white">
      <div className="section-shell grid gap-9 md:grid-cols-[1.1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo.jpeg" alt="ITS DAY" width={38} height={49} className="h-11 w-auto rounded-sm bg-white" />
            <div>
              <p className="text-lg font-black">ITS DAY</p>
              <p className="text-sm text-white/68">Every dog has its day</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/76">
            フィリピン・マニラの子どもたちと大学生が、新しい体験や出会いを通して一歩を踏み出すきっかけをつくる学生団体です。
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/18"
            >
              <Instagram size={18} />
            </Link>
            <Link href={mailHref} aria-label="メールで問い合わせる" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/18">
              <Mail size={18} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
          {navItems.filter((item) => item.href !== "/").map((item) => (
            <Link key={item.href} href={item.href} className="text-white/78 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/privacy" className="text-white/78 transition hover:text-white">
            プライバシーポリシー
          </Link>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/12 pt-6 text-xs text-white/50">
        <p>© ITS DAY.</p>
      </div>
    </footer>
  );
}
