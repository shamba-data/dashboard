import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components";
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
        <Sidebar />
        <div>
          <Routes>
            {/* Home */}
            <Route path="/" exact element={<Home />} />
            <Route path="/home" element={<Home />} />

            {/* Food Security */}
            <Route path="/foodSecurity" element={<FoodSecurity />} />

            {/* Food Availability */}
            <Route path="/foodAvailability" element={<FoodAvailability />} />

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
      </BrowserRouter>
    </div>
  );
}

export default App;
