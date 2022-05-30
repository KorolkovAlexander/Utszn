import styles from "../styles/Home.module.css";
import { gql, GraphQLClient } from "graphql-request";

export const getStaticProps = async () => {
  const url =
    "https://api-eu-central-1.graphcms.com/v2/ckvfjqqt82rdg01y0e1g29l5c/master";

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Mzc1MDU3NjAsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrdmZqcXF0ODJyZGcwMXkwZTFnMjlsNWMvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiM2NlZTFkODItZjBhOC00MWQwLTg0OWUtNDA5YmUwOWUwYzE1IiwianRpIjoiY2t3OWNuZjNiMWVtdDAxeHBldXp1MHZtZyJ9.FU2X3ZBEzBx1S1DPr64vs34JCtc1yCXw4riVMbXYUVCHy0n1fKqKs96TD7vYTt_biOElRMZBMSRVCEp3vWkGNVVrfJ2g2aiqV4tlw6ZiXnr1J6_U6RYF_3BiPt4t7pbwXSYb0wI5G8aEsqlA2hm6QPuJwpX2CxeyegByTFElWZHd3Ru_XRwWaVtR7A9IoElepK_Brrrxe0J6o5DSEKr-xlw0_SydRnnYiLfGt3hNBtZA_JoXXKRkop4gJqP-jJV1uax6Z8_o5u5_CxI7sV1xd5x-HKXeBcqPDdVVF9gmM8KFWFx-ZRUuPe6VjQOyUwoZb9q7O4hNK4hC2OQo6oAa3e0F2n2fy0NeuTOLxwB1E1APscejLqqW5lE35eBf6W5Z5lvfdFuWp8cd9Rv45TY3BY5-3c62vUn0gO5kBbzYGUquKrs5stRhpa1vSaCGKTgry-PVfDIWgTn2oaRODsMIcV_QxQQC-XPWi50CYrbTA3BzyfNmgSMxjRL1hNVv1P5iZrl_J3vE1YpWHlHEHP7Rw_PUufVCzrZu3t85LUGnZbu1WJbbGAab8BoKMsk9Sk0caUfl7zZVFWoI4zOjEUez5xfNgUkA7u6sLeD9VL5NZaEy9f7yeY5njhN3KCErvOe0oTOT_AlKRBFUCP52Q8Qa0UPJFWNIVZw59ehk2y06W70",
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

export default function Home({ posts }) {
    console.log(posts)
  return (
    <div>
{posts.map((post) => (
            
              post.title
            
          ))}

    </div>
  );
}