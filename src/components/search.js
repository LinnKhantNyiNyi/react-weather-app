import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  let [City, setCity] = useState("");
  let navigate = useNavigate();

  let ClickHandler = () => {
    navigate("?search=" + City);
    window.location.reload();
  };
  return (
    <>
      <div className="bg-transparent p-1">
        <div className="input-group rounded w-25 mx-auto my-3">
          <input
            type="search"
            className="form-control rounded-start"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="btn bg-secondary"
            onClick={ClickHandler}
          >
            <img src="/search.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
