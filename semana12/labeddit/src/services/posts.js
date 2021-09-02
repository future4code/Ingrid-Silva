import api from "../config/api";

export const getPosts = () => api.get("/posts");
export const getComments = (id) => api.get(`/posts/${id}/comments`);
export const createPost = (body) => api.post("/posts", body);
export const createComment = (id, body) =>
  api.post(`/posts/${id}/comments`, body);
