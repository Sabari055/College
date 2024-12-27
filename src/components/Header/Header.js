import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineThunderbolt } from 'react-icons/ai';

function Header() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white text-gray-800 z-50 fixed w-full shadow-sm">
      
      <div className="flex items-center space-x-2">
      <h1 className="sidebar-heading">College</h1>
      </div>

      
      <div className="hidden md:flex items-center bg-gray-100 rounded-md px-4 py-2">
        <FiSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-gray-800 placeholder-gray-600 w-40"
        />
        <span className="ml-2 text-sm text-gray-600">Ctrl + K</span>
      </div>

      
      <div className="flex items-center space-x-6">
        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Add post
        </button>
        <IoMdNotificationsOutline className="text-xl text-gray-700 hover:text-blue-600 transition duration-300" />
        <div className="relative">
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            0
          </span>
          <AiOutlineThunderbolt className="text-xl text-gray-700 hover:text-blue-600 transition duration-300" />
        </div>
        <div className="bg-gray-400 rounded-full h-10 w-10 flex items-center justify-center text-white">
          S
        </div>
      </div>
    </nav>
  );
}

export default Header;
