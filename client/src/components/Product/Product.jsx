import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import axios from "axios";
import RelatedProduct from "./RelatedProduct";
import Spinner from "../Spinner";
import { useCart } from "../../context/Cart";
import { toast } from "react-toastify";
import { useAuth } from "../../context/UserContext";

const Product = () => {
  const params = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [auth] = useAuth();
  console.log("Related Products", relatedProducts);

  const handleCheckIn = () => {
    if (!auth?.token) {
      toast.error("Authentication required to proceed!");
      return navigate("/login");
    }
    navigate("/payment", {
      state: {
        price: postDetails?.price,
        product: postDetails?.title,
        postId: postDetails?._id,
      },
    });
  };

  console.log("This is postId", postDetails?._id);
  console.log("This is product categoryID", postDetails?.category?._id);

  useEffect(() => {
    if (params?.slug) getPostBySlug();
  }, [params?.slug]);

  const getPostBySlug = async (e) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/post/get-post/${params.slug}`
      );
      const product = res.data.product;
      setPostDetails(product);
      if (product?._id && product?.category?._id) {
        getRelatedPost(product._id, product.category._id);
      }
    } catch (error) {
      console.error("Error fetching post details:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const getRelatedPost = async (pid, cid) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/post/related-post/${pid}/${cid}`
      );
      setRelatedProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = () => {
    if (postDetails?.isAvailable) {
      setCart([...cart, postDetails]);
      localStorage.setItem("cart", JSON.stringify([...cart, postDetails]));
      toast.success("Item Added to cart");
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <Spinner />
      </div>
    );
  }

  if (!postDetails) {
    return (
      <div className="p-8 text-center">
        <p className="text-lg font-semibold text-gray-700">
          Product details not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden lg:flex-row">
        {/* Images Section */}
        <div className="flex flex-col space-y-4 lg:w-1/2">
          {postDetails.images?.length > 0 && (
            <>
              <img
                src={postDetails.images[0]}
                alt="Main Image"
                className="h-72 w-full rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-105 sm:h-[25rem]"
              />
              <div className="grid grid-cols-2 gap-2">
                {postDetails.images.slice(1).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Additional Image ${idx + 1}`}
                    className="h-32 w-full rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-105 sm:h-44"
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Details Section */}
        <div className="flex-1 lg:w-1/2">
          <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl">
            {postDetails.title}
          </h1>
          <div className="flex items-center space-x-2 text-yellow-500 mb-4">
            <FaStar />
            <span className="text-xl font-semibold">4.5</span>
            <span className="text-gray-500">(1200 Reviews)</span>
          </div>
          <p className="flex items-center text-gray-600 mb-4">
            <MdLocationOn className="text-xl" />
            {postDetails.hotelLocation || "Location unavailable"}
          </p>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <button
              className={`rounded-lg px-6 py-3 font-semibold shadow transition ${
                postDetails.isAvailable
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!postDetails.isAvailable}
              onClick={handleCheckIn}
            >
              Check-In
            </button>

            <button
              className={`rounded-lg px-6 py-3 font-semibold shadow transition ${
                postDetails.isAvailable
                  ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!postDetails.isAvailable}
              onClick={handleAddToCart}
            >
              Add to Wishlist
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
            <p className="text-gray-600 mt-2">{postDetails.description}</p>
          </div>

          <div className="mt-3">
            <p className="text-base font-bold text-orange-600">
              Price Per Day :{" "}
              <span className="text-xl text-gray-500">
                {typeof postDetails.price === "number"
                  ? postDetails.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                  : "Price unavailable"}
              </span>
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Nearby Areas */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800">Near Area</h2>
              <ul className="space-y-2 mt-2 text-gray-700 list-disc pl-5">
                {postDetails?.nearArea?.flatMap((area, idx) =>
                  String(area)
                    .split(",")
                    .map((subArea, subIdx) => (
                      <li key={`${idx}-${subIdx}`}>{subArea.trim()}</li>
                    ))
                )}
              </ul>
            </div>
            {/* Facilities */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800">
                Facilities
              </h2>
              <ul className="space-y-2 mt-2 text-gray-700 list-disc pl-5">
                {postDetails?.facilities?.flatMap((facility, idx) =>
                  String(facility)
                    .split(",")
                    .map((subFacility, subIdx) => (
                      <li key={`${idx}-${subIdx}`}>{subFacility.trim()}</li>
                    ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mx-auto mb-7 mt-8 max-w-7xl text-2xl font-semibold sm:text-3xl">
        You may like this:
      </h1>
      <RelatedProduct relatedProducts={relatedProducts} />
    </div>
  );
};

export default Product;
