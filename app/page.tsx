'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-10 p-6">
      {/* Restaurant logo */}
      <Image
        src="/images/logo.jpg"          // put your SVG/PNG in /public
        alt="Restaurant logo"
        width={200}
        height={200}
        priority
      />

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-6">
        <Button asChild size="lg" className="px-10">
          <Link href="/menu">Vezi meniu</Link>
        </Button>

        <Button asChild variant="secondary" size="lg" className="px-10">
          <Link href="/allergens">Verifică alergeni</Link>
        </Button>
      </div>
    </main>
  );
}
