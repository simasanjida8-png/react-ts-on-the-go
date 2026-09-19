import type { CountryType } from "../Type";
import "./Country.css";
export interface CountryProps {
  country: CountryType;
}

export default function Country({ country }: CountryProps) {
  return (
    <div className="country">
      <h3>{country.name.common}</h3>
      <img src={country.flags.flags.png} alt={country.name.common} />
      <p> Population: {country.population.population}</p>
      <p>continents: {country.continents.continents}</p>
      <p>capital: {country.capital.capital}</p>

    </div>
  );
}
