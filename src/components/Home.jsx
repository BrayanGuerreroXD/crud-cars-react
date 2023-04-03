import React, { useState, useEffect } from "react";
import Form from "./Form";
import CarList from "./CarList";
import getCars from "../api/getCars";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      const carsData = await getCars();
      setCars(carsData);
    }

    fetchCars();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-4">
          <Form />
        </div>
        <div className="col">
          <CarList cars={cars} />
        </div>
      </div>
    </div>
  );
}

export default Home;