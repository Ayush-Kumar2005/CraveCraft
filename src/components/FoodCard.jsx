import React from "react";
import { FOOD_URL } from "../utils/constants";

const FoodCard = ({ foodData }) => {
  return (
    <div className="flex-shrink-0 w-40 h-40 flex flex-col items-center justify-center cursor-pointer mx-2 my-4">
      <img
        src={FOOD_URL + foodData.imageId}
        alt={foodData.accessibility?.altText || "Food Item"}
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default FoodCard;
