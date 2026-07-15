import type { GuideFaq } from '@/data/hell-maiden/types';
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
        'rounded-xl border border-[#4c2d52] bg-[#1a1020] p-5 md:p-6',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#fff3fb]">
        {title}
      </h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#4c2d52] bg-[#0d0710] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#fff3fb] transition group-open:text-[#f6cc6b]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#cbb9ce]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
