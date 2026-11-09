import axios from "axios";

export const BACKEND_URL: string = "http://127.0.0.1:8001/api";

const apiClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
