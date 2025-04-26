import React from 'react';
import {Link} from "react-router-dom"


const Card = ({ country }) => {
  return (
    <div className='card-container'>
      {country.map((count) => (
        <Link to={`/Country?name=${count.name.common}`} className='Main'>
        <div className='card' key={count.cca3}>
          
            <img src={count.flags.svg} alt={`${count.name.common} flag`} />
            <div className='card-info'>
              <h3>{count.name.common}</h3>
              <p><strong>Population:</strong> {count.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {count.region}</p>
              <p><strong>Capital:</strong> {count.capital ? count.capital[0] : 'N/A'}</p>
            </div>
         
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
