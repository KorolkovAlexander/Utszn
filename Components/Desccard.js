import styles from "../styles/desccard.module.css";



export default function Desccard({post}) {
    
   
    return (
        <div className={styles.container}>
            {post.content[0].value}
            <br/>
        </div>
    )
}
