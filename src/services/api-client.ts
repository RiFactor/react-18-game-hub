import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // included in query string of each HTTP request:
    key: import.meta.env.VITE_API_KEY, // https://vitejs.dev/guide/env-and-mode.html
  },
});
