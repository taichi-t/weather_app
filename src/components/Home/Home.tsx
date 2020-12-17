import * as React from 'react';
import { weatherSelector } from '@/features/weather/slice';
import { useDispatch, useSelector } from 'react-redux';
import fetchWeather from '@/features/weather/asyncActions';
import { DEFAULT_CITY, API_KEY, BASE_URL } from '@/constants/index';
import createRequestUrl from '@/util/createRequestUrl';
import { Form } from './Form';

const Home: React.FC = () => {
  const { weather } = useSelector(weatherSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const params = {
          lat: String(position.coords.latitude),
          lon: String(position.coords.longitude),
          appid: API_KEY as string,
        };
        const url = createRequestUrl(BASE_URL, params);
        dispatch(fetchWeather(url));
      },
      (error) => {
        console.log(error.message);
        const params = {
          q: DEFAULT_CITY,
          appid: API_KEY as string,
        };
        const url = createRequestUrl(BASE_URL, params);
        dispatch(fetchWeather(url));
      }
    );
  }, []);

  console.log(weather.data?.main.temp);
  return (
    <>
      <div />
      {weather.data ? (
        <img
          src={`http://openweathermap.org/img/wn/${weather.data?.weather[0].icon}@2x.png`}
          alt={weather.data?.weather[0].description}
        />
      ) : (
        <p>spinner</p>
      )}
      <p>{weather.data?.main.temp}</p>
      <Form />
      <div />
    </>
  );
};

export default Home;
