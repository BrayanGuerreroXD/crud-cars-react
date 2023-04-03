import React from "react";
import { useState } from "react";

function Form() {
  const [carName, setCarName] = useState("");
  const [carBadge, setCarBadge] = useState("");
  const [motorSerial, setMotorSerial] = useState("");

  const handleInputChange = (event) => {
    event.preventDafault();
    setCarName(event.target.value);
    setCarBadge(event.target.value);
    setMotorSerial(event.target.value);
  };

  return (
    <div className="container">
    <h3>Add a new car</h3>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="car-name"
          placeholder="Enter Car Name"
        />
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="car-badge"
          placeholder="Enter Car Badge"
        />
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="motor-serial"
          placeholder="Enter Motor Serial"
        />
      </div>

      <button className="btn btn-primary" onClick={handleInputChange}>Add Car</button>
    </div>
  );
}

export default Form;
