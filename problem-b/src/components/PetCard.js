import React from 'react';

function PetCard({ petData, adoptCallback }) {

  console.log(petData)
  const handleAdoptClick = () => {
    adoptCallback(petData.name);
  };

  return (
    <div className="card" onClick={handleAdoptClick}>
      <img className="card-img-top" src={ petData.img} alt={petData.name} />
      <div className="card-body">
        <h3 className="card-title">{petData.name}{petData.adopted ? " (Adopted)" : ""}</h3>
        <p className="card-text">{petData.sex} {petData.breed}</p>
        {!petData.adopted && <button onClick={handleAdoptClick}>Adopt</button>}
      </div>
    </div>
  );
}

export default PetCard;