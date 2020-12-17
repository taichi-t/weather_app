import * as React from 'react';
import { weatherSelector } from '@/features/weather/slice';
import { useDispatch, useSelector } from 'react-redux';
import fetchWeather from '@/features/weather/asyncActions';
import { API_KEY, BASE_URL, DEFAULT_CITY_ID } from '@/constants/index';
import createRequestUrl from '@/util/createRequestUrl';

const Header: React.FC = () => {
  const { weather } = useSelector(weatherSelector);
  const [metric, setMetric] = React.useState(true);
  const dispatch = useDispatch();
  const handleClick = () => {
    const params = {
      units: metric ? 'metric' : 'standard',
      id: String(weather.data?.id) || DEFAULT_CITY_ID,
      appid: API_KEY as string,
    };
    const url = createRequestUrl(BASE_URL, params);
    dispatch(fetchWeather(url));
    setMetric(!metric);
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        convert F to C or C to F
      </button>
    </div>
  );
};

export default Header;
