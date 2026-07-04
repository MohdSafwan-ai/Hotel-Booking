import React from "react";
import axios from "axios";
import BannerImage from "../assets/Rectangle 2.png";
import { useSearch } from "../context/Serach";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useSearch();

  const handelSerach = async (e) => {
    e.preventDefault();
    if (!search.keyword) {
      console.error("Search keyword is missing");
      return;
    }
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/api/booking/search/${
        search.keyword
      }`;
      console.log("Requesting:", url);
      const { data } = await axios.get(url);
      setSearch({ ...search, results: data });
      navigate("/search");
    } catch (error) {
      console.error("Error during search API call:", error);
    }
  };

  return (
    <div
      className="relative h-[28rem] w-full bg-cover bg-center sm:h-[31rem] lg:h-[34rem]"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white sm:px-6 lg:px-8">
        <h1 className="max-w-3xl text-center text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Enjoy Your Dream Vacation
        </h1>
        <p className="mt-3 max-w-2xl text-center text-sm leading-6 sm:text-lg">
          Plan and book your perfect trip with expert advice, travel tips,
          destination information, and inspiration from us.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handelSerach}
          className="mt-8 flex w-full max-w-3xl flex-col gap-3 rounded-lg bg-white p-3 shadow-lg sm:flex-row sm:items-center sm:p-4"
        >
          <input
            type="text"
            placeholder="Search destinations..."
            className="min-h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search.keyword}
            onChange={(e) => setSearch({ ...search, keyword: e.target.value })}
          />
          <button
            type="submit"
            className="min-h-11 w-full rounded-md bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700 sm:w-auto"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
