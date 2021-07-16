import styles from "../styles/request.module.css";
import Image from "next/image";



export default function Request({post}) {
    return (
      
        <div className={styles.request}>

<div className={styles.title}>{post.fields.title}</div>
            <Image 
                src={"https:" + post.fields.media.fields.file.url}
                width={ '700px' } /* post.fields.images.fields.file.details.image.width  */
                height={ '900px' } /* post.fields.images.fields.file.details.image.height  */
              /> 
              <form  target="_blank" method="LINK" action={"https:" + post.fields.pdf.fields.file.url} >
    <input className={styles.button} type="submit" value="Скачать"/>
</form>
        </div>
    )
}
