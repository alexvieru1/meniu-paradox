// components/PdfFrame.tsx
'use client';

import { useEffect, useState } from 'react';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import FoodLoader from './food-loader';

type Props = { file: string };

export default function PdfFrame({ file }: Props) {
  // Overlay stays until `hideLoader` becomes true
  const [hideLoader, setHideLoader] = useState(false);

  // Start the 5.5-second countdown once, on mount
  useEffect(() => {
    const id = setTimeout(() => setHideLoader(true), 5_500); // 5 500 ms
    return () => clearTimeout(id);                           // cleanup if page unmounts
  }, []);

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      <div className="relative w-full max-w-screen-md h-[calc(100dvh-4rem)] overflow-y-auto rounded-2xl shadow-lg bg-muted/50">
        {/* Overlay loader */}
        {!hideLoader && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/70 backdrop-blur">
            <FoodLoader />
          </div>
        )}

        {/* Viewer still shows its own loader during network/parse phase */}
        <Viewer
          fileUrl={file}
          defaultScale={SpecialZoomLevel.PageFit}
          renderLoader={() => <FoodLoader />}
        />
      </div>
    </Worker>
  );
}
