import axios from 'axios';
import { useSessionStore } from '@/entities/session';

export const $api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: true,
});

$api.interceptors.request.use((config) => {
    const token = useSessionStore.getState().token;

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

$api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
        }
        return Promise.reject(error);
    }
);