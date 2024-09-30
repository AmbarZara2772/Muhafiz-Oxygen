import Image from "next/image";

export default function Services() {
  return (
    <section className="mx-auto mt-24 max-w-screen-xl">
      <h2 className="mb-3 text-center text-3xl font-extrabold tracking-tight text-pro-green sm:text-4xl">
        Our Services
      </h2>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <article className="flex flex-col p-3">
          <h3 className="text-xl font-bold text-pro-green sm:text-2xl">Oxygen Refilling</h3>
          <p className="pt-3 text-base font-normal text-pro-green">
            Need an oxygen refill in Lahore? Just give us a call or send a
            WhatsApp message. Our dedicated team makes scheduling and
            coordinating deliveries a breeze. We understand the importance of
            timely refills and strive to ensure a smooth process, from arranging
            delivery times to handling payments. Rely on us for your oxygen
            needs, and we&apos;ll take care of the rest, ensuring you have the
            essential support for your health and comfort.
          </p>
        </article>
        <Image
          title="Patient in Wheelchair with Oxygen Support"
          alt="Illustration of a patient in a wheelchair with an attached oxygen cylinder and breathing through a mask."
          src="/assets/illustrations/refflings.jpg"
          className="pointer-events-none md:order-2"
          width={500}
          height={500}
        />
        <article className="flex flex-col p-3 md:order-4">
          <h3 className="text-xl font-bold text-pro-green">Oxygen Cylinders</h3>
          <p className="pt-3 text-base font-normal text-pro-green">
            Seeking dependable, high-quality oxygen cylinders in Lahore or
            throughout Pakistan? Look no further. Our extensive selection
            includes cylinders ranging from 1 liter to 100 liters, suitable for
            every need—be it industrial, home, patient care, or pet use.
            Rigorously tested for safety and efficiency, we guarantee only the
            best quality for your peace of mind. With options available for both
            rent and purchase, we ensure that whether you&apos;re managing
            medical requirements, industrial operations, or ensuring the
            well-being of loved ones (including pets), the perfect oxygen
            solution is always within your reach.
          </p>
        </article>
        <Image
          title="Various Medical Oxygen Cylinders"
          alt="A collection of medical oxygen cylinders in different sizes with gauges and valves."
          src="/assets/illustrations/clylinder.jpg"
          className="pointer-events-none md:order-3"
          width={500}
          height={500}
        />
        <article className="flex flex-col p-3 md:order-5">
          <h3 className="text-xl font-bold text-pro-green">Oxygen Accessories</h3>
          <p className="pt-3 text-base font-normal text-pro-green">
            Enhance your oxygen therapy experience with our comprehensive range
            of Oxygen Accessories. We offer everything from nasal cannulas for
            comfortable breathing to precise oxygen cylinder regulators for
            optimal flow control. Our selection also includes reliable oxygen
            saturation oximeters for monitoring, regulator bottles for ease of
            use, and oxygen masks for effective delivery. Each accessory is
            designed for efficiency and user comfort, ensuring you have all you
            need for seamless oxygen therapy.
          </p>
        </article>
        <Image
          title="Pharmacy Interior with Attendant"
          alt="An illustration of a pharmacy store interior featuring an attendant behind the counter."
          src="/assets/illustrations/accessory.jpg"
          className="pointer-events-none md:order-6"
          width={500}
          height={500}
        />

        <article className="flex flex-col p-3 md:order-8">
          <h3 className="text-xl font-bold text-pro-green">Home Delivery</h3>
          <p className="pt-3 text-base font-normal text-pro-green">
            Experience the ultimate convenience with our Home Delivery service
            in Lahore. We understand the critical nature of timely oxygen
            supply, which is why we offer prompt and reliable delivery of oxygen
            cylinders and accessories right to your doorstep. Whether it’s for
            refilling or a new purchase, our dedicated team ensures a smooth,
            hassle-free process, keeping your comfort and needs in mind.
          </p>
        </article>
        <Image
          title="Home Delivery Service"
          alt="A person delivering items in a delivery van"
          src="/assets/illustrations/home-delivery.png"
          className="pointer-events-none md:order-7"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
