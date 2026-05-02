"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ImageIcon, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 grid-bg">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none hero-gradient text-center" style={{ background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-100 border border-zinc-200 rounded-full mb-6 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Batu Aji, Batam</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.05]"
          >
            Capture Your <br className="hidden md:block" />
            <span className="text-zinc-400">Modern Legacy.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl balance-text leading-relaxed mt-2"
          >
            Photo studio profesional dengan estetika minimalis. Kami mengabadikan momen berharga Anda dengan standar kualitas premium di Batam.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button asChild size="lg" className="rounded-full h-14 px-8 text-base w-full sm:w-auto font-semibold">
              <Link href="#booking">
                Booking Sekarang
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-base w-full sm:w-auto flex items-center gap-2">
              <Link href="#pricelist">
                Lihat Paket
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Feature / Trust Indicators below the fold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="mt-20 pt-10 border-t border-zinc-200/60 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "Premium", label: "Studio Equipment" },
            { value: "10:00 - 22:00", label: "Jam Operasional" },
            { value: "Sameday", label: "Hasil Edit Foto" },
            { value: "Nyaman", label: "Full AC & Ruang Ganti" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-xl md:text-2xl font-bold text-zinc-900 mb-1 tracking-tight">{stat.value}</div>
              <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
