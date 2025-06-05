'use client';

import Navbar from "@/components/navbar";
import PdfFrame from "@/components/pdf-frame";



export default function AllergensPage() {
  return (
    <>
      <Navbar title="Listă Alergeni" />
      <main className="flex justify-center p-4">
        <PdfFrame file="/nalergeni.pdf" />
      </main>
    </>
  );
}
