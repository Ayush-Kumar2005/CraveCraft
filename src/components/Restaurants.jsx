import React, { useEffect, useState, useRef } from "react";
import FoodCard from "./FoodCard";
import RestaurantCard from "./RestaurantCard";
import { FaArrowRight, FaArrowLeft, FaTimes, FaSearch   } from "react-icons/fa";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [listOfFoods, setListOfFoods] = useState([]);
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const scrollRef = useRef(null);
  const [isFiltered, setIsFiltered] = useState(false);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const foods =
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfFoods(foods);
    setOriginalRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };

  const handleSearch = () => {
    const filtered = originalRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRated = () => {
    const filtered = originalRestaurants.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setFilteredRestaurants(filtered);
    setIsFiltered(true);
  };

  const handleClearFilters = () => {
    setFilteredRestaurants(originalRestaurants);
    setSearchText("");
    setIsFiltered(false);
  };

  if (originalRestaurants.length === 0 && listOfFoods.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="mx-8">
      <div className="relative">
        <h1 className="text-xl font-bold mb-4">What's on your mind?</h1>

        {/* Food Cards Container */}
        <div
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
          ref={scrollRef}
        >
          {listOfFoods.map((food, index) => (
            <FoodCard key={food.id || index} foodData={food} />
          ))}
        </div>

        {/* Search + Filter Controls */}
        <div className="flex items-center gap-4 mt-4 flex-wrap">
          <input
            type="text"
            className="border-2 p-2 rounded-lg"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="border-2 px-4 py-2 rounded-lg cursor-pointer"
            onClick={handleSearch}
          >
            <FaSearch className="text-gray-600" />
          </button>
          <button
              className={`px-4 py-2 rounded-lg cursor-pointer border-2 ${
              isFiltered
                ? "bg-gray-700 text-white border-gray-700" // active (darker)
                : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200" // inactive (faded)
            }`}
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
          
          {isFiltered && (
          <button
            className="border-2 px-2 py-2 rounded-lg bg-gray-100 cursor-pointer"
            onClick={handleClearFilters}
          >
            <FaTimes className="text-gray-600" />
          </button>
          )}
        </div>

        {/* Arrow Buttons */}
        {listOfFoods.length > 0 && (
          <div className="absolute bottom-0 right-2 flex gap-2">
            <button
              onClick={handleScrollLeft}
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleScrollRight}
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>

      {/* Restaurants Section */}
      <div className="mt-6">
        <h1 className="text-xl font-bold">
          Restaurants with online food delivery in Bangalore
        </h1>

        <div className="flex flex-wrap gap-6 mt-4">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurant/${restaurant.info.id}`}
                className="block hover:scale-[1.02] transition-transform duration-200"
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))
          ) : (
            <p className="text-gray-500">No restaurants found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
