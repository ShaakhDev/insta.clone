import axios from "axios";

const api = axios.create({
    baseURL: 'https://insta-clone.deta.dev',
    headers: {
        "Content-Type": 'application/json',
        "Access-Control-Allow-Origin": "*",
    },
})

export default api