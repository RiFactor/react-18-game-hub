import axios from "axios";

// const API_KEY = process.env.REACT_APP_API_KEY // Online -- how do I store an environment variable: https://vitejs.dev/guide/env-and-mode.html

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY, // included in query string of each HTTP request
  },
});
