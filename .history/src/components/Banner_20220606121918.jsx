import React from "react";
import rwanda from "../assets/rwanda.jpg";

const Banner = () => {
  return (
    <div className="w-[120vh]">
      <img
        src={rwanda}
        className="object-cover h-[25vh] w-full px-4 object-top rounded-md"
      />
      <h3 className=" text-white text-2xl font-semibold">Rwanda</h3>
    </div>
  );
};

export default Banner;
