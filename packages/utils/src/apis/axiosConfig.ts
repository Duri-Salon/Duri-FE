import axios from 'axios';

// export const BASE_URL = import.meta.env.VITE_SERVER_API;
// export const BASE_URL = 'http://localhost:3000';
export const BASE_URL = 'https://api.example.com/api/';

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
