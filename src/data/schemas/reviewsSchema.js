export const getReviewSchema = async (reviews) => {
  const reviewSchemas = reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.name,
      "url": review.reviewer_url,
      "image": review.reviewer_photo_url
    },
    "datePublished": review.published_at_date,
    "reviewBody": review.text,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.stars
    }
  }));

  const totalRating = reviews.reduce((sum, review) => sum + review.stars, 0);
  const averageRating = totalRating / reviews.length;

  const aggregateRatingSchema = {
    "@type": "AggregateRating",
    "ratingValue": averageRating.toFixed(1), // round to one decimal place
    "reviewCount": reviews.length
  };

  return {
    reviewSchemas,
    aggregateRatingSchema
  };
};
