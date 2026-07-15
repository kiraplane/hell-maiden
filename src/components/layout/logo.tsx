'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Hell Maiden Wiki logo"
      title="Hell Maiden Wiki"
      className={cn(
        'relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg',
        'bg-[#1a1020] shadow-[0_0_24px_rgba(232,154,184,0.24)]',
        className
      )}
    >
      <Image
        src="/logo.svg"
        alt=""
        fill
        sizes="40px"
        className="object-contain"
      />
    </span>
  );
}
