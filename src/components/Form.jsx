import React from "react";
import addCar from "../api/addCar.js";
import { useState } from "react";

function Form() {
  const [carName, setCarName] = useState("");
  const [carBadge, setCarBadge] = useState("");
  const [motorSerial, setMotorSerial] = useState("");

  const handleInputChange = async (event) => {
    event.preventDefault();
    await addCar(carName, carBadge, motorSerial);
    setCarName("");
    setCarBadge("");
    setMotorSerial("");
  };

  return (
    <div className="container">
      <h3>Add a new car</h3>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="car-name"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          placeholder="Enter Car Name"
        />
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="car-badge"
          value={carBadge}
          onChange={(e) => setCarBadge(e.target.value)}
          placeholder="Enter Car Badge"
        />
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="motor-serial"
          value={motorSerial}
          onChange={(e) => setMotorSerial(e.target.value)}
          placeholder="Enter Motor Serial"
        />
      </div>

      <button className="btn btn-primary" onClick={handleInputChange}>
        Add Car
      </button>
    </div>
  );
}

export default Form;
