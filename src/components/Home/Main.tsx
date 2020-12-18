import * as React from 'react';
import { weatherSelector } from '@/features/weather/slice';
import { uiSelector } from '@/features/ui/slice';
import { useSelector } from 'react-redux';
import WeatherIcon from 'react-icons-weather';
import returnTempSymbol from '@/util/returnTempSymbol';
import Search from '@/images/search.svg';
import Report from '@/images/report-problem.svg';

const Main: React.FC = () => {
  const { weather } = useSelector(weatherSelector);
  const { ui } = useSelector(uiSelector);

  const renderIcons = () => {
    if (weather.loading) {
      return <Search className="fill-current text-secondaryText w-48 h-48" />;
    }
    if (weather.error) {
      return <Report className="fill-current text-secondaryText w-48 h-48" />;
    }
    return (
      <>
        <WeatherIcon
          name="owm"
          iconId={weather.data ? String(weather.data.weather[0].id) : '200'}
          flip="horizontal"
          rotate="90"
          className="fill-current text-primaryText text-super"
        />
        <span className="text-6xl text-primaryText font-bold self-end">
          {Math.round(weather.data?.main.temp as number)}
          {returnTempSymbol(ui.units)}
        </span>
      </>
    );
  };

  const renderName = () => {
    if (weather.loading) {
      return (
        <h2 className="text-center text-5xl text-secondaryText mt-16 font-bold">
          Seaching......
        </h2>
      );
    }
    if (weather.error) {
      return (
        <h2 className="text-center text-5xl text-secondaryText mt-16 font-bold">
          Not found, please try again.
        </h2>
      );
    }
    return (
      <>
        <h2 className="text-center text-5xl text-secondaryText mt-16 font-bold">
          {weather.data?.name}, {weather.data?.sys.country}
        </h2>
      </>
    );
  };
  return (
    <>
      {renderName()}
      <div className="mt-12 flex justify-center">{renderIcons()}</div>
    </>
  );
};

export default Main;
