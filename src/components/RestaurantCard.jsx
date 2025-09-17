import React from "react";
import { IMG_URL } from "../utils/constants";
import Dosa from "../assets/Dosa.jpg"
import { FaStar , FaCircle} from "react-icons/fa";
const RestaurantCard=(props)=>{
    const {resData}=props;


    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        sla,
        locality,
        areaName
    } = resData?.info;

    const displayName = name.length > 20 ? name.slice(0, 20) + "..." : name;

    const cuisinesText = cuisines.join(", ");
    const displayCuisines = cuisinesText.length > 20 
    ? cuisinesText.slice(0, 20) + "..." 
    : cuisinesText;


    return(
        <div className="res-card w-60 h-auto mx-4 bg-gray-100 rounded-xl cursor-pointer hover:border">
            <img alt="res-img" className="res-image h-3/5 w-full rounded-xl" src={IMG_URL+cloudinaryImageId}/>
            <h2 className="font-bold text-xl">{displayName}</h2>
            <h4 className="flex items-center gap-1 text-sm">
                <FaStar className="text-green-600" />
                <span className="font-bold">{avgRating}</span>

                <span className="inline-block w-1 h-1 bg-black rounded-full"></span>

                <span className="font-bold">{sla?.slaString || `${sla?.deliveryTime} mins`}</span>
            </h4>
            <h4 className="text-sm">{displayCuisines}</h4>
            <h4 className="text-md mt-2 text-gray-500">
                <span>{locality+","}</span>
                <span>{areaName}</span>
            </h4>
        </div>
    )
}



export default RestaurantCard;