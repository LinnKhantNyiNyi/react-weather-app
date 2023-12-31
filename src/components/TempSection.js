import "./background.css";
import useUnit from "../hooks/useUnit";

export default function TempSection({ data, city, search }) {
  let { unit, changeUnit } = useUnit();

  return (
    <>
      <div
        className={`d-flex justify-content-between rounded-top ${
          data[0].WeatherIcon <= 5
            ? "bg-clear"
            : data[0].WeatherIcon === 33 || data[0].WeatherIcon === 34
            ? "bg-star"
            : data[0].WeatherIcon === 43 || data[0].WeatherIcon === 44
            ? "bg-snow"
            : "bg-cloudy"
        }`}
      >
        {/* tempside */}
        <div className="d-flex justify-content-between p-2 bg-transparent m-2 ">
          <div className="d-flex flex-column align-item-center ms-4">
            {unit === "metric" && (
              <p className="mb-3 text-white font" style={{ fontSize: 50 }}>
                {data[0].Temperature.Metric.Value}°
                {data[0].Temperature.Metric.Unit}
              </p>
            )}
            {unit === "imperial" && (
              <p className="mb-3 text-white font" style={{ fontSize: 50 }}>
                {data[0].Temperature.Imperial.Value}°
                {data[0].Temperature.Imperial.Unit}
              </p>
            )}
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
                  onClick={() => changeUnit()}
                ></input>
              </div>
              {/* <button onClick={() => changeUnit()}>click</button> */}

              <div>
                <p className="text-white font">Imperial</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mt-3">
            <ul>
              <li className="text-white font">{search ? search : city}</li>
              <li className="text-white font">{data[0].WeatherText}</li>
              <li className="text-white font">
                {data[0].IsDayTime ? "Day" : "Night"}
              </li>
            </ul>
          </div>
        </div>
        {/* iconside */}
        <div className="bg-transparent">
          <img
            src={`/icons/${data[0].WeatherIcon}.svg`}
            style={{ width: 150, height: 150 }}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
