import api from "../config/api";

export const getPosts = () => api.get("/posts");
