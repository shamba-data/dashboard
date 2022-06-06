import React from "react";
import rwanda from "../assets/rwanda.jpg";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${rwanda})`, objectFit: "contain" }}
      className="w-full h-[30vh] absolute mix-blend-overlay"
    >
      <h3 className="relative text-white text-2xl font-semibold">Rwanda</h3>
    </div>
  );
};

export default Banner;
