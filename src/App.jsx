import Home from "./components/Home";
import EditCar from "./components/EditCar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
