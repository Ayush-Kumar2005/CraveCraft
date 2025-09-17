import React from "react";

const Shimmer = () => {
  return (
    <>
    <div className="shimmer-card bg-[#f0f0f0] w-1/4 h-5 mx-4 animate-pulse"></div>
    <div className="shimmer-container flex overflow-x-auto space-x-4 p-4">
        {Array.from({ length: 8 }).map((_, index) => (
            <div
            key={index}
            className="shimmer-card bg-[#f0f0f0] w-40 h-40 flex-shrink-0 animate-pulse"
            ></div>
        ))}
    </div>


    <div className="shimmer-card bg-[#f0f0f0] w-1/2 h-5 mx-4 animate-pulse"></div>
    <div className="shimmer-container flex flex-wrap m-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="shimmer-card bg-[#f0f0f0] w-60 h-80 mx-4 animate-pulse"
        ></div>
      ))}
    </div>
    </>
  );
};

export default Shimmer;
