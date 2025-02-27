import axios from 'axios';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const { API_URL } = process.env;
export const IS_DEV = process.env.MODE === 'development';

export const $api = axios.create({
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization =
            localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
