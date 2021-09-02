import api from "../config/api";

export const createPostVote = (id, body) =>
  api.post(`/posts/${id}/votes`, body);

export const updatePostVote = (id, body) => api.put(`/posts/${id}/votes`, body);
export const deletePostVote = (id) => api.delete(`/posts/${id}/votes`);

export const createCommentVote = (id, body) =>
  api.post(`/comments/${id}/votes`, body);
export const updateCommentVote = (id, body) =>
  api.put(`/comments/${id}/votes`, body);
export const deleteCommentVote = (id) => api.delete(`/comments/${id}/votes`);
