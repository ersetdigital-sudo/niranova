import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckoutClient } from "@/components/CheckoutClient";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Pembayaran · Niranova",
};

export default function CheckoutPage() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-5 py-7">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Checkout", href: "/checkout/" },
          ]}
        />
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-[#2B2430] pb-4">
          <div>
            <div className="kicker text-[#F7567C]">Pembayaran</div>
            <h1 className="text-2xl md:text-3xl font-extrabold mt-1">Selesaikan invoice.</h1>
          </div>
          <p className="text-xs text-[#7C7076] max-w-xs">
            Scan QRIS, lalu konfirmasi. Admin memverifikasi pembayaran sebelum pesanan diproses.
          </p>
        </div>

        <div className="mt-5">
          <CheckoutClient />
        </div>
      </main>

      <Footer />
    </>
  );
}
