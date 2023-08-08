import React from "react";
import "./background.css";

export default function TempSection() {
  return (
    <>
      <div className="d-flex justify-content-between rounded-top bg-clear">
        {/* tempside */}
        <div className="d-flex justify-content-between p-2 bg-transparent m-2 ">
          <div className="d-flex flex-column align-item-center ms-4">
            <p className="mb-3 text-white font" style={{ fontSize: 50 }}>
              27°
            </p>

            <div className="d-flex justify-content-between">
              <div>
                <p className="text-white font ">Metric</p>
              </div>
              <div className="form-check form-switch mx-2">
                <input
                  className="form-check-input p-2  "
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  style={{ width: 50 }}
                ></input>
              </div>

              <div>
                <p className="text-white font">Imperial</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mt-3">
            <ul>
              <li className="text-white font">Yangon</li>
              <li className="text-white font">Cloudy</li>
              <li className="text-white font">Night</li>
            </ul>
          </div>
        </div>
        {/* iconside */}
        <div className="bg-transparent">
          <img
            src={`/icons/1.svg`}
            style={{ width: 150, height: 150 }}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
