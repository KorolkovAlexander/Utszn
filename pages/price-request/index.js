import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { createClient } from "contentful";
import Request from "../../Components/Request";
import styles from "../../styles/request.module.css";
import HeadSite from "../../Components/HeadSite";

export const getStaticProps = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    space: process.env.CONTENTFUL_SPACE_ID,
  });

  const res = await client.getEntries({ content_type: "request" });
  return {
    props: { request: res.items },
  };
};
export default function PriceRequest({ request }) {
  return (
    <div>
      <HeadSite />
      <Header />
      <h1 className={styles.h1}>Запросы ценовых предложений</h1>
      <div className={styles.requestWrapper}>
        {request.map((post) => (
          <Request key={post.sys.id} post={post} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
