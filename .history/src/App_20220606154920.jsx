import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { useStateContext } from "./contexts/ContextProvider";
import {
  Home,
  DataLabelling,
  FoodAvailability,
  FoodSecurity,
  NotFound
} from "./pages";

// The lazy loading below is completely optional
const AgriculturalPlayers = React.lazy(() =>
  import("./pages/AgriculturalPlayers")
);

function App() {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <Suspense fallback={<p>Loading ...</p>}>
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
                <Route path="/" element={<Navigate to="/home" />} />
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
                  path="/majorAgriculturalPlayers"
                  element={<AgriculturalPlayers />}
                />

                {/* Not Found */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
