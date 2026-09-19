import { use } from "react"
import type { CountryType } from "./Type"
import Country from "./country/Country"

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    
    const countries = use(countriesPromise)

    return (
        <div>
            <h1>countries</h1>
            <ul>
                {
                    countries.map(country => <Country country = {country}></Country>)
                }
            </ul>
        
        </div>
    )
}