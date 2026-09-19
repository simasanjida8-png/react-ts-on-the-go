import { use } from "react";
import type { CountryType } from "../Type";
import Country from "../country/Country";
import "./Countries.css";
export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const countries = use(countriesPromise);

  return (
    <div>
          <h1>countries : {countries.length}</h1>
      <div className="countries">
      
        
        {countries.map(country => 
          <Country key={country.ccn3.ccn3} country={country}></Country>
        )
        }
        
      </div>
    </div>
    )
}
