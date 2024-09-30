import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import SocialProof from "@/components/SocialProof";
import { BRAND_NAME, BUSINESS_ESTABLISHED_YEAR } from "@/utils/constants";
import LazyLoadMap from "@/components/Map";
import { getCanonicalUrl } from "@/utils/misc";
import { fetchGoogleReviews } from "@/repositories/googleReviewsRepository";

export const metadata = {
  title: "About",
  alternates: {
    canonical: getCanonicalUrl(process.env.NEXT_PUBLIC_BASE_URL, "about")
  }
};

export default async function About() {
  const reviews = await fetchGoogleReviews();
  return (
    <div className="flex flex-col bg-pro-lightgray">
      <Banner />
      <Header />
      <main className="mt-16 sm:mt-24">
        <section className="items-center">
          <div
            className="mx-auto flex flex-col sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <header>
              <h4
                className="pb-5 text-center text-lg font-semibold tracking-tight text-pro-green sm:text-xl md:text-2xl">
                About Us
              </h4>
              <h3 className="pb-5 text-center text-3xl font-bold tracking-tight text-pro-green sm:text-4xl md:text-5xl">
                Explore Our Mission: Delivering Lifelines Beyond Oxygen
              </h3>
            </header>
            <div className="p-4">
              <Image
                title="Delivery of Oxygen Cylinders by Road"
                alt="A truck transporting numerous oxygen cylinders on a country road."
                src="/assets/images/showcase-gallery/15.webp"
                className="pointer-events-none mt-6 h-full w-full rounded-xl"
                width="1000"
                height="1000"
                aria-describedby="image1-description"
              />
              <p id="image1-description" className="sr-only">
                A truck transporting numerous oxygen cylinders on a country road.
              </p>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-center">
            <Image
              title="Quotation marks"
              src="/assets/svg/quote.svg"
              alt="Quotation marks"
              width={25}
              height={25}
              className="pointer-events-none mb-5 sm:mt-8"
              aria-hidden="true"
            />
            <article
              className="mx-auto mb-8 pl-5 pr-5 text-base font-normal text-pro-green sm:pl-20 sm:pr-20 sm:text-xl lg:pl-80 lg:pr-80">
              <p className="mb-4">
                Welcome to {BRAND_NAME} Cylinders, your trusted partner in
                medical oxygen supply. We&apos;re located in the heart of
                Lahore, committed to providing essential oxygen equipment and
                services to those who need them most.
              </p>
              <p className="mb-4">
                Founded in {BUSINESS_ESTABLISHED_YEAR} during the critical times
                of the Covid-19 pandemic, {BRAND_NAME} Cylinders was established
                to address the urgent need for oxygen cylinders. Our journey
                began with a mission to ensure no one in our community faced a
                shortage of this vital resource.
              </p>
              <p className="mb-4">
                Since our inception, we&apos;ve dedicated ourselves to offering
                uninterrupted services, available 24/7, even during holidays,
                ensuring that our clients always have access to oxygen supplies.
                Our commitment to quality and customer satisfaction has earned
                us an exceptional 5-star rating.
              </p>
              <p className="mb-4">
                Specializing in the refilling and home delivery of medical
                oxygen cylinders, we ensure prompt and efficient service. Our
                extensive range includes various oxygen cylinders and medical
                accessories tailored to meet a broad spectrum of needs.
              </p>
              <p className="mb-4">
                Our team, comprising well-trained and informed professionals, is
                ready to assist with any inquiries or support you may require.
                We are especially responsive to emergencies and urgent needs,
                upholding a promise of dependability and compassion you can rely
                on.
              </p>
              <p className="mb-4">
                At {BRAND_NAME} Cylinders, we provide more than just oxygen; we
                deliver hope and care in every cylinder.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto pb-20">
          <h2 className="mt-10 text-center text-3xl font-bold text-pro-green sm:text-5xl">
            Our core values
          </h2>
          <div className="flex flex-col items-center pl-4 pr-4 pt-4 sm:flex-row">
            <div className="sm:w-1/2 sm:p-4">
              <Image
                title="In-Home Oxygen Therapy Administration"
                src="/assets/images/showcase-gallery/13.webp"
                alt="Elderly woman receiving oxygen therapy with a nasal cannula at home, assisted by a healthcare worker."
                className="pointer-events-none h-full w-full rounded-3xl"
                width={1000}
                height={1000}
                aria-describedby="image2-description"
              />
              <p id="image2-description" className="sr-only">
                Elderly woman receiving oxygen therapy with a nasal cannula at home, assisted by a healthcare worker.
              </p>
            </div>

            <div className="mt-5 w-full p-4 sm:mt-10 sm:w-1/2">
              <div className="mt-5 sm:mt-14">
                <article>
                  <h3 className="mb-1 block text-lg font-bold text-pro-green sm:text-2xl">
                    Commitment to Excellence
                  </h3>
                  <p className="text-base text-pro-green sm:text-xl">
                    We are dedicated to delivering top-quality oxygen cylinders
                    and services that consistently exceed industry standards. Our
                    unwavering commitment to excellence ensures the safety and
                    well-being of our clients.
                  </p>
                </article>
                <article className="mt-5 sm:mt-10">
                  <h3 className="mb-1 block text-lg font-bold text-pro-green sm:text-2xl">
                    Customer-Centric Approach
                  </h3>
                  <p className="text-base text-pro-green sm:text-xl">
                    Our clients needs and satisfaction are paramount. We
                    prioritize providing a positive and supportive experience in
                    every interaction, addressing inquiries, and ensuring timely
                    deliveries.
                  </p>
                </article>
                <article className="mt-5 sm:mt-10">
                  <h3 className="mb-1 block text-lg font-bold text-pro-green sm:text-2xl">
                    Reliability and Dependability
                  </h3>
                  <p className="text-base text-pro-green sm:text-xl">
                    Trust is the foundation of our client relationships. We pledge
                    to be there when our clients need us, delivering timely and
                    efficient oxygen supply services they can rely on.
                  </p>
                </article>
                <article className="mt-5 sm:mt-10">
                  <h3 className="mb-1 block text-lg font-bold text-pro-green sm:text-2xl">
                    Compassionate Care
                  </h3>
                  <p className="text-base text-pro-green sm:text-xl">
                    We approach our mission with empathy and care, understanding
                    the vital role oxygen plays in individuals well-being. Our
                    services not only promote physical health but also emotional
                    well-being, reflecting our commitment to compassionate care.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SocialProof />
      <Testimonials reviews={reviews}/>
      <section className="mt-16 flex flex-col items-center bg-pro-green pb-5">
        <h2
          className="mb-3 mt-10 text-center text-3xl font-semibold tracking-tight text-pro-lightgray sm:text-4xl"
          id="find-us-on-google"
        >
          Find Us On Google
        </h2>
        <div className="h-96 w-full overflow-hidden p-4 sm:w-4/6">
          <LazyLoadMap style="w-full h-full rounded-xl sm:rounded-3xl" aria-labelledby="find-us-on-google" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
