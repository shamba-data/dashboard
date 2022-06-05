import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Home,
  DataLabelling,
  FoodAvailability,
  FoodSecurity,
  AgriculturalPlayers
} from "./pages";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {/* Home */}
          {/* <Route path="/"/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
