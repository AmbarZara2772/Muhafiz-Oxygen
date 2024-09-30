import { CONTACT_EMAIL, PHONE_NUMBER_TEL, SUPPORT_EMAIL } from "@/utils/constants";

export const contactInformation = {
  telephone: PHONE_NUMBER_TEL,
  email: SUPPORT_EMAIL,
  contactTelephone: PHONE_NUMBER_TEL,
  contactEmail: CONTACT_EMAIL,
  availableLanguage: ["en"],
  areaServed: "Lahore, Punjab",
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
};