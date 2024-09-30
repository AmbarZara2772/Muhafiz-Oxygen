import { supabase } from '@/utils/supabase';
import { getFromCache, setToCache } from "@/utils/cache";

const PRODUCTS_CACHE_KEY = 'products';

export const fetchProducts = async () => {

  const cachedData = getFromCache(PRODUCTS_CACHE_KEY);
  if (cachedData) {
    return cachedData;
  }

  const { data: products, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(*),
      reviews:product_reviews(*),
      variants:variants(*),
      images:images(*)
    `)
    .order('created_at', { ascending: true });

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  setToCache(PRODUCTS_CACHE_KEY, products);

  return products || [];
};
