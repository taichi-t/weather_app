import * as React from 'react';
import { weatherSelector } from '@/features/weather/slice';
import { useDispatch, useSelector } from 'react-redux';
import fetchWeather from '@/features/weather/asyncActions';
import { DEFAULT_CITY, API_KEY, BASE_URL } from '@/constants/index';
import createRequestUrl from '@/util/createRequestUrl';
import WeatherIcon from 'react-icons-weather';
import { uiSelector } from '@/features/ui/slice';
import { Form } from './Form';

const Home: React.FC = () => {
  const { weather } = useSelector(weatherSelector);
  const { ui } = useSelector(uiSelector);
  const dispatch = useDispatch();

  console.log(weather);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const params = {
          lat: String(position.coords.latitude),
          lon: String(position.coords.longitude),
          units: ui.units,
          appid: API_KEY as string,
        };
        const url = createRequestUrl(BASE_URL, params);
        dispatch(fetchWeather(url));
      },
      (error) => {
        console.log(error.message);
        const params = {
          q: DEFAULT_CITY,
          units: ui.units,
          appid: API_KEY as string,
        };
        const url = createRequestUrl(BASE_URL, params);
        dispatch(fetchWeather(url));
      }
    );
  }, []);

  return (
    <>
      <p>{weather.data?.main.temp}</p>
      <Form />

      <WeatherIcon
        name="owm"
        iconId={weather.data ? String(weather.data.weather[0].id) : '200'}
        flip="horizontal"
        rotate="90"
      />
    </>
  );
};

export default Home;
