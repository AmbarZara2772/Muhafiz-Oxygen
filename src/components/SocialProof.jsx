"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  BUSINESS_ESTABLISHED_YEAR,
  TOTAL_FACEBOOK_LIKES,
  TOTAL_GOOGLE_REVIEWS,
  TOTAL_SATISFIED_CUSTOMERS
} from "@/utils/constants";

export default function SocialProof() {
  const countUpDuration = 4;
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - BUSINESS_ESTABLISHED_YEAR;
  const [countStart, setCountStart] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  if (inView && !countStart) {
    setCountStart(true);
  }

  return (
    <section className="bg-pro-green" ref={ref} aria-labelledby="social-proof-title">
      <div className="p-16 text-center">
        <h2 id="social-proof-title" className="pb-5 text-3xl font-extrabold tracking-tight text-pro-lightgray sm:text-4xl">
          Transformation by the numbers
        </h2>
        <p className="text-xl tracking-tight text-pro-lightgray sm:text-3xl">
          We are trusted by more than{" "}
          {new Intl.NumberFormat().format(TOTAL_SATISFIED_CUSTOMERS)}
          <br />
          residents in Lahore
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:p-6 sm:py-16">
        <div className="mb-4 space-y-4 md:mb-8 md:grid md:grid-cols-3 md:gap-4 md:space-y-0 xl:gap-16">
          <div className="flex items-center justify-center rounded bg-pro-lightgray p-6 text-center xl:p-12" aria-label="Facebook likes">
            <div className="text-pro-green">
              <h3 className="text-xl font-semibold">
                <span className="mb-2 text-3xl font-extrabold sm:text-4xl block">
                  {countStart && (
                    <CountUp
                      end={TOTAL_FACEBOOK_LIKES}
                      duration={countUpDuration}
                    />
                  )}
                  +
                </span>
                <span className="mb-2 block">Likes</span>
                <span className="text-md font-light text-pro-green block">on Facebook</span>
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center rounded bg-pro-lightgray p-6 text-center xl:p-12" aria-label="Google reviews">
            <div className="text-pro-green">
              <h3 className="text-xl font-semibold">
                <span className="mb-2 text-3xl font-extrabold sm:text-4xl block">
                  {countStart && (
                    <CountUp
                      end={TOTAL_GOOGLE_REVIEWS}
                      duration={countUpDuration}
                    />
                  )}
                  +
                </span>
                <span className="mb-2 block">Reviews</span>
                <span className="font-light text-pro-green block">on Google</span>
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center rounded bg-pro-lightgray p-6 text-center xl:p-12" aria-label="Satisfied customers">
            <div className="text-pro-green">
              <h3 className="text-xl font-semibold">
                <span className="mb-2 text-3xl font-extrabold sm:text-4xl block">
                  {countStart && (
                    <CountUp
                      end={TOTAL_SATISFIED_CUSTOMERS}
                      duration={countUpDuration}
                    />
                  )}
                  +
                </span>
                <span className="mb-2 block">Satisfied Customers</span>
                <span className="font-light text-pro-green block">Over {yearsInBusiness} years</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
