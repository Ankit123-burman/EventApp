import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Lable from "../Lable/Lable";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/events")
      .then((response) => {
        setEvents(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <>
      <Lable />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <h1 className="text-black font-bold text-5xl mb-8">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl px-4">
          {events.length === 0 ? (
            <div className="text-center text-lg text-gray-500">Loading events...</div>
          ) : (
            events.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white text-black hover:shadow-xl shadow-sm rounded-lg overflow-hidden border border-gray-200"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-pink-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                    {item.price}
                  </span>
                  <span className="absolute top-4 right-4 bg-white text-pink-500 p-2 rounded-full shadow-md">
                    <i className="fas fa-heart"></i>
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500 font-bold text-lg">
                      {item.date.split(" ")[0].toUpperCase()}
                    </span>
                    <span className="text-gray-700 text-lg">
                      {item.date.split(" ")[1]}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                  <p className="text-gray-500 text-sm mt-1">Location: {item.place}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
