"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Galeri", href: "#galeri" },
  { name: "Pricelist", href: "#pricelist" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b border-zinc-200/60"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <span className="font-bold text-xl tracking-tighter text-zinc-900 transition-colors group-hover:text-zinc-600">
              Kyyvii Studio.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-4 w-px bg-zinc-200" />
            <Button asChild className="rounded-full font-medium h-10 px-6">
              <Link href="#booking">
                Booking Sekarang
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-zinc-500 hover:text-zinc-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-600 hover:text-zinc-900 p-2 rounded-md hover:bg-zinc-50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-zinc-100">
                <Button asChild className="w-full rounded-full h-12 text-base">
                  <Link
                    href="#booking"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Booking Sekarang <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
