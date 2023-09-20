import React from "react";

function PlantCard({plants, setPlants}) {

  function toggleInStock(id) {
    setPlants(plants.map(plant => {
      if (plant.id === id) {
        return { ...plant, inStock: !plant.inStock }; 
      }
      return plant;
    }));
  }


  function toggleEditPrice(id) {
    const newPrice = prompt("New price?");
    const parsedPrice = parseFloat(newPrice);
  
    if (!isNaN(parsedPrice) && parsedPrice > 0) {
      setPlants((plants) =>
        plants.map((plant) => {
          if (plant.id === id) {

            const updatedPlant = {
              id: id,
              name: plant.name,
              image: plant.image,
              inStock: plant.inStock,
              price: parsedPrice, 
            };
        
            fetch(`http://localhost:6001/plants/${id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedPlant),
            })
              .then(resp => resp.json())
              .then(data => { 
             })

             fetch(`http://localhost:6001/plants`)
            .then(resp => resp.json())
            .then(data => {
              const addSoldStatus = data.map(plant => ({
                ...plant,
                inStock: true,
                edit: false
              }))
              setPlants(addSoldStatus)
            })  
                }
          return plant;
        })
      );
  
      
        
    } else {
      alert("Invalid input. Please enter a positive number.");
    }
  }


  function deletePlant(id) {
  setPlants(plants.filter(plant => plant.id !== id));
  fetch(`http://localhost:6001/plants/${id}`, {
          method: 'DELETE',
      })
      .then(resp => {
          
      })

  }

  
  return (
    <>
    {plants.map((plant) => (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>


      {plant.inStock === true ? (
        <button className="primary" onClick={() => toggleInStock(plant.id)}>In Stock</button>
      ) : (
        <button onClick={() => toggleInStock(plant.id)}>Out of Stock</button>
      )}
      
      <button className="edit" onClick={() => toggleEditPrice(plant.id)}>Edit price</button>
      <button className="delete" onClick={() => deletePlant(plant.id)}>Delete</button>




    </li>
    ))}
    </>
  );
}

export default PlantCard;
