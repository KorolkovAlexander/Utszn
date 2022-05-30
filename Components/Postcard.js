import Link from "next/link";
import styles from "../styles/postcard.module.css";
import Image from "next/image";



export default function Postcard ({post}){
 /*   var options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'

  } */
 /*  function getDate(str) {
    var date = new Date(str);
    return date.toLocaleString('ru', options)
  } 
  var dateFormat = require("dateformat"); */
/* var d = post.fields.date  */
return(
  <div className={styles.postgrid}> 
  
  <Link href={`posts/${post.id}`}><a> 
{post.date}
<div className={styles.postTitle}>{post.title}</div>
<div className={styles.postDate}>

{/* {getDate(d)} */}


</div>

<div className={styles.postImage}>

 <Image className={styles.im} src={post.image.url} height={'325px'} width={'325px'} /> 
              </div>
              
               </a></Link> 
              



 </div> 

)
}