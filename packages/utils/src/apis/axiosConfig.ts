import axios from 'axios';

interface ResponseBody {
  success: boolean;
  error: {
    status: number;
    message: string;
  }
}

export const BASE_URL = import.meta.env.VITE_SERVER_API;

export const duriInstance = axios.create({
  baseURL: BASE_URL,
});

export const salonInstance = axios.create({
  baseURL: BASE_URL,
});

export const adminInstance = axios.create({
  baseURL: BASE_URL,
});

export const publicInstance = axios.create({
  baseURL: BASE_URL,
});

export type { ResponseBody };