'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

type Page = { src: string; w: number; h: number };

export default function MenuSlider({ pages }: { pages: Page[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        centeredSlides
        className="w-full max-w-screen-md mt-32"
      >
        {pages.map(({ src, w, h }, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Page ${i + 1}`}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="cursor-zoom-in mx-auto w-auto max-w-[90%] max-h-[80svh] sm:max-w-full sm:max-h-[calc(100svh-4rem)] rounded-2xl shadow-lg"
              width={w}
              height={h}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={pages.map((p) => ({ src: p.src }))}
        plugins={[Zoom]}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
      />
    </>
  );
}
