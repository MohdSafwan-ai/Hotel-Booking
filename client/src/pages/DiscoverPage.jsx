import React from "react";
import {
  FaCamera,
  FaCompass,
  FaMountain,
  FaUmbrellaBeach,
} from "react-icons/fa";
import Meta from "../components/Meta";
import australiaImage from "../assets/Post/Rectangle 8.png";
import japanImage from "../assets/Post/Rectangle 9.png";
import newZealandImage from "../assets/Post/Rectangle 10.png";
import greeceImage from "../assets/Post/Rectangle 11.png";

const DiscoverPage = () => {
  const destinations = [
    {
      name: "Australia",
      image: australiaImage,
      label: "Coastal stays",
      description: "Wide beaches, city escapes, and sunny holiday routes.",
    },
    {
      name: "Japan",
      image: japanImage,
      label: "Culture trips",
      description: "Food streets, city lights, temples, and seasonal views.",
    },
    {
      name: "New Zealand",
      image: newZealandImage,
      label: "Nature journeys",
      description: "Mountain drives, lake towns, and outdoor adventures.",
    },
    {
      name: "Greece",
      image: greeceImage,
      label: "Island breaks",
      description: "Blue coastlines, historic towns, and relaxed stays.",
    },
  ];

  const themes = [
    { icon: <FaUmbrellaBeach />, title: "Beach escapes" },
    { icon: <FaMountain />, title: "Mountain retreats" },
    { icon: <FaCamera />, title: "Photo-friendly cities" },
    { icon: <FaCompass />, title: "Hidden gems" },
  ];

  return (
    <main>
      <Meta
        title="Discover Destinations | My Dream Place"
        description="Discover travel destinations, trip themes, and vacation ideas from My Dream Place without browsing hotel products."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg bg-gray-50 p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Discover
            </p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Find the kind of trip you want next
            </h1>
            <p className="mt-4 max-w-2xl text-gray-600">
              Browse destination ideas and travel themes inspired by the home
              page, without showing hotel products or booking cards.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {themes.map((theme) => (
              <div
                key={theme.title}
                className="rounded-lg bg-white p-4 text-center shadow-sm"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  {theme.icon}
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-800">
                  {theme.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Destination ideas
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="h-44 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {destination.label}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {destination.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {destination.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DiscoverPage;
