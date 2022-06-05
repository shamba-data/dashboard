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
        {activeMenu && (
          <React.Fragment>
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-2 mt-5 tracking-tight"
            >
              <h3 className="text-2xl font-semibold text-green-500">
                Shamba Data
              </h3>
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
