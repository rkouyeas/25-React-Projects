import type { Geocoding, WeatherForecast } from "../types";
import useFetch from "../../../hooks/useFetch";

const useWeather = (query: string) => {
  const geocoding = useFetch<Geocoding>(
    query
      ? `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          query
        )}&count=1`
      : null
  );

  const result = geocoding.data?.results?.[0];

  const hasLocation = !!(
    result &&
    typeof result.latitude === "number" &&
    typeof result.longitude === "number"
  );

  const currentWeather = useFetch<WeatherForecast>(
    hasLocation
      ? `https://api.open-meteo.com/v1/forecast?latitude=${result.latitude}&longitude=${result.longitude}&temperature_unit=fahrenheit&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
      : null
  );

  return { geocoding, currentWeather };
};

export default useWeather;
