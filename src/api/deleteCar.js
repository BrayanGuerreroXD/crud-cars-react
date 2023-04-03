const deleteCar = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cars/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  export default deleteCar;  