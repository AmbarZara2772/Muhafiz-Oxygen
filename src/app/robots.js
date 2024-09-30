export default function robots() {
  return {
    rules: [
      {
        useragent: "*",
        allow: "/",
        disallow: ["/private/"]
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
  };
}
