import Link from "next/link";
import { Logo } from "./Logo";
import { TabLink } from "./TabLink";

const SERVICE_LINKS = [
  { tab: "pulsa", href: "/?tab=pulsa#beli", label: "Pulsa & Data" },
  { tab: "pln", href: "/?tab=pln#beli", label: "Token PLN" },
  { tab: "game", href: "/?tab=game#beli", label: "Top Up Game" },
  { tab: "ewallet", href: "/?tab=ewallet#beli", label: "E-Wallet" },
  { tab: "tagihan", href: "/?tab=tagihan#beli", label: "Tagihan" },
];

export function Footer() {
  return (
    <footer className="bg-[#F7567C] text-[#FFFAE3]/75">
      <div className="max-w-6xl mx-auto px-5 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 border-b border-[#FFFAE3]/25 pb-10">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Kebutuhan digital harian, diurus dengan cara yang lebih ringan.
            </p>
          </div>
          <div className="md:text-right">
            <div className="text-[10px] font-semibold tracking-[.18em] uppercase text-[#FFFAE3]/60">Bantuan</div>
            <a
              href="https://wa.me/6285711172317"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-lg font-semibold text-[#FFFAE3] hover:text-white"
            >
              0857 1117 2317
            </a>
            <div className="text-xs mt-1">Admin aktif setiap hari</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1.2fr] gap-8 py-9">
          <div>
            <h4 className="text-[#FFFAE3] font-semibold text-xs uppercase tracking-[.14em] mb-4">Layanan</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <TabLink tab={item.tab} href={item.href} className="hover:text-[#FFFAE3]">
                    {item.label}
                  </TabLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFFAE3] font-semibold text-xs uppercase tracking-[.14em] mb-4">Navigasi</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#FFFAE3]">Beranda</Link></li>
              <li><Link href="/#layanan" className="hover:text-[#FFFAE3]">Semua layanan</Link></li>
              <li><Link href="/#faq" className="hover:text-[#FFFAE3]">FAQ</Link></li>
              <li><Link href="/cek-pesanan/" className="hover:text-[#FFFAE3]">Lacak pesanan</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFFAE3] font-semibold text-xs uppercase tracking-[.14em] mb-4">Pembayaran</h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="border border-[#FFFAE3]/30 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[#FFFAE3]">
                QRIS
              </span>
            </div>
            <p className="text-xs mt-4 max-w-[220px] leading-relaxed">
              Bayar dari e-wallet atau m-banking favoritmu.
            </p>
          </div>
        </div>

        <div className="border-t border-[#FFFAE3]/25 pt-5 flex flex-col sm:flex-row justify-between gap-2 text-xs">
          <span>© 2026 Niranova.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFFAE3]" />
            Sistem berjalan normal
          </span>
        </div>
      </div>
    </footer>
  );
}
