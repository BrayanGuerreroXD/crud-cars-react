import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import updateCar from "../api/updateCar";

function EditCar() {
  const { id } = useParams();
  const [carName, setCarName] = useState("");
  const [carBadge, setCarBadge] = useState("");
  const [motorSerial, setMotorSerial] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/api/cars/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCarName(data.name);
        setCarBadge(data.badge);
        setMotorSerial(data.motor_serial);
      });
  }, [id]);

  const handleEdit = async (id) => {
    const car = {
      name: carName,
      badge: carBadge,
      motor_serial: motorSerial,
    };
    await updateCar(id, car)
    navigate("/"); // Navigate to EditCar with the corresponding ID
  };

  return (
    <div className="container">
      <h5>Edit car</h5>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="car-name"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          placeholder="Car Name"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="car-badge"
          value={carBadge}
          onChange={(e) => setCarBadge(e.target.value)}
          placeholder="Car Badge"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="motor-serial"
          value={motorSerial}
          onChange={(e) => setMotorSerial(e.target.value)}
          placeholder="Motor Serial"
        />
      </div>

      <button className="btn btn-success" onClick={() => handleEdit(id)}>
        Edit Car
      </button>
    </div>
  );
}

export default EditCar;