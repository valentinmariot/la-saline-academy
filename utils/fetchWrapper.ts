export const fetchWrapper = async <T>(
  resource: RequestInfo | URL,
  config: RequestInit | undefined | any
): Promise<T> => {
  const requestOptions = {
    // headers: myHeaders,
    ...(config && { headers: config.headers }),
    ...(config && { method: config.method }),
    ...(config && { body: config.body }),
  };

  const response = await fetch(resource, requestOptions);

  // If token expired, refresh the token and retry the request
  // if (response.status === 401) {
  //   signOut()
  // }

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return (await response.json()) as T;
};
