import { useRouter } from "next/router";
import { createClient } from "contentful";
import Image from "next/image";
import styles from "../../styles/post.module.css";
import Sidebar from "../../Components/Sidebar";
import { useState } from "react";
import HeadSite from "../../Components/HeadSite";
import Desccard from "../../Components/Desccard";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

/* export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "allowance",
  });

  const paths = res.items.map((item) => {
    return {
      params: { id: item.fields.id },
    };
  });

  return {
    paths,
    fallback: true,
  };
}; */

export const getServerSideProps = async (/* { params } */) => {
  const { items } = await client.getEntries({
    content_type: "allowance",
    /* "fields.id": params.id, */
  });

  return {
    props: { posts: items[0] },
    /*  revalidate: 1, */
  };
};

export default function Allowanceid({ posts }) {
  const [state, setState] = useState(false);

  const updateData = (value) => {
    setState(value);
  };

  return (
    <div>
      <HeadSite />
      <Sidebar tumb={state} updateData={updateData} />
      <div className={state ? styles.wrap : styles.wrap2}>
        <div key={posts.id} className={styles.image}>
          <Image
            src={"https:" + posts.fields.images.fields.file.url}
            width={posts.fields.images.fields.file.details.image.width}
            height={posts.fields.images.fields.file.details.image.height}
          />
        </div>
        <h1 className={styles.title}>{posts.fields.title}</h1>
        <div className={styles.desc}>
        {posts.fields.description.content.map((post) => (
            <Desccard post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
