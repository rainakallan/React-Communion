import React, { useState } from "react";
import Eventlist from "../components/Eventlist";
import Eventfilter from "../components/Eventfilter";
import AddEvent from "../components/AddEvent";
import Footer from "../components/Footer";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleAddEvent = (e) => {
    console.log("New Event", e);

    setEvents([...events, e]);
  };

  const filteredEvents =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  const handleDelete = (id) => {
    const updatedEvents = events.filter((e) => e.id !== id);
    setEvents(updatedEvents);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className=" flex-grow p-8 sm:p-6 md:p-8 lg:p-10 w-full mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center">
          We Helped Communities Connect & Flourish
        </h2>
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-600 text-center m-10">
          Upcoming Event Listing
        </h1>
        <AddEvent onAddEvent={handleAddEvent} />
        <Eventfilter filter={filter} setFilter={setFilter} />
        <Eventlist events={filteredEvents} handleDelete={handleDelete} />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
