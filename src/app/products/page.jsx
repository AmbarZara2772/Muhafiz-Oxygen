import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import ProductsContainer from "@/components/ProductsContainer";
import { getCanonicalUrl } from "@/utils/misc";
import { fetchProducts } from "@/repositories/productsRepository";
import getSchemas from "@/utils/schemaLoader";

export const metadata = {
  title: "Oxygen Cylinder Products",
  alternates: {
    canonical: getCanonicalUrl(process.env.NEXT_PUBLIC_BASE_URL, "products")
  }
};

export default async function Products() {
  const products = await fetchProducts();
  const schemas = await getSchemas();

  return (
    <div className={"bg-pro-lightgray "}>
      <Banner />
      <Header />
      <ProductsContainer products={products} schemas={schemas}/>
      <Footer />
    </div>
  );
}
