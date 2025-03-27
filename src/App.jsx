import { Suspense } from "react";
import Countries from "./countries/Countries";

const countries = fetch("https://restcountries.com/v3.1/all").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <Suspense fallback={<p>Country data loading....</p>}>
        <Countries countries={countries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
