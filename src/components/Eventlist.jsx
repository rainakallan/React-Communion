import React, { useState } from "react";

const Eventlist = ({ events, handleDelete }) => {
  return (
    <div>
      {events.length === 0 ? (
        <p className="text-xl sm:text-base md:text-2xl text-center m-5 ">
          No Events listed.
        </p>
      ) : (
        <ul>
          {events.map((e, index) => (
            <li
              key={index}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 m-5"
            >
              <h3 className="font-bold text-xl text-blue-700">{e.title}</h3>
              <p className="text-sm text-gray-600 flex  justify-between">
                Date: {e.date} | Category: {e.category}
                <button
                  onClick={() => handleDelete(e.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 "
                >
                  Delete
                </button>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Eventlist;
