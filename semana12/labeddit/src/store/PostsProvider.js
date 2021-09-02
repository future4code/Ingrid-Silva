import { useCallback, useState } from "react";
import { createPost, getPosts } from "../services/posts";
import PostsContext from "./posts-context";

const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    size: 15,
    hasMore: true,
  });

  const fetchPosts = useCallback(async (page = 1, size = 15) => {
    try {
      const { data } = await getPosts(page, size);
      setPosts((posts) => [...posts, ...data]);
      setPagination((pagination) => ({
        ...pagination,
        page: pagination.page + 1,
        hasMore: data.length === pagination.size,
      }));
    } catch (e) {
      console.log({ ...e });
    }
  }, []);

  const addPost = useCallback(
    async (post) => {
      try {
        await createPost(post);
        fetchPosts();
      } catch (e) {
        console.log({ ...e });
      }
    },
    [fetchPosts]
  );

  const changePostVote = useCallback(
    (id, userVote) => {
      const updatedPosts = posts.map((post) =>
        post.id === id
          ? {
              ...post,
              userVote,
            }
          : post
      );

      setPosts(updatedPosts);
    },
    [posts]
  );

  const values = {
    posts,
    addPost,
    changePostVote,
    fetchPosts,
    pagination,
  };

  return (
    <PostsContext.Provider value={values}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
