import React from 'react';
import CardPersonaje from './CardPersonaje';

const ContenedorPersonajes = ({personajes}) => {
  return (
    <div className='row'>
        {personajes.length === 0 ? (
            <div>cargando...</div>
        ) : (
            personajes.map((item) => <CardPersonaje key={item.id} item={item} />)
          )}
    </div>
  );
};

export default ContenedorPersonajes