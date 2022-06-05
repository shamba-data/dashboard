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
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto">
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

            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
