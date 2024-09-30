export const getCanonicalUrl = (baseUrl, path = "") => {
  const formattedBaseUrl = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  return new URL(formattedBaseUrl + path).href;
};

export const generateJsonLd = (data) => {
  return {
    __html: JSON.stringify(data)
  };
};

export const generateImageUrl = (publicId) => {
  const baseUrl = "https://res.cloudinary.com/" + process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME + "/image/upload/";
  return `${baseUrl}${publicId}`;
};

export const getOpenGraphTags = ({ title, description, url, image }) => {
  return [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image }
  ];
};

export const getTwitterTags = ({ title, description, image }) => {
  return [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image }
  ];
};


