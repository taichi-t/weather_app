import * as React from 'react';
import { weatherSelector } from '@/features/weather/slice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '@/features/weather/asyncActions';
import { Form } from './Form';

const Home: React.FC = () => {
  const { weather } = useSelector(weatherSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);
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
