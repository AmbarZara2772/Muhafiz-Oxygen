import React from "react";
import ProductGallery from "@/components/ProductGallery";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import { fetchProducts } from "@/repositories/productsRepository";

const starIcon = (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1825_1546)">
      <path
        d="M16.7906 6.72187L11.7 5.93438L9.39371 1.09688C9.22495 0.759375 8.77495 0.759375 8.6062 1.09688L6.29995 5.9625L1.23746 6.72187C0.87183 6.77812 0.731205 7.25625 1.01246 7.50938L4.69683 11.3063L3.82495 16.6219C3.7687 16.9875 4.13433 17.2969 4.47183 17.0719L9.0562 14.5687L13.6125 17.0719C13.9218 17.2406 14.3156 16.9594 14.2312 16.6219L13.3593 11.3063L17.0437 7.50938C17.2687 7.25625 17.1562 6.77812 16.7906 6.72187Z"
        fill="#FFA645"
      />
    </g>
    <defs>
      <clipPath id="clip0_1825_1546">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default async function ProductDetails({ params }) {
  const productsData = await fetchProducts();
  const product = productsData.find((p) => p.slug === params.slug);

  return (
    <>
      <Banner />
      <Header />
      <section className="dark:bg-dark bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-7/12">
              <ProductGallery product={product} />
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <h2 className="text-dark mb-[22px] text-2xl font-bold dark:text-white sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                {product.title}
              </h2>

              <div className="mb-6 flex flex-wrap items-center">
                <div className="mr-4 flex items-center">
                  <div className="flex items-center">
                    <span className="pr-1">{starIcon}</span>
                    <span className="pr-1">{starIcon}</span>
                    <span className="pr-1">{starIcon}</span>
                    <span className="pr-1">{starIcon}</span>
                    <span className="pr-1">{starIcon}</span>
                    <span className="text-dark pl-1 text-base font-medium dark:text-white">
                      5 Rating
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="pr-2">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1031_24115)">
                        <path
                          d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                          fill="#22AD5C"
                        />
                        <path
                          d="M12.6874 7.09368L8.96868 10.7187L7.28118 9.06243C6.99993 8.78118 6.56243 8.81243 6.28118 9.06243C5.99993 9.34368 6.03118 9.78118 6.28118 10.0624L8.28118 11.9999C8.46868 12.1874 8.71868 12.2812 8.96868 12.2812C9.21868 12.2812 9.46868 12.1874 9.65618 11.9999L13.6874 8.12493C13.9687 7.84368 13.9687 7.40618 13.6874 7.12493C13.4062 6.84368 12.9687 6.84368 12.6874 7.09368Z"
                          fill="#22AD5C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1031_24115">
                          <rect width={20} height={20} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className="text-dark text-base font-medium dark:text-white">
                    {" "}
                    In Stock{" "}
                  </span>
                </div>
              </div>

              <p className="text-body-color mb-8 text-base font-medium">
                {product.subtitle}
              </p>

              <h3 className="text-dark mb-6 text-xl font-semibold dark:text-white sm:text-2xl">
                Product Details
              </h3>

              <div className="mb-9 space-y-4">
                <p className="border-stroke dark:border-dark-3 text-dark flex justify-between border-b pb-4 text-base font-medium dark:text-white">
                  <span className="whitespace-nowrap"> Size </span>
                  <span> Small, Medium, Large </span>
                </p>
                <p className="border-stroke dark:border-dark-3 text-dark flex justify-between border-b pb-4 text-base font-medium dark:text-white">
                  <span className="whitespace-nowrap"> Color </span>
                  <span> White, Black, Gray </span>
                </p>
                <p className="text-dark flex justify-between text-base font-medium dark:text-white">
                  <span className="whitespace-nowrap"> Brand </span>
                  <span> Shirt Flex </span>
                </p>
              </div>

              <h3 className="text-dark mb-6 text-xl font-semibold dark:text-white sm:text-2xl">
                Select Size
              </h3>
              <div className="mb-9 flex flex-wrap items-center gap-[14px]">
                <div>
                  <input
                    type="radio"
                    name="size"
                    id="small"
                    className="filter-size sr-only"
                  />
                  <label
                    htmlFor="small"
                    className="hover:border-primary hover:bg-primary text-dark border-stroke dark:border-dark-3 inline-block cursor-pointer rounded-[5px] border px-5 py-2 text-base font-medium hover:text-white dark:text-white"
                  >
                    Small
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="size"
                    id="medium"
                    className="filter-size sr-only"
                  />
                  <label
                    htmlFor="medium"
                    className="hover:border-primary hover:bg-primary text-dark border-stroke dark:border-dark-3 inline-block cursor-pointer rounded-[5px] border px-5 py-2 text-base font-medium hover:text-white dark:text-white"
                  >
                    Medium
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="size"
                    id="large"
                    className="filter-size sr-only"
                  />
                  <label
                    htmlFor="large"
                    className="hover:border-primary hover:bg-primary text-dark border-stroke dark:border-dark-3 inline-block cursor-pointer rounded-[5px] border px-5 py-2 text-base font-medium hover:text-white dark:text-white"
                  >
                    Large
                  </label>
                </div>
              </div>

              <h3 className="text-dark mb-6 text-xl font-semibold dark:text-white sm:text-2xl">
                Select Color
              </h3>
              <div className="mb-9 flex items-center gap-[14px]">
                <div>
                  <input
                    type="radio"
                    name="color"
                    id="gray"
                    className="sr-only"
                  />
                  <label
                    htmlFor="gray"
                    className="box bg-body-color flex h-10 w-10 cursor-pointer items-center justify-center rounded text-white"
                  >
                    <span className="opacity-0">
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0.4"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="color"
                    id="red"
                    className="sr-only"
                  />
                  <label
                    htmlFor="red"
                    className="box flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-red-600 text-white"
                  >
                    <span className="opacity-0">
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0.4"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="color"
                    id="blue"
                    className="sr-only"
                  />
                  <label
                    htmlFor="blue"
                    className="box bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded text-white"
                  >
                    <span className="opacity-0">
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0.4"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="color"
                    id="green"
                    className="sr-only"
                  />
                  <label
                    htmlFor="green"
                    className="box bg-secondary flex h-10 w-10 cursor-pointer items-center justify-center rounded text-white"
                  >
                    <span className="opacity-0">
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0.4"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const productsData = await fetchProducts();

  return productsData.map((product) => ({
    slug: product.slug,
  }));
}
