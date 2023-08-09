import React, { useState } from "react";
import "../components/background.css";
import TempSection from "../components/TempSection";
import Search from "../components/Search";
import Detail from "../components/Detail";
import useFetchKey from "../hooks/useFetchKey";

export default function Home() {
  let [City] = useState("Yangon");
  let [url] = useState(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=PEoeBDC95vt8YAYz5CZ0G7J7VkhUPDCz&q=${City}`
  );

  let { Key, error: KeyError } = useFetchKey(url);

  console.log(Key);
  return (
    <>
      <div className="container  p-2 border rounded mt-5 shadow-sm bg-blue">
        <TempSection />
        <Search />
        <Detail />
      </div>
    </>
  );
}
