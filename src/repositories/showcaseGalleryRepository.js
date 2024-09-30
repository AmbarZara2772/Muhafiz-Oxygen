import { supabase } from '@/utils/supabase';
import { getFromCache, setToCache } from "@/utils/cache";

const SHOWCASE_GALLERY_CACHE_KEY = 'showcase_gallery';

export const fetchShowcaseGallery = async () => {
  const cachedData = getFromCache(SHOWCASE_GALLERY_CACHE_KEY);
  if (cachedData) {
    return cachedData;
  }

  const { data: gallery, error } = await supabase
    .from('showcase_gallery')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error("Error fetching showcase gallery:", error);
    return [];
  }

  setToCache(SHOWCASE_GALLERY_CACHE_KEY, gallery);

  return gallery || [];
};
