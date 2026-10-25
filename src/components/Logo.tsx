export function Logo({ variant = "default" }: { variant?: "default" | "light" }) {
  const petal = variant === "light" ? "#FFFAE3" : "#F7567C";
  const center = variant === "light" ? "#F7567C" : "#FFFAE3";
  const name = variant === "light" ? "#FFFAE3" : "#2B2430";
  const sub = variant === "light" ? "rgba(255,250,227,.65)" : "#F7567C";

  return (
    <span
      className="inline-flex items-center gap-2.5"
      data-logo="niranova-bloom"
      role="img"
      aria-label="Niranova"
    >
      <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
        <g fill={petal}>
          <ellipse cx="20" cy="10" rx="6.2" ry="9.5" />
          <ellipse cx="20" cy="30" rx="6.2" ry="9.5" />
          <ellipse cx="10" cy="20" rx="9.5" ry="6.2" />
          <ellipse cx="30" cy="20" rx="9.5" ry="6.2" />
        </g>
        <circle cx="20" cy="20" r="4.2" fill={center} />
      </svg>

      <span className="flex flex-col">
        <span
          className="disp text-[23px] font-semibold leading-none tracking-[-.04em]"
          style={{ color: name }}
        >
          niranova
        </span>
        <span
          className="text-[8px] font-bold uppercase tracking-[.32em] mt-1"
          style={{ color: sub }}
        >
          Digital Services
        </span>
      </span>
    </span>
  );
}
