import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  text,
  image
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
}) {
  return (
    <section className="bg-paper pt-28">
      <div className="section-shell grid gap-8 pb-14 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-trust-900 sm:text-6xl">{title}</h1>
        </div>
        <p className="text-base leading-8 text-trust-900/72 sm:text-lg">{text}</p>
      </div>
      {image ? (
        <div className="section-shell pb-14">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] photo-shadow">
            <Image src={image} alt={title} fill className="object-cover" sizes="100vw" priority />
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function PageFrame({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
