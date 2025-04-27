import React, { useState, useEffect } from 'react';
import Search from './Components/Search';
import Drop from './Components/Drop';
import Card from './Components/Card';
import Footer from './Components/Footer';
import CountriesListShimmer from './Components/CountriesListShimmer';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [Search1, setSearch] = useState('');
  const [regionCheck, setRegion] = useState('');
  const [new1, setNew] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json();
      setCountries(data);
      setLoading(false); 
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredCountries = countries.filter((count) =>
      count.name.common.toLowerCase().includes(Search1.toLowerCase())
    );
    setNew(filteredCountries);
  }, [Search1, countries]);

  const NewCheck = new1.filter((count2) =>
    count2.region.toLowerCase().includes(regionCheck.toLowerCase())
  );

  return (
    <>
      {loading ? ( 
        <CountriesListShimmer />
      ) : (
        <div>
          <div className='rapp'>
            <Search Search={setSearch} />
            <Drop DropChange={setRegion} />
          </div>
          <Card country={NewCheck} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
