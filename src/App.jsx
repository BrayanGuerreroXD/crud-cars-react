// import { useState } from "react";
// import Home from "./components/Home";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;

// importas el componente EditCarForm
// import EditCarForm from "./EditCarForm";
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
