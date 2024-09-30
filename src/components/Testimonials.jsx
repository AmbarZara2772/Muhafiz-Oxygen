"use client";

import React, { useState } from "react";
import GoogleReview from "@/components/GoogleReview";

export default function Testimonials({ reviews }) {
  const initialVisibleReviews = 9;
  const [visibleReviews, setVisibleReviews] = useState(initialVisibleReviews);
  const colors = [
    "bg-pro-paleorange",
    "bg-pro-paleblue",
    "bg-pro-green2",
    "bg-pro-green1",
  ];
  const getColorForRow = (index) => {
    const columnIndex = index % 3; // For a 3-column layout
    return colors[columnIndex];
  };

  const loadMore = () => {
    setVisibleReviews((prev) => prev + 3);
  };

  const showLess = () => {
    setVisibleReviews((prev) => prev - 3);
  };

  return (
    <section className={"mt-16 p-5"}>
      <div className=" mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-pro-green sm:text-4xl">
            Here&apos;s What Our Customers Say
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews
            .sort((a, b) => (b.text ? 1 : 0) - (a.text ? 1 : 0))
            .slice(0, visibleReviews)
            .map((review, i) => (
              <GoogleReview
                key={i}
                name={review.name}
                avatar={review.reviewer_photo_url}
                daysAgo={review.publish_at}
                stars={review.stars}
                review={review.text}
                background={getColorForRow(i)}
              />
            ))}
        </div>
        <div className="mt-6 text-center">
          {visibleReviews < reviews.length && (
            <button
              className="transform rounded-xl bg-pro-green px-4 py-3 text-sm font-semibold text-pro-lightgray transition duration-300 ease-in-out hover:scale-105 sm:px-14 sm:py-4 sm:text-base"
              onClick={loadMore}
            >
              Show More
            </button>
          )}
          {visibleReviews > initialVisibleReviews && (
            <button
              className="ml-4 transform rounded-xl bg-pro-orange px-4 py-3 text-sm font-semibold text-pro-lightgray transition duration-300 ease-in-out hover:scale-105 sm:px-14 sm:py-4 sm:text-base"
              onClick={showLess}
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
