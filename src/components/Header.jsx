// // Header.js
"use client";
import CallButton from "@/components/CallButton"; 
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BRAND_NAME } from "@/utils/constants";

export default function Header() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isProductsPage = pathname === "/products";
  const isContactPage = pathname === "/contact";
  const isServicesPage = pathname === "/services";
  const isRegulationsPage = pathname === "/regulations";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative bg-pro-lightgray" aria-labelledby="header-heading">
      <h2 id="header-heading" className="sr-only">{BRAND_NAME} Header</h2>
      <nav className="mx-auto max-w-screen-xl border-gray-200 px-4 py-2.5 lg:px-6" aria-label="Main Navigation">
        <div className="flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Home">
            <svg className="mr-3 h-6 w-6 fill-pro-orange sm:h-9">
              <use xlinkHref="/assets/icons/logo.svg#sprite"></use>
            </svg>
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-pro-green">
              {BRAND_NAME}
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            className="rounded-lg p-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle menu"
          >
            <div className="relative h-6 w-6">
              <div className={`${isMenuOpen ? "fadeIn" : "hidden"} absolute inset-0`}>
                <svg className="pointer-events-none h-6 w-6">
                  <use xlinkHref="/assets/icons/menu-button.svg#menu-button-open"></use>
                </svg>
              </div>
              <div className={`${isMenuOpen ? "hidden" : "fadeIn"} absolute inset-0`}>
                <svg className="pointer-events-none h-6 w-6">
                  <use xlinkHref="/assets/icons/menu-button.svg#menu-button-closed"></use>
                </svg>
              </div>
            </div>
          </button>
          <div
            ref={menuRef}
            id="primary-navigation"
            className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 top-full z-50 w-full origin-top transform flex-col items-center justify-between bg-pro-lightgray transition-transform duration-300 lg:static lg:z-auto lg:flex lg:w-auto lg:flex-row`}
          >
            <ul className="ml-2 mt-4 flex flex-row space-x-1 font-medium lg:mt-0">
              <li>
                <Link
                  href="/"
                  className="block rounded-xl border-4 border-pro-lightgray px-4 py-1 text-pro-green md:hover:border-pro-paleorange md:hover:bg-pro-paleorange"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block rounded-xl border-4 px-4 py-1 text-pro-green md:hover:border-pro-paleorange md:hover:bg-pro-paleorange ${isAboutPage ? "rounded-xl border-pro-paleorange bg-pro-paleorange" : "border-pro-lightgray bg-pro-lightgray"}`}
                  aria-current={isAboutPage ? "page" : undefined}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`block rounded-xl border-4 border-pro-lightgray px-4 py-1 text-pro-green md:hover:border-pro-paleorange md:hover:bg-pro-paleorange ${isProductsPage ? "rounded-xl border-pro-paleorange bg-pro-paleorange" : "border-pro-lightgray bg-pro-lightgray"}`}
                  aria-current={isProductsPage ? "page" : undefined}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block rounded-xl border-4 border-pro-lightgray px-4 py-1 text-pro-green md:hover:border-pro-paleorange md:hover:bg-pro-paleorange ${isContactPage ? "rounded-xl border-pro-paleorange bg-pro-paleorange" : "border-pro-lightgray bg-pro-lightgray"}`}
                  aria-current={isContactPage ? "page" : undefined}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block rounded-xl border-4 border-pro-lightgray px-4 py-1 text-pro-green md:hover:border-pro-paleorange md:hover:bg-pro-paleorange ${isServicesPage ? "rounded-xl border-pro-paleorange bg-pro-paleorange" : "border-pro-lightgray bg-pro-lightgray"}`}
                  aria-current={isServicesPage ? "page" : undefined}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/regulations"
                  className={`block rounded-xl border-4 border-pro-lightgray px-4 py-1 text-pro-green md:hover:border-pro-paleorange md:hover:bg-pro-paleorange ${isRegulationsPage ? "rounded-xl border-pro-paleorange bg-pro-paleorange" : "border-pro-lightgray bg-pro-lightgray"}`}
                  aria-current={isRegulationsPage ? "page" : undefined}
                >
                  Regulations
                </Link>
              </li>
            </ul>
            <div className="ml-2"> 
              <CallButton />
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Google tag (gtag.js) --> */}
{/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-853223193">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-853223193');
</script> */}
    </header>
  );
}
