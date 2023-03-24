import { useRouter } from "next/router";
import { createClient } from "contentful";
import Image from "next/image";
import styles from "../../styles/post.module.css";
import Sidebar from "../../Components/Sidebar";
import { useState } from "react";
import HeadSite from "../../Components/HeadSite";
import Desccard from "../../Components/Desccard";
import { gql, GraphQLClient } from "graphql-request";

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.id
  console.log(pageContext)
  
  const url =
    "https://api-eu-central-1.graphcms.com/v2/cl3sptur5aokf01z6hgz30u4h/master";

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTM5MTQ5MDMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsM3NwdHVyNWFva2YwMXo2aGd6MzB1NGgvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNzVkZDBjYzEtMzcxOC00M2UwLWJjNGYtNDk3YzIzYzc3MjgyIiwianRpIjoiY2wzc3E4YjluYW9sZzAxejFnYmZmZXN0dSJ9.2DkdXlZgbGBz1_13cepfEahy-BNG8zfTrgck_A8jxYvDvOQxyOoPhhJzSxzo9rDPi3GKWM-cEmfHUEErN_NcrrcIOqDTmaTRRg9DV474UFOU_jldCStvXE0MZa4LmeZO9TxItEX18rQGy3livJVxs_PEtex67_142RJB5TSz7dxCHHZa-zQRSq40OEpu4dHGnh8-vbeGr749E7q4LMPJN7B8LKWZPAWwud0LdYs0wTrBl4NkYJFIXa-BN7WucVSU4Ol7CUgixSMFGj8YxeDOgHAMf67HHrHDHidMCynng6WQewueKDFGCWPOS2F8ptwNDF4975oyU8w-WScUTL-FWqxMmtsPtQJlyFzO6IVYivSckiMPPOl6L2c1tc8SpTuYodYjzpSerYSxQgwAp19hFgl4opfLL259nADNzGwD2c-ZUbcsFd7SKRcjzBqzHOTu5EPXjTo1HLaZDBuxfyLSVx1w0qXPz5bS2NjAHIyAJwz-3UBPhfwDLXn-DGf1yCuiY24hiRtBAg7xB30hNzhWcqNUMAP8EtapHN2i2Q4RLzJ0AwHjqHW22pM56gHtzCt_hDHjIJL7BX-kN4hp-u4yDj_j0L8XbcqfQ0-jPBKtjNBrf0yKQQvYlfbLelm71gUv_50Nh9a3f8iK2WwMJWFodrp6iwkkA-k4g06esV-2QGk",
    },
  });

  const query = gql`
  query  ($pageSlug: String!)  {
    subs (where : {
      slug: $pageSlug
    })  {
      title
      slug
      id
      text{
        text
      }
      image {
        id
        url
      }
    }
  }
  `

  const variables = {
    pageSlug,
  }

  const data = await graphQLClient.request(query, variables);

  const subs = data.subs;

  return {
    props: {
      subs
    },
  };
};

export default function Subsid({ subs }) {
  const [state, setState] = useState(false);

  const updateData = (value) => {
    setState(value);
  };

  return (
    <div>
      <HeadSite />
      <Sidebar tumb={state} updateData={updateData} />
      <div className={state ? styles.wrap : styles.wrap2}>
        <div key={subs.id} className={styles.image}>
          <Image
                        src={subs[0].image.url}
                        width={'580px'}
                        height={'325px'}
          />
        </div>
        <h1 className={styles.title}>{subs.title}</h1>
        <div className={styles.desc}>
         {subs[0].text.map((post) => (
            <Desccard post={post} />
          ))}  
        </div>
      </div>
    </div>
  );
}
