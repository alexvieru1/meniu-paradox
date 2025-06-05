'use client';

import Navbar from "@/components/navbar";
import PdfFrame from "@/components/pdf-frame";


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
