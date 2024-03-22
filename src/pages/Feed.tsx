import { useGetPostsQuery } from "../redux/features/api/baseApi";
import { Post } from "../redux/interfaces/post";

const Feed = () => {
  const { data:posts, isLoading, error, isError  } = useGetPostsQuery();
  
  return (
    <main>
      <h1 className="font-black text-4xl">News Feed</h1>
      {
        posts?.map((post: Post) => (
          <section key={post?.id} className="w-1/2 mx-auto my-5">
            <h2 className="text-xl font-semibold space-y-2">{post?.title}</h2>
            <p>{post?.body}</p>
          </section>
        ))
      }
    </main>
  );
};

export default Feed;
