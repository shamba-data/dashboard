import React from "react";
import rwanda from "../assets/rwanda.jpg";

const Banner = () => {
  return (
    <div className="w-full">
      <img src={rwanda} className="object-cover h-10" />
      <h3 className=" text-white text-2xl font-semibold">Rwanda</h3>
    </div>
  );
};

export default Banner;
