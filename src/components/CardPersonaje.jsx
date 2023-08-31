import React from 'react';

const CardPersonaje = ({ item }) => {
  const { location, name, species, image } = item;

  const widthCard = {
    width: '300px',
  };

  return (
      <div className="mb-4 mt-3" style={widthCard}>
         <div className="card">
             <img src={image} alt={image} className="card-img" />
             <div className="card-body">
                <h5 className="card-title text-primary">{name}</h5>
                <hr />
                <p>
                    <span className="fw-bold">Especies: </span> {species}
                </p>
                <p>
                    <span className="fw-bold">ocalización:</span> {location.name}
                </p>
             </div>
         </div>
      </div>
    );
};

export default CardPersonaje;