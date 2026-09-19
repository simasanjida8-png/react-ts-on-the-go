import { Suspense } from "react";
import "./App.css";
import type { CountryType } from "./componenet/Type";
import Countries from "./componenet/countries/Countries";

// step-1 create a promise to load data
const countriesPromise = async (): Promise<CountryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
};

const App = () => {
  return (
    <div>
      <h1>nadir on the go</h1>
      <Suspense fallback={<p>Loading.....</p>}>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </div>
  );
};

export default App;
