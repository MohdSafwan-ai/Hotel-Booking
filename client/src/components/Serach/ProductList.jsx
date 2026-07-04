import React, { useEffect, useMemo, useState } from "react";

const ProductList = ({ products = [] }) => {
  const hotelsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / hotelsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * hotelsPerPage;
    return products.slice(startIndex, startIndex + hotelsPerPage);
  }, [currentPage, products]);

  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <div className="w-full">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-900 lg:text-left">
        {products.length < 1
          ? "No Products Found"
          : `Search Results Found: ${products.length}`}
      </h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {paginatedProducts.map((post) => (
          <article
            key={post._id}
            className="relative isolate flex min-h-[16rem] w-full flex-col justify-end overflow-hidden rounded-2xl px-5 pb-6 pt-36 shadow-lg sm:min-h-[18rem] sm:px-6"
          >
            <img
              src={post.images?.[0] || "https://via.placeholder.com/150"}
              alt={post.title || "Post Thumbnail"}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <h3 className="z-10 mt-3 text-2xl font-bold text-white sm:text-3xl">
              {post.hotelLocation || "Location not available"}
            </h3>
            <div className="z-10 text-sm leading-6 text-gray-300">
              {post.title || "Title not available"}
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                className={`h-10 w-10 rounded-md text-sm font-semibold transition ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
