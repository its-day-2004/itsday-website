"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mint-100 bg-white shadow-sm">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="ITS DAY HOME">
          <Image src="/images/logo.jpeg" alt="ITS DAY" width={36} height={46} className="h-10 w-auto" priority />
          <span className="text-base font-black text-trust-900">ITS DAY</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-trust-900 lg:flex">
          {navItems.slice(1, 7).map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-mint-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-trust-900 px-5 py-2.5 text-sm font-bold text-white shadow-soft transition hover:bg-trust-800 lg:inline-flex"
        >
          お問い合わせ
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-mint-100 bg-white text-trust-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-mint-100 bg-paper lg:hidden">
          <nav className="section-shell grid py-4 text-sm font-bold text-trust-900">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-mint-100 py-3 last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
