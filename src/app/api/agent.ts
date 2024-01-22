import axios, { AxiosError, AxiosResponse } from "axios";
import { ThreadHelpers } from "../utils/threadHelpers";

axios.defaults.baseURL = 'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;


axios.interceptors.response.use(async response => {
    await ThreadHelpers.sleep(2000);
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

