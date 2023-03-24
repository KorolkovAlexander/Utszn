import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { createClient } from "contentful";
import Request from "../../Components/Request";
import styles from "../../styles/allowance.module.css";
import HeadSite from "../../Components/HeadSite";
import Sidebar from "../../Components/Sidebar";
import { useState } from "react";
import Image from "next/image";
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
    subs {
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
    }
  }
  `;

  const data = await graphQLClient.request(query);
  const subs = data.subs;

  return {
    props: {
      subs,
    },
  };
};
export default function PriceRequest({ subs }) {
  const [state, setState] = useState(false);
  const updateData = (value) => {
    setState(value);
  };



  return (
    <div>
      <HeadSite />
      <Header />

      <div className={styles.wrapper}>
        {subs.map((subs) => (
          <Link href={`/subsidy/${subs.slug}`}>
            <a className={styles.post}>
              <h1>{subs.title}</h1>
              <div /* key={posts.id} className={styles.image} */>
                <Image
                  src={subs.image.url} height={'370px'} width={'550px'}
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
