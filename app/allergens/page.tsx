'use client';

import Navbar from "@/components/navbar";
import dynamic from "next/dynamic";

const PdfFrame = dynamic(
  () => import('@/components/pdf-frame'), // 👈 path above
  { ssr: false }                              // 🔑
);



export default function AllergensPage() {
  return (
    <>
      <Navbar title="Listă Alergeni" />
      <main className="flex justify-center p-4">
        <PdfFrame file="/alergeni.pdf" />
      </main>
    </>
  );
}
