import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <Link to="/" onCLick={handleCloseSideBar}>
          <h3 className="text-3xl font-semibold text-green-500">Shamba Data</h3>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
