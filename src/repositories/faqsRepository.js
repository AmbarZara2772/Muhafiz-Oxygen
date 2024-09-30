import { supabase } from '@/utils/supabase';
import { getFromCache, setToCache } from "@/utils/cache";

const FAQS_CACHE_KEY = 'faqs';

export const fetchFaqs = async () => {
  const cachedData = getFromCache(FAQS_CACHE_KEY);
  if (cachedData) {
    return cachedData;
  }

  const { data: faqs, error } = await supabase
    .from('faqs')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }

  setToCache(FAQS_CACHE_KEY, faqs);

  return faqs || [];
};
