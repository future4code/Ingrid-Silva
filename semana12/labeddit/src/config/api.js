import axios from "axios";
import { BASE_URL } from "./constants";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((res) => {
  const token = localStorage.getItem("token");

  if (token) {
    res.headers["Authorization"] = token;
  }

  return res;
});

export default instance;
