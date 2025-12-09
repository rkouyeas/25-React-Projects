export type Geocoding = {
  results: GeoCodingResult[];
};

export type GeoCodingResult = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id: number;
  admin3_id: number;
  admin4_id: number;
  timezone: string;
  population: number;
  postcodes: string[];
  country_id: number;
  country: string;
  admin1: string;
  admin2: string;
  admin3: string;
  admin4: string;
};

export type WeatherForecast = {
  latitude: number;
  longitude: number;
  elevation: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  current: Current;
  current_units: CurrentUnits;
};

export type Current = {
  interval: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  time: string[];
  temperature_2m: number[];
};

export type CurrentUnits = {
  interval: string;
  relative_humidity_2m: string;
  wind_speed_10m: string;
  time: string;
  temperature_2m: string;
};
