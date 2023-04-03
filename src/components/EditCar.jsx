import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditCar() {
  const [carName, setCarName] = useState("");
  const [carBadge, setCarBadge] = useState("");
  const [motorSerial, setMotorSerial] = useState("");

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/"); // Navigate to EditCar with the corresponding ID
  };

  return (
    <div className="container">
      <h5>Edit car</h5>
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
        Ecit Car
      </button>
    </div>
  );
}

export default EditCar;