import React from "react";

export default function DetailCard({ children }) {
  return (
    <div className="col-6 col-md-4 ">
      <div className="card shadow">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
