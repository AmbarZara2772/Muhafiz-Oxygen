"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import image11 from "../../public/assets/images/showcase-gallery/1.webp";
import image22 from "../../public/assets/images/showcase-gallery/2.webp";
import image33 from "../../public/assets/images/showcase-gallery/3.webp";
import image44 from "../../public/assets/images/showcase-gallery/test.jpeg";

const images = [image11, image22, image33, image44];

const FeaturedSlider = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrent((current) => (current + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const navigateToImage = (index) => {
    setCurrent(index);
    resetInterval();
  };

  const leftIndex = (current - 1 + images.length) % images.length;
  const centerIndex = current;
  const rightIndex = (current + 1) % images.length;

  const displayImages = [
    images[leftIndex],
    images[centerIndex],
    images[rightIndex],
  ];

  return (
    <div className="relative flex h-96 items-center justify-center overflow-hidden bg-gray-300">
      <button
        onClick={() =>
          navigateToImage((current - 1 + images.length) % images.length)
        }
        className="absolute left-0 z-10 m-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-white"
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button
        onClick={() => navigateToImage((current + 1) % images.length)}
        className="absolute right-0 z-10 m-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-white"
        aria-label="Next slide"
      >
        &gt;
      </button>
      <div className="absolute inset-0 flex h-96 items-center justify-between transition-transform duration-700 ease-in-out md:inset-x-44">
        {displayImages.map((src, index) => (
          <div
            key={index}
            className={`flex transform justify-center transition-transform duration-700 ease-in-out`}
            style={{
              transform: index === 1 ? "none" : "scale(0.85)",
              width: index === 1 ? "800px" : "150px",
            }}
          >
            <Image
              src={src}
              className={`h-[16rem] w-full transform rounded-xl object-cover ${index === 1 ? "opacity-100" : "opacity-75"}`}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      {/* Navigation dots */}
    </div>
  );
};

export default FeaturedSlider;
