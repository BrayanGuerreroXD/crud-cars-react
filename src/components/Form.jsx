import React from "react";
import addCar from "../api/addCar.js";
import { useState } from "react";

function Form() {
  const [carName, setCarName] = useState("");
  const [carBadge, setCarBadge] = useState("");
  const [motorSerial, setMotorSerial] = useState("");

  const handleInputChange = async (event) => {
    await addCar(carName, carBadge, motorSerial);
    setCarName("");
    setCarBadge("");
    setMotorSerial("");
    location.reload();
  };

  return (
    <div className="container">
      <h5>Add a new car</h5>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="car-name"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          placeholder="Car Name"
        />
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="car-badge"
          value={carBadge}
          onChange={(e) => setCarBadge(e.target.value)}
          placeholder="Car Badge"
        />
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="motor-serial"
          value={motorSerial}
          onChange={(e) => setMotorSerial(e.target.value)}
          placeholder="Motor Serial"
        />
      </div>

      <button className="btn btn-primary" onClick={handleInputChange}>
        Add Car
      </button>
    </div>
  );
}

export default Form;
