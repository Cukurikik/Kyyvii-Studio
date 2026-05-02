"use client";

import Image from "next/image";

const PORTFOLIO_IMAGES = [
  { src: "/images/475584756_17872730583269090_6892673863803887873_n.jpg", alt: "Corporate headshot" },
  { src: "/images/487514090_17880649104269090_8944560476515186991_n.jpg", alt: "Family portrait" },
  { src: "/images/488871578_17880649554269090_667863197236361231_n.jpg", alt: "Self photo session" },
  { src: "/images/625867050_18056200880377488_2427091363379382321_n.jpg", alt: "Product photography" },
];

export function Showcase() {
  return (
    <section id="galeri" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Karya Kami
            </h2>
            <p className="mt-4 text-lg text-zinc-500 max-w-xl">
              Lihat beberapa hasil pemotretan terbaik dari studio kami. Kami mengutamakan detail, ekspresi, dan pencahayaan untuk gambar yang memukau.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {PORTFOLIO_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 group ${
                i === 0 || i === 3 ? "sm:aspect-[3/4]" : "sm:aspect-square"
              } aspect-square shadow-sm`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
