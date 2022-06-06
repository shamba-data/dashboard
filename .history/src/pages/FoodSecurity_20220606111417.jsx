import React from "react";

const FoodSecurity = () => {
  return (
    <div className="mt-[12vh] ml-7">
      <main className="leading-loose">
        <h3 className="font-semibold text-xl">Food Security</h3>
        <div className="text-lg mt-5">
          <p>
            In this section you will be able to track food security in Rwanda
            for the last three years and be able to forecast how it will be in
            the next five years.
          </p>
          <p>
            Similarly to other of our services, you can perform this action via
            our API, but for quick demo you can use our interactive web
            application to achieve the same results Our API is primarily based
            using python, more information about it here.
          </p>
          <p>
            You can track the find security in a particular country for up to
            three years in our free plan tier. To learn more about how you can
            upgrade, please visit our pricing page. To be able to view more data
            , please upgrade to premium
          </p>
        </div>

        <h3>Choose a particular range of years</h3>
      </main>
    </div>
  );
};

export default FoodSecurity;
