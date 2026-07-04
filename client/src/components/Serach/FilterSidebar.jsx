import React, { useState } from "react";
import { FaChevronDown, FaSlidersH } from "react-icons/fa";

const FilterSidebar = ({ applyFilters }) => {
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedGuests, setSelectedGuests] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const budgetOptions = [
    { label: "$0 - $200", range: [0, 200] },
    { label: "$200 - $500", range: [200, 500] },
    { label: "$500 - $1,000", range: [500, 1000] },
    { label: "$1,000 - $2,000", range: [1000, 2000] },
    { label: "$2,000 - $5,000", range: [2000, 5000] },
  ];

  const applyCurrentFilters = (budget, guests) => {
    const filters = {
      checked: guests,
      radio: budget
        ? budgetOptions.find((b) => b.label === budget).range
        : [],
    };
    applyFilters(filters);
  };

  const handleBudgetChange = (budget) => {
    setSelectedBudget(budget);
    applyCurrentFilters(budget, selectedGuests);
  };

  const handleGuestChange = (guest, isChecked) => {
    const nextGuests = isChecked
      ? [...selectedGuests, guest]
      : selectedGuests.filter((g) => g !== guest);

    setSelectedGuests(nextGuests);
    applyCurrentFilters(selectedBudget, nextGuests);
  };

  return (
    <aside className="w-full space-y-5 lg:sticky lg:top-6">
      <button
        type="button"
        className="flex min-h-11 w-full items-center justify-between rounded-md border bg-white px-4 py-2 font-semibold text-gray-800 shadow-sm lg:hidden"
        onClick={() => setIsFilterOpen((prev) => !prev)}
      >
        <span className="flex items-center gap-2">
          <FaSlidersH />
          Filters
        </span>
        <FaChevronDown
          className={`transition ${isFilterOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div className={`${isFilterOpen ? "block" : "hidden"} space-y-5 lg:block`}>
        {/* Budget Filter */}
        <div className="rounded-md border bg-white p-4">
          <h3 className="mb-3 font-semibold">Your budget per day</h3>
          <div className="flex flex-col gap-2">
            {budgetOptions.map((option, index) => (
              <label
                key={index}
                className="flex min-h-10 items-center rounded-md px-2 text-sm text-gray-700 transition hover:bg-gray-50 sm:text-base"
              >
                <input
                  type="radio"
                  name="budget"
                  checked={selectedBudget === option.label}
                  onChange={() => handleBudgetChange(option.label)}
                  className="mr-2"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Guest Filter */}
        <div className="rounded-md border bg-white p-4">
          <h3 className="mb-3 font-semibold">Guest Filter</h3>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5, 6].map((guest, index) => (
              <label
                key={index}
                className="flex min-h-10 items-center rounded-md px-2 text-sm text-gray-700 transition hover:bg-gray-50 sm:text-base"
              >
                <input
                  type="checkbox"
                  checked={selectedGuests.includes(guest)}
                  onChange={(e) => handleGuestChange(guest, e.target.checked)}
                  className="mr-2"
                />
                <span>{guest} Guest</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
