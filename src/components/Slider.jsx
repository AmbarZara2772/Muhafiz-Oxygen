"use client";
import React, { useState, useEffect } from "react";

import image11 from "../../public/assets/images/showcase-gallery/1.webp";
import image22 from "../../public/assets/images/showcase-gallery/2.webp";
import image33 from "../../public/assets/images/showcase-gallery/3.webp";
import image44 from "../../public/assets/images/showcase-gallery/test.jpeg";
import Image from "next/image";

const images = [image11, image22, image33, image44];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current >= images.length - 1 ? 0 : current + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="relative mx-auto mt-20 max-w-screen-lg items-center justify-center overflow-hidden rounded-xl border border-pro-paleorange">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            className="w-full object-cover"
            style={{ height: "250px", minWidth: "100%" }}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-5  flex justify-center p-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`mx-2 inline-block h-3 w-3 cursor-pointer rounded-full ${
              index === current ? "bg-gray-500" : "bg-gray-200"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
