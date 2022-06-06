import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../assets/avatar.png";

const Navbar = () => {
  const { setScreenSize, setActiveMenu, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex mt-5 float-right mr-7">
      <img src={avatar} alt="" className="rounded-full shadow-lg" />
      <div className="ml-3">
        <h3 className="text-base">Micheal Gray</h3>
        <p className="text-sm">Head of Data, FAO</p>
      </div>
    </div>
  );
};

export default Navbar;
