import React from "react";

const fullStarPath =
  "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z";

export default function ReviewStars({ rating }) {
  const stars = [];

  const fullStars = Math.floor(rating);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg
        key={`full-${i}`}
        className="ms-1 h-6 w-6 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d={fullStarPath} />
      </svg>
    );
  }

  if (rating % 1 !== 0) {
    stars.push(
      <svg
        key="half"
        className="ms-1 h-6 w-6 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
        style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
      >
        <path d={fullStarPath} />
      </svg>
    );
  }

  const grayStars = 5 - Math.ceil(rating);

  for (let i = 0; i < grayStars; i++) {
    stars.push(
      <svg
        key={`gray-${i}`}
        className="ms-1 h-6 w-6 text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d={fullStarPath} />
      </svg>
    );
  }

  return (
    <div className="flex" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {stars}
      <span className="sr-only">{`Rating: ${rating} out of 5 stars`}</span>
    </div>
  );
}
