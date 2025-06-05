// components/PdfFrame.tsx
'use client';

import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type Props = { file: string };

export default function PdfFrame({ file }: Props) {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      <div className="w-full max-w-screen-md h-[calc(100dvh-4rem)] overflow-y-auto rounded-2xl shadow-lg bg-muted/50">
        <Viewer fileUrl={file} defaultScale={SpecialZoomLevel.PageFit} />
      </div>
    </Worker>
  );
}
