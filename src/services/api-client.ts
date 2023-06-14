import axios from "axios";

// const API_KEY = process.env.REACT_APP_API_KEY // Question -- how do I store an environment variable

export default axios.create({
    baseURL: "https://api.rawg.io/api", // online solution to add '/' at the start OR add 'CORS'
    params: {
        key:"35ff2db8a79e4a2e856db3b723d0b66b" // included in query string of each HTTP request
    }
})