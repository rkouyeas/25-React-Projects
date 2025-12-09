import { useState } from "react";
import useWeather from "./hooks/useWeather";
import Spinner from "../Spinner";
import styles from "./styles.module.css";

const WeatherApp = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [query, setQuery] = useState<string>("Tampa");
  const { geocoding, currentWeather } = useWeather(query);

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const isLoading = geocoding.loading || currentWeather.loading;
  const isError = geocoding.error || currentWeather.error;

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    setQuery(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles["weather-container"]}>
      <form className={styles["weather-form"]} onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Enter City Name"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          aria-label="Enter City Name or Zip Code"
        />
        <button>Search</button>
      </form>
      <div className={styles["weather-data-container"]}>
        {isLoading ? (
          <div className={styles["status-container"]}>
            <Spinner size={50} />
          </div>
        ) : isError ? (
          <div className={styles["status-container"]}>
            <p>{isError.message}</p>
          </div>
        ) : geocoding.data &&
          geocoding.data?.results?.length > 0 &&
          currentWeather.data?.current ? (
          <>
            <h1 className={styles.location}>
              {geocoding.data.results[0].name},{" "}
              {geocoding.data.results[0].country}
            </h1>
            <p className={styles.date}>{formattedDate}</p>
            <p className={styles.temperature}>
              {currentWeather.data.current.temperature_2m}&deg;F
            </p>
            <div className={styles["weather-data-details"]}>
              <p>
                {currentWeather.data.current.wind_speed_10m}
                <br></br>Wind Speed
              </p>
              <p>
                {currentWeather.data.current.relative_humidity_2m}%<br></br>
                Humidity
              </p>
            </div>
          </>
        ) : (
          <div className={styles["status-container"]}>
            <p>Location Not Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
