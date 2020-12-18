import * as React from 'react';
import { useForm } from '@/hooks/useForm';
import validateCity from '@/util/validateField';
import { useDispatch, useSelector } from 'react-redux';
import fetchWeather from '@/features/weather/asyncActions';
import { API_KEY, BASE_URL } from '@/constants/index';
import createRequestUrl from '@/util/createRequestUrl';
import { uiSelector } from '@/features/ui/slice';

export const Form: React.FC = () => {
  const { ui } = useSelector(uiSelector);
  const dispatch = useDispatch();
  const [value, onChange] = useForm('');
  const [error, setError] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateCity(value, (isValid, message) => {
      if (!isValid) {
        setError(message);
      } else {
        setError('');
        const params = {
          units: ui.units,
          q: value,
          appid: API_KEY as string,
        };
        const url = createRequestUrl(BASE_URL, params);
        dispatch(fetchWeather(url));
      }
    });
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">
            <input type="city" id="city" value={value} onChange={onChange} />
          </label>
          <p>{error}</p>
        </div>
      </form> */}
      <form className="relative text-secondaryText" onSubmit={handleSubmit}>
        <input
          type="city"
          name="city"
          value={value}
          placeholder="Search"
          onChange={onChange}
          className="bg-paper h-8 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <button
          type="button"
          aria-label="Search"
          className="absolute right-0 top-0 mt-3 mr-4"
        />
        <p>{error}</p>
      </form>
    </div>
  );
};

export default Form;
