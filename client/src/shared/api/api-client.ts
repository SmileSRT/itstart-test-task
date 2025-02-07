const baseURL = import.meta.env.VITE_API_HOSTNAME;

type methodType = 'GET' | 'DELETE';

const apiService = async <T>(
  method: methodType,
  endpoint: string,
): Promise<T | null> => {
  try {
    const url = baseURL + endpoint;

    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}`);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);

    return null;
  }
};

const get = async <T>(endpoint: string) => {
  return await apiService<T>('GET', endpoint);
};

const remove = async <T>(endpoint: string) => {
  return await apiService<T>('DELETE', endpoint);
};

export const apiClient = { get, remove };
