import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/';

export const $api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    // withCredentials: true, 
});

$api.interceptors.request.use((config) => {
    console.log(`🚀 [API] ${config.method?.toUpperCase()} -> ${config.url}`);
    return config;
});

$api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.detail || error.message;
        console.error(`❌ [API Error]: ${message}`);
        return Promise.reject(error);
    }
);