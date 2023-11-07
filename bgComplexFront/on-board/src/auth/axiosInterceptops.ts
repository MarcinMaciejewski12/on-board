import axios from "axios";

// Create an axios instance
export const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Get the token from local storage
    const token = localStorage.getItem("token");

    // If the token is present, set it on the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // If there's an error, reject the Promise with the error
    return Promise.reject(error);
  }
);
