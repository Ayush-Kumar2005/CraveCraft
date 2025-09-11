import React from "react";
// import { IMG_URL } from "../utils/constants";
import Dosa from "../assets/Dosa.jpg"
const RestaurantCard=()=>{
    // const {resData}=props;


    // const {
    //     cloudinaryImageId,
    //     name,
    //     avgRating,
    //     cuisines,
    //     deliveryTime,
    //     costForTwo
    // } = resData?.info;
    return(
        <div className="res-card w-60 h-80 mx-4 bg-gray-100 rounded-xl ">
            <img alt="res-img" className="res-image h-1/2 rounded-xl" src={Dosa}/>
            <h2>Name</h2>
            <h3>dsagfkjhadsgkjhgdafsrikj </h3>
            <h4>3 stars</h4>
            <h4>200</h4>
            <h4>29 minutes</h4>
        </div>
    )
}



export default RestaurantCard;