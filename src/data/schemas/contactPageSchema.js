export const getContactPageSchema = async (
    generalBusinessData,
    contactInformation,
    address,
    geoCoordinates,
    publisher
  ) => {

    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "about": generalBusinessData.about,
      "accessibilityFeatures": generalBusinessData.accessibilityFeatures,
      "address": {
        "@type": "PostalAddress",
        ...address
      },
      "alternativeHeadline": generalBusinessData.alternativeHeadline,
      "audience": {
        "@type": "Audience",
        "audienceType": "Public",
        "geographicArea": contactInformation.areaServed
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": generalBusinessData.urls.home
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": generalBusinessData.urls.products
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "About",
            "item": generalBusinessData.urls.about
          }, {
            "@type": "ListItem",
            "position": 4,
            "name": "Contact Us",
            "item": generalBusinessData.urls.contact
          }
        ]
      },
      "contactPoint": contactInformation,
      "contentLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          ...address
        },
        "name": address.addressLocality
      },
      "dateModified": generalBusinessData.dateModified,
      "description": generalBusinessData.contactPageDescription,
      "faxNumber": contactInformation.faxNumber,
      "geo": {
        "@type": "GeoCoordinates",
        ...geoCoordinates
      },
      "identifier": generalBusinessData.identifier,
      "inLanguage": contactInformation.availableLanguage,
      "mainEntity": {
        "@type": "Organization",
        "name": generalBusinessData.name,
        "url": generalBusinessData.urls.home
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": generalBusinessData.urls.home
      },
      "map": generalBusinessData.hasMap,
      "name": "Contact Us - " + generalBusinessData.name,
      "openingHours": generalBusinessData.openingHours,
      "potentialAction": [
        {
          "@type": "ContactAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": generalBusinessData.urls.contact,
            "inLanguage": generalBusinessData.availableLanguage
          },
          "name": "Fill out contact form"
        },
        {
          "@type": "CommunicateAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "tel:" + contactInformation.contactTelephone,
            "inLanguage": contactInformation.availableLanguage
          },
          "name": "Call us"
        }
      ],
      "primaryImageOfPage": generalBusinessData.primaryImageOfPage,
      "publisher": publisher,
      "sameAs": generalBusinessData.sameAs,
      "telephone": contactInformation.telephone
    };
  }
;