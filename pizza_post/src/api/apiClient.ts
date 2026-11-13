import axios from "axios";

export const BACKEND_URL = "http://127.0.0.1:8001/api";

const apiClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-type": "application/json",
  },
  auth: {
    username: "admin",
    password: "admin",
  },
});

export default apiClient;
