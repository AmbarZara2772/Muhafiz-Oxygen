import { address } from "@/data/schemaData/address";
import { contactInformation } from "@/data/schemaData/contactInformation";
import { geoCoordinates } from "@/data/schemaData/coordinates";
import { publisher } from "@/data/schemaData/publisher";
import { services } from "@/data/schemaData/services";
import { specialOpeningHours } from "@/data/schemaData/specialOpeningHours";

import { getFaqPageSchema } from "@/data/schemas/faqsSchema";
import { getProductsSchema } from "@/data/schemas/productsSchema";
import { getReviewSchema } from "@/data/schemas/reviewsSchema";
import { getLocalBusinessSchema } from "@/data/schemas/localBusinessSchema";
import { getContactPageSchema } from "@/data/schemas/contactPageSchema";

import { fetchProducts } from "@/repositories/productsRepository";
import { fetchFaqs } from "@/repositories/faqsRepository";
import { fetchGoogleReviews } from "@/repositories/googleReviewsRepository";
import { generalBusinessData } from "@/data/schemaData/businessData";

let schemaCache = null;

export const getSchemas = async () => {
  if (!schemaCache) {
    const products = await fetchProducts();
    const reviews = await fetchGoogleReviews();
    const faqs = await fetchFaqs();
    const businessData = await generalBusinessData();

    const { reviewSchemas, aggregateRatingSchema } = await getReviewSchema(reviews);

    const productsSchema = await getProductsSchema(products);
    const localBusinessSchema = getLocalBusinessSchema(
      businessData,
      contactInformation,
      address,
      geoCoordinates,
      publisher,
      reviewSchemas,
      aggregateRatingSchema,
      specialOpeningHours,
      services,
      productsSchema
    );
    const faqSchema = getFaqPageSchema(faqs, publisher, businessData);
    const contactPageSchema = await getContactPageSchema(
      businessData,
      contactInformation,
      address,
      geoCoordinates,
      publisher
    );

    schemaCache = {
      reviewSchemas,
      aggregateRatingSchema,
      localBusinessSchema,
      faqSchema,
      contactPageSchema,
      productsSchema
    };
  }
  return schemaCache;
};

export default getSchemas;
