import axios from "axios";

const api = axios.create({
    baseURL: 'https://insta-clone.deta.dev/',
    headers: {
        "Content-Type": 'application/json',

    },
})

api.interceptors.response.use((config)=>{return config},(error)=>{
    console.log('from interceptor: ' , error);
    return Promise.reject(error)
})

export default api