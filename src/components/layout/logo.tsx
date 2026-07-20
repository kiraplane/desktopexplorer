'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Desktop Explorer Wiki logo"
      title="Desktop Explorer Wiki"
      className={cn(
        'relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg',
        'bg-[#071615] shadow-[0_0_24px_rgba(240,162,58,0.2)]',
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
