import { Icon } from "./Icons";
import type { Service } from "@/lib/services";

export function ServiceHero({ service, index }: { service: Service; index: number }) {
  return (
    <section className="bg-[#FFFAE3]">
      <div className="max-w-4xl mx-auto px-5 py-8 md:py-10 flex items-start justify-between gap-5">
        <div>
          <div className="kicker text-[#F7567C]">
            Layanan / {String(index + 1).padStart(2, "0")}
          </div>
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold text-[#2B2430]">{service.title}</h1>
          <p className="mt-3 text-sm md:text-base text-[#7C7076] max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </div>
        <span className="arch w-16 h-20 md:w-20 md:h-24 shrink-0 grid place-items-center bg-[#F7567C]">
          <Icon name={service.icon.name} size={26} stroke="#FFFAE3" />
        </span>
      </div>
    </section>
  );
}
