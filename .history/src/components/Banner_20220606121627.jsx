import React from "react";
import rwanda from "../assets/rwanda.jpg";

const Banner = () => {
  return (
    <div className="">
      <img
        src={rwanda}
        className="object-cover h-[35vh] w-[85vw] px-4 object-top absolute"
      />
      <h3 className=" text-white text-2xl font-semibold relative">Rwanda</h3>
    </div>
  );
};

export default Banner;
