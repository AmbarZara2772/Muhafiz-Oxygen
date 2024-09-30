"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

export default function SingleProduct({
                                        img,
                                        link,
                                        title,
                                        subtitle,
                                        price,
                                        prevPrice,
                                        newItem,
                                        hotItem,
                                      }) {

  const kebabCaseTitle = title.toLowerCase().replace(/ /g, '-');

  return (
    <div className="w-full inline-grid transform px-3 transition duration-200 ease-in-out hover:scale-105 md:w-1/2 lg:w-1/3" role="listitem">
      <article className="mb-10 flex flex-col overflow-hidden rounded-lg border border-[#e7e7e7] bg-white">
        <div className="relative">
          <a href={link} aria-labelledby={`product-title-${kebabCaseTitle}`}>
            <CldImage
              src={img}
              width={400}
              height={400}
              alt={title}
              className="h-80 w-full bg-blue-200 object-cover"
              radius={5}
              priority={true}
            />
            {newItem && (
              <span className="bg-secondary absolute left-5 top-5 inline-block rounded px-2 py-1 text-sm font-bold text-white">
                New
              </span>
            )}
            {hotItem && (
              <span className="absolute left-5 top-5 inline-block rounded bg-red-600 px-2 py-1 text-sm font-bold text-white">
                Hot
              </span>
            )}
          </a>
        </div>
        <div className="p-6">
          <h3 id={`product-title-${kebabCaseTitle}`}>
            <a
              href={link}
              className="xs:text-xl mb-4 block text-lg font-semibold hover:text-blue-400 lg:text-lg xl:text-xl"
            >
              {title}
            </a>
          </h3>
          <p className="mb-5 text-base font-light">{subtitle}</p>
          <p className="text-lg font-medium">
            {prevPrice && (
              <span className="text-body-color mr-2 line-through">
                {" "}
                {prevPrice}{" "}
              </span>
            )}
            {price}
          </p>
        </div>
      </article>
    </div>
  );
}
