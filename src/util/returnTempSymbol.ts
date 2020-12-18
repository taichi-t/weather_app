const tempSymbol = (units: 'metric' | 'standard'): string =>
  units === 'metric' ? '℃' : '℉';

export default tempSymbol;
