import { getCookie } from "./cookies";
import axios, { AxiosRequestConfig } from "axios";

const http = axios.create({
  baseURL: "https://aotapi.sentenance.com:8090/",
});

http.interceptors.request.use<AxiosRequestConfig>(
  function (config) {
    // Do something before request is sent
    const AUTH_TOKEN = getCookie("accessToken");

    console.log(config);
    
    if (AUTH_TOKEN) {
      config.headers!.Authorization = `Bearer ${AUTH_TOKEN}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default http;
