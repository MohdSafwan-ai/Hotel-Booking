import React from "react";
import Image1 from "../assets/Post/Rectangle 16.png";
import Image2 from "../assets/Post/Rectangle 17.png";
import Image3 from "../assets/Post/Rectangle 8 (1).png";

const NextTrip = () => {
  const trips = [
    {
      image: Image1,
      title: "Sydney’s 10 most fashionable 5 star hotels",
      description:
        "Browse the fastest growing tourism sector in the heart of Australia's tourism capital ....",
    },
    {
      image: Image2,
      title: "Top cities for Vegan Travellers",
      description:
        "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    },
    {
      image: Image3,
      title: "World’s top destinations during and post covid timeline",
      description:
        "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
    },
  ];

  return (
    <section
      id="activities"
      className="mx-auto mt-14 scroll-mt-24 max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <h1 className="mb-6 text-2xl font-semibold text-gray-900 sm:text-3xl">
        Get inspiration for your next trip
      </h1>
      <div className="-mx-4 mt-8 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="relative h-[14rem] w-[82vw] max-w-[21rem] shrink-0 snap-start overflow-hidden rounded-lg shadow-lg sm:h-[15rem] sm:w-full sm:max-w-none"
          >
            <img
              src={trip.image}
              alt={trip.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-4">
              <h2 className="text-base font-semibold text-white sm:text-lg">
                {trip.title}
              </h2>
              <p className="mt-1 text-xs text-gray-200 sm:text-sm">
                {trip.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NextTrip;
