import Header from "@/components/Header";
import Featured from "@/components/Featured";
import Banner from "@/components/Banner";
import Testimonials from "@/components/Testimonials";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import LazyLoadMap from "@/components/Map";
import { generateJsonLd } from "@/utils/misc";
import getSchemas from "@/utils/schemaLoader";
import { fetchGoogleReviews } from "@/repositories/googleReviewsRepository";
import { fetchShowcaseGallery } from "@/repositories/showcaseGalleryRepository";

export default async function Home() {
  const schemas = await getSchemas();
  const reviews = await fetchGoogleReviews();
  const showcaseGallery = await fetchShowcaseGallery();

  return (
    <div className="mx-auto flex flex-col bg-pro-lightgray">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(schemas.localBusinessSchema)}
      />
      <Banner />
      <Header />
      <main>
        <section aria-labelledby="featured-title">
          <Featured />
        </section>
        <svg
          viewBox="0 0 1400 159"
          style={{ enableBackground: "new 0 0 1400 160" }}
          role="img"
          aria-labelledby="wave-svg-title"
        >
          <title id="wave-svg-title">Decorative Wave Shape</title>
          <path
            fill="#FC6719"
            d="M0 120.8c389.5-200.4 536.7-67 761.1-45C929.8 92.4 1227.2 53.8 1400 0v160H0v-39.2z"
          />
          <path
            fill="#1C4F4A"
            d="M0 141.4c389.5-206.3 536.7-69 761.1-46.3 168.7 17 466.1-22.7 638.9-78.1v143H0v-18.6z"
          />
        </svg>
        <section aria-labelledby="social-proof-title">
          <h2 id="social-proof-title" className="sr-only">Social Proof</h2>
          <SocialProof />
        </section>
        <section aria-labelledby="services-title">
          <h2 id="services-title" className="sr-only">Services</h2>
          <Services />
        </section>
        <section aria-labelledby="gallery-title">
          <h2 id="gallery-title" className="sr-only">Gallery</h2>
          <Gallery data={showcaseGallery}/>
        </section>
        <section aria-labelledby="testimonials-title">
          <h2 id="testimonials-title" className="sr-only">Testimonials</h2>
          <Testimonials reviews={reviews}/>
        </section>
        <section className="mt-16 flex flex-col items-center bg-pro-green pb-5" aria-labelledby="find-us-title">
          <h2 id="find-us-title"
              className="mb-3 mt-10 text-center text-3xl font-semibold tracking-tight text-pro-lightgray sm:text-4xl">
            Find Us On Google
          </h2>
          <div className="h-96 w-full overflow-hidden p-4 sm:w-4/6">
            <LazyLoadMap style="w-full h-full rounded-xl sm:rounded-3xl" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
