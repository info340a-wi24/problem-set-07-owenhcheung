import React from 'react';
import PetCard from './PetCard';

function PetList({ pets, adoptCallback }) {
  return (
    <div className="row">
      <h2>Dogs for Adoption</h2>
      {pets.map((pet, index) => (
        <div key={index} className="col-md-4 mb-3">
          <PetCard petData={pet} adoptCallback={adoptCallback} />
        </div>
      ))}
    </div>
  );
}

export default PetList;