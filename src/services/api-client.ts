import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // included in query string of each HTTP request:
    // key: import.meta.env.VITE_API_KEY, // https://vitejs.dev/guide/env-and-mode.html
    key: "35ff2db8a79e4a2e856db3b723d0b66b", // https://vitejs.dev/guide/env-and-mode.html
  },
});
