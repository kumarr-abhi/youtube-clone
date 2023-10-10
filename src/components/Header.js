import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-2  shadow-lg">
      <div className="flex col-span-1 p-2 mx-2">
        <img
          className="h-6"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
        />
        <img
          className="h-6 mx-5"
          alt="youtube logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
        />
      </div>
      <div className="col-span-9 text-center">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 rounded-r-full p-2 bg-gray-100 pr-3">
          🔍
        </button>
      </div>
      <div className="flex justify-end col-span-2 pr-10">
        <img
          className="h-8"
          alt="user icon"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        />
      </div>
    </div>
  );
};

export default Header;
