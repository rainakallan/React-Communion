import React from "react";

function Eventfilter({ filter, setFilter }) {
  return (
    <div>
      <label className="text-lg sm:text-base md:text-xl ml-2 sm:ml-5">
        Filter by Category:
      </label>

      <div>
        {["All", "Religious", "Social", "Charity"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`p-2 px-4 m-2 sm:m-5 rounded-xl text-sm sm:text-base hover:bg-blue-800 transition duration-300 cursor-pointer ${
              filter === category
                ? "bg-blue-600 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Eventfilter;
