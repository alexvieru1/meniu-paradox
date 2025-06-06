//app\menu\page.tsx
'use client';

import Navbar from "@/components/navbar";
import dynamic from "next/dynamic";

const MenuSlider = dynamic(() => import('@/components/menu-slider'), {
  ssr: false,           // ⬅️ keeps it out of the server bundle
});

const pages = [
  { src: '/images/1.webp', w: 2480, h: 3508 },
  { src: '/images/2.webp', w: 2480, h: 3508 },
  { src: '/images/3.webp', w: 2480, h: 3508 },
  { src: '/images/4.webp', w: 2480, h: 3508 },
  { src: '/images/5.webp', w: 2480, h: 3508 },
  { src: '/images/6.webp', w: 2480, h: 3508 },
  { src: '/images/7.webp', w: 2480, h: 3508 },
  { src: '/images/8.webp', w: 2480, h: 3508 },
  { src: '/images/9.webp', w: 2480, h: 3508 },
  { src: '/images/10.webp', w: 2480, h: 3508 },
  { src: '/images/11.webp', w: 2480, h: 3508 },
  { src: '/images/12.webp', w: 2480, h: 3508 },
  { src: '/images/13.webp', w: 2480, h: 3508 },
  { src: '/images/14.webp', w: 2480, h: 3508 },
]

export default function MenuPage() {
  return (
    <>
      <Navbar title="Meniu Restaurant" />
      <main className="flex justify-center p-4">
        <MenuSlider pages={pages} />
      </main>
    </>
  );
}
