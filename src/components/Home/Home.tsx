import * as React from 'react';
import { weatherSelector } from '@/features/weather/slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchWeatherByCityName,
  fetchWeatherByGeocode,
} from '@/features/weather/asyncActions';
import { Form } from './Form';

const Home: React.FC = () => {
  const { weather } = useSelector(weatherSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const geocode = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        dispatch(fetchWeatherByGeocode(geocode));
      },
      (error) => {
        console.log(error.message);
        dispatch(fetchWeatherByCityName());
      }
    );
  }, []);
  console.log(weather);
  return (
    <>
      <div />
      <Form />
      <div />
    </>
  );
};

export default Home;
