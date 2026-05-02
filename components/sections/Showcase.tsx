"use client";

import Image from "next/image";
import img1 from "@/src/assets/images/regenerated_image_1777722127337.jpg";
import img2 from "@/src/assets/images/regenerated_image_1777722129581.jpg";
import img3 from "@/src/assets/images/regenerated_image_1777722131490.jpg";
import img4 from "@/src/assets/images/regenerated_image_1777722133170.jpg";

const PORTFOLIO_IMAGES = [
  { src: img1, alt: "Corporate headshot" },
  { src: img2, alt: "Family portrait" },
  { src: img3, alt: "Self photo session" },
  { src: img4, alt: "Product photography" },
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
