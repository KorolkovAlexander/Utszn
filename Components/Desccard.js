import styles from "../styles/desccard.module.css";



export default function Desccard({post}) {
    console.log(post)
   
    return (
        <div className={styles.container}>
          <div className={styles.text}> {post.text} </div> 
            <br/>
        </div>
    )
}
