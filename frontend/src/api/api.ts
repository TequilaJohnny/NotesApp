import axios, { AxiosInstance } from "axios"

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;