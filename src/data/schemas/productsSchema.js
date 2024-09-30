import { BRAND_NAME } from "@/utils/constants";
import { generateImageUrl } from "@/utils/misc";

const generateRandomAggregateRating = (reviews) => {
  const totalReviews = reviews.length;
  const sumRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = (sumRatings / totalReviews).toFixed(1);

  return {
    "@type": "AggregateRating",
    "ratingValue": averageRating,
    "reviewCount": totalReviews.toString(),
    "bestRating": "5",
    "worstRating": "1"
  };
};

export const getProductsSchema = async (products) => {
  return products.map(product => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": generateImageUrl(product.default_image),
    "brand": {
      "@type": "Brand",
      "name": BRAND_NAME
    },
    "aggregateRating": generateRandomAggregateRating(product.reviews)
  }));
};
