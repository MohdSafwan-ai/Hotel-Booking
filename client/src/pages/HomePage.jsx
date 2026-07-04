import React from "react";
import Banner from "../components/Banner";
import DreamVacation from "../components/DreamVacation";
import NextTrip from "../components/NextTrip";
import Hotels from "../components/Hotels";
import Meta from "../components/Meta";

const HomePage = () => {
  return (
    <div>
      <Meta
        title="My Dream Place | Hotel Booking"
        description="Plan your dream vacation with destination ideas, hotel inspiration, and booking support from My Dream Place."
      />
      <Banner />
      <DreamVacation />
      <NextTrip />
      <Hotels />
    </div>
  );
};

export default HomePage;
