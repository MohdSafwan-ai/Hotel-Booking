import React from "react";

const Spinner = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
      <span className="sr-only">Loading...</span>
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="mb-8 h-8 w-48 rounded bg-gray-200" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="h-72 rounded-lg bg-gray-200 sm:h-[25rem]" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-32 rounded-lg bg-gray-200 sm:h-44" />
              <div className="h-32 rounded-lg bg-gray-200 sm:h-44" />
            </div>
          </div>

          <div className="space-y-5">
            <div className="h-9 w-3/4 rounded bg-gray-200" />
            <div className="h-5 w-1/2 rounded bg-gray-200" />
            <div className="h-5 w-2/3 rounded bg-gray-200" />

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="h-12 w-full rounded-lg bg-gray-200 sm:w-32" />
              <div className="h-12 w-full rounded-lg bg-gray-200 sm:w-40" />
            </div>

            <div className="space-y-3 pt-4">
              <div className="h-6 w-36 rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-11/12 rounded bg-gray-200" />
              <div className="h-4 w-4/5 rounded bg-gray-200" />
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="h-6 w-28 rounded bg-gray-200" />
                <div className="h-4 w-32 rounded bg-gray-200" />
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-4 w-36 rounded bg-gray-200" />
              </div>
              <div className="space-y-3">
                <div className="h-6 w-28 rounded bg-gray-200" />
                <div className="h-4 w-32 rounded bg-gray-200" />
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-4 w-36 rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
