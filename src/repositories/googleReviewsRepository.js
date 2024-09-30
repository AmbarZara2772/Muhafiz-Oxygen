import { supabase } from '@/utils/supabase';
import { getFromCache, setToCache } from "@/utils/cache";

const REVIEWS_CACHE_KEY = 'google_reviews';

export const fetchGoogleReviews = async () => {
  const cachedData = getFromCache(REVIEWS_CACHE_KEY);
  if (cachedData) {
    return cachedData;
  }

  const { data: reviews, error } = await supabase
    .from('google_reviews')
    .select('*');

  if (error) {
    console.error("Error fetching Google reviews:", error);
    return [];
  }

  setToCache(REVIEWS_CACHE_KEY, reviews);

  return reviews || [];
};
