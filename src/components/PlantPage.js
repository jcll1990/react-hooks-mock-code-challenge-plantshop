import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

import { useState, useEffect } from "react";


function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
   
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
    }, []);




  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(
      search.toLowerCase()
    )
    })

  return (
    <main>
      <NewPlantForm 
      setPlants = {setPlants}
      />

      <Search 
      setSearch = {setSearch}
      />

      <PlantList
      plants={filteredPlants}
      setPlants = {setPlants}
      />
    </main>
  );
}

export default PlantPage;
