import React, { useState } from "react";
import "../components/background.css";
import TempSection from "../components/TempSection";
import Search from "../components/Search";
import Detail from "../components/Detail";
import useFetchKey from "../hooks/useFetchKey";
import useFetch from "../hooks/useFetch";
import Error from "../components/Error";

export default function Home() {
  let [City] = useState("Tokyo");
  let [apikey] = useState("PEoeBDC95vt8YAYz5CZ0G7J7VkhUPDCz");
  let [CityUrl] = useState(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${City}`
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
        <div className="container  p-2 border rounded mt-5 shadow-sm bg-blue">
          <TempSection data={data} city={City} />
          <Search />
          <Detail data={data} />
        </div>
      )}
    </>
  );
}
