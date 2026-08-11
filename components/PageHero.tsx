import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  objectPosition = "center"
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image?: string;
  imageAlt?: string;
  objectPosition?: string;
}) {
  return (
    <section className="bg-paper pt-28">
      <div className={`section-shell grid gap-8 ${image ? "pb-10" : "pb-14"} md:grid-cols-[0.9fr_1.1fr] md:items-end`}>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-trust-900 sm:text-6xl">{title}</h1>
        </div>
        {text ? <p className="text-base leading-8 text-trust-900/72 sm:text-lg">{text}</p> : null}
      </div>
      {image ? (
        <div className="section-shell pb-14">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] photo-shadow">
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              style={{ objectPosition }}
            />
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
