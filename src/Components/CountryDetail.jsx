import React, { useEffect, useState } from 'react';

const CountryDetail = () => {
  let CountryName = new URLSearchParams(location.search).get("name");
  const [CountryFullDetails, setCountryFullDetails] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${CountryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) =>
        setCountryFullDetails({
          name: data.name.common,
          Flag: data.flags.svg,
          Population: data.population,
          Capital: data.capital ? data.capital[0] : "No Capital",
          Region: data.region,
          Subregion: data.subregion,
          Area: data.area,
          Currencies: data.currencies ? Object.values(data.currencies).map(c => c.name).join(", ") : "No Currencies",
          Languages: data.languages ? Object.values(data.languages).join(", ") : "No Languages",
          Timezones: data.timezones ? data.timezones.join(", ") : "No Timezones",
          Continents: data.continents ? data.continents.join(", ") : "No Continents",
          Maps: data.maps ? data.maps.googleMaps : "#",
          StartOfWeek: data.startOfWeek ? data.startOfWeek : "No Info",
          Borders: data.borders ? data.borders.join(", ") : "No Bordering Countries",
          Status: data.status,
          Independent: data.independent ? "Yes" : "No",
          UNMember: data.unMember ? "Yes" : "No",
          CarSide: data.car ? data.car.side : "No Info"
        })
      );
  }, []);

  const Back = () => {
    history.back();
  };

  return (
    <>
      <div className='Back'>
        <button className='Back-Button' onClick={Back}>
          Back <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>

      <div className="container5">
        <div className="flag-section">
          <h1 className='Flag-h'>{CountryFullDetails.name} Flag </h1>
          <img src={CountryFullDetails.Flag} alt={CountryFullDetails.name} />
        </div>

        <div className="content">
          <h2>Quick Facts About {CountryFullDetails.name}</h2>
          <h4><strong>Total Population:</strong> The country has around {CountryFullDetails.Population} people living.</h4>
          <h4><strong>Capital City:</strong> The main capital city is {CountryFullDetails.Capital}.</h4>
          <h4><strong>Region:</strong> It belongs to the {CountryFullDetails.Region} region of the world.</h4>
          <h4><strong>Subregion:</strong> More specifically, it falls under {CountryFullDetails.Subregion} subregion.</h4>
          <h4><strong>Total Area:</strong> It covers an area of {CountryFullDetails.Area} square kilometers.</h4>
          <h4><strong>Currency Used:</strong> People here use {CountryFullDetails.Currencies} for buying and selling things.</h4>
          </div>
          <div className='content-data'>
          <h4><strong>Languages Spoken:</strong> Common languages spoken are {CountryFullDetails.Languages}.</h4>
          <h4><strong>Timezones:</strong> This country follows these timezone(s): {CountryFullDetails.Timezones}.</h4>
          <h4><strong>Continent:</strong> It is located on the {CountryFullDetails.Continents} continent.</h4>
          <h4><strong>View on Google Maps:</strong> You can find <a href={CountryFullDetails.Maps} target="_blank" rel="noreferrer">{CountryFullDetails.name}</a> on Google Maps.</h4>
          <h4><strong>Week Starts From:</strong> In this country, the week starts on {CountryFullDetails.StartOfWeek}.</h4>
          <h4><strong>Neighboring Countries:</strong> Countries that share borders are: {CountryFullDetails.Borders}.</h4>
          <h4><strong>Country Status:</strong> The current official status is {CountryFullDetails.Status}.</h4>
          <h4><strong>Is it Independent?</strong> {CountryFullDetails.Independent}.</h4>
          <h4><strong>Member of United Nations:</strong> {CountryFullDetails.UNMember}.</h4>
          <h4><strong>Driving Side </strong> People here drive on the {CountryFullDetails.CarSide} side of the road.</h4>
          </div>
        
      </div>
    </>
  );
};

export default CountryDetail;
