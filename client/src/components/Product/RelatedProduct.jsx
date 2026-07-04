import React from "react";
import {
  FaBed,
  FaUser,
  FaRulerCombined,
  FaPlaneDeparture,
} from "react-icons/fa";
import frame from "../../assets/Frame.png";
import { useNavigate } from "react-router-dom";

const RelatedProduct = ({ relatedProducts = [] }) => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Coupon Card */}
      <div className="flex min-h-[20rem] flex-col items-center justify-center rounded-lg bg-blue-500 p-6 text-center text-white shadow-lg">
        <div className="flex items-center mb-4">
          <FaPlaneDeparture className="text-3xl mr-2" />
          <h3 className="text-2xl font-bold">my Dream Place</h3>
        </div>
        <p className="text-5xl font-extrabold mb-2">20% OFF</p>
        <p className="mb-1 text-lg">Use Promo Code:</p>
        <p className="bg-yellow-300 text-blue-800 font-extrabold text-3xl py-1 px-4 rounded-lg shadow-md">
          Orlando
        </p>
        <img src={frame} alt="Traveler Icon" className="mt-4 h-24 w-24" />
      </div>

      {/* Related Products */}
      {relatedProducts.map((related, index) => (
        <div
          className="overflow-hidden rounded-lg bg-white shadow-md"
          key={related._id || index}
        >
          <img
            src={related.images?.[0] || "https://via.placeholder.com/400x240"}
            alt={`Image of ${related.title || "hotel"}`}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              {related.title || "Hotel"}
            </h3>
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <FaRulerCombined className="mr-2" /> 300 sq ft{" "}
              {/* Update dynamically if needed */}
            </div>
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <FaUser className="mr-2" /> Sleeps 3 {/* Update dynamically */}
            </div>
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <FaBed className="mr-2" /> 1 double bed and 1 twin bed{" "}
              {/* Update dynamically */}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-4"
              onClick={() => related.slug && navigate(`/product/${related.slug}`)}
            >
              Try it
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedProduct;
