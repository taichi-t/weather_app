import Axios, { AxiosInstance } from 'axios';

export type WeatherResponse = {
  coord: { lon: number; lat: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number; gust: number };
  rain: { '1h': number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

type GetRequet<T> = (param: T) => Promise<WeatherResponse>;

class WeatherAPI {
  axios: AxiosInstance;

  constructor() {
    this.axios = Axios.create({
      timeout: 10000, // 10 seconds
    });
  }

  fetchWeather: GetRequet<string> = async (url) => {
    try {
      const res = await this.axios.get<WeatherResponse>(url);
      return res.data;
    } catch (err) {
      return Promise.reject(
        new Error(err.response.data.message || err.message)
      );
    }
  };
}

export const weatherApi = new WeatherAPI();
