import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = 'https://datahub.io/core/world-cities/r/world-cities.json';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(async response => {
    return response;
}, (error: AxiosError) => {
    console.log(error);
    return Promise.reject(error);
})

export const request = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
}