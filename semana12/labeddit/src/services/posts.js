import api from "../config/api";

export const getPosts = (page, size) =>
  api.get("/posts", { params: { page, size } });
export const getComments = (id) => api.get(`/posts/${id}/comments`);
export const createPost = (body) => api.post("/posts", body);
export const createComment = (id, body) =>
  api.post(`/posts/${id}/comments`, body);
