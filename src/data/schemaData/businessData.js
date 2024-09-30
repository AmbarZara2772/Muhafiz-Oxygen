import {
  ALTERNATE_BRAND_NAME,
  BRAND_NAME,
  CONTACT_EMAIL,
  FACEBOOK_URL, GOOGLE_MAP_URL, GOOGLE_RATING, INSTAGRAM_URL,
  LOGO,
  PHONE_NUMBER_TEL
} from "@/utils/constants";

import { fetchGoogleReviews } from "@/repositories/googleReviewsRepository";
import { getFromCache, setToCache } from "@/utils/cache";

const BUSINESS_DATA_CACHE_KEY = 'general_business_data';

export const generalBusinessData = async () => {
  const cachedData = getFromCache(BUSINESS_DATA_CACHE_KEY);
  if (cachedData) {
    return cachedData;
  }

  const reviews = await fetchGoogleReviews();

  const businessData = {
    name: BRAND_NAME,
    alternateName: ALTERNATE_BRAND_NAME,
    image: LOGO,
    logo: LOGO,
    description: "Providing reliable oxygen cylinder, refilling and rental services in Lahore, Pakistan",
    legalName: BRAND_NAME,
    slogan: "Your Health, Our Priority",
    openingHours: "Mo-Su 00:00-24:00",
    priceRange: "$$",
    paymentAccepted: ["Cash", "Jazz Cash", "Naya Pay", "Easy Paisa", "Bank Transfer"],
    foundingDate: "2019-01-01",
    founder: {
      name: "Imran Siddiqui",
      jobTitle: "Founder",
      telephone: PHONE_NUMBER_TEL,
      email: CONTACT_EMAIL
    },
    sameAs: [
      FACEBOOK_URL,
      INSTAGRAM_URL
    ],
    currenciesAccepted: "PKR",
    hasMap: GOOGLE_MAP_URL,
    ratingValue: GOOGLE_RATING,
    reviewCount: reviews.length,
    serviceType: "Oxygen Cylinder and Refilling",
    productOffered: "Medical Oxygen Cylinder",
    healthAndSafetyMeasures: "Masks required, staff wear masks",
    hasOfferCatalog: process.env.NEXT_PUBLIC_BASE_URL + "/products",
    keywords: "oxygen, medical oxygen cylinder,oxygen cylinder, oxygen lahore, oxygen cylinder near me",
    accessibility: "Wheelchair accessible",
    department: [
      {
        name: "Customer Support",
        url: process.env.NEXT_PUBLIC_BASE_URL + "/contact"
      }
    ],
    // primaryImageOfPage: "https://www.muhafizoxygen.com/images/contact-page.png",
    identifier: "contact-page-001",
    accessibilityFeatures: "Wheelchair accessible entrance, Wheelchair accessible parking",
    alternativeHeadline: "Reliable Oxygen Supply and Refill Services in Lahore",
    dateModified: "2023-07-01",
    about: "Contact page for " + BRAND_NAME + " providing details on how to get in touch for oxygen cylinder services in Lahore, Pakistan.",
    faqPageAbout: "This page contains frequently asked questions about " + BRAND_NAME + " services, including refills, rentals, and operating hours.",
    faqPageKeywords: "FAQ, oxygen, services,oxygen cylinder, oxygen cylinder rentals, oxygen refill, lahore, pakistan",
    contactPageDescription: "Contact page for reaching out to " + BRAND_NAME + " regarding oxygen cylinder services in Lahore, Pakistan.",
    urls: {
      "home": process.env.NEXT_PUBLIC_BASE_URL,
      "about": process.env.NEXT_PUBLIC_BASE_URL + "/about",
      "contact": process.env.NEXT_PUBLIC_BASE_URL + "/contact",
      "products": process.env.NEXT_PUBLIC_BASE_URL + "/products"
    }
  };

  setToCache(BUSINESS_DATA_CACHE_KEY, businessData);

  return businessData;
};