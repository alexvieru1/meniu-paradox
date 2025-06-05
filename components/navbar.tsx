'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';          // shadcn helper (or remove if not using)

type Props = {
  title: string;
  className?: string;
};

export default function Navbar({ title, className }: Props) {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex items-center gap-2 bg-muted/70 backdrop-blur px-4 py-2',
        className
      )}
    >
      {/* Back button – hide on the landing page by not rendering Navbar there */}
      <Link
        href="/"
        aria-label="Go back"
        className="rounded-full p-2 hover:bg-accent focus-visible:outline-none focus-visible:ring-2"
      >
        <ArrowLeft size={20} />
      </Link>

      <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
    </header>
  );
}
