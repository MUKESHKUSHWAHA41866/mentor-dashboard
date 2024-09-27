import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold ml-3">BEYINC</h1>
        </div>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/pitches" className="hover:text-blue-500">Pitches</Link>
          <Link to="/mentors" className="hover:text-blue-500">Mentor</Link>
          <Link to="/messages" className="hover:text-blue-500">Messages</Link>
          <Link to="/notifications" className="hover:text-blue-500">Notifications</Link>
          <Link to="/profile" className="hover:text-blue-500">Profile</Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full py-2 px-4"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

