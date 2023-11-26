import React from "react";
import logo from "../logo.jpg";

// import {FaBeer} from 'react-icons/fa'
//mx-auto px-4 max-w-screen-xl - container

const Header = () => {
  return (
    <div className="bg-zinc-800 text-white py-4 flex">
      <div className="flex items-center justify-between mx-auto w-10/12">
        <a href="#" className="text-3xl font-bold">
          <span className="text-yellow-300 ">News</span>Hunt
        </a>
        <div className="flex gap-10 items-center">
          <div className="inline-flex rounded-lg shadow-sm">
            <button className=" bg-zinc-600 border-2 border-gray-400 rounded-l-md p-2">
              ENG
            </button>
            <button className="border-2 border-l-0 border-gray-400 rounded-r-md p-2">
              HIN
            </button>
          </div>
          <a href="" className="text-2xl font-semibold">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
