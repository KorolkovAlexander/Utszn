import Carousel from "nuka-carousel";
import styles from "../styles/slider.module.css";
import { createClient } from "contentful";
import Image from "next/image";
import Postcard from "../Components/Postcard";


export default function Slider({ posts }) {
  return (
    <Carousel
      height="350px"
      width="100%"
      autoplay={true}
      transitionMode={"fade"}
      disableEdgeSwiping={false}
      wrapAround={true}
      defaultControlsConfig={{
        pagingDotsStyle: {
          display: 'none'
        },
        nextButtonStyle: {
        display: 'none'
        },
        prevButtonStyle: {
          display: 'none'
          }
        

      }}
    >
      {/*          <div>{posts.map((post) => (

<Postcard key={post.sys.id} post={post} />
         ))}</div> */}

      {/* <div className={styles.frame}>
        <img src="11.jpg" className={styles.image} />
      </div>
      <div className={styles.frame}>
        <img src="22.jpg" className={styles.image} />
      </div> */}
      <div className={styles.frame}>
        <img
          src="1.jpg"
          className={styles.image}
        />
      </div>
      <div className={styles.frame}>
        <img
          src="2.jpg"
          className={styles.image}
        />
      </div>
      <div className={styles.frame}>
        <img
          src="3.jpg"
          className={styles.image}
        />
      </div>
{/*       <div className={styles.frame}>
        <img
          src="4.jpg"
          className={styles.image}
        />
      </div>
      <div className={styles.frame}>
        <img
          src="5.jpg"
          className={styles.image}
        />
      </div>
      <div className={styles.frame}>
        <img
          src="6.jpg"
          className={styles.image}
        />
      </div>
      <div className={styles.frame}>
        <img
          src="7.jpg"
          className={styles.image}
        />
      </div> */}
      <div className={styles.frame}>
        <img
          src="8.jpg"
          className={styles.image}
        />
      </div>
{/*       <div className={styles.frame}>
        <img
          src="9.jpg"
          className={styles.image}
        />
      </div>
      <div className={styles.frame}>
        <img
          src="10.jpg"
          className={styles.image}
        />
      </div> */}
      <div className={styles.frame}>
        <img
          src="12.jpg"
          className={styles.image}
        />
      </div>
{/*       <div className={styles.frame}>
        <img
          src="13.jpg"
          className={styles.image}
        />
      </div>
      <div className={styles.frame}>
        <img
          src="14.jpg"
          className={styles.image}
        />
      </div> */}
    </Carousel>
  );
}
