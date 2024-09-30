import Banner from "@/components/Banner";
import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import Faqs from "@/components/Faqs";
import BusinessLocation from "@/components/BusinessLocation";
import ContactUsForm from "@/components/ContactUsForm";
import Link from "next/link";
import {
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  PHONE_NUMBER_TEL
} from "@/utils/constants";

import { generateJsonLd, getCanonicalUrl } from "@/utils/misc";
import getSchemas from "@/utils/schemaLoader";
import { fetchFaqs } from "@/repositories/faqsRepository";

export const metadata = {
  title: "Contact",
  alternates: {
    canonical: getCanonicalUrl(process.env.NEXT_PUBLIC_BASE_URL, "contact")
  }
};

const schemas = await getSchemas();

const ContactPage = async () => {
  const faqs = await fetchFaqs();

  return (
    <section className="bg-pro-lightgray">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(schemas.contactPageSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(schemas.faqSchema)}
      />
      <Banner />
      <Header />
      <div className="mx-auto mt-12 max-w-screen-xl px-5 pb-12">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="mt-20 lg:col-span-2 lg:w-2/3">
            <h1 className="mb-4 text-6xl font-bold">Contact Us</h1>
            <p className="text-md mb-5 max-w-md font-light">
              Email, call or complete the form to learn how we can solve your
              Oxygen Cylinder and Oxygen Refilling Demands.
            </p>
            <p className={"mb-4"}>
              <Link href={`mailto:${EMAIL_ADDRESS}`} target={"_blank"}>
                {EMAIL_ADDRESS}
              </Link>
            </p>
            <Link href={`tel:${PHONE_NUMBER_TEL}`} target={"_blank"}>
              {PHONE_NUMBER}
            </Link>

            <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <h2 className="mb-1 font-semibold">Customer Support</h2>
                <p className="text-sm text-gray-600">
                  Our support team is available around the clock to address any
                  concerns or queries you may have.
                </p>
              </div>
              <div>
                <h2 className="mb-1 font-semibold">Feedback and Suggestions</h2>
                <p className="text-sm text-gray-600">
                  We value your feedback and are continuously working to improve
                  our services. Your input is crucial in shaping the future of
                  our business.
                </p>
              </div>
              <div>
                <h2 className="mb-1 font-semibold">Service Appointments</h2>
                <p className="text-sm text-gray-600">
                  Need to schedule a service or maintenance check? Contact us to
                  book an appointment at your convenience with our service
                  professionals.
                </p>
              </div>
            </div>
          </div>
          <ContactUsForm />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto mb-4 max-w-screen-xl pt-20 sm:mb-16">
          <BusinessLocation />
          <Faqs faqs={faqs}/>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ContactPage;