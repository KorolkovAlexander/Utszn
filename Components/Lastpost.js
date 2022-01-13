import Postcard from "./Postcard";
import { createClient } from "contentful";
export const getStaticProps = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    space: process.env.CONTENTFUL_SPACE_ID,
  });

  const res = await client.getEntries({ content_type: "posts" });

  return {
    props: { posts: res.items },
  };
};

export default function Lastpost({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Postcard key={post.sys.id} post={post} />
      ))}
    </div>
  );
}
