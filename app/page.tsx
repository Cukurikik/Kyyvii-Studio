import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { Pricelist } from "@/components/sections/Pricelist";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Showcase />
        <Pricelist />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
