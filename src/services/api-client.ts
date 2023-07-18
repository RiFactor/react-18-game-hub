import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
  // updating this will require the initialData values in hooks to be updated, so have downloaded the entire data obj in genres and platforms
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // included in query string of each HTTP request:
    // key: import.meta.env.VITE_API_KEY, // https://vitejs.dev/guide/env-and-mode.html
    key: "35ff2db8a79e4a2e856db3b723d0b66b", // https://vitejs.dev/guide/env-and-mode.html
  },
});

// now this is a class, not an obj
class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return (
      axiosInstance
        // Question -- what does FetchResponse of Type (T e.g.Genre) mean
        .get<FetchResponse<T>>(this.endpoint, config)
        .then((res) => res.data)
    );
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
