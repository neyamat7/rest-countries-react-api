import { use, useState } from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  const countriesData = use(countries);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleVisitedCountries(country) {
    if (!visitedCountries.includes(country)) {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    } else if (visitedCountries.includes(country)) {
      const prevCountries = [...visitedCountries];
      const filteredCountries = prevCountries.filter(
        (singleCountry) => singleCountry.name.common !== country.name.common
      );
      setVisitedCountries(filteredCountries);
    }
  }

  const countryData = [];
  countriesData.forEach((singleCountry) => {
    if (
      !singleCountry.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ) {
      return;
    }
    countryData.push(
      <Country
        key={singleCountry.name.common}
        country={singleCountry}
        onVisitedCountries={handleVisitedCountries}
      ></Country>
    );
  });

  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <h1 className="text-red-500 text-4xl font-medium my-6">
        Travelling Countries: {countriesData.length}
      </h1>
      {/* search input */}
      <div>
        <label className="font-medium" htmlFor="search">
          Search Country:
        </label>
        <input
          value={searchTerm}
          onChange={(evt) => setSearchTerm(evt.target.value)}
          className="border border-gray-400 rounded-md ml-2 px-2"
          type="text"
          name=""
          id="search"
        />
      </div>
      <h1 className="text-xl">Traveled so far: {visitedCountries.length}</h1>
      <ol className="my-6 text-slate-700 text-2xl">
        {visitedCountries.map((country) => (
          <li key={country.name.common} className="text-base">
            {country.name.common}
          </li>
        ))}
      </ol>

      {/* pass all countries data as props */}
      <div className="grid grid-cols-3 gap-5">{countryData}</div>
    </div>
  );
};

export default Countries;
