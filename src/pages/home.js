import React from "react";
import "../components/background.css";
import TempSection from "../components/TempSection";
import Search from "../components/search";

export default function home() {
  return (
    <>
      <div className="container  p-2 border rounded mt-5 shadow-sm bg-blue">
        <TempSection />
        <Search />
      </div>
    </>
  );
}
