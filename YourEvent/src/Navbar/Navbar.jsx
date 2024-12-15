import React from 'react';
import { Link } from 'react-router-dom';
import Events from '../Events/Events';
import Lable from '../Lable/Lable';

function Navbar() {
  return (
    <>
      <nav className=" text-white flex bg-darkPurple1 justify-between items-center px-8 py-4">
        <div className="text-3xl font-bold">YourEvent</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:underline">
              Events Organizers
            </Link>
          </li>
        </ul>
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          <Link to="/notify">Get notified with events</Link>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
