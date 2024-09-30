import Image from "next/image";
import Link from "next/link";
import featuredImage from "/public/assets/illustrations/women-with-mask-and-on-hospital-bed.webp";

export default function Featured() {
  return (
    <section
      className="relative mx-auto max-w-screen-2xl h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${featuredImage.src})`,
      }}
      aria-labelledby="featured-title"
    >
      <h1 id="featured-title" className="sr-only">Featured</h1>
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        {/* Heading */}
        <h2 className="max-w-4xl p-2 text-2xl font-bold leading-none tracking-tight sm:py-2 sm:text-4xl sm:font-extrabold">
          24/7 Oxygen Cylinder Delivery Service <br className={"hidden md:block"} />
        </h2>
        
        {/* Subheading */}
        <p className="max-w-xl p-2 text-lg sm:text-2xl font-medium sm:py-2">
          Fast, reliable, and available around the clock with home delivery
        </p>

        {/* Buttons */}
        <div className="flex flex-row space-x-4 mt-6">
          <Link
            href="/CallButton"
            className="w-36 md:w-48 transform rounded-2xl bg-pro-orange p-3 text-sm md:text-base text-pro-lightgray transition duration-300 ease-in-out hover:scale-105"
            aria-label="Call us"
          >
            Call Us
          </Link>
          <Link
            href="/products"
            className="w-36 md:w-48 transform rounded-2xl bg-pro-green p-3 text-sm md:text-base text-pro-lightgray transition duration-300 ease-in-out hover:scale-105"
            aria-label="Our Products"
          >
          Products
          </Link>
        </div>
      </div>
    </section>
  );
}



// import Image from "next/image";
// import Link from "next/link";
// import featuredImage from "/public/assets/illustrations/women-with-mask-and-on-hospital-bed.webp";

// export default function Featured() {
//   return (
//     <section className="mx-auto max-w-screen-2xl" aria-labelledby="featured-title">
//       <h1 id="featured-title" className="sr-only">Featured</h1>
//       <div className="py-8 sm:grid sm:grid-cols-12 sm:py-16">
//         <div className="col-span-6 py-8 sm:py-10 sm:pl-10">
//           <h2 className="max-w-2xl p-4 text-2xl font-bold leading-none tracking-tight text-pro-green sm:py-8 sm:text-4xl sm:font-extrabold">
//             Comprehensive Oxygen Solutions <br className={"hidden md:block"} />
//             for Your Healthcare & Industrial Needs
//           </h2>
//           <div className="flex flex-row">
//             <Link
//               href="/products"
//               className="m-2 w-36 transform rounded-2xl bg-pro-orange p-3 text-center text-sm text-pro-lightgray transition
//                duration-300 ease-in-out hover:scale-105 md:w-48 md:text-base"
//               aria-label="View Products"
//             >
//               View Products
//             </Link>
//             <Link
//               href="/contact"
//               className="m-2 w-36 transform rounded-2xl bg-pro-green p-3 text-center text-sm text-pro-lightgray transition duration-300 ease-in-out hover:scale-105 md:w-48 md:text-base"
//               aria-label="Contact Us"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//         <div className="md:col-span-6 md:mt-0 lg:flex" aria-hidden="true">
//           <Image
//             title="Woman Resting in Bed with Oxygen Mask"
//             alt="Illustration of a woman lying in bed with an oxygen mask, suggesting medical care or recovery."
//             src={featuredImage}
//             quality={75}
//             priority={true}
//             loading="eager"
//             className="pointer-events-none"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
