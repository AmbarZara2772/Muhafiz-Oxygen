"use client";

import React from "react";

const CallButton = () => {
  return (
    <a
      href="tel:+92313623534"
      className="
       block rounded-xl bg-pro-orange py-2 px-0 text-center text-sm text-pro-lightgray transition duration-300 ease-in-out 
      hover:bg-pro-orange hover:scale-105 md:w-48 md:text-base"
      aria-label="Call Us"
    >
      Call Us
    </a>
  );
};

export default CallButton;

