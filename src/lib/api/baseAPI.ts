import axios, { AxiosInstance } from 'axios'

const BASE_URI = process.env.REACT_APP_API_BASE_URL;
const TIMEOUT = process.env.REACT_APP_API_TIMEOUT as unknown as number;

const api: AxiosInstance = axios.create({
  baseURL: BASE_URI,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    "Authrization": "Bearer token",
  },
  responseType: "json",
});

export default api;
