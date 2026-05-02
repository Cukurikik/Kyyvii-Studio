import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Self Photo",
    price: "150k",
    description: "Sempurna untuk foto kasual bersama teman atau pasangan.",
    features: [
      "15 Menit sesi foto",
      "Kamera & Lighting profesional",
      "Dapat semua soft file",
      "Cetak 2 lbr foto (4R)",
      "Maksimal 2 orang (add-on tersedia)",
    ],
    buttonText: "Pilih Tiket",
    isPopular: false,
  },
  {
    name: "Pro Studio",
    price: "350k",
    description: "Pemotretan profesional dengan fotografer khusus.",
    features: [
      "45 Menit sesi foto",
      "Fotografer profesional",
      "1 Kali ganti kostum",
      "Dapat semua soft file",
      "Edit 10 foto pilihan",
      "Cetak 5 lbr foto (4R)",
    ],
    buttonText: "Pilih Pro",
    isPopular: true,
  },
  {
    name: "Ultimate Group",
    price: "750k",
    description: "Paket lengkap untuk grup besar, pre-wedding, atau acara spesial.",
    features: [
      "90 Menit sesi foto",
      "Fotografer profesional",
      "Unlimited ganti kostum",
      "Pilihan 2 background",
      "Dapat semua soft file",
      "Edit 25 foto pilihan",
      "Cetak 10 lbr foto (4R) + 1 frame 10R",
    ],
    buttonText: "Pilih Ultimate",
    isPopular: false,
  },
];

export function Pricelist() {
  return (
    <section id="pricelist" className="py-24 bg-zinc-50/50 relative overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Pilih Paket Studio Anda
          </h2>
          <p className="mt-4 text-sm text-zinc-500">
            Transparan, simpel, dan hasil berkualitas tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-6 md:p-8 rounded-2xl border transition-all ${
                tier.isPopular ? "border-zinc-800 bg-zinc-900 shadow-2xl md:scale-105 z-10" : "border-zinc-200 bg-white"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-[9px] text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Paling Populer
                </div>
              )}
              
              <div className="mb-6">
                <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 block ${tier.isPopular ? 'text-zinc-500' : 'text-zinc-400'}`}>{tier.name} Tier</span>
              </div>
              
              <div className="mb-6 border-b border-zinc-200/50 pb-6">
                <span className={`text-3xl font-bold ${tier.isPopular ? 'text-white' : 'text-zinc-900'}`}>Rp {tier.price}</span>
                <span className={`text-xs ml-1 font-normal ${tier.isPopular ? 'text-zinc-500' : 'text-zinc-400'}`}>/sesi</span>
              </div>
              
              <ul className="flex flex-col gap-4 flex-1 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`size-4 shrink-0 ${tier.isPopular ? 'text-zinc-300' : 'text-zinc-400'}`} />
                    <span className={`text-xs ${tier.isPopular ? 'text-zinc-300' : 'text-zinc-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                asChild
                variant={tier.isPopular ? "default" : "outline"}
                className="w-full h-11 font-bold text-xs"
              >
                <Link href={`#booking?package=${encodeURIComponent(tier.name)}`}>
                  {tier.buttonText}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
