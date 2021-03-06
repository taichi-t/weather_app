import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchWeather from '@/features/weather/asyncActions';
import { DEFAULT_CITY, API_KEY, BASE_URL } from '@/constants/index';
import createRequestUrl from '@/util/createRequestUrl';
import { uiSelector } from '@/features/ui/slice';
import Main from '@/components/Home/Main';
import Description from '@/components/Home/Description';

const Home: React.FC = () => {
  const { ui } = useSelector(uiSelector);
  const dispatch = useDispatch();

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
    <main>
      <Main />
      <Description />
    </main>
  );
};

export default Home;
