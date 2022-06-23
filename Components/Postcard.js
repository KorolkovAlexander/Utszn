import Link from "next/link";
import styles from "../styles/postcard.module.css";
import Image from "next/image";



export default function Postcard ({post}){
 
return (
  <div className={styles.postgrid}> 
  
  <Link href={`posts/${post.id}`}><a> 
{post.date}
<div className={styles.postTitle}>{post.title}</div>
<div className={styles.postDate}>




</div>

<div className={styles.postImage}>

 <Image className={styles.im} src={post.image.url} height={'325px'} width={'325px'} /> 
              </div>
              
               </a></Link> 
              



 </div> 

)
}