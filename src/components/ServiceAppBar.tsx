"use client";

import { useRouter } from "next/navigation";
import { Icon } from "./Icons";
import type { Service } from "@/lib/services";

export function ServiceAppBar({ service }: { service: Service }) {
  const router = useRouter();

  return (
    <div className="lg:hidden sticky top-0 z-40 bg-[#FCFCFC] border-b border-[#EFE3D3]">
      <div className="h-14 px-3 grid grid-cols-[40px_1fr_40px] items-center gap-2">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Kembali"
          className="w-10 h-10 rounded-full grid place-items-center border border-[#E2D4C3] active:bg-[#FFFAE3]"
        >
          <Icon name="chevronLeft" size={19} stroke="#2B2430" />
        </button>
        <span className="text-center text-xs font-bold uppercase tracking-[.12em] truncate">
          {service.title}
        </span>
        <a
          href="https://wa.me/6285711172317"
          target="_blank"
          rel="noreferrer"
          aria-label="Hubungi admin WhatsApp"
          className="w-10 h-10 rounded-full grid place-items-center bg-[#F7567C] text-[#FFFAE3] text-[10px] font-extrabold"
        >
          WA
        </a>
      </div>
    </div>
  );
}
