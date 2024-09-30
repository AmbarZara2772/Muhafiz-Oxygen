"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";

export default function ProductGallery({ product }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="mb-12 lg:mb-0 lg:mr-5 xl:mr-10">
      <div className="mb-8 overflow-hidden rounded-lg border border-gray-300">
        <div className="relative w-full" style={{ height: '600px' }}>
          {product.images.map(({image_url}, index) => (
            <CldImage
              key={index}
              src={image_url}
              alt={`product-image-${index}`}
              className={`${activeImage === index ? "block" : "hidden"}  h-full w-full object-contain rounded-lg`}
              width={600}
              height={600}
              priority={true}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center">
        {product.images.map(({image_url}, index) => (
          <div className="w-1/5 px-1" key={index}>
            <button
              onClick={() => setActiveImage(index)}
              className={`${
                activeImage === index ? "opacity-60" : ""
              } w-full overflow-hidden rounded-lg border border-gray-300`}
            >
              <CldImage
                src={image_url}
                alt={`thumbnail-${index}`}
                className="w-full h-full object-fill rounded-lg bg-blue-200"
                width={100}
                height={100}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
