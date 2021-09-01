import api from "../config/api";

export const getPosts = () => api.get("/posts");
export const getComments = (id) => api.get(`/posts/${id}/comments`);
