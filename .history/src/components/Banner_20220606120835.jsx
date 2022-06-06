import React from "react";
import rwanda from "../assets/rwanda.jpg";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${rwanda})`, objectFit: "cover" }}
      className="w-full h-[50vh] relative mix-blend-overlay"
    >
      <h3 className="absolute text-white text-2xl font-semibold">Rwanda</h3>
    </div>
  );
};

export default Banner;
