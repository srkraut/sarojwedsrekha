"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/data/wedding";

// Masonry grid of thumbnails; tapping one opens a full-screen viewer (native <dialog>).
export default function Gallery({ photos }: { photos: Photo[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)), [photos.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const photo = index === null ? null : photos[index];

  return (
    <>
      <div className="gallery">
        {photos.map((p, i) => (
          <button key={p.src} type="button" className="gallery__item" onClick={() => open(i)} aria-label={`Open photo: ${p.alt}`}>
            <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {photo ? (
          <figure className="lightbox__figure">
            <img key={photo.full} src={photo.full} alt={photo.alt} />
            <figcaption>
              {photo.alt} <span>· {index! + 1} / {photos.length}</span>
            </figcaption>
          </figure>
        ) : null}
        <button type="button" className="lightbox__btn lightbox__close" onClick={close} aria-label="Close">×</button>
        <button type="button" className="lightbox__btn lightbox__prev" onClick={() => step(-1)} aria-label="Previous photo">‹</button>
        <button type="button" className="lightbox__btn lightbox__next" onClick={() => step(1)} aria-label="Next photo">›</button>
      </dialog>
    </>
  );
}
