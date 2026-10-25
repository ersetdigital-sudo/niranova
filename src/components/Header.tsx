import Link from "next/link";
import { Logo } from "./Logo";
import { TabLink } from "./TabLink";

type Variant = "home" | "sub";

const NAV: Record<Variant, { href: string; label: string; tab?: string }[]> = {
  home: [
    { href: "/", label: "Beranda" },
    { href: "#layanan", label: "Layanan" },
    { href: "#beli", label: "Transaksi" },
    { href: "/?tab=game#beli", label: "Game", tab: "game" },
    { href: "#faq", label: "FAQ" },
    { href: "/cek-pesanan/", label: "Lacak" },
  ],
  sub: [
    { href: "/", label: "Beranda" },
    { href: "/#layanan", label: "Layanan" },
    { href: "/layanan/pulsa/", label: "Pulsa" },
    { href: "/layanan/top-up-game/", label: "Game" },
    { href: "/#faq", label: "FAQ" },
    { href: "/cek-pesanan/", label: "Lacak" },
  ],
};

export function Header({ variant = "sub" }: { variant?: Variant }) {
  const nav = NAV[variant];

  return (
    <>
      <div className="bg-[#F7567C] text-[#FFFAE3]">
        <div className="max-w-6xl mx-auto px-5 h-9 flex items-center justify-between gap-4 text-[10px] font-semibold tracking-[.14em] uppercase">
          <span>Niranova · Digital Services</span>
          <span className="hidden sm:block">Tanpa daftar · Proses instan</span>
          <a href="https://wa.me/6285711172317" target="_blank" rel="noreferrer" className="hover:underline">
            WA 0857 1117 2317
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-[#FCFCFC]/95 backdrop-blur border-b border-[#EFE3D3]">
        <div className="max-w-6xl mx-auto px-5 h-[72px] flex items-center justify-between">
          {variant === "home" ? (
            <a href="#" aria-label="Niranova">
              <Logo />
            </a>
          ) : (
            <Link href="/" aria-label="Niranova">
              <Logo />
            </Link>
          )}

          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#7C7076]">
            {nav.map((item) =>
              item.tab ? (
                <TabLink key={item.label} tab={item.tab} href={item.href} className="hover:text-[#2B2430]">
                  {item.label}
                </TabLink>
              ) : item.href.startsWith("#") ? (
                <a key={item.label} href={item.href} className="hover:text-[#2B2430]">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} className="hover:text-[#2B2430]">
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <Link
            href={variant === "home" ? "#beli" : "/#layanan"}
            className="btn px-5 py-2.5 text-xs"
          >
            {variant === "home" ? "Mulai sekarang" : "Semua layanan"}
          </Link>
        </div>
      </header>
    </>
  );
}
