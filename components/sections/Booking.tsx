"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format, addDays, isWithinInterval, parse } from "date-fns";
import { id } from "date-fns/locale";
import { ArrowRight, Calendar, Clock, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const bookingSchema = z.object({
  package: z.string().min(1, "Silakan pilih paket foto"),
  date: z.string().min(1, "Silakan pilih tanggal"),
  time: z.string().min(1, "Silakan pilih jam operasional"),
  name: z.string().min(3, "Nama terlalu pendek"),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const PACKAGES = ["Self Photo - Rp 150k", "Pro Studio - Rp 350k", "Ultimate Group - Rp 750k"];
const TIME_SLOTS = [
  "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"
];

// Generate next 14 dates
const DATES = Array.from({ length: 14 }).map((_, i) => {
  const d = addDays(new Date(), i + 1);
  return {
    value: format(d, "yyyy-MM-dd"),
    label: format(d, "EEEE, d MMM yyyy", { locale: id })
  };
});

export function Booking() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const selectedPackage = watch("package");
  const selectedDate = watch("date");
  const selectedTime = watch("time");

  const onSubmit = (data: BookingFormValues) => {
    // Format to WhatsApp API
    const phoneNumber = "6282186850693";
    const text = `Halo Admin Kyyvii Studio, saya ingin booking jadwal studio:
    
*Nama:* ${data.name}
*Paket:* ${data.package}
*Tanggal:* ${format(new Date(data.date), "dd MMMM yyyy", { locale: id })}
*Jam:* ${data.time} WIB
*Catatan Tambahan:* ${data.notes || "-"}

Mohon info ketersediaannya, terima kasih!`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const nextStep = (targetStep: 1 | 2 | 3) => {
    if (targetStep === 2 && !selectedPackage) return;
    if (targetStep === 3 && (!selectedDate || !selectedTime)) return;
    setStep(targetStep);
  };

  return (
    <section id="booking" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Booking Jadwal
          </h2>
          <p className="mt-4 text-zinc-500">
            Amankan sesi Anda dengan mudah. Isi form di bawah ini dan admin kami akan memproses via WhatsApp.
          </p>
        </div>

        {/* Stepper Header */}
        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute left-0 top-1/2 w-full h-px bg-zinc-200 -z-10" />
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`flex items-center justify-center size-10 rounded-full border-2 bg-zinc-50 transition-colors bg-white ${
                step >= num ? "border-zinc-900 text-zinc-900 font-bold" : "border-zinc-200 text-zinc-400"
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-zinc-200 p-6 md:p-10 rounded-3xl shadow-sm">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <ImageIcon className="size-5 text-zinc-400" /> 1. Pilih Paket
                </h3>
                <div className="space-y-3">
                  {PACKAGES.map((pkg) => (
                    <label
                      key={pkg}
                      className={`block p-4 border rounded-xl cursor-pointer transition-colors ${
                        selectedPackage === pkg
                          ? "border-zinc-900 bg-zinc-50"
                          : "border-zinc-200 hover:border-zinc-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`size-5 rounded-full border flex items-center justify-center ${selectedPackage === pkg ? "border-zinc-900" : "border-zinc-300"}`}>
                          {selectedPackage === pkg && <div className="size-2.5 bg-zinc-900 rounded-full" />}
                        </div>
                        <input
                          type="radio"
                          className="hidden"
                          value={pkg}
                          {...register("package")}
                        />
                        <span className={`font-medium ${selectedPackage === pkg ? "text-zinc-900" : "text-zinc-700"}`}>{pkg}</span>
                      </div>
                    </label>
                  ))}
                  {errors.package && <p className="text-red-500 text-sm mt-2">{errors.package.message}</p>}
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button type="button" onClick={() => nextStep(2)} disabled={!selectedPackage}>
                  Lanjut ke Jadwal <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400" /> 2. Pilih Tanggal & Waktu
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Pilih Tanggal</label>
                  <select
                    className="w-full bg-white border border-zinc-200 text-zinc-900 rounded-xl p-3 focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors"
                    {...register("date")}
                  >
                    <option value="">Pilih hari...</option>
                    {DATES.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
                  </select>
                  {errors.date && <p className="text-red-500 text-sm mt-2">{errors.date.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2 flex items-center gap-2">
                    <Clock className="size-4 text-zinc-400" /> Pilih Jam (10:00 - 22:00 WIB)
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {TIME_SLOTS.map((time) => (
                      <label
                        key={time}
                        className={`text-center p-3 border rounded-xl cursor-pointer transition-colors text-sm ${
                          selectedTime === time
                            ? "border-zinc-900 bg-zinc-900 text-white font-semibold shadow-md"
                            : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
                        }`}
                      >
                        <input
                          type="radio"
                          className="hidden"
                          value={time}
                          {...register("time")}
                        />
                        {time}
                      </label>
                    ))}
                  </div>
                  {errors.time && <p className="text-red-500 text-sm mt-2">{errors.time.message}</p>}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Kembali
                </Button>
                <Button type="button" onClick={() => nextStep(3)} disabled={!selectedDate || !selectedTime}>
                  Lanjut Data Diri <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">
                3. Informasi Kontak
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-white border border-zinc-200 text-zinc-900 rounded-xl p-3 focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors"
                    {...register("name")}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Catatan Tambahan (Opsional)</label>
                  <textarea
                    placeholder="Misal: Saya mau add-on 1 orang extra."
                    className="w-full bg-white border border-zinc-200 text-zinc-900 rounded-xl p-3 min-h[100px] focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors"
                    {...register("notes")}
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="bg-zinc-50 p-5 rounded-xl mt-6 border border-zinc-200">
                <h4 className="text-sm font-bold text-zinc-900 mb-2">Ringkasan Info:</h4>
                <div className="text-sm text-zinc-600 space-y-2">
                  <p className="flex justify-between"><span>Paket</span> <span className="font-semibold text-zinc-900">{selectedPackage}</span></p>
                  <p className="flex justify-between"><span>Tanggal</span> <span className="font-semibold text-zinc-900">{selectedDate}</span></p>
                  <p className="flex justify-between"><span>Jam</span> <span className="font-semibold text-zinc-900">{selectedTime} WIB</span></p>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={() => setStep(2)}>
                  Kembali
                </Button>
                <Button type="submit" className="bg-zinc-900 hover:bg-zinc-800 text-white">
                  Kirim ke WhatsApp <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
