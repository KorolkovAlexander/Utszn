import Header from "../../Components/HeaderNew";
import Footer from "../../Components/Footer";
import { createClient } from "contentful";
import Image from "next/image";
import styles from "../../styles/allowance.module.css";
import Link from "next/link";



export const getStaticProps = async () => {
    const client = createClient({
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
      space: process.env.CONTENTFUL_SPACE_ID,
    });
  
    const res = await client.getEntries({ content_type: "allowance" });
    
  
    return {
      props: { posts: res.items },
    };
  };







export default function Allowance({posts}){


return(
    <div>
    <Header />

    <div className={styles.wrapper}>
        {posts.map((posts) =>(
            <Link href={`/allowance/${posts.fields.id}`} ><a className={styles.post}>
            <h1>{posts.fields.title}</h1>
            <div /* key={posts.id} className={styles.image} */>
            <Image
              src={"https:" + posts.fields.images.fields.file.url}
              width={posts.fields.images.fields.file.details.image.width}
              height={posts.fields.images.fields.file.details.image.height}
            />
          </div></a>
          </Link>
        ))}
        </div>
    
   
    <Footer />
    </div>
)

}