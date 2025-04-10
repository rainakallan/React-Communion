import React, { useState } from "react";

const AddEvent = ({ onAddEvent }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category && date) {
      onAddEvent({ title, category, date });
      setTitle(""), setCategory(""), setDate("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={title}
          placeholder="Event Title"
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 m-5 rounded-xl w-full sm:w-1/3 sm:flex-1"
        />
        <input
          type="date"
          value={date}
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 m-5 rounded-xl w-full sm:w-1/3 sm:flex-1"
        />
        <input
          type="text"
          value={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 m-5  rounded-xl w-full sm:w-1/3 sm:flex-1"
        />
        <button
          type="submit"
          className=" bg-blue-600 text-white 
          text-sm sm:text-base md:text-lg 
          px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 
          rounded-xl shadow-lg m-5
          hover:bg-blue-700 active:scale-95 
          transition duration-300 ease-in-out cursor-pointer"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
