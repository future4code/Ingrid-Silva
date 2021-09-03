import axios from "axios";
import { BASE_URL } from "./constants";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers["Authorization"] = token;
  }

  return req;
});

instance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log({ ...error });

    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.replace("/");
    }

    return Promise.reject(error);
  }
);

export default instance;
