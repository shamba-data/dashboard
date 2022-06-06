import React from "react";
import { countryData } from "../data/rwanda";

const Home = () => {
  return (
    <div className="mt-[12vh] ml-7">
      <h3 className="text-xl font-medium">
        {/* The country below here should be dynamic */}
        Welcome to the country dashboard for Rwanda
      </h3>
      {countryData.map((data) => (
        <div key={data.title} className="mt-8">
          <h3>{data.title}</h3>
          <p>{data.text}</p>
        </div>
      ))}
      <p className="text-lg mt-6 text-center mr-5 "></p>
    </div>
  );
};

export default Home;
