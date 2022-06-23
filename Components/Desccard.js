import styles from "../styles/desccard.module.css";



export default function Desccard({post}) {
    
   
    return (
        <div className={styles.container}>
            {post.text.text}
            <br/>
        </div>
    )
}
