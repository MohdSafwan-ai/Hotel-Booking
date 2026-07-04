import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SelectedCategory = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState({});
  console.log(" post: ", posts);
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/category/select-category/${slug}`
      );
      setCategory(response.data.category || {});
      setPosts(response.data.products || []);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-2xl font-bold">{category.name}</h1>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => {
          const imageIndex = post.images?.length
            ? currentImageIndex % post.images.length
            : 0;

          return (
            <article
              key={post._id || index}
              className="relative isolate flex min-h-[17rem] w-full flex-col justify-end overflow-hidden rounded-2xl px-6 pb-8 pt-40 shadow-lg"
            >
              <img
                src={
                  post.images?.[imageIndex] ||
                  "https://via.placeholder.com/400x260"
                }
                alt={post.title || "Post Thumbnail"}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <h3 className="z-10 mt-3 text-2xl font-bold text-white sm:text-3xl">
                {post.hotelLocation || "Location unavailable"}
              </h3>
              <button
                type="button"
                className="z-10 text-left text-sm leading-6 text-gray-300"
                onClick={() => post.slug && navigate(`/product/${post.slug}`)}
              >
                {post.title || "View details"}
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedCategory;
