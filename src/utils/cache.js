const cache = new Map();

export const getFromCache = (key) => {
  return cache.get(key);
};

export const setToCache = (key, data, ttl = 592200) => {
  cache.set(key, data);
  setTimeout(() => cache.delete(key), ttl);
};
