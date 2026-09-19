import { useState } from "react";
import type { CountryType } from "../Type";
import "./Country.css";
export interface CountryProps {
  country: CountryType;
  handleVisitedCountries:(country: CountryType)=> void
}
export default function Country({ country, handleVisitedCountries }: CountryProps) {

 const [visited , setVisited] = useState<boolean>(false)
const handleVisited = () =>{
  // setVisited(true);
  // if(visited){
  //   setVisited(false);
  // }
  // else{
  //   setVisited(true)
  // }
  setVisited(!visited)
  handleVisitedCountries(country)
}
  return (
    <div className={`country ${visited ? 'country-visited' :'mark as visited' }`}>
      <h3>{country.name.common}</h3>
      <img src={country.flags.flags.png} alt={country.name.common} />
      <p> Population: {country.population.population}</p>
      <p>continents: {country.continents.continents}</p>
      <p>capital: {country.capital.capital}</p>
      <button onClick={handleVisited}>
        { visited? 'Visited':'mark as Visited' }
        </button>
    </div>
  );
}
