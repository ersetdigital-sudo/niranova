import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icons";
import { BuyWidget } from "@/components/BuyWidget";
import { ServiceCarousel } from "@/components/ServiceCarousel";

const FAQ = [
  ["Harus daftar akun dulu?", "Nggak perlu. Pilih layanan, isi data tujuan, lalu bayar lewat QRIS."],
  ["Pembayaran diverifikasi berapa lama?", "Admin mengecek pembayaran secara berkala. Setelah cocok, pesanan langsung diproses."],
  ["Bisa bayar pakai apa?", "Saat ini pembayaran lewat QRIS. Bisa discan dari e-wallet atau m-banking."],
  ["Kalau data tujuan salah?", "Periksa lagi sebelum menekan bayar. Pesanan yang sudah diproses tidak bisa dibatalkan."],
  ["Di mana melihat status pesanan?", "Buka halaman Lacak, masukkan nomor invoice yang tampil setelah checkout."],
];

const BENEFITS = [
  {
    icon: "zap" as const,
    title: "Sekali isi, langsung jalan.",
    body: "Pulsa, token, dan item game diproses cepat setelah pembayaran diverifikasi.",
  },
  {
    icon: "card" as const,
    title: "Harga terlihat dari awal.",
    body: "Nominal dan biaya layanan ditampilkan sebelum kamu bayar. Nggak ada kejutan.",
  },
  {
    icon: "shieldCheck" as const,
    title: "Ada yang bisa ditanya.",
    body: "Admin siap membantu lewat WhatsApp kalau ada kendala di tengah transaksi.",
  },
];

export default function Home() {
  return (
    <>
      <Header variant="home" />

      <main>
        {/* HERO */}
        <section className="bg-[#FFFAE3]">
          <div className="max-w-6xl mx-auto px-5 pt-12 md:pt-16 pb-24 md:pb-28 grid lg:grid-cols-[1.12fr_.88fr] gap-8 lg:gap-12 items-stretch">
            <div className="flex flex-col justify-center">
              <div className="rise kicker text-[#F7567C] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F7567C]" />
                PPOB / Niranova / 2026
              </div>
              <h1 className="rise rise-1 mt-5 text-[48px] sm:text-[62px] md:text-[72px] font-semibold leading-[.98]">
                Kebutuhan digital,
                <br />
                <span className="italic text-[#F7567C]">lebih ringan.</span>
              </h1>
              <p className="rise rise-2 mt-6 max-w-md text-base md:text-lg leading-relaxed text-[#7C7076]">
                Pulsa, data, token listrik, game, e-wallet, dan tagihan rumah. Satu tempat yang nggak bikin
                ribet.
              </p>
              <div className="rise rise-3 mt-7 flex flex-wrap gap-2.5">
                <a href="#beli" className="btn px-5 py-3 text-sm">
                  Mulai transaksi →
                </a>
                <a href="#layanan" className="btn-outline px-5 py-3 text-sm">
                  Lihat layanan
                </a>
              </div>
              <div className="rise rise-4 mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#7C7076]">
                <span className="flex items-center gap-1.5">
                  <Icon name="shieldCheck" size={14} stroke="#F7567C" /> Tanpa akun
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="zap" size={14} stroke="#F7567C" /> QRIS
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="card" size={14} stroke="#F7567C" /> Verifikasi admin
                </span>
              </div>
            </div>

            <div className="arch bg-[#F7567C] text-[#FFFAE3] p-7 pt-20 md:p-9 md:pt-24 flex flex-col justify-between min-h-[400px] lg:min-h-[460px]">
              <div className="flex items-start justify-between gap-4">
                <span className="kicker text-[#FFFAE3]/70">Layanan / 01—09</span>
                <svg width="24" height="24" viewBox="0 0 40 40" aria-hidden="true">
                  <g fill="#FFFAE3">
                    <ellipse cx="20" cy="10" rx="6.2" ry="9.5" />
                    <ellipse cx="20" cy="30" rx="6.2" ry="9.5" />
                    <ellipse cx="10" cy="20" rx="9.5" ry="6.2" />
                    <ellipse cx="30" cy="20" rx="9.5" ry="6.2" />
                  </g>
                  <circle cx="20" cy="20" r="4.2" fill="#F7567C" />
                </svg>
              </div>

              <div className="my-6">
                <div className="disp text-[100px] md:text-[124px] font-semibold leading-[.8]">09</div>
                <div className="mt-3 text-sm font-medium text-[#FFFAE3]/80">layanan dalam satu platform.</div>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] font-medium">
                {["Pulsa & data", "Token listrik", "Top up game", "Bayar tagihan"].map((item) => (
                  <div key={item} className="flex items-center gap-2 border-t border-[#FFFAE3]/25 pt-2">
                    <span className="w-1 h-1 rounded-full bg-[#FFFAE3]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ORDER */}
        <section id="beli" className="relative z-10 max-w-6xl mx-auto px-5 -mt-16 md:-mt-20 scroll-mt-24">
          <BuyWidget />
        </section>

        {/* LAYANAN */}
        <ServiceCarousel />

        {/* BENEFITS */}
        <section className="bg-white border-y border-[#EFE3D3]">
          <div className="max-w-6xl mx-auto px-5 py-12 md:py-14">
            <div className="kicker text-[#F7567C]">Kenapa Niranova</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold max-w-xl">
              Dibuat supaya urusannya nggak bertele-tele.
            </h2>
            <div className="mt-7 grid md:grid-cols-3 gap-3">
              {BENEFITS.map((benefit, i) => (
                <div key={benefit.title} className="rounded-[22px] bg-[#FFFAE3] border border-[#EFE3D3] p-5">
                  <div className="flex items-start justify-between gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#F7567C] grid place-items-center">
                      <Icon name={benefit.icon} size={16} stroke="#FFFAE3" />
                    </span>
                    <span className="disp text-sm font-semibold text-[#F7567C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-tight">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm text-[#7C7076] leading-relaxed">{benefit.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-6xl mx-auto px-5 py-12 md:py-16 scroll-mt-24">
          <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-8">
            <div>
              <div className="kicker text-[#F7567C]">FAQ</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold">Masih ada yang bikin ragu?</h2>
              <p className="mt-3 text-sm text-[#7C7076] max-w-xs leading-relaxed">
                Jawaban singkat untuk hal yang paling sering ditanyakan.
              </p>
              <div className="mt-5 rounded-[20px] bg-[#F7567C] text-[#FFFAE3] p-5">
                <div className="text-[9px] font-bold uppercase tracking-[.18em] text-[#FFFAE3]/60">
                  Admin WhatsApp
                </div>
                <div className="disp text-xl font-semibold mt-1">0857 1117 2317</div>
                <a
                  href="https://wa.me/6285711172317"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-xs font-semibold underline"
                >
                  Chat sekarang →
                </a>
              </div>
            </div>

            <div>
              {FAQ.map(([q, a], i) => (
                <details key={q} className="border-t border-[#EFE3D3] py-4">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer">
                    <span className="flex gap-3">
                      <span className="disp text-xs font-semibold text-[#F7567C] pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm md:text-base font-semibold">{q}</span>
                    </span>
                    <span className="pl transition text-xl leading-none text-[#F7567C]">+</span>
                  </summary>
                  <p className="text-sm text-[#7C7076] mt-2 pl-8 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
