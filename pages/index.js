import Head from "next/head";
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

export default function Home({ posts, mainposts }) {
  /* posts.pop() */  console.log([posts])
 console.log(posts.slice(0))

const [state, setState] = useState(true)


const updateData = (value) => {
  setState(value);
};

const currentMain = mainposts.length-1; 

console.log(mainposts.length);
const MainPost = mainposts.slice(0, 1)
const currentPosts = posts.slice(0, 4)

  return (
  
    <div className={styles.container}>
      <Head>
        <title>УТСЗН АГР ЛНР</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <Header updateData={updateData}/>
      
      <main className={ state ? styles.mainidefault : styles.maini}>
      <SidebarMain state={state}/>
        <div>  
           {MainPost.map((post, index, array) => ( 
              <MainPostcard key={post.sys.id} post={post} className={styles.mainpost}/>
  ))} 
  </div> 
         <div className={styles.postWrapper}> 
          
       
            {currentPosts.map((post, index, array) => ( 
              <Postcard key={post.sys.id} post={post} />
  ))}
          
         </div> 
         <a className={styles.news} href={'/pagesBundle'}>
         <div >Все новости</div></a>
      </main>
      
      <Footer className={styles.footer} />
    </div>
  );
}
