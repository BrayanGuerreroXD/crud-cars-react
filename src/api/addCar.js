const addCar = async (name, badge, motor_serial) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          badge: badge,
          motor_serial: motor_serial
        })
      };
      
      const response = await fetch('http://localhost:3000/api/cars', options);
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.log(error);
    }
  };
  
  export default addCar;