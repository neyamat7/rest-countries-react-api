import { Suspense } from "react";
import Countries from "./countries/Countries";

const countries = fetch("https://restcountries.com/v3.1/all").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <Suspense
        fallback={
          <p className="text-center mt-10 text-xl text-green-600 font-medium">
            Country data loading....
          </p>
        }
      >
        <Countries countries={countries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
