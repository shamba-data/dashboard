import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { useStateContext } from "./contexts/ContextProvider";
import {
  Home,
  DataLabelling,
  FoodAvailability,
  FoodSecurity,
  Footer,
  AgriculturalPlayers
} from "./pages";

function App() {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div className="">
      <BrowserRouter>
        <div className="flex relative">
          {activeMenu ? (
            <div className="w-72 fixed sidebar">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "bg-main-bg min-h-screen md:ml-72 w-full"
                : "bg-main-bg w-full min-h-screen flex-2"
            }
          >
            <div className="fixed md:static bg-main-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* Home */}
                <Route path="/" exact element={<Home />} />
                <Route path="/home" element={<Home />} />

                {/* Food Security */}
                <Route path="/foodSecurity" element={<FoodSecurity />} />

                {/* Food Availability */}
                <Route
                  path="/foodAvailability"
                  element={<FoodAvailability />}
                />

                {/* Data Labelling */}
                <Route path="/dataLabelling" element={<DataLabelling />} />

                {/* Ag players */}
                <Route
                  path="/agriculturePlayers"
                  element={<AgriculturalPlayers />}
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
