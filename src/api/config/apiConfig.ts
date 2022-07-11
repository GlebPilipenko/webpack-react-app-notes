import axios, { AxiosInstance } from 'axios';

export const API_CONFIG: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
