'use client';

import Navbar from "@/components/navbar";
import dynamic from "next/dynamic";

const PdfFrame = dynamic(
  () => import('@/components/pdf-frame'), // 👈 path above
  { ssr: false }                              // 🔑
);

export default function MenuPage() {
  return (
    <>
      <Navbar title="Meniu Restaurant" />
      <main className="flex justify-center p-4">
        <PdfFrame file="/meniu.pdf" />
      </main>
    </>
  );
}
