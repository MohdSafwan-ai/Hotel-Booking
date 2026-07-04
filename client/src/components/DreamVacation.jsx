import React, { useEffect, useState } from "react";
import Image1 from "../assets/Post/Rectangle 8.png";
import Image2 from "../assets/Post/Rectangle 9.png";
import Image3 from "../assets/Post/Rectangle 10.png";
import Image4 from "../assets/Post/Rectangle 11.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaCity,
  FaCompass,
  FaMapMarkedAlt,
  FaMountain,
  FaPlaneDeparture,
  FaUmbrellaBeach,
} from "react-icons/fa";

const DreamVacation = () => {
  const [category, setCategory] = useState([]);
  const navigation = useNavigate();
  console.log("Category", category);

  const getAllCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/category/get-category`
      );
      setCategory(response.data.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Images to associate with categories (you can adjust the logic to dynamically assign images based on category)
  const categoryImages = [
    { name: "Australia", image: Image1 },
    { name: "Japan", image: Image2 },
    { name: "New Zealand", image: Image3 },
    { name: "Greece", image: Image4 },
  ];

  const categoryGraphics = {
    Australia: {
      icon: <FaUmbrellaBeach />,
      label: "Beach escapes",
      color: "bg-cyan-500",
    },
    Japan: {
      icon: <FaCity />,
      label: "City culture",
      color: "bg-rose-500",
    },
    "New Zealand": {
      icon: <FaMountain />,
      label: "Nature trips",
      color: "bg-emerald-500",
    },
    Greece: {
      icon: <FaCompass />,
      label: "Island stays",
      color: "bg-blue-500",
    },
  };

  const travelGraphics = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Top places",
      text: "Curated destinations",
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Easy trips",
      text: "Smooth planning",
    },
    {
      icon: <FaCompass />,
      title: "Explore more",
      text: "Travel inspiration",
    },
  ];

  // Function to find the image for a category
  const getImageForCategory = (categoryName) => {
    const categoryImage = categoryImages.find(
      (item) => item.name === categoryName
    );
    return categoryImage ? categoryImage.image : null;
  };

  const getGraphicForCategory = (categoryName) => {
    return (
      categoryGraphics[categoryName] || {
        icon: <FaCompass />,
        label: "Featured trip",
        color: "bg-blue-500",
      }
    );
  };

  return (
    <section
      id="discover"
      className="mx-auto mt-14 scroll-mt-24 max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          {/* Title */}
          <h1 className="mb-2 text-center text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-left">
            Enjoy your dream vacation
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-center text-gray-600 lg:mx-0 lg:text-left">
            Plan and book your perfect trip with expert advice, travel tips,
            destination information, and inspiration from us
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:min-w-[30rem]">
          {travelGraphics.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-sm max-[400px]:gap-2 max-[400px]:p-2"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 max-[400px]:h-8 max-[400px]:w-8">
                {item.icon}
              </div>
              <div className="min-w-0 text-left">
                <h2 className="text-sm font-semibold text-gray-900 max-[400px]:text-xs">
                  {item.title}
                </h2>
                <p className="text-xs text-gray-500 max-[400px]:hidden">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destinations */}
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {category?.map((destination, index) => {
          const categoryImage = getImageForCategory(destination.name);
          const categoryGraphic = getGraphicForCategory(destination.name);
          return (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {categoryImage && (
                <div className="relative overflow-hidden">
                  <img
                    src={categoryImage}
                    alt={destination.name}
                    className="h-36 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-52"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div
                    className={`absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full ${categoryGraphic.color} text-sm text-white shadow sm:left-3 sm:top-3 sm:h-10 sm:w-10 sm:text-base`}
                  >
                    {categoryGraphic.icon}
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-white/80">
                      {categoryGraphic.label}
                    </p>
                    <h2 className="text-base font-semibold text-white sm:text-xl">
                      {destination.name}
                    </h2>
                  </div>
                </div>
              )}
              <button
                type="button"
                className="flex w-full items-center justify-between gap-2 px-3 py-3 text-left text-xs font-semibold text-gray-700 transition hover:text-blue-600 sm:px-4 sm:text-sm"
                onClick={() => navigation(`/category/${destination.slug}`)}
              >
                <span>Explore</span>
                <FaArrowRight className="shrink-0 transition group-hover:translate-x-1" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DreamVacation;
