import React, { useState } from 'react';
import { AboutNav, BreedNav } from './Navigation';
import PetList from './PetList';

function App({ pets }) {
  // Define state variable to store pet data
  const [petData, setPetData] = useState(pets);

  // Callback function to mark a pet as adopted
  const adoptPet = (petName) => {
    // Create a new array with updated adopted status
    const updatedPetData = petData.map(pet => {
      if (pet.name === petName) {
        return { ...pet, adopted: true }; // Mark the pet as adopted
      }
      return pet;
    });
    // Update state with the new array
    setPetData(updatedPetData);
  };

  // Extracting unique breed names from the pets array
  const breeds = [...new Set(pets.map(pet => pet.breed))];

  return (
    <div>
      <header className="jumbotron jumbotron-fluid py-4">
        <div className="container">
          <h1>Adopt a Pet</h1>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
            <BreedNav breeds={breeds} />
            <AboutNav />
          </div>
          <div id="petList" className="col-9">
            <div className="card-deck">
              <PetList pets={petData} adoptCallback={adoptPet} />
            </div>
          </div>
        </div>
      </main>
      <footer className="container">
        <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
      </footer>
    </div>
  );
}

export default App;