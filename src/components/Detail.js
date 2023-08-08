import React from "react";
import DetailCard from "./DetailCard";

export default function Detail() {
  return (
    <>
      <div className="w-75 d-flex justify-content-center mx-auto mb-3">
        <div className="row gy-3">
          <DetailCard>
            <img src="/imgs/thermometer.svg" height={40} width={40} alt="" />
            <br />
            <p className="font">Feels like</p>

            <div>
              <h4 className="d-inline">27</h4>
              <h6 className="d-inline ms-1">° C</h6>
            </div>
          </DetailCard>
          <DetailCard>
            <img src="/imgs/water.svg" height={40} width={40} alt="" />
            <br />
            <p className="font">Humidity</p>
            <h4>90%</h4>
          </DetailCard>
          <DetailCard>
            <img src="/imgs/air.svg" height={40} width={40} alt="" />
            <br />
            <p className="font">Wind(ESE)</p>

            <div>
              <h4 className="d-inline">27</h4>
              <h6 className="d-inline ms-1">km/h</h6>
            </div>
          </DetailCard>
          <DetailCard>
            <img src="/imgs/sun.svg" height={40} width={40} alt="" />
            <br />
            <p className="font">UV</p>
            <div>
              <h4 className="d-inline">0</h4>
              <h6 className="d-inline ms-1">Very weak</h6>
            </div>
          </DetailCard>
          <DetailCard>
            <img src="/imgs/eye.svg" height={40} width={40} alt="" />
            <br />
            <p className="font">Visibility</p>

            <div>
              <h4 className="d-inline">27</h4>
              <h6 className="d-inline ms-1">mi</h6>
            </div>
          </DetailCard>
          <DetailCard>
            <img src="/imgs/pressure.png" height={40} width={40} alt="" />
            <br />
            <p className="font">Air Pressure</p>

            <div>
              <h4 className="d-inline">76</h4>
              <h6 className="d-inline ms-1">mb</h6>
            </div>
          </DetailCard>
        </div>
      </div>
    </>
  );
}
