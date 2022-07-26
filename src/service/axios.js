import axios from "axios";

const api = axios.create({
    baseURL: 'https://fast-hollows-85810.herokuapp.com/',
    headers: {
        "Content-Type": 'application/json',
    },
})

api.interceptors.response.use((config) => { return config }, (error) => {
    console.log('from interceptor: ', error);
    return Promise.reject(error)
})

export default api