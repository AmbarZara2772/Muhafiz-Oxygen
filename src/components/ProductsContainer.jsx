"use server";
import ProductGrid from "@/components/ProductGrid";
import React from "react";
import { generateJsonLd } from "@/utils/misc";

const ProductsContainer = async ({ products, schemas }) => {
  return (
    <>
      <main className="bg-pro-lightgray pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateJsonLd(schemas.productsSchema)}
        />
        <div className="container mx-auto">
          <header className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[570px] text-center">
                <h1 className="text-dark mb-4 text-3xl font-semibold sm:text-[40px] sm:leading-[1.2]"
                    id="products-title">
                  Our Products
                </h1>
                <p className="text-body-color text-base" id="products-description">
                  We have a wide range of oxygen therapy equipment for your needs.
                </p>
              </div>
            </div>
          </header>

          <div className="-mx-4 flex flex-wrap">
            <section className="w-full px-4" aria-live="polite">
              <div className="mb-8 flex items-center justify-center rounded-lg bg-pro-lightgray">
                <div
                  className={`transition-opacity duration-300 opacity-100 text-dark text-3xl font-bold text-opacity-10 sm:text-4xl md:text-[44px] md:leading-[55px]`}>
                  <ProductGrid products={products} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductsContainer;
