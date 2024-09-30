import { fetchGoogleReviews } from '@/repositories/googleReviewsRepository';

const calculateAggregateRating = (reviews) => {
  const reviewCount = reviews.length;
  const ratingSum = reviews.reduce((acc, review) => acc + review.stars, 0);
  const ratingValue = (ratingSum / reviewCount).toFixed(1);

  return {
    "@type": "AggregateRating",
    "ratingValue": ratingValue,
    "reviewCount": reviewCount.toString(),
    "bestRating": "5",
    "worstRating": "1"
  };
};

export const getAggregateRating = async () => {
  const reviews = await fetchGoogleReviews();
  return calculateAggregateRating(reviews);
};
