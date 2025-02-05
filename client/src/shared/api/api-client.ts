const baseURL = import.meta.env.VITE_API_HOSTNAME;

const get = async <T>(endpoint: string): Promise<T | null> => {
  try {
    const url = baseURL + endpoint;

    const response = await fetch(url, {
      method: 'GET',
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

export const apiClient = { get };
