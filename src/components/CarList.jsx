import React from "react";
import { useNavigate } from "react-router-dom";
import deleteCar from "../api/deleteCar";

function CarList({ cars }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteCar(id);
    location.reload();
    console.log("Delete car successfully");
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`); // Navigate to EditCar with the corresponding ID
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Car Badge</th>
            <th>Motor Serial</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.badge}</td>
              <td>{item.motor_serial}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarList;
