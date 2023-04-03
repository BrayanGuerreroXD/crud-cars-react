import React from "react";
import Form from "./Form";
import CarList from "./CarList";

import getCars from "../api/getCars";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-4">
          <Form />
        </div>
        <div className="col">
          <CarList cars={getCars()} />
        </div>
      </div>
    </div>
  );
}

export default Home;
