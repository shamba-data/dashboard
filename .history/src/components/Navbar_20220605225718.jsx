import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../assets/avatar.png";
const Navbar = () => {
  return (
    <div>
      <img src={avatar} alt="" className="rounded-full" />
      <span>
        <h3>Micheal Gray</h3>
        <p>Head of Data, FAO</p>
      </span>
    </div>
  );
};

export default Navbar;
