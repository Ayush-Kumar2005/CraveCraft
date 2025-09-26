import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header className="flex justify-between mr-8 items-center py-4">
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            alt="logo"
            className="h-24 w-32"
            src={LOGO_URL}
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex gap-16 text-lg font-semibold">
        <Link
          to="/"
          className="px-4 rounded-full hover:bg-[#FC8A06] cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/Restaurants"
          className="px-4 rounded-full hover:bg-[#FC8A06] cursor-pointer"
        >
          Restaurants
        </Link>
        <Link
          to="/cart"
          className="px-4 rounded-full hover:bg-[#FC8A06] cursor-pointer"
        >
          Cart
        </Link>
        <Link
          to="/contact"
          className="px-4 rounded-full hover:bg-[#FC8A06] cursor-pointer"
        >
          Contact us
        </Link>
        <Link
          to="/login"
          className="px-4 rounded-full bg-black text-white cursor-pointer"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
