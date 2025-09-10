// components/Breadcrumb.tsx
import Link from "next/link";

export default function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="breadcrumb" className="w-full py-3">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-white/80 underline-offset-4 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/90">{item.label}</span>
              )}
              {!isLast && <span className="text-white/40">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
