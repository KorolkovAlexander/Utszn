import Link from "next/link";
import styles from "../styles/postcard.module.css";
import Image from "next/image";
/* import { Box, Badge } from '@chakra-ui/react' */



export default function Postcard ({post}){
 
return (




 <div className={styles.postgrid}> 
  
<Link href={`posts/${post.slug}`}><a> 


<div className={styles.postImage}>
<Image className={styles.im} src={post.image.url} height={'325px'} width={'450px'} />
<div className={styles.postTitle}>{post.title}</div>
{post.date}

<div className={styles.postDate}>




</div>

 
              </div>
               </a>
               </Link> 
 </div>  

)
}