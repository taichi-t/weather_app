import * as React from 'react';
import { useForm } from '@/hooks/useForm';
import validateCity from '@/util/validateField';
import { useDispatch, useSelector } from 'react-redux';
import fetchWeather from '@/features/weather/asyncActions';
import { API_KEY, BASE_URL } from '@/constants/index';
import createRequestUrl from '@/util/createRequestUrl';
import { uiSelector } from '@/features/ui/slice';
import Search from '@/images/search.svg';

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
    <form
      className="relative text-secondaryText"
      onSubmit={handleSubmit}
      data-testid="form"
    >
      <input
        type="city"
        name="city"
        value={value}
        placeholder="Search"
        onChange={onChange}
        className={`${
          error ? 'bg-red-200' : 'bg-paper'
        } h-8 px-5 pr-10 rounded-full text-sm focus:outline-none mobile:px-4`}
        data-testid="input"
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-0 top-0 mt-2 mr-3"
        data-testid="button"
      >
        <Search className="h-5 w-5 fill-current text-secondaryText" />
      </button>
      <p className="absolute" data-testid="error-message">
        {error}
      </p>
    </form>
  );
};

export default Form;
