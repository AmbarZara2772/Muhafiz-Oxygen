"use client";

import Map from "@/components/Map";
import { BRAND_NAME } from "@/utils/constants";

export default function BusinessLocation() {
  return (
    <section className="flex flex-col justify-between lg:flex-row" aria-labelledby="location-title">
      <h2 id="location-title" className="sr-only">Business Location</h2>
      <div className="h-96 w-full overflow-hidden p-4 lg:w-4/6">
        <Map style="w-full h-full rounded-xl lg:rounded-3xl" aria-label="Map showing business location" />
      </div>
      <div className="lg:w-1/2">
        <div className="space-y-8 rounded-lg p-8">
          <div>
            <h3 className="mb-4 text-2xl" id="location-heading">Our Location</h3>
            <address aria-labelledby="location-heading">
              <p className="mt-6 text-xl font-bold">Headquarters</p>
              <p className="text-md mt-1 font-light">{BRAND_NAME}</p>
              <p className="text-md mt-1 font-light">Lahore, Pakistan</p>
              <p className="text-md mt-1 font-light">178-A Government Officers Residence - V Faisal Town</p>
              <p className="text-md mt-1 font-light">Lahore, 54000</p>
              <p className="text-md mt-1 font-light">Pakistan</p>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
