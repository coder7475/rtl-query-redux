import { useGetPostsQuery, useSetPostMutation } from "../redux/features/api/baseApi";
import { Post } from "../redux/interfaces/post";

const Feed = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery("");
  const [setPost, { data:postData}] = useSetPostMutation();

  if (isLoading) {
    return <p className="text-5xl text-zinc-300">Loading...</p>
  }

  if (!isLoading && isError) {
    return <p className="text-5xl text-zinc-300">SomeThing Went wrong</p>
  }

  return (
    <main>
      <h1 className="font-black text-4xl">News Feed</h1>
      {posts?.map((post: Post) => (
        <section key={post?.id} className="w-1/2 mx-auto my-5">
          <h2 className="text-xl font-semibold space-y-2">
            {post?.id} {post?.title}
          </h2>
          <p>By {post?.userId}</p>
          <p>{post?.body}</p>
        </section>
      ))}
    </main>
  );
};

export default Feed;
