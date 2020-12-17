const createRequestUrl = (
  baseUrl: string,
  params: { [key: string]: string }
): string => {
  const url = new URL(baseUrl);
  Object.keys(params).forEach((key) => {
    url.searchParams.set(key, params[key]);
  });
  return url.toString();
};

export default createRequestUrl;
