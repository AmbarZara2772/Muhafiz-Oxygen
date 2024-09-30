import React from "react";
import Link from "next/link";
import Image from "next/image";
import notfoundImage from "/public/assets/svg/404-computer.svg";

export default function NotFound() {
  const transition =
    "hover:bg-pro-orange hover:text-pro-lightgray transition duration-300 ease-in-out hover:scale-105";

  return (
    <main className="flex h-screen flex-col justify-center" aria-labelledby="not-found-title">
      <section className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <Image
            className="mx-auto mb-4"
            src={notfoundImage}
            alt="404 Not Found"
            layout="intrinsic"
            priority={true}
            aria-describedby="image-description"
          />
          <p id="image-description" className="sr-only">
            A computer with a 404 error message indicating the page is not found.
          </p>
          <h1 id="not-found-title" className="mb-4 text-2xl font-extrabold text-pro-green">
            404 Not Found
          </h1>
          <p className="mb-10 text-3xl font-bold tracking-tight text-pro-green md:text-4xl">
            Whoops! That page doesn’t exist.
          </p>
          <p className="mb-4 font-semibold text-pro-green">
            Here are some helpful links instead:
          </p>
          <ul className="mt-10 flex items-center justify-center space-x-4 font-semibold text-pro-green"
              role="navigation" aria-label="Helpful links">
            <li>
              <Link
                href="/"
                className={`${transition} rounded-2xl border bg-pro-green px-10 py-5 text-pro-lightgray`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${transition} rounded-2xl border bg-pro-green px-10 py-5 text-pro-lightgray`}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Services"
                className={`${transition} rounded-2xl border bg-pro-green px-10 py-5 text-pro-lightgray`}>
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${transition} rounded-2xl border bg-pro-green px-10 py-5 text-pro-lightgray`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
