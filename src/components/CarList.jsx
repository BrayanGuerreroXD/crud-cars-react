import React from "react";
import getCars from "../api/getCars";
import { useState, useEffect } from "react";

const handleDelete = (id) => {
  console.log("Delete");
};

const handleEdit = (id) => {
  console.log("Edit");
};

function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const data = await getCars();
          setCars(data);
        }
        fetchData();
      }, []);

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
                <button className="btn btn-success" onClick={handleEdit(item.id)}>Edit</button>
                <button className="btn btn-danger" onClick={handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarList;
