"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import { services } from "@/lib/services";
import { rp } from "@/lib/format";

const CATEGORY: Record<string, string> = {
  pulsa: "Isi ulang",
  "paket-data": "Isi ulang",
  "e-wallet": "Isi ulang",
  pln: "Tagihan",
  pdam: "Tagihan",
  "tv-internet": "Tagihan",
  "top-up-game": "Hiburan",
  "bpjs-kesehatan": "Kesehatan",
  multifinance: "Tagihan",
};

export function ServiceCarousel() {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const update = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      const left = rail.scrollLeft;
      setCanPrev(left > 2);
      setCanNext(left < max - 2);
      setProgress(max > 0 ? Math.round((left / max) * 100) : 100);
    };

    update();
    rail.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(rail);

    return () => {
      rail.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  const move = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-service-card]");
    const amount = (card?.offsetWidth ?? rail.clientWidth * 0.8) + 12;
    rail.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section id="layanan" className="max-w-6xl mx-auto px-5 pt-14 md:pt-16 pb-12 scroll-mt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="kicker text-[#F7567C]">Layanan digital</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">Pilih yang kamu butuh.</h2>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            data-carousel-prev
            onClick={() => move(-1)}
            disabled={!canPrev}
            aria-label="Geser layanan ke kiri"
            className="w-10 h-10 rounded-full border border-[#EFE3D3] bg-white grid place-items-center text-[#2B2430] transition hover:border-[#F7567C] disabled:opacity-30 disabled:pointer-events-none"
          >
            <Icon name="chevronLeft" size={17} stroke="#2B2430" />
          </button>
          <button
            type="button"
            data-carousel-next
            onClick={() => move(1)}
            disabled={!canNext}
            aria-label="Geser layanan ke kanan"
            className="w-10 h-10 rounded-full bg-[#2B2430] text-[#FFFAE3] grid place-items-center transition hover:bg-[#F7567C] disabled:opacity-30 disabled:pointer-events-none"
          >
            <Icon name="chevronLeft" size={17} stroke="#FFFAE3" className="rotate-180" />
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-xs text-[#7C7076]">Geser atau pakai tombol panah untuk melihat layanan lainnya.</p>
      </div>

      <div
        ref={railRef}
        tabIndex={0}
        aria-label="Daftar layanan"
        className="mt-3 -mx-5 px-5 pt-2 pb-3 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-pl-5 [scrollbar-width:none]"
      >
        {services.map((service, i) => {
          const start = service.items?.[0]?.[2];
          return (
            <Link
              key={service.slug}
              href={`/layanan/${service.slug}/`}
              data-service-card
              className={`snap-start shrink-0 w-[80vw] max-w-[260px] sm:w-[245px] sm:max-w-none rounded-[24px] border border-[#EFE3D3] p-5 transition hover:border-[#F7567C] hover:shadow-[0_16px_30px_-24px_rgba(247,86,124,.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7567C] ${
                i % 3 === 1 ? "bg-[#FFFAE3]" : "bg-white"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="disp text-sm font-semibold text-[#F7567C]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="w-10 h-10 rounded-[14px] grid place-items-center"
                  style={{ background: service.icon.bg }}
                >
                  <Icon name={service.icon.name} size={17} stroke={service.icon.stroke} />
                </span>
              </div>
              <div className="mt-4 text-[9px] font-bold uppercase tracking-[.16em] text-[#F7567C]">
                {CATEGORY[service.slug]}
              </div>
              <h3 className="mt-1 text-lg font-semibold leading-tight">{service.title}</h3>
              <p className="mt-1.5 text-xs text-[#7C7076] leading-relaxed">{service.blurb}</p>
              <div className="mt-4 pt-3 border-t border-[#EFE3D3] flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold">
                  {start ? `Mulai ${rp(start)}` : "Cek tagihan"}
                </span>
                <span className="w-6 h-6 rounded-full bg-[#F7567C] text-white grid place-items-center text-[10px]">
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-1 flex items-center gap-3">
        <div className="h-1 flex-1 rounded-full bg-[#EFE3D3] overflow-hidden">
          <div
            data-carousel-progress
            className="h-full rounded-full bg-[#F7567C] transition-[width] duration-200"
            style={{ width: `${Math.max(progress, 6)}%` }}
          />
        </div>
        <span className="text-[10px] font-semibold text-[#7C7076] shrink-0">{progress}%</span>
      </div>
    </section>
  );
}
