const Country = ({ country, onVisitedCountries, visitedCountries }) => {
  let isCountryVisited = visitedCountries.some(
    (sCountry) => sCountry.name.common === country.name.common
  );

  function handleVisit() {
    onVisitedCountries(country);
  }

  if (country.name.common !== "Israel") {
    return (
      <div
        className={`border rounded-md p-3 h-fit ${
          isCountryVisited ? "bg-gray-200" : ""
        }`}
      >
        <div className="w-full h-36">
          <img className="w-full h-full" src={country.flags.png} alt="" />
        </div>
        <h1 className="font-medium mt-2">
          Country Name: {country.name.common}
        </h1>
        <h1 className="font-medium">
          Independent: {country.independent ? "Free" : "Not Free"}
        </h1>
        <h1 className="font-medium">Population: {country.population}</h1>
        <button
          onClick={handleVisit}
          className="border mt-3 border-slate-400 py-2 px-4 rounded-md cursor-pointer"
        >
          {isCountryVisited ? "Visited" : "Not Visited"}
        </button>
      </div>
    );
  }
};

export default Country;
