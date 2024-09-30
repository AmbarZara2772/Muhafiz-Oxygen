"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Captions,
  Slideshow,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "@/components/NextJsImage";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function Gallery({ data }) {
  const initialVisibleImages = 9;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(initialVisibleImages);
  const slideshowRef = useRef(null);
  const captionsRef = useRef(null);

  const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
  const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

  const slides = data
    .filter((image) => image.display)
    .map(({ src, width, height, alt, title, description }) => ({
      width,
      height,
      src: nextImageUrl(src, width),
      srcSet: imageSizes
        .concat(deviceSizes)
        .filter((size) => size <= width)
        .map((size) => ({
          src: nextImageUrl(src, size),
          width: size,
          height: Math.round((height / width) * size),
        })),
      alt,
      title,
      description,
    }));

  function nextImageUrl(src, size) {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
  }

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const showMore = () => {
    setVisibleImages((prev) => prev + 3);
  };

  const showLess = () => {
    setVisibleImages((prev) => prev - 3);
  };

  const handleLightboxClick = () => {
    if (slideshowRef.current?.playing) {
      slideshowRef.current.pause();
    } else {
      slideshowRef.current?.play();
    }

    if (captionsRef.current?.visible) {
      captionsRef.current.hide();
    } else {
      captionsRef.current?.show();
    }
  };

  return (
    <>
      <section className="mx-auto max-w-screen-xl p-5" aria-labelledby="gallery-title">
        <h2 id="gallery-title" className="mb-14 mt-5 text-center text-3xl font-extrabold tracking-tight text-pro-green sm:text-4xl">
          Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3" role="list">
          {data
            .filter((image) => image.display)
            .slice(0, visibleImages)
            .map(({ title, alt, src }, index) => (
              <div key={index} role="listitem">
                <Image
                  title={title}
                  alt={alt}
                  src={src}
                  className="h-full w-full transform rounded-xl object-cover transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
                  width={400}
                  height={400}
                  quality={75}
                  onClick={() => openLightbox(index)}
                />
              </div>
            ))}
        </div>
        <div className="mt-6 text-center">
          {visibleImages < data.filter((image) => image.display).length && (
            <button
              className="transform rounded-xl bg-pro-green px-4 py-3 text-sm font-semibold text-pro-lightgray transition duration-300 ease-in-out hover:scale-105 sm:px-14 sm:py-4 sm:text-base"
              onClick={showMore}
              aria-label="Show more images"
            >
              Show More
            </button>
          )}
          {visibleImages > initialVisibleImages && (
            <button
              className="ml-4 transform rounded-xl bg-pro-orange px-4 py-3 text-sm font-semibold text-pro-lightgray transition duration-300 ease-in-out hover:scale-105 sm:px-14 sm:py-4 sm:text-base"
              onClick={showLess}
              aria-label="Show fewer images"
            >
              Show Less
            </button>
          )}
        </div>
      </section>
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
          render={{ slide: NextJsImage, thumbnail: NextJsImage }}
          index={currentIndex}
          plugins={[Thumbnails, Slideshow, Zoom, Captions]}
          slideshow={{ ref: slideshowRef, autoplay: true }}
          captions={{ ref: captionsRef }}
          on={{
            click: handleLightboxClick,
          }}
        />
      )}
    </>
  );
}
