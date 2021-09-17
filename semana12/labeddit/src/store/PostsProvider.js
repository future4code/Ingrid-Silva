import { useCallback, useState } from "react";
import { createPost, getPosts } from "../services/posts";
import PostsContext from "./posts-context";

const PostsProvider = (props) => {
  const [filter, setFilter] = useState("");
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    size: 15,
    hasMore: true,
  });

  const containsString = (string) => {
    return string.toLowerCase().includes(filter.toLowerCase());
  };

  const filteredPosts =
    filter.length === 0
      ? posts
      : posts.filter((post) => {
          if (containsString(post.title) || containsString(post.body)) {
            return true;
          }

          return false;
        });

  const fetchPosts = useCallback(async (page = 1, size = 15) => {
    try {
      const { data } = await getPosts(page, size);
      setPosts((posts) => (page === 1 ? data : [...posts, ...data]));
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
    filter,
    setFilter,
    filteredPosts,
  };

  return (
    <PostsContext.Provider value={values}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
