import type { GuideFaq } from '@/data/desktop-explorer/types';
import { cn } from '@/lib/utils';

export function FaqSection({
  className,
  items,
  title = 'FAQ',
}: {
  className?: string;
  items: GuideFaq[];
  title?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-xl border border-[#536e69] bg-[#102625] p-5 md:p-6',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#f4f1df]">
        {title}
      </h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#536e69] bg-[#071615] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#f4f1df] transition group-open:text-[#f0a23a]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#a9c0bb]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
