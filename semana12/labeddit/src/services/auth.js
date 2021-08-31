import api from "../config/api";

export const login = (body) => api.post("/users/login", body);
export const register = (body) => api.post("/users/signup", body);
