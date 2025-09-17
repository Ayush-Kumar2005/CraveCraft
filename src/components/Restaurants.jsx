import React, { useEffect, useState, useRef } from "react";
import FoodCard from "./FoodCard";
import RestaurantCard from "./RestaurantCard";
import { FaArrowRight , FaArrowLeft  } from "react-icons/fa";
import Shimmer from "./Shimmer";

const Restaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfFoods, setListOfFoods] = useState([]);
  const scrollRef = useRef(null);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfFoods(json?.data?.cards[0]?.card?.card?.imageGridCards?.info || []);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({ left: 150, behavior: "smooth" }); // scroll 1 card width
  };
  
  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({ left: -150, behavior: "smooth" }); // scroll left
  };

  if(listOfRestaurants.length === 0 && listOfFoods.length === 0){
    return <Shimmer/>
  }

  return (
    <div className="mx-8">
        <div className="relative">
        <h1 className="text-xl font-bold mb-4">What's on your mind?</h1>

        {/* Food Cards Container */}
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide" ref={scrollRef}>
            {listOfFoods.map((food, index) => (
            <FoodCard key={food.id || index} foodData={food} />
            ))}
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


      <div className="mt-4">
        <h1 className="text-xl font-bold">
          Restaurants with online food delivery in Bangalore
        </h1>
        <div className="flex flex-wrap gap-6 mt-4">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
