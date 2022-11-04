import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { transformCountries } from "./mappers/transformCountries";
import { Color } from "./types/colors";
import { ICountry } from "./types/types";

export const App = () => {
  const transformedCountries: ICountry[] = transformCountries(countries);
  return (
    <div className="container">
      <h1 className={`list__title m-3 text-${Color.Secondary}`}>
        Country List
      </h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};
