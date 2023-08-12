import React, { useContext } from "react";
import DetailCard from "./DetailCard";

import { UnitContext } from "../context/UnitContext";

export default function Detail({ data }) {
  let { unit } = useContext(UnitContext);

  return (
    <>
      <div className="w-75 d-flex justify-content-center mx-auto mb-3">
        <div className="row gy-3">
          <DetailCard>
            <img src="/imgs/thermometer.svg" height={40} width={40} alt="" />
            <br />
            <p className="font">Feels like</p>
            {unit === "metric" && (
              <div>
                <h4 className="d-inline">
                  {data[0].RealFeelTemperature.Metric.Value}
                </h4>
                <h6 className="d-inline ms-1">
                  ° {data[0].RealFeelTemperature.Metric.Unit}
                </h6>
              </div>
            )}
            {unit === "imperial" && (
              <div>
                <h4 className="d-inline">
                  {data[0].RealFeelTemperature.Imperial.Value}
                </h4>
                <h6 className="d-inline ms-1">
                  ° {data[0].RealFeelTemperature.Imperial.Unit}
                </h6>
              </div>
            )}
          </DetailCard>
          <DetailCard>
            <img src="/imgs/water.svg" height={40} width={40} alt="" />
            <br />
            <p className="font">Humidity</p>
            <h4>{data[0].RelativeHumidity}%</h4>
          </DetailCard>
          <DetailCard>
            <img src="/imgs/air.svg" height={40} width={40} alt="" />
            <br />
            <p className="font">Wind({data[0].Wind.Direction.English})</p>
            {unit === "metric" && (
              <div>
                <h4 className="d-inline">{data[0].Wind.Speed.Metric.Value}</h4>
                <h6 className="d-inline ms-1">
                  {data[0].Wind.Speed.Metric.Unit}
                </h6>
              </div>
            )}
            {unit === "imperial" && (
              <div>
                <h4 className="d-inline">
                  {data[0].Wind.Speed.Imperial.Value}
                </h4>
                <h6 className="d-inline ms-1">
                  {data[0].Wind.Speed.Imperial.Unit}
                </h6>
              </div>
            )}
          </DetailCard>
          <DetailCard>
            <img src="/imgs/sun.svg" height={40} width={40} alt="" />
            <br />
            <p className="font">UV</p>
            <div>
              <h4 className="d-inline">{data[0].UVIndex}</h4>
              <h6 className="d-inline ms-1">{data[0].UVIndexText}</h6>
            </div>
          </DetailCard>
          <DetailCard>
            <img src="/imgs/eye.svg" height={40} width={40} alt="" />
            <br />
            <p className="font">Visibility</p>
            {unit === "metric" && (
              <div>
                <h4 className="d-inline">{data[0].Visibility.Metric.Value}</h4>
                <h6 className="d-inline ms-1">
                  {data[0].Visibility.Metric.Unit}
                </h6>
              </div>
            )}
            {unit === "imperial" && (
              <div>
                <h4 className="d-inline">
                  {data[0].Visibility.Imperial.Value}
                </h4>
                <h6 className="d-inline ms-1">
                  {data[0].Visibility.Imperial.Unit}
                </h6>
              </div>
            )}
          </DetailCard>
          <DetailCard>
            <img src="/imgs/pressure.png" height={40} width={40} alt="" />
            <br />
            <p className="font">Air Pressure</p>
            {unit === "metric" && (
              <div>
                <h4 className="d-inline">{data[0].Pressure.Metric.Value}</h4>
                <h6 className="d-inline ms-1">
                  {data[0].Pressure.Metric.Unit}
                </h6>
              </div>
            )}
            {unit === "imperial" && (
              <div>
                <h4 className="d-inline">{data[0].Pressure.Imperial.Value}</h4>
                <h6 className="d-inline ms-1">
                  {data[0].Pressure.Imperial.Unit}
                </h6>
              </div>
            )}
          </DetailCard>
        </div>
      </div>
    </>
  );
}
