import React from "react";

export default function search() {
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
          />
          <button type="submit" className="btn bg-secondary">
            <img src="/search.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
