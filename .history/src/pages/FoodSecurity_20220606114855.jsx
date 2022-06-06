import React from "react";
import LineChart from "../components/LineChart";

const FoodSecurity = () => {
  return (
    <div className="mt-[12vh] ml-7 mr-5">
      <main className="leading-loose">
        <h3 className="font-semibold text-xl">Food Security</h3>
        <p className="text-lg mt-5">
          In this section you will be able to track food security in Rwanda for
          the last three years and be able to forecast how it will be in the
          next five years.
        </p>
        <p className="text-lg mt-5">
          Similarly to other of our services, you can perform this action via
          our API, but for quick demo you can use our interactive web
          application to achieve the same results Our API is primarily based
          using python, more information about it here.
        </p>
        <p className="text-lg mt-5">
          You can track the find security in a particular country for up to
          three years in our free plan tier. To learn more about how you can
          upgrade, please visit our pricing page. To be able to view more data ,
          please upgrade to premium
        </p>

        <h3 className="text-lg font-medium mt-6">
          Food Production of major crops in Rwanda from 2014 - 2020
        </h3>
      </main>

      <div>
        <LineChart />
        {/* <LineChart />
        <LineChart /> */}
      </div>
    </div>
  );
};

export default FoodSecurity;
