export default function Banner() {
  return (
    <div
      id="sticky-banner"
      className="start-0 top-0 z-50 flex w-full justify-between border-b border-gray-200 bg-pro-lightgray p-4 sticky"
      role="banner"
      aria-label="24/7 Oxygen Cylinder Services in Lahore, Pakistan"
    >
      <div className="mx-auto flex items-center">
        <p className="flex items-center text-xs font-normal text-pro-green sm:text-lg">
          <span>
            We offer 24/7 Oxygen Cylinder Refill & Rental Services across Lahore
          </span>
        </p>
      </div>
    </div>
  );
}
