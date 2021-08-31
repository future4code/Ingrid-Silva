import { useCallback, useState } from "react";
import { getPosts } from "../services/posts";
import PostsContext from "./posts-context";

const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    try {
      const { data } = await getPosts();
      setPosts(data);
    } catch (e) {
      console.log({ ...e });
    }
  }, []);

  console.log({ posts });

  const values = {
    posts,
    fetchPosts,
  };

  return (
    <PostsContext.Provider value={values}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
