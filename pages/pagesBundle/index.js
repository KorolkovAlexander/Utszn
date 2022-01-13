import PostBundle from "../../Components/PostBundle";
import styles from "../../styles/pagesBundle.module.css";
import { useState } from "react";
import Header from "../../Components/Header";
import { createClient } from "contentful";
import Pagination from "../../Components/Pagination";
import HeadSite from "../../Components/HeadSite";

export const getStaticProps = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    space: process.env.CONTENTFUL_SPACE_ID,
  });

  const res = await client.getEntries({ content_type: "posts" });
  const resmain = await client.getEntries({ content_type: "mainposts" });

  return {
    props: { posts: res.items, mainposts: resmain.items },
  };
};

export default function pagesBundle({ posts, mainposts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <HeadSite />

      <Header />
      <div className={styles.content}>
        {currentPosts.map((post) => (
          <PostBundle key={post.sys.id} post={post} />
        ))}
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
