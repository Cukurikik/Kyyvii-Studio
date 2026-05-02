import Link from "next/link";
import { Instagram, MapPin, Phone, Clock, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="size-6 bg-zinc-900 rounded-md flex items-center justify-center">
                <div className="size-3 border-[1.5px] border-white rounded-full" />
              </div>
              <span className="font-bold text-xl tracking-tighter text-zinc-900">
                Kyyvii Studio.
              </span>
            </Link>
            <p className="text-zinc-500 mb-6 max-w-sm text-sm leading-relaxed">
              Menangkap setiap momen dengan sempurna. Studio foto premium Batam dengan dukungan pencahayaan profesional dan environment yang estetik.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="size-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-400 transition-colors bg-white">
                <Instagram className="size-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://wa.me/6282186850693" target="_blank" rel="noreferrer" className="size-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-400 transition-colors bg-white">
                <Phone className="size-4" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-zinc-900 font-bold mb-6 text-sm tracking-wide">PINTASAN</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors font-medium">Beranda</Link></li>
              <li><Link href="#galeri" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors font-medium">Galeri Karya</Link></li>
              <li><Link href="#pricelist" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors font-medium">Paket & Harga</Link></li>
              <li><Link href="#booking" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors font-medium">Reservasi Online</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h3 className="text-zinc-900 font-bold mb-6 text-sm tracking-wide">INFORMASI KONTAK</h3>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-zinc-400" />
                <span>
                  <strong className="text-zinc-900 block mb-1">Kyyvii Studio Batam</strong>
                  Ruko Cipta Grand City Blok H No.88 <br/>
                  Batu Aji, Kota Batam, Kepulauan Riau
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-5 shrink-0 text-zinc-400" />
                <span className="font-medium text-zinc-700">Buka Setiap Hari: <span className="font-semibold text-zinc-900">10:00 - 22:00 WIB</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-zinc-400" />
                <span className="font-semibold text-zinc-900">0821-8685-0693</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Map / Bottom bar */}
        <div className="border-t border-zinc-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400">
            &copy; {new Date().getFullYear()} KYYVII STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[11px] font-semibold tracking-widest uppercase text-zinc-400">
            <a href="#" className="hover:text-zinc-900 transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
