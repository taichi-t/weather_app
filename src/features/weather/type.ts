export type WeatherState = {
  weather: {
    condition: string | undefined;
    temperature: number | undefined;
    loading: boolean;
    error: string | undefined;
  };
};
