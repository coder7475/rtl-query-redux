import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Feed = () => {
  const { data:posts, isLoading,   } = useGetPostsQuery("");
  
  return (
    <main>
      {
        posts?.map((post) => (
          <section key={post?.id}>

          </section>
        ))
      }
    </main>
  );
};

export default Feed;
