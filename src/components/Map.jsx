"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import Link from "next/link";
import { LOCATION } from "@/utils/constants";

const libraries = ["places"];
const locationData = LOCATION;

export default function LazyLoadMap({ style }) {
  const [isIntersected, setIsIntersected] = useState(false);
  const placeholderRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isIntersected) {
          setIsIntersected(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(placeholderRef.current);

    return () => observer.disconnect();
  }, [isIntersected]);

  return (
    <div
      ref={placeholderRef}
      style={{ height: "350px", width: "100%" }}
      role="region"
      aria-label="Map showing business location"
    >
      {isIntersected ? <MapComponent style={style} /> : "Loading map..."}
    </div>
  );
}

function MapComponent({ style }) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName={style}
      center={locationData.location}
      zoom={15}
      aria-label="Google Map"
    >
      <Marker position={locationData.location} aria-label="Business Location Marker" />
      <InfoWindow
        position={locationData.location}
        options={{
          pixelOffset: new window.google.maps.Size(0, -30),
        }}
      >
        <div className="max-w-sm p-2 leading-4" role="dialog" aria-labelledby="map-info-title" aria-describedby="map-info-description">
          <h3 id="map-info-title" className="text-md font-semibold leading-6 text-pro-green sm:text-lg">
            {locationData.name}
          </h3>
          <p id="map-info-description" className="text-sm font-light text-pro-green sm:text-lg">
            {locationData.formatted_address}
          </p>
          <Link
            href={`https://www.google.com/maps/dir/?api=1&destination=${locationData.location.lat},${locationData.location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md font-bold text-pro-orange hover:text-pro-paleorange sm:text-lg"
            aria-label="View on Google Maps"
          >
            View on Google Maps
          </Link>
        </div>
      </InfoWindow>
    </GoogleMap>
  ) : null;
}
