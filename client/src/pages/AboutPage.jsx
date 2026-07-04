import React from "react";
import { FaHeadset, FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";
import Meta from "../components/Meta";

const AboutPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Meta
        title="About My Dream Place | Hotel Booking"
        description="Learn about My Dream Place, a hotel booking experience built to help travelers discover destinations and book trusted stays."
      />

      <section className="grid gap-8 rounded-lg bg-gray-50 p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:p-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About My Dream Place
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            We help travelers discover trusted stays, plan better trips, and
            book hotels with less stress. From destination ideas to hotel
            details, everything is built to make your next vacation easier.
          </p>
          <p className="mt-4 max-w-2xl text-gray-600">
            The experience is based on the home page flow: discover places,
            compare hotel inspiration, and move quickly from idea to booking.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
            <FaMapMarkedAlt className="text-xl text-blue-600" />
            <span className="font-medium text-gray-800">
              Curated destinations
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
            <FaShieldAlt className="text-xl text-blue-600" />
            <span className="font-medium text-gray-800">Trusted hotels</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
            <FaHeadset className="text-xl text-blue-600" />
            <span className="font-medium text-gray-800">Travel support</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
