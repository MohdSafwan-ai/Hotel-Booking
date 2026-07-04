import React from "react";
import Meta from "../components/Meta";
import NextTrip from "../components/NextTrip";

const ActivitiesPage = () => {
  const activities = [
    "City hotel guides",
    "Food-friendly travel ideas",
    "Seasonal destination inspiration",
    "Family trip planning",
  ];

  return (
    <main>
      <Meta
        title="Activities and Trip Ideas | My Dream Place"
        description="Find travel activities, trip ideas, and destination inspiration based on the My Dream Place home page experience."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg bg-gray-50 p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:p-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Activities for your next trip
            </h1>
            <p className="mt-4 max-w-2xl text-gray-600">
              Browse travel stories, destination ideas, and hotel-focused
              inspiration to shape a better vacation plan.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {activities.map((activity) => (
              <div
                key={activity}
                className="rounded-md bg-white px-4 py-3 font-medium text-gray-800 shadow-sm"
              >
                {activity}
              </div>
            ))}
          </div>
        </div>
      </section>

      <NextTrip />
    </main>
  );
};

export default ActivitiesPage;
