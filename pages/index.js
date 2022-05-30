import Postcard from "../Components/Postcard";
import Header from "../Components/Header";
import styles from "../styles/Home.module.css";
import Footer from "../Components/Footer";
import { createClient } from "contentful";
import Carousel from "../Components/Slider";
import Sidebar from "../Components/Sidebar";
import Title from "../Components/Title";
import { useState } from "react";
import MainPostcard from "../Components/MainPostcard";
import SidebarMain from "../Components/SidebarMain";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Mobile from "../Components/Mobile";
import Context from "../Components/Context";
import HeadSite from "../Components/HeadSite";
import Link from "next/link";

import { gql, GraphQLClient } from "graphql-request";

export const getStaticProps = async () => {
  const url =
    "https://api-eu-central-1.graphcms.com/v2/cl3sptur5aokf01z6hgz30u4h/master";

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTM5MTQ5MDMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsM3NwdHVyNWFva2YwMXo2aGd6MzB1NGgvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNzVkZDBjYzEtMzcxOC00M2UwLWJjNGYtNDk3YzIzYzc3MjgyIiwianRpIjoiY2wzc3E4YjluYW9sZzAxejFnYmZmZXN0dSJ9.2DkdXlZgbGBz1_13cepfEahy-BNG8zfTrgck_A8jxYvDvOQxyOoPhhJzSxzo9rDPi3GKWM-cEmfHUEErN_NcrrcIOqDTmaTRRg9DV474UFOU_jldCStvXE0MZa4LmeZO9TxItEX18rQGy3livJVxs_PEtex67_142RJB5TSz7dxCHHZa-zQRSq40OEpu4dHGnh8-vbeGr749E7q4LMPJN7B8LKWZPAWwud0LdYs0wTrBl4NkYJFIXa-BN7WucVSU4Ol7CUgixSMFGj8YxeDOgHAMf67HHrHDHidMCynng6WQewueKDFGCWPOS2F8ptwNDF4975oyU8w-WScUTL-FWqxMmtsPtQJlyFzO6IVYivSckiMPPOl6L2c1tc8SpTuYodYjzpSerYSxQgwAp19hFgl4opfLL259nADNzGwD2c-ZUbcsFd7SKRcjzBqzHOTu5EPXjTo1HLaZDBuxfyLSVx1w0qXPz5bS2NjAHIyAJwz-3UBPhfwDLXn-DGf1yCuiY24hiRtBAg7xB30hNzhWcqNUMAP8EtapHN2i2Q4RLzJ0AwHjqHW22pM56gHtzCt_hDHjIJL7BX-kN4hp-u4yDj_j0L8XbcqfQ0-jPBKtjNBrf0yKQQvYlfbLelm71gUv_50Nh9a3f8iK2WwMJWFodrp6iwkkA-k4g06esV-2QGk",
    },
  });

  const query = gql`
  query {
    posts {
      title
      slug
      id
      text {
        text
      }
      image {
        id
        url
      }
      date
    }
  }
  `;

  const data = await graphQLClient.request(query);

  const posts = data.posts;

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts, mainposts }) {
  const [state, setState] = useState(true);
  const [arrow, setArrow] = useState(true);
  const [mobile, setMobile] = useState(false);
  const updateData = (value) => {
    setState(value);
  };

  /* const currentMain = mainposts.length - 1; */
 /*  const MainPost = mainposts.slice(0, 1);
  const currentPosts = posts.slice(0, 4); */
  const func = () => {
    if (arrow) {
      return <FaArrowRight />;
    } else {
      return <FaArrowLeft />;
    }
  };

  return (
    <div className={styles.container}>
      <HeadSite />
      <div className={styles.headerframe}>
        <div className={styles.flag}>
          <img src="flag.png" />
        </div>
        <Title className={styles.title} />
        <div className={styles.logo}>
          <img src="logo.svg" />
        </div>
        <div className={styles.carousel}>
          <Carousel />
        </div>
      </div>

      <Header main={true} updateData={updateData} />

      <main className={state ? styles.mainidefault : styles.maini}>
        <SidebarMain state={state} />
        <div>
{/*           {MainPost.map((post) => (
            <MainPostcard
              
              post={post}
              className={styles.mainpost}
            />
          ))} */}
        </div>
        <div className={styles.postWrapper}>
          {posts.map((post) => (
            <Postcard key={post.id} post={post} />
          ))}
        </div>
        <Link href={"/pagesBundle"}>
          <a
            className={styles.news}
            onMouseEnter={() => setArrow(false)}
            onMouseLeave={() => setArrow(true)}
          >
            <div className={styles.news2}>
              <div>Все новости</div>
              <div className={styles.arrow}>{func()}</div>
            </div>
          </a>
        </Link>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}
