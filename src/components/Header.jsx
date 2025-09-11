import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between mr-8 items-center py-4">
      {/* Logo */}
      <div>
        <img
          alt="logo"
          className="h-24 w-32"
          src="https://static.vecteezy.com/system/resources/previews/013/195/659/original/restaurant-delicious-food-logo-badge-line-style-design-with-smile-face-fork-and-spoon-icon-concept-for-catering-food-culinary-logo-design-vector.jpg"
        />
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
