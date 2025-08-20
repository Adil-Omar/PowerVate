import React from "react";

export default function Nutrition() {
  return (
    <div className="MyContainer text-center py-12">
      <div>
        <p className="text-base md:text-lg pb-1">
          <span className="text-[#896CFE] pr-2">-</span>750+ Nutrition Plans
        </p>
        <h1 className="text-lg md:text-2xl ">
          <span className="text-[#896CFE] pb-4">Our Featured</span> Meal Ideas
        </h1>
      </div>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 max-md:gap-8 justify-items-center py-8" >
        <img src="/Group 295.png" alt="" />
        <img src="/Group 296.png" alt="" />

      </div>
      <div className="md:grid flex flex-col items-center grid-cols-1 md:grid-cols-3 max-md:gap-8 justify-items-center py-8" >
        <img  src="/Group 293.png" alt="" />
        <img src="/Group 293.png" alt="" />
        <img src="/Group 294.png" alt="" />
      </div>
    </div>
  );
}
