import React, { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router';
import 'aos/dist/aos.css';

function Card() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
      easing: 'ease',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className='text-black font-bold text-5xl'>Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        <div data-aos="fade-up" className="bg-white hover:shadow-xl shadow-sm rounded-lg overflow-hidden">
          <div className="relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjfX-GHPN_bU53Eeg1ubEGWi3sIO8Jvt47w&s" alt="Event" className="w-full h-52 object-cover" />
            <span className="absolute top-4 left-4 bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded-full">
              Free
            </span>
            <span className="absolute top-4 right-4 bg-white text-pink-500 p-2 rounded-full shadow-md">
              <i className="fas fa-heart"></i>
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold text-lg">DEC</span>
              <span className="text-gray-700 text-lg">18</span>
            </div>
            <h3 className="text-xl font-semibold mt-2">Mombasa Pirates Party</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="bg-white hover:shadow-xl shadow-sm rounded-lg overflow-hidden">
          <div className="relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYo8pLN260xpE3rTVfKVtEiyA59JeJCfQznw&s" alt="Event" className="w-full h-52 object-cover" />
            <span className="absolute top-4 left-4 bg-pink-500 text-white text-sm font-bold px-2 py-1 rounded-full">
              $50
            </span>
            <span className="absolute top-4 right-4 bg-white text-pink-500 p-2 rounded-full shadow-md">
              <i className="fas fa-heart"></i>
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold text-lg">SEP</span>
              <span className="text-gray-700 text-lg">18</span>
            </div>
            <h3 className="text-xl font-semibold mt-2">Karaoke Opening Club</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="bg-white hover:shadow-xl shadow-sm rounded-lg overflow-hidden">
          <div className="relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPy9a8lC-llwch1Jpswf8GtIOq36NnEN3aTg&s" alt="Event" className="w-full h-52 object-cover" />
            <span className="absolute top-4 left-4 bg-pink-500 text-white text-sm font-bold px-2 py-1 rounded-full">
              $25
            </span>
            <span className="absolute top-4 right-4 bg-white text-pink-500 p-2 rounded-full shadow-md">
              <i className="fas fa-heart"></i>
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold text-lg">MARCH</span>
              <span className="text-gray-700 text-lg">18</span>
            </div>
            <h3 className="text-xl font-semibold mt-2">Nairobi Karaoke</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.
            </p>
          </div>
        </div>
      </div>
      <button className="mt-8 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600">
        <Link to="/events" >Load more</Link>
      </button>
    </div>
  );
}

export default Card;
