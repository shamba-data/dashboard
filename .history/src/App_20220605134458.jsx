import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Home,
  DataLabelling,
  FoodAvailability,
  FoodSecurity,
  Footer,
  AgriculturalPlayers
} from "./pages";

function App() {
  return (
    <div className="">
      <BrowserRouter>
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
