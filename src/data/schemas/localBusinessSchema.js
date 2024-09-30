export const getLocalBusinessSchema = (
  generalBusinessData,
  contactInformation,
  address,
  geoCoordinates,
  publisher,
  reviews,
  aggregateRating,
  specialOpeningHours,
  services,
  products
) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "accessibility": generalBusinessData.accessibility,
  "address": {
    "@type": "PostalAddress",
    ...address
  },
  "aggregateRating": aggregateRating,
  "alternateName": generalBusinessData.alternateName,
  "areaServed": contactInformation.areaServed,
  "contactPoint": contactInformation,
  "currenciesAccepted": generalBusinessData.currenciesAccepted,
  "department": generalBusinessData.department,
  "description": generalBusinessData.description,
  "email": contactInformation.email,
  "founder": {
    "@type": "Person",
    ...generalBusinessData.founder
  },
  "foundingDate": generalBusinessData.foundingDate,
  "geo": {
    "@type": "GeoCoordinates",
    ...geoCoordinates
  },
  "hasMap": generalBusinessData.hasMap,
  "hasOfferCatalog": generalBusinessData.hasOfferCatalog,
  "hasPOS": generalBusinessData.hasPOS,
  "healthAndSafetyMeasures": generalBusinessData.healthAndSafetyMeasures,
  "image": generalBusinessData.image,
  "keywords": generalBusinessData.keywords,
  "legalName": generalBusinessData.legalName,
  "logo": generalBusinessData.logo,
  "name": generalBusinessData.name,
  "openingHours": generalBusinessData.openingHours,
  "openingHoursSpecification": generalBusinessData.openingHoursSpecification,
  "paymentAccepted": generalBusinessData.paymentAccepted,
  "priceRange": generalBusinessData.priceRange,
  "productOffered": products,
  "review": reviews,
  "sameAs": generalBusinessData.sameAs,
  "serviceType": generalBusinessData.serviceType,
  "slogan": generalBusinessData.slogan,
  "specialOpeningHours": specialOpeningHours,
  "telephone": contactInformation.telephone,
  "url": generalBusinessData.url,
  "service": services
});
