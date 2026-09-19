import { use, useState } from "react";
import type { CountryType } from "../Type";
import Country from "../country/Country";
import "./Countries.css";
export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {

const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);

  const countries = use(countriesPromise);
  const handleVisitedCountries = (Country: CountryType): void =>{
    const newVisitedCountries = [...visitedCountries, Country];
    setVisitedCountries(newVisitedCountries)
  }
  return (
    <div>
          <h1>countries : {countries.length}</h1>
          <h3>Visited Countries: {visitedCountries.length}</h3>
      <div className="countries">
      
        
        {countries.map(country => 
          <Country key={country.ccn3.ccn3} country={country}
          handleVisitedCountries = {handleVisitedCountries}
          ></Country>
        )
        }
        
      </div>
    </div>
    )
}
