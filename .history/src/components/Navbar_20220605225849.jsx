import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../assets/avatar.png";
const Navbar = () => {
  return (
    <div className="flex mt-5 float-right mr-5\7">
      <img src={avatar} alt="" className="rounded-full" />
      <div className="ml-3">
        <h3>Micheal Gray</h3>
        <p>Head of Data, FAO</p>
      </div>
    </div>
  );
};

export default Navbar;
