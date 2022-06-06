import React from "react";
import rwanda from "../assets/rwanda.jpg";

const Banner = () => {
  return (
    <div className="w-full">
      <img src={rwanda} className="object-cover h-40 w-[50vw]" />
      <h3 className=" text-white text-2xl font-semibold">Rwanda</h3>
    </div>
  );
};

export default Banner;
