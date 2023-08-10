import React, { useState } from "react";
import "../components/background.css";
import TempSection from "../components/TempSection";
import Search from "../components/Search";
import Detail from "../components/Detail";
import useFetchKey from "../hooks/useFetchKey";
import useFetch from "../hooks/useFetch";
import Error from "../components/Error";
import { useLocation } from "react-router-dom";

export default function Home() {
  let [City] = useState("Tokyo");
  let [apikey] = useState("PEoeBDC95vt8YAYz5CZ0G7J7VkhUPDCz");
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let search = params.get("search");
  let [CityUrl] = useState(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${
      search ? search : City
    }`
  );

  let { Key, error: KeyError } = useFetchKey(CityUrl);

  let { data, error: loading } = useFetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${apikey}&details=true`
  ); //i want to show this error as loading

  return (
    <>
      {!!loading && "loading"}
      {!!KeyError && <Error />}
      {!!data && (
        <div
          className={`container  p-2 border rounded mt-5 shadow-sm ${
            data[0].WeatherIcon <= 5
              ? "bg-blue"
              : data[0].WeatherIcon === 33 || data[0].WeatherIcon === 34
              ? "bg-black"
              : data[0].WeatherIcon === 43 || data[0].WeatherIcon === 44
              ? "bg-light"
              : "bg-grey"
          }`}
        >
          <TempSection data={data} city={City} search={search} />
          <Search />
          <Detail data={data} />
        </div>
      )}
    </>
  );
}
