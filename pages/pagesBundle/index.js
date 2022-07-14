import PostBundle from "../../Components/PostBundle";
import styles from "../../styles/pagesBundle.module.css";
import { useState } from "react";
import Header from "../../Components/Header";
import Pagination from "../../Components/Pagination";
import HeadSite from "../../Components/HeadSite";
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
          <PostBundle key={post.id} post={post} />
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
