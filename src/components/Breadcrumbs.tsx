import Link from "next/link";

type Crumb = { label: string; href: string };

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3005").replace(/\/$/, "");

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav data-breadcrumb aria-label="Breadcrumb" className="py-3">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-bold uppercase tracking-[.14em] text-[#7C7076]">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={`${item.href}-${item.label}`} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden className="text-[#F7567C]">
                    /
                  </span>
                )}
                {last ? (
                  <span aria-current="page" className="text-[#2B2430]">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-[#2B2430]">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
