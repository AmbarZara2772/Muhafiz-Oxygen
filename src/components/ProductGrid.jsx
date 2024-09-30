import React from "react";
import SingleProduct from "@/components/SingleProduct";

const ProductGrid = ({ products }) => {
  return (
    <section className="transition-all" aria-labelledby="product-grid-title">
      <div className="container mx-auto">
        <div className="rounded-lg border border-[#e7e7e7]">
          <header>
            <h2 id="product-grid-title" className="sr-only">Product Grid</h2>
          </header>
          <div className="flex flex-wrap p-2" role="list">
            {products.map((product, index) => (
              <SingleProduct
                key={index}
                img={product.default_image}
                link={product.link}
                title={product.title}
                subtitle={product.subtitle}
                price={product.price_range}
                prevPrice={""}
                newItem={product.newItem}
                hotItem={product.hotItem}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
