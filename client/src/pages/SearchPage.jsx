import React, { useState } from "react";
import axios from "axios";
import FilterSidebar from "../components/Serach/FilterSidebar";
import ProductList from "../components/Serach/ProductList";
import { useSearch } from "../context/Serach";

const SearchPage = () => {
  const [search] = useSearch();
  const [filteredResults, setFilteredResults] = useState([]);
  const [hasAppliedFilters, setHasAppliedFilters] = useState(false);

  const applyFilters = async (filters) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/post/product-filters`,
        filters
      );
      if (response.data.success) {
        setFilteredResults(response.data.products);
        setHasAppliedFilters(true);
      }
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[16rem_1fr] lg:items-start">
        <FilterSidebar applyFilters={applyFilters} />
        <ProductList
          products={hasAppliedFilters ? filteredResults : search.results}
        />
      </div>
    </main>
  );
};

export default SearchPage;
