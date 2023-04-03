import React from "react";
import updateCar from "../api/updateCar";
import deleteCar from "../api/deleteCar";

function CarList({cars}) {

  const handleDelete = (id) => {
    deleteCar(id);
    location.reload();
    console.log("Delete car successfully");
  };

  const handleEdit = async (id) => {
    const car = {
      name: "Nuevo nombre",
      badge: "Nuevo badge",
      motor_serial: "Nuevo motor_serial",
    };
    const updatedCar = await updateCarById(id, car);
    console.log(updatedCar); // Objeto JSON actualizado
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