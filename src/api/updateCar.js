const updateCar = async (id, car)=> {
  try {
    const response = await fetch(`http://localhost:3000/api/cars/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default updateCar;