import { BRAND_NAME } from "@/utils/constants";

export const services = [
  {
    "@type": "Service",
    "serviceType": "Oxygen Cylinder Supply, Refill and Rental",
    "provider": {
      "@type": "Organization",
      "name": BRAND_NAME,
      "url": process.env.NEXT_PUBLIC_BASE_URL
    },
    "areaServed": "Lahore, Punjab",
    "serviceAudience": "Public"
  }
];