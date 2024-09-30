import Accordion from "@/components/Accordion";

const Faqs = ({ faqs }) => {
  return (
    <section id="faqs" className="mb-16 px-5 pt-20 lg:px-0" aria-labelledby="faq-title">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4 p-4">
          <h2 id="faq-title" className="mb-4 text-xl sm:text-2xl">FAQ</h2>
          <p className="text-lg font-semibold sm:text-3xl">Do you have any questions for us?</p>
          <p className="max-w-md text-sm sm:text-base">If there are questions you want to ask, We will answer all your questions.</p>
          <div className="relative mb-6 mt-2">
            <div className="flex items-center">
              <svg
                className="absolute ml-3 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5l9 7 9-7"
                />
              </svg>
              <label htmlFor="email" className="sr-only">Your email</label>
              <input
                type="email"
                id="email"
                className="w-full rounded-2xl border pb-2 pl-10 pt-2"
                placeholder="Your email"
                required
              />
              <button
                type="submit"
                className="ml-2 h-12 w-1/2 transform rounded-3xl bg-pro-green text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-pro-orange sm:w-2/6"
                aria-label="Submit email"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="mb-20 p-4">
          <div className="max-h-[900px]">
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
