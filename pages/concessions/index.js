import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { createClient } from "contentful";
import Image from "next/image";
import styles from "../../styles/allowance.module.css";
import Link from "next/link";
import HeadSite from "../../Components/HeadSite";

export const getStaticProps = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    space: process.env.CONTENTFUL_SPACE_ID,
  });

  const res = await client.getEntries({ content_type: "concessions" });

  return {
    props: { posts: res.items },
  };
};

export default function Concessions({ posts }) {
  return (
    <div>
      <HeadSite />

      <Header />

      <div className={styles.wrapper}>
        {posts.map((posts) => (
          <Link href={`/concessions/${posts.fields.id}`}>
            <a className={styles.post}>
              <h1>{posts.fields.title}</h1>
              <div /* key={posts.id} className={styles.image} */>
                <Image
                  src={"https:" + posts.fields.images.fields.file.url}
                  width={posts.fields.images.fields.file.details.image.width}
                  height={posts.fields.images.fields.file.details.image.height}
                />
              </div>
            </a>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
