import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {
  return (
    <ul className="cards">
    
    <PlantCard
    plants={plants}
    setPlants ={setPlants}
    />
      
    </ul>
  );
}

export default PlantList;
