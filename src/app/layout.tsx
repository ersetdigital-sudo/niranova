import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niranova · Isi Ulang & Bayar Tagihan",
  description:
    "Pulsa, paket data, token PLN, top up game, e-wallet, dan bayar tagihan. Ringan, cepat, dan tanpa daftar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${fraunces.variable} ${outfit.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
