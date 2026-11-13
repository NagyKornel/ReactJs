import axios from "axios";

export const BACKEND_URL = "http://127.0.0.1:8005/api";

const apiClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: "admin",
    password: "admin",
  },
});

export default apiClient;
