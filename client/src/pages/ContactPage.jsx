import React from "react";
import Meta from "../components/Meta";

const ContactPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Meta
        title="Contact Us | My Dream Place"
        description="Contact My Dream Place for help with hotel booking, destination planning, and travel support."
      />

      <section className="grid gap-6 rounded-lg border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:p-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-3 text-gray-600">
            Need help planning, booking, or managing a stay? Send us a message
            and we'll help you move forward.
          </p>
          <div className="mt-6 space-y-2 text-gray-700">
            <p>support@mydreamplace.com</p>
            <p>Available every day, 9 AM - 7 PM</p>
          </div>
        </div>

        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="min-h-11 rounded-md border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email address"
            className="min-h-11 rounded-md border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="How can we help?"
            rows="4"
            className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="min-h-11 rounded-md bg-blue-600 px-5 font-semibold text-white transition hover:bg-blue-700 sm:w-fit"
          >
            Send message
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
