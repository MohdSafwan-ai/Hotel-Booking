import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/Rectangle 18.png";
import { FaArrowRight, FaCompass, FaMapMarkedAlt } from "react-icons/fa";

const Advertisement = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative mx-auto mt-14 flex w-[92%] max-w-7xl overflow-hidden rounded-lg bg-center bg-cover px-5 py-8 sm:w-[94%] sm:px-8 md:min-h-[16rem] md:items-center lg:px-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex w-full flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex max-w-xl flex-col items-center space-y-4 md:items-start">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
            Ready to plan?
          </p>
          <h2 className="text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl">
            Find destination ideas before you book your next stay
          </h2>
          <p className="max-w-lg text-sm text-blue-50 sm:text-base">
            Explore trip themes, travel inspiration, and curated places from My
            Dream Place.
          </p>
          <button
            type="button"
            onClick={() => navigate("/discover")}
            className="flex min-h-11 w-full max-w-[13rem] items-center justify-center gap-2 rounded-md bg-white px-5 py-2 font-semibold text-blue-700 transition hover:bg-blue-50 md:py-3"
          >
            Explore Discover
            <FaArrowRight />
          </button>
        </div>

        <div className="grid w-full max-w-md grid-cols-2 gap-3">
          <div className="rounded-lg bg-white/95 p-4 text-left shadow-sm">
            <FaCompass className="text-2xl text-blue-600" />
            <h3 className="mt-3 font-semibold text-gray-900">Trip ideas</h3>
            <p className="mt-1 text-sm text-gray-600">Browse places to visit</p>
          </div>
          <div className="rounded-lg bg-white/95 p-4 text-left shadow-sm">
            <FaMapMarkedAlt className="text-2xl text-blue-600" />
            <h3 className="mt-3 font-semibold text-gray-900">Destinations</h3>
            <p className="mt-1 text-sm text-gray-600">Choose your next route</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
 
